import { supabase } from '@/lib/supabase'
import { notFound, redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import Link from 'next/link'
import MaterialUsesEditor from '@/components/admin/MaterialUsesEditor'
import ImagePicker from '@/components/admin/ImagePicker'

/**
 * 1. FUNCIÓN AUXILIAR PARA BORRAR EN BUNNY.NET
 * Se encarga de limpiar el almacenamiento cuando se sube una foto nueva.
 */
async function deleteFromBunny(oldImageUrl: string) {
  if (!oldImageUrl) return;
  
  const baseUrl = process.env.BUNNY_BASE_URL;
  const storageZone = process.env.BUNNY_STORAGE_ZONE;
  const accessKey = process.env.BUNNY_ACCESS_KEY;

  try {
    // Extraemos el path relativo (ej: /camar.es/Materiales/archivo.webp)
    const urlObj = new URL(oldImageUrl);
    const cleanPath = urlObj.pathname;
    const storageUrl = `${baseUrl}/${storageZone}${cleanPath}`;

    await fetch(storageUrl, {
      method: 'DELETE',
      headers: { 'AccessKey': accessKey! },
    });
    console.log(" Imagen antigua eliminada de Bunny con éxito.");
  } catch (err) {
    console.error(" No se pudo borrar la imagen antigua:", err);
  }
}

/**
 * 2. ACCIÓN DE SERVIDOR PARA ACTUALIZAR
 */
async function updateMaterialAction(formData: FormData) {
  'use server'

  const id = formData.get('id') as string;
  const name = formData.get('material_name') as string;
  const file = formData.get('image') as File;
  const selectedType = formData.get('material_type_es') as string;
  
  // Recuperamos la URL actual por si no hay cambio de imagen
  let imageUrl = formData.get('current_image_url') as string;
  const oldImageUrl = imageUrl;

  try {
    // A. SUBIDA A BUNNY SI HAY ARCHIVO NUEVO
    if (file && file.size > 0 && file.size <= 1048576) {
      
      // Intentamos borrar la imagen anterior antes de poner la nueva
      if (oldImageUrl) await deleteFromBunny(oldImageUrl);

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
      }
    }

    // B. PREPARACIÓN DE DATOS (JSON)
    // Guardamos el tipo seleccionado en el objeto JSON de material_type
    const material_type = JSON.stringify({
      es: selectedType || "",
      en: selectedType || "" // Por ahora igualamos, puedes mapear si tienes traducciones
    });

    const location = JSON.stringify({
      es: formData.get('location_es') || "",
      en: formData.get('location_en') || ""
    });

    const description = JSON.stringify({
      es: formData.get('description_es') || "",
      en: formData.get('description_en') || ""
    });

    const useArray = formData.get('use') ? JSON.parse(formData.get('use') as string) : [];

    // C. UPDATE EN BASE DE DATOS
    await supabase`
      UPDATE materiales
      SET
        material_name = ${name},
        material_type = ${material_type},
        location = ${location},
        description = ${description},
        use = ${useArray},
        image_url = ${imageUrl}
      WHERE id::text = ${id}
    `;

  } catch (error: any) {
    console.error(" ERROR CRÍTICO AL ACTUALIZAR:", error.message);
    throw error;
  }

  revalidatePath('/admin/materials');
  revalidatePath(`/admin/materials/${id}`);
  revalidatePath('/');
  redirect('/admin/materials');
}

/**
 * 3. COMPONENTE DE EDICIÓN
 */
export default async function EditMaterialPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const searchTerm = slug.replace(/-/g, ' ');

  // Opciones del dropdown basadas en image_187981.png
  const MATERIAL_TYPES = [
    "MÁRMOL", "GRANITO", "CUARCITA", "ÓNIX", "TRAVERTINO", 
    "CALIZA", "MINERAL", "ALABASTRO", "ARENISCA", "PÓRFIDO"
  ];

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
    console.error(" Error buscando material:", err);
  }

  if (!m) return notFound();

  const safeParse = (data: any) => {
    if (!data) return {};
    if (typeof data !== 'string') return data;
    try { return JSON.parse(data); } catch (e) { return {}; }
  };

  const typeData = safeParse(m.material_type);
  const locationData = safeParse(m.location);
  const descriptionData = safeParse(m.description);

  // Imagen inicial
  const processedName = m.material_name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replaceAll(' ', '-');
  const currentImageUrl = m.image_url || `https://lanzadera-digital.b-cdn.net/camar.es/Materiales/${processedName}-hq.webp`;

  return (
    <form action={updateMaterialAction} className="mx-auto max-w-6xl pb-20">
      <input type="hidden" name="id" value={m.id} />
      <input type="hidden" name="current_image_url" value={m.image_url || ''} />

      <div className="mb-10 flex items-end justify-between">
        <div>
          <Link href="/admin/materials" className="link-hover mb-2 block text-[10px] uppercase tracking-widest text-dynamicBlack/50">
            ← Volver al catálogo
          </Link>
          <h1 className="font-vollkorn text-5xl uppercase tracking-tight text-dynamicBlack">
            Editar: {m.material_name}
          </h1>
        </div>
        <button type="submit" className="btn-primary">
          Guardar cambios
        </button>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-4">
          <section className="card space-y-6 text-center">
            <h3 className="text-xs uppercase tracking-widest text-dynamicBlack/50">Fotografía del material</h3>
            <ImagePicker currentImage={currentImageUrl} />
            <div className="mt-4 rounded-md border border-dynamicBlack/10 bg-baliPearl p-4">
                <p className="mb-2 text-[8px] uppercase tracking-wide text-dynamicBlack/40">Estado del almacenamiento:</p>
                <code className="break-all font-mono text-[9px] leading-tight text-bubonicBrown">
                    {m.image_url ? 'Bunny.net Storage' : 'Legacy CDN'}
                </code>
            </div>
          </section>
          <MaterialUsesEditor initialUses={m.use || []} />
        </div>

        <div className="space-y-8 lg:col-span-8">
          <section className="card space-y-6">
            <h3 className="font-vollkorn text-sm uppercase tracking-widest text-dynamicBlack/60">1. Identidad y clasificación</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="label">Nombre comercial <span className="required">*</span></label>
                <input name="material_name" required type="text" defaultValue={m.material_name} className="input" />
              </div>

              {/* DROPDOWN DE TIPOS */}
              <div>
                <label className="label">Tipo de material</label>
                <select
                  name="material_type_es"
                  defaultValue={typeData?.es || ""}
                  className="input cursor-pointer appearance-none"
                >
                  <option value="" disabled>Selecciona un tipo...</option>
                  {MATERIAL_TYPES.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="label">Origen (ES)</label>
                <input name="location_es" type="text" defaultValue={locationData?.es || ''} className="input" />
              </div>
              <div>
                <label className="label">Origin (EN)</label>
                <input name="location_en" type="text" defaultValue={locationData?.en || ''} className="input" />
              </div>
            </div>
          </section>

          <section className="card space-y-6">
            <h3 className="font-vollkorn text-sm uppercase tracking-widest text-dynamicBlack/60">2. Descripción bilingüe</h3>
            <div className="space-y-4">
              <div>
                <label className="label">Descripción (Español)</label>
                <textarea name="description_es" rows={4} defaultValue={descriptionData?.es || ''} className="input leading-relaxed" />
              </div>
              <div>
                <label className="label">Description (English)</label>
                <textarea name="description_en" rows={4} defaultValue={descriptionData?.en || ''} className="input leading-relaxed" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </form>
  )
}