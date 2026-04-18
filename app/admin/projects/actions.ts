"use server"

import { supabase } from "@/lib/supabase"
import { revalidatePath } from "next/cache"

export async function createProjectAction(name: string) {
  // Generamos el slug base
  const slug = name.toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Quitamos tildes
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

  try {
    // Usamos el tag de postgres.js (supabase en tu lib)
    const res = await supabase`
      INSERT INTO proyectos (
        slug_es,
        slug_en,
        "projectName", 
        "projectLocation",
        type,
        "projectPage",
        "mainImage",
        "bgImage"
      ) VALUES (
        ${slug},
        ${slug},
        ${JSON.stringify({ es: name.trim(), en: name.trim() })},
        ${JSON.stringify({ es: "", en: "" })},
        ${[]}, 
        ${JSON.stringify({
          filtro: "Vivienda Privada",
          pageTitle: { es: "", en: "" },
          pageDescription: { es: "", en: "" },
          gallery: [],
          materials: [],
          sobreElProyecto: { es: "", en: "" },
          projectDetails: [
            { label: { es: "Categoría", en: "Category" }, value: { es: "", en: "" } },
            { label: { es: "Fecha", en: "Date" }, value: { es: "", en: "" } },
            { label: { es: "País", en: "Country" }, value: { es: "", en: "" } }
          ]
        })},
        ${''},
        ${''}
      )
      RETURNING slug_es
    `;

    revalidatePath('/admin/projects');
    
    // Devolvemos el slug_es para que el router pueda redirigir
    return { 
      success: true, 
      slug: res[0].slug_es 
    };

  } catch (error: any) {
    console.error("Error creating project:", error);
    return { 
      success: false, 
      error: error.message || "Error desconocido al crear el proyecto" 
    };
  }
}