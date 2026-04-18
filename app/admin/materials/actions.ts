'use server'

// IMPORTANTE: Asegúrate de importar el cliente que NO usa 'postgres' directo
// sino el de '@supabase/supabase-js' que configuramos en /lib/supabase.ts
import { supabase } from '@/lib/supabase'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function updateMaterial(formData: FormData) {
  const id = formData.get('id') as string
  
  // Extraemos los datos del formulario
  const material_name = formData.get('material_name') as string
  const slugRaw = (formData.get('slug') as string) || ''
  const description_es = (formData.get('description_es') as string) || ''
  const description_en = (formData.get('description_en') as string) || ''
  const location_es = (formData.get('location_es') as string) || ''
  const location_en = (formData.get('location_en') as string) || ''
  
  // Normalizamos el slug para evitar dobles barras o rutas rotas
  const slug = slugRaw.startsWith('/') ? slugRaw : `/${slugRaw}`

  // Manejo del campo 'use'
  let use = []
  try {
    const useRaw = formData.get('use') as string
    use = useRaw ? JSON.parse(useRaw) : []
  } catch (e) {
    console.error("Error parseando 'use':", e)
    use = []
  }

  // UPDATE CON EL CLIENTE OFICIAL (Sintaxis de métodos, no SQL puro)
  const { error } = await supabase
    .from('materiales')
    .update({
      material_name,
      slug,
      description: { es: description_es, en: description_en },
      location: { es: location_es, en: location_en },
      use: use
    })
    .eq('id', id)

  if (error) {
    console.error("❌ Error en Supabase:", error.message)
    // En Server Actions es mejor lanzar el error o devolver un objeto de estado
    throw new Error(error.message)
  }

  // Limpiamos la caché
  // Usamos el slug limpio (sin la barra inicial) para la ruta de revalidate
  const cleanSlugForPath = slug.replace(/^\//, '')
  
  revalidatePath('/admin/materials')
  revalidatePath(`/admin/materials/${cleanSlugForPath}`)
  
  // Redirigimos
  redirect('/admin/materials')
}