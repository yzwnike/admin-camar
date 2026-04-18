"use server" // Crucial: Esto blinda el código para que solo corra en el servidor
import { supabase } from '@/lib/supabase'
// Aquí puedes importar tu lógica de seed-noticias

export async function runImportAction() {
  try {
    // Ejemplo de inserción usando el cliente de postgres
    await supabase`INSERT INTO noticias (title) VALUES ('Prueba de importación')`;
    console.log("✅ Importación completada");
  } catch (error) {
    console.error("❌ Error en importación:", error);
  }
}