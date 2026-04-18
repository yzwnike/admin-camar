'use server'

import { supabase } from '@/lib/supabase'
import { revalidatePath } from 'next/cache'

export async function upsertMaterialAction(formData: FormData) {
  // 1. Extracción de datos básicos
  const id = formData.get('id')?.toString()
  const material_name = formData.get('material_name')?.toString() || ''
  const main_image = formData.get('main_image')?.toString() || ''
  
  // 2. Parseo de objetos complejos (JSON que enviamos desde el cliente)
  // Usamos bloques try/catch por seguridad al parsear JSON
  let material_type, location, description, use;
  
  try {
    material_type = JSON.parse(formData.get('material_type') as string || '{"es":"","en":""}')
    location = JSON.parse(formData.get('location') as string || '{"es":"","en":""}')
    description = JSON.parse(formData.get('description') as string || '{"es":"","en":""}')
    use = JSON.parse(formData.get('use') as string || '[]')
  } catch (e) {
    console.error("Error parseando JSON en Materiales:", e)
    return { success: false, error: "Error en el formato de los datos" }
  }

  try {
    if (id && id !== "") {
      // --- UPDATE ---
      await supabase`
        UPDATE materiales 
        SET 
          material_name = ${material_name},
          material_type = ${material_type},
          location = ${location},
          description = ${description},
          use = ${use},
          main_image = ${main_image}
        WHERE id = ${id}
      `;
    } else {
      // --- INSERT ---
      await supabase`
        INSERT INTO materiales (
          material_name, material_type, location, description, use, main_image
        ) VALUES (
          ${material_name}, ${material_type}, ${location}, ${description}, ${use}, ${main_image}
        )
      `;
    }

    // 3. Gestión de caché
    revalidatePath('/admin/materials')
    
    return { success: true }

  } catch (error: any) {
    console.error("Error crítico en materiales:", error.message)
    return { success: false, error: "No se pudo guardar el material en la base de datos" }
  }
}