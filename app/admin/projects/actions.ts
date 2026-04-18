"use server"

import { supabase } from "@/lib/supabase"
import { revalidatePath } from "next/cache"

// CAMBIADO: Nombre a upsertProjectAction y ahora recibe FormData
export async function upsertProjectAction(formData: FormData) {
  // Extraemos los datos del FormData
  const id = formData.get('id')?.toString();
  const slug_es = formData.get('slug_es')?.toString() || '';
  const slug_en = formData.get('slug_en')?.toString() || '';
  const mainImage = formData.get('mainImage')?.toString() || '';
  const bgImage = formData.get('bgImage')?.toString() || '';

  // Los objetos complejos vienen como string JSON, los parseamos para postgres.js
  const projectName = JSON.parse(formData.get('projectName') as string);
  const projectLocation = JSON.parse(formData.get('projectLocation') as string);
  const type = JSON.parse(formData.get('type') as string);
  const projectPage = JSON.parse(formData.get('projectPage') as string);

  try {
    if (id && id !== "") {
      // LÓGICA DE UPDATE
      await supabase`
        UPDATE proyectos 
        SET 
          slug_es = ${slug_es},
          slug_en = ${slug_en},
          "projectName" = ${projectName},
          "projectLocation" = ${projectLocation},
          type = ${type},
          "projectPage" = ${projectPage},
          "mainImage" = ${mainImage},
          "bgImage" = ${bgImage}
        WHERE id = ${id}
      `;
    } else {
      // LÓGICA DE INSERT
      await supabase`
        INSERT INTO proyectos (
          slug_es, slug_en, "projectName", "projectLocation", 
          type, "projectPage", "mainImage", "bgImage"
        ) VALUES (
          ${slug_es}, ${slug_en}, ${projectName}, ${projectLocation}, 
          ${type}, ${projectPage}, ${mainImage}, ${bgImage}
        )
      `;
    }

    revalidatePath('/admin/projects');
    return { success: true };

  } catch (error: any) {
    console.error("Error en upsertProjectAction:", error);
    return { 
      success: false, 
      error: error.message || "Error al procesar el proyecto" 
    };
  }
}