'use server'

import { supabase } from '@/lib/supabase'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function updateMaterial(formData: FormData) {
  // 1. Extracción y validación de datos
  const id = formData.get('id') as string
  const material_name = formData.get('material_name') as string
  const slugRaw = formData.get('slug') as string
  
  const description_es = formData.get('description_es') as string
  const description_en = formData.get('description_en') as string
  
  const location_es = formData.get('location_es') as string
  const location_en = formData.get('location_en') as string

  const main_image = formData.get('main_image') as string
  
  // Manejo de los tags (use)
  const useRaw = formData.get('use') as string
  let use = []
  try {
    use = useRaw ? JSON.parse(useRaw) : []
  } catch (e) {
    // Si no es JSON (viene de un input simple), lo convertimos en array
    use = useRaw ? useRaw.split(',').map(s => s.trim()) : []
  }

  // Normalizamos el slug (asegurando que empiece por /)
  const slug = slugRaw.startsWith('/') ? slugRaw : `/${slugRaw}`

  try {
    // 2. Ejecución con postgres.js (la instancia que llamamos supabase)
    // Usamos JSON.stringify para los campos de traducción (JSONB en Postgres)
    await supabase`
      UPDATE materiales 
      SET 
        material_name = ${material_name},
        slug = ${slug},
        description = ${JSON.stringify({ es: description_es, en: description_en })},
        location = ${JSON.stringify({ es: location_es, en: location_en })},
        use = ${use},
        main_image = ${main_image}
      WHERE id = ${id}
    `;

  } catch (error: any) {
    console.error("Error crítico en actualización:", error.message)
    // Podrías retornar un objeto de error para mostrar en el UI
    return { error: "No se pudo actualizar el material" }
  }

  // 3. Gestión de caché y redirección
  // Limpiamos la caché de la lista y de la página específica
  revalidatePath('/admin/materials')
  revalidatePath(`/admin/materials/${slug.replace(/^\//, '')}`)
  
  // Redirigimos al listado
  redirect('/admin/materials')
}