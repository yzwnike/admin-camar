// /lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

// Estas variables deben empezar por NEXT_PUBLIC_ para que el navegador las vea
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Creamos el cliente estándar de Supabase (compatible con el navegador)
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Exportación por defecto para evitar errores de importación en otros archivos
export default supabase