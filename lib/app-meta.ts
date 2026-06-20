import { supabase } from './supabase'

/**
 * Registra la fecha/hora de la última edición de contenido (valor global).
 * Resiliente: nunca lanza, para no romper un guardado si falla el metadato.
 */
export async function recordEdit() {
  try {
    await supabase`
      INSERT INTO app_meta (key, value)
      VALUES ('last_edit', now())
      ON CONFLICT (key) DO UPDATE SET value = now()
    `
  } catch (error) {
    console.error('No se pudo registrar la última edición:', error)
  }
}

/**
 * Devuelve la fecha de la última edición, o null si no existe / falla.
 */
export async function getLastEdit(): Promise<Date | null> {
  try {
    const rows = await supabase`SELECT value FROM app_meta WHERE key = 'last_edit' LIMIT 1`
    const value = rows[0]?.value
    return value ? new Date(value) : null
  } catch {
    return null
  }
}
