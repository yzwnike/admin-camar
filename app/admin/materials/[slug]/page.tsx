import { supabase } from '@/lib/supabase'
import { notFound, redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import Link from 'next/link'
import MaterialUsesEditor from '@/components/admin/MaterialUsesEditor'
import ImagePicker from '@/components/admin/ImagePicker'

/**
 * 1. ACCIÓN DE ACTUALIZACIÓN (Neon + Bunny.net)
 */
async function updateMaterialAction(formData: FormData) {
  'use server'
  
  // Importaciones necesarias dentro del archivo (asegúrate de que estén arriba)
  // import { supabase } from '@/lib/supabase'
  // import { revalidatePath } from 'next/cache'
  // import { redirect } from 'next/navigation'

  const id = formData.get('id') as string;
  const name = formData.get('material_name') as string;
  const file = formData.get('image') as File;
  // Recuperamos la URL que ya tiene el material por si no se sube una nueva
  let imageUrl = formData.get('current_image_url') as string;

  try {
    // A. SUBIDA A BUNNY SI HAY ARCHIVO NUEVO
    if (file && file.size > 0 && file.size <= 1048576) {
      const sanitizedName = name
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-');
        
      const fileName = `${Date.now()}-${sanitizedName}.webp`;
      const storageUrl = `${process.env.BUNNY_BASE_URL}/${process.env.BUNNY_STORAGE_ZONE}/camar.es/Materiales/${fileName}`;

      const response = await fetch(storageUrl, {
        method: 'PUT',
        headers: {
          'AccessKey': process.env.BUNNY_ACCESS_KEY!,
          'Content-Type': 'application/octet-stream',
        },
        body: Buffer.from(await file.arrayBuffer()),
        // @ts-ignore
        duplex: 'half',
      });

      if (response.ok) {
        imageUrl = `${process.env.PULL_ZONE_URL}/camar.es/Materiales/${fileName}`;
        console.log("✅ Nueva imagen subida a Bunny:", imageUrl);
      } else {
        console.error("❌ Error subiendo a Bunny:", await response.text());
      }
    }

    // B. PREPARACIÓN DE DATOS (Objetos para el cliente de Supabase)
    // El cliente de Supabase convierte automáticamente objetos a JSONB
    const location = {
      es: formData.get('location_es') || "",
      en: formData.get('location_en') || ""
    };

    const description = {
      es: formData.get('description_es') || "",
      en: formData.get('description_en') || ""
    };

    const useArray = formData.get('use') ? JSON.parse(formData.get('use') as string) : [];

    // C. UPDATE EN NEON (Corregido: Sintaxis de Supabase Client)
    const { error: updateError } = await supabase
      .from('materiales')
      .update({
        material_name: name,
        location: location,
        description: description,
        use: useArray,
        image_url: imageUrl
      })
      .eq('id', id);

    if (updateError) {
      throw new Error(updateError.message);
    }

    console.log("✅ Material actualizado en Neon correctamente.");

  } catch (error: any) {
    console.error("❌ ERROR CRÍTICO AL ACTUALIZAR:", error.message);
    throw error;
  }

  // Revalidamos para que los cambios se vean en toda la web
  revalidatePath('/admin/materials');
  revalidatePath(`/admin/materials/${id}`);
  revalidatePath('/');
  
  // Redirigimos al catálogo
  redirect('/admin/materials');
}

/**
 * 2. COMPONENTE DE EDICIÓN (Server Component)
 */
export default async function EditMaterialPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const searchTerm = slug.replace(/-/g, ' ');

  // Buscamos el material por ID o por nombre (slug)
  let m;
  try {
    const res = await supabase`
      SELECT * FROM materiales 
      WHERE id::text = ${slug} 
         OR material_name ILIKE ${'%' + searchTerm + '%'}
      LIMIT 1
    `;
    m = res[0];
  } catch (err) {
    console.error("❌ Error buscando material:", err);
  }

  if (!m) return notFound();

  // Parseo seguro de los campos JSON que vienen de la DB
  const safeParse = (data: any) => {
    if (!data) return {};
    if (typeof data !== 'string') return data;
    try { return JSON.parse(data); } catch (e) { return {}; }
  };

  const locationData = safeParse(m.location);
  const descriptionData = safeParse(m.description);

  // Determinamos la imagen a mostrar inicialmente
  const processedName = m.material_name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replaceAll(' ', '-');
    
  const currentImageUrl = m.image_url || `https://lanzadera-digital.b-cdn.net/camar.es/Materiales/${processedName}-hq.webp`;

  return (
    <form action={updateMaterialAction} className="max-w-6xl mx-auto p-6 pb-20">
      {/* CAMPOS OCULTOS PARA LA ACCIÓN */}
      <input type="hidden" name="id" value={m.id} />
      <input type="hidden" name="current_image_url" value={m.image_url || ''} />

      {/* HEADER DE LA PÁGINA */}
      <div className="flex justify-between items-end mb-10">
        <div>
          <Link href="/admin/materials" className="text-slate-400 text-[10px] font-black uppercase hover:text-slate-900 mb-2 block transition-colors">
            ← Volver al Catálogo
          </Link>
          <h1 className="text-5xl font-black text-slate-900 uppercase tracking-tighter italic">
            Editar: {m.material_name}
          </h1>
        </div>
        <button type="submit" className="bg-emerald-500 text-white px-10 py-5 rounded-2xl font-black hover:bg-emerald-600 transition shadow-xl uppercase text-[10px] tracking-widest active:scale-95">
          Guardar Cambios
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* COLUMNA IZQUIERDA: GESTIÓN DE IMAGEN Y USOS */}
        <div className="lg:col-span-4 space-y-6">
          <section className="bg-white rounded-[3rem] p-8 border border-slate-200 shadow-sm space-y-6 text-center">
            <h3 className="text-xs font-black uppercase text-slate-400 tracking-widest">Fotografía del Material</h3>
            
            {/* El ImagePicker ahora recibe la foto actual como prop */}
            <ImagePicker currentImage={currentImageUrl} />
            
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 mt-4">
                <p className="text-[8px] font-black uppercase text-slate-400 mb-2">Estado del almacenamiento:</p>
                <code className="text-[9px] text-indigo-500 break-all font-mono leading-tight">
                    {m.image_url ? '☁️ Bunny.net Storage' : '📁 Legacy CDN'}
                </code>
            </div>
            <p className="text-[9px] text-slate-400 font-medium italic">
              Haz clic en la imagen para subir una nueva (Máx 1MB).
            </p>
          </section>
          
          <MaterialUsesEditor initialUses={m.use || []} />
        </div>

        {/* COLUMNA DERECHA: FORMULARIO DE TEXTOS */}
        <div className="lg:col-span-8 space-y-8">
          {/* IDENTIDAD */}
          <section className="bg-white rounded-[3rem] p-10 border border-slate-200 shadow-sm space-y-8">
            <h3 className="text-xs font-black uppercase text-slate-400 tracking-widest italic">1. Identidad y Origen</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-2 tracking-tighter">Nombre Comercial</label>
                <input name="material_name" required type="text" defaultValue={m.material_name} className="w-full p-4 bg-slate-50 rounded-2xl border-none font-bold focus:ring-2 focus:ring-slate-900" />
              </div>
              <div className="space-y-2 opacity-50">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-2 tracking-tighter">Referencia ID (No editable)</label>
                <input type="text" readOnly value={m.id} className="w-full p-4 bg-slate-100 rounded-2xl border-none font-bold text-slate-500 cursor-not-allowed" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-2 tracking-tighter">Origen (ES)</label>
                <input name="location_es" type="text" defaultValue={locationData?.es || ''} className="w-full p-4 bg-slate-50 rounded-2xl border-none font-bold focus:ring-2 focus:ring-slate-900" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-indigo-400 ml-2 tracking-tighter">Origin (EN)</label>
                <input name="location_en" type="text" defaultValue={locationData?.en || ''} className="w-full p-4 bg-indigo-50/30 rounded-2xl border-none font-bold text-indigo-900 focus:ring-2 focus:ring-indigo-500" />
              </div>
            </div>
          </section>

          {/* DESCRIPCIONES */}
          <section className="bg-white rounded-[3rem] p-10 border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-xs font-black uppercase text-slate-400 tracking-widest italic">2. Descripción Bilingüe</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-2 tracking-tighter">Descripción (Español)</label>
                <textarea name="description_es" rows={4} defaultValue={descriptionData?.es || ''} className="w-full p-5 bg-slate-50 rounded-[2rem] border-none font-medium focus:ring-2 focus:ring-slate-900 leading-relaxed" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-indigo-400 ml-2 tracking-tighter">Description (English)</label>
                <textarea name="description_en" rows={4} defaultValue={descriptionData?.en || ''} className="w-full p-5 bg-indigo-50/30 rounded-[2rem] border-none font-medium text-indigo-900 focus:ring-2 focus:ring-indigo-500 leading-relaxed" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </form>
  )
}