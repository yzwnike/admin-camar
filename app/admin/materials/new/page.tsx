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

  try {
    const name = formData.get('material_name') as string
    const file = formData.get('image') as File
    const selectedType = formData.get('type_es') as string // Obtenemos el valor del dropdown
    
    let imageUrl = ''

    // 1. SUBIDA A BUNNY.NET (Storage API)
    if (file && file.size > 0) {
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

      if (!response.ok) {
        throw new Error(`Error al subir imagen a Bunny: ${response.status}`);
      }

      imageUrl = `${process.env.PULL_ZONE_URL}/camar.es/Materiales/${fileName}`;
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

    // Guardamos el tipo seleccionado del dropdown
    const materialType = JSON.stringify({
      es: selectedType || "OTRO",
      en: selectedType || "OTHER" // Puedes añadir un mapeo si necesitas traducción exacta
    });

    // 3. INSERCIÓN EN NEON (SQL)
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

    console.log(" Material creado correctamente.");

  } catch (error: any) {
    console.error(" ERROR EN ACCIÓN:", error.message);
    throw new Error(error.message); 
  }

  revalidatePath('/admin/materials');
  revalidatePath('/');
  redirect('/admin/materials');
}

export default function NewMaterialPage() {
  
  // Opciones basadas en la imagen de referencia
  const MATERIAL_TYPES = [
    "MÁRMOL", "GRANITO", "CUARCITA", "ÓNIX", "TRAVERTINO", 
    "CALIZA", "MINERAL", "ALABASTRO", "ARENISCA", "PÓRFIDO"
  ];

  return (
    <form action={createMaterialAction} className="mx-auto max-w-6xl pb-20">

      {/* HEADER */}
      <div className="mb-10 flex items-end justify-between">
        <div>
          <Link href="/admin/materials" className="link-hover mb-2 block text-[10px] uppercase tracking-widest text-dynamicBlack/50">
            ← Volver al catálogo
          </Link>
          <h1 className="font-vollkorn text-5xl uppercase tracking-tight text-dynamicBlack">
            Nuevo material
          </h1>
        </div>
        <button type="submit" className="btn-primary">
          Crear material
        </button>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">

        {/* COLUMNA IZQUIERDA: IMAGEN */}
        <div className="lg:col-span-4">
          <section className="card space-y-6 text-center">
            <h3 className="text-xs uppercase tracking-widest text-dynamicBlack/50">Imagen del material</h3>
            <ImagePicker />
            <p className="text-[9px] italic text-dynamicBlack/40">
              Formatos: WebP / JPG (Máx 1MB).
            </p>
          </section>
        </div>

        {/* COLUMNA DERECHA: DATOS */}
        <div className="space-y-8 lg:col-span-8">

          <section className="card space-y-6">
            <h3 className="font-vollkorn text-sm uppercase tracking-widest text-dynamicBlack/60">1. Identidad y clasificación</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="label">Nombre comercial <span className="required">*</span></label>
                <input name="material_name" required type="text" placeholder="Ej: Blanco Macael" className="input" />
              </div>

              {/* DROPDOWN DE TIPOS INTEGRADO */}
              <div>
                <label className="label">Tipo de material <span className="required">*</span></label>
                <select name="type_es" required defaultValue="" className="input cursor-pointer appearance-none">
                  <option value="" disabled>Selecciona un tipo...</option>
                  {MATERIAL_TYPES.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="label">Origen (ES)</label>
                <input name="location_es" type="text" placeholder="Almería, España" className="input" />
              </div>
              <div>
                <label className="label">Origin (EN)</label>
                <input name="location_en" type="text" placeholder="Spain" className="input" />
              </div>
            </div>
          </section>

          <section className="card space-y-6">
            <h3 className="font-vollkorn text-sm uppercase tracking-widest text-dynamicBlack/60">2. Descripción bilingüe</h3>
            <div className="space-y-4">
              <div>
                <label className="label">Descripción (ES)</label>
                <textarea name="description_es" rows={3} className="input leading-relaxed" />
              </div>
              <div>
                <label className="label">Description (EN)</label>
                <textarea name="description_en" rows={3} className="input leading-relaxed" />
              </div>
            </div>
          </section>
        </div>

      </div>
    </form>
  )
}