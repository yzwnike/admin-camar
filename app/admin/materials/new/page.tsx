import { supabase } from '@/lib/supabase'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import Link from 'next/link'
import ImagePicker from '@/components/admin/ImagePicker'

/**
 * ACCIÓN DE SERVIDOR: Crea el material y sube la imagen a Bunny.net
 */
async function createMaterialAction(formData: FormData) {
  'use server'

  // Logs de control (puedes eliminarlos tras confirmar que funciona)
  console.log("URL DE BUNNY:", process.env.BUNNY_BASE_URL);
  console.log("STORAGE ZONE:", process.env.BUNNY_STORAGE_ZONE);

  try {
    const name = formData.get('material_name') as string
    const file = formData.get('image') as File
    
    let imageUrl = ''

    // 1. SUBIDA A BUNNY.NET (Storage API)
    if (file && file.size > 0) {
      // Generamos nombre de archivo único y limpio (quitamos acentos y caracteres raros)
      const sanitizedName = name
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Quita acentos
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-');
        
      const fileName = `${Date.now()}-${sanitizedName}.webp`;
      
      // RUTA CORREGIDA: Usamos 'Materiales' con mayúscula
      const storageUrl = `${process.env.BUNNY_BASE_URL}/${process.env.BUNNY_STORAGE_ZONE}/camar.es/Materiales/${fileName}`;

      const response = await fetch(storageUrl, {
        method: 'PUT',
        headers: {
          'AccessKey': process.env.BUNNY_ACCESS_KEY!,
          'Content-Type': 'application/octet-stream',
        },
        body: Buffer.from(await file.arrayBuffer()),
        // @ts-ignore - Necesario en Node.js para streams/buffers en fetch
        duplex: 'half', 
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("❌ Bunny Error:", errorText);
        throw new Error(`Error al subir imagen a Bunny: ${response.status} - ${errorText}`);
      }

      // URL PÚBLICA CORREGIDA: Usamos 'Materiales' con mayúscula
      imageUrl = `${process.env.PULL_ZONE_URL}/camar.es/Materiales/${fileName}`;
      console.log("✅ Imagen subida con éxito:", imageUrl);
    }

    // 2. PREPARACIÓN DE JSON PARA NEON
    const location = JSON.stringify({
      es: formData.get('location_es') || "",
      en: formData.get('location_en') || ""
    });

    const description = JSON.stringify({
      es: formData.get('description_es') || "",
      en: formData.get('description_en') || ""
    });

    const materialType = JSON.stringify({
      es: formData.get('type_es') || "Piedra Natural",
      en: formData.get('type_en') || "Natural Stone"
    });

    // 3. INSERCIÓN EN NEON (SQL)
    // Usamos la instancia 'supabase' (que es postgres.js) con template strings
    await supabase`
      INSERT INTO materiales (
        id, 
        material_name, 
        location, 
        description, 
        material_type, 
        image_url, 
        use, 
        created_at
      ) VALUES (
        ${crypto.randomUUID()}, 
        ${name}, 
        ${location}, 
        ${description}, 
        ${materialType}, 
        ${imageUrl}, 
        ${[]}, 
        NOW()
      )
    `;

    console.log("✅ Material creado correctamente en Neon.");

  } catch (error: any) {
    console.error("❌ ERROR CRÍTICO EN ACCIÓN:", error.message);
    // Re-lanzamos el error para que Next.js lo capture y lo muestre en la UI si tienes un error.tsx
    throw new Error(error.message); 
  }

  // Limpiamos caché y volvemos al catálogo
  revalidatePath('/admin/materials');
  redirect('/admin/materials');
}

export default function NewMaterialPage() {
  return (
    <form action={createMaterialAction} className="max-w-6xl mx-auto p-6 pb-20">
      
      {/* HEADER */}
      <div className="flex justify-between items-end mb-10">
        <div>
          <Link href="/admin/materials" className="text-slate-400 text-[10px] font-black uppercase hover:text-slate-900 mb-2 block transition-colors">
            ← Volver al Catálogo
          </Link>
          <h1 className="text-5xl font-black text-slate-900 uppercase tracking-tighter">
            Nuevo Material
          </h1>
        </div>
        <button type="submit" className="bg-emerald-500 text-white px-10 py-5 rounded-2xl font-black hover:bg-emerald-600 transition shadow-xl uppercase text-[10px] tracking-widest active:scale-95">
          Crear Material
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* COLUMNA IZQUIERDA: SELECTOR DE IMAGEN (Client Component) */}
        <div className="lg:col-span-4">
          <section className="bg-white rounded-[3rem] p-8 border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-xs font-black uppercase text-slate-400 tracking-widest">Imagen del Material</h3>
            <ImagePicker />
            <p className="text-[9px] text-slate-400 text-center font-medium italic">
              Formatos recomendados: WebP o JPG. <br/> La imagen se almacenará en Bunny Storage (Materiales).
            </p>
          </section>
        </div>

        {/* COLUMNA DERECHA: DATOS */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* SECCIÓN IDENTIDAD */}
          <section className="bg-white rounded-[3rem] p-10 border border-slate-200 shadow-sm space-y-8">
            <h3 className="text-xs font-black uppercase text-slate-400 tracking-widest">Identidad</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Nombre Comercial</label>
                <input name="material_name" required type="text" placeholder="Ej: Blanco Macael" className="w-full p-4 bg-slate-50 rounded-2xl border-none font-bold focus:ring-2 focus:ring-slate-900" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Tipo (ES)</label>
                <input name="type_es" type="text" placeholder="Mármol" className="w-full p-4 bg-slate-50 rounded-2xl border-none font-bold focus:ring-2 focus:ring-slate-900" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-indigo-400 ml-2">Type (EN)</label>
                <input name="type_en" type="text" placeholder="Marble" className="w-full p-4 bg-indigo-50/30 rounded-2xl border-none font-bold text-indigo-900 focus:ring-2 focus:ring-indigo-500" />
              </div>
            </div>
          </section>

          {/* SECCIÓN ORIGEN Y DESCRIPCIÓN */}
          <section className="bg-white rounded-[3rem] p-10 border border-slate-200 shadow-sm space-y-8">
            <h3 className="text-xs font-black uppercase text-slate-400 tracking-widest">Detalles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Origen (ES)</label>
                <input name="location_es" type="text" placeholder="Almería, España" className="w-full p-4 bg-slate-50 rounded-2xl border-none font-bold focus:ring-2 focus:ring-slate-900" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-indigo-400 ml-2">Origin (EN)</label>
                <input name="location_en" type="text" placeholder="Spain" className="w-full p-4 bg-indigo-50/30 rounded-2xl border-none font-bold text-indigo-900 focus:ring-2 focus:ring-indigo-500" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Descripción (ES)</label>
                <textarea name="description_es" rows={3} className="w-full p-5 bg-slate-50 rounded-[2rem] border-none font-medium focus:ring-2 focus:ring-slate-900" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-indigo-400 ml-2">Description (EN)</label>
                <textarea name="description_en" rows={3} className="w-full p-5 bg-indigo-50/30 rounded-[2rem] border-none font-medium text-indigo-900 focus:ring-2 focus:ring-indigo-500" />
              </div>
            </div>
          </section>
        </div>

      </div>
    </form>
  )
}