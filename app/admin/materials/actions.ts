'use server'

import { supabase } from '@/lib/supabase'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function updateMaterial(formData: FormData) {
  const id = formData.get('id') as string
  
  // Extraemos los datos del formulario
  const material_name = formData.get('material_name') as string
  const slug = formData.get('slug') as string
  const description_es = formData.get('description_es') as string
  const description_en = formData.get('description_en') as string
  const location_es = formData.get('location_es') as string
  const location_en = formData.get('location_en') as string
  
  // El componente MaterialUsesEditor debe enviar un campo "use" como string JSON
  const useRaw = formData.get('use') as string
  const use = useRaw ? JSON.parse(useRaw) : []

  const { error } = await supabase
    .from('materiales')
    .update({
      material_name,
      slug: slug.startsWith('/') ? slug : `/${slug}`, // Normalizamos el slug
      description: { es: description_es, en: description_en },
      location: { es: location_es, en: location_en },
      use
    })
    .eq('id', id)

  if (error) {
    console.error("Error en Supabase:", error.message)
    return
  }

  // Limpiamos la caché para que el listado y la ficha se actualicen
  revalidatePath('/admin/materials')
  revalidatePath(`/admin/materials/${slug.replace(/^\//, '')}`)
  
  // Redirigimos al listado para confirmar que se guardó
  redirect('/admin/materials')
}