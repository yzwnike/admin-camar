'use server'

import { supabase } from '@/lib/supabase'
import { revalidatePath } from 'next/cache'

export async function upsertNewsAction(formData: any) {
  try {
    // Si es edición usamos UPDATE, si no INSERT
    if (formData.id) {
      await supabase`
        UPDATE noticias SET 
          title = ${JSON.stringify(formData.title)},
          slug_es = ${formData.slug_es},
          slug_en = ${formData.slug_en},
          folder_custom = ${formData.folder_custom},
          date = ${formData.date},
          excerpt = ${JSON.stringify(formData.excerpt)},
          content = ${JSON.stringify(formData.content)},
          main_image = ${formData.main_image},
          gallery = ${JSON.stringify(formData.gallery)}
        WHERE id = ${formData.id}
      `;
    } else {
      await supabase`
        INSERT INTO noticias (
          title, slug_es, slug_en, folder_custom, date, excerpt, content, main_image, gallery
        ) VALUES (
          ${JSON.stringify(formData.title)},
          ${formData.slug_es},
          ${formData.slug_en},
          ${formData.folder_custom},
          ${formData.date},
          ${JSON.stringify(formData.excerpt)},
          ${JSON.stringify(formData.content)},
          ${formData.main_image},
          ${JSON.stringify(formData.gallery)}
        )
      `;
    }

    revalidatePath('/admin/news');
    return { success: true };
  } catch (error: any) {
    console.error("Error en DB:", error);
    return { success: false, error: error.message };
  }
}