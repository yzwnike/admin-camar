'use server'

import { supabase } from '@/lib/supabase'
import { revalidatePath } from 'next/cache'

/**
 * Acción unificada para CREAR o EDITAR noticias
 */
export async function upsertNewsAction(formData: any) {
  try {
    // 1. Si formData viene de un formulario nativo, extraemos los datos. 
    // Si viene como objeto desde un componente de cliente, lo usamos directamente.
    const data = formData instanceof FormData ? Object.fromEntries(formData) : formData;

    if (data.id) {
      // UPDATE
      await supabase`
        UPDATE noticias SET 
          title = ${JSON.stringify(data.title)},
          slug_es = ${data.slug_es},
          slug_en = ${data.slug_en},
          folder_custom = ${data.folder_custom},
          date = ${data.date},
          excerpt = ${JSON.stringify(data.excerpt)},
          content = ${JSON.stringify(data.content)},
          main_image = ${data.main_image},
          gallery = ${JSON.stringify(data.gallery || [])}
        WHERE id = ${data.id}
      `;
    } else {
      // INSERT
      await supabase`
        INSERT INTO noticias (
          title, slug_es, slug_en, folder_custom, date, excerpt, content, main_image, gallery
        ) VALUES (
          ${JSON.stringify(data.title)},
          ${data.slug_es},
          ${data.slug_en},
          ${data.folder_custom},
          ${data.date},
          ${JSON.stringify(data.excerpt)},
          ${JSON.stringify(data.content)},
          ${data.main_image},
          ${JSON.stringify(data.gallery || [])}
        )
      `;
    }

    revalidatePath('/admin/news');
    return { success: true };
  } catch (error: any) {
    console.error("❌ Error en DB Noticias:", error.message);
    return { success: false, error: error.message };
  }
}

/**
 * Acción para ELIMINAR noticias
 * Se llama desde el formulario de la lista de noticias
 */
export async function deleteNewsAction(formData: FormData) {
  try {
    const slug = formData.get('slug') as string;
    
    if (!slug) throw new Error("No se proporcionó un slug válido");

    await supabase`
      DELETE FROM noticias 
      WHERE slug_es = ${slug}
    `;

    revalidatePath('/admin/news');
    return { success: true };
  } catch (error: any) {
    console.error("❌ Error al eliminar noticia:", error.message);
    return { success: false, error: error.message };
  }
}