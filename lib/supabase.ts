// /lib/supabase.ts
import 'server-only';
import postgres from 'postgres';

// Tu cadena de conexión de Neon (asegúrate de que esté en el .env)
const connectionString = process.env.DATABASE_URL!;

// Creamos la conexión a Neon
const sql = postgres(connectionString, {
  ssl: 'require',
  idle_timeout: 20,
  max_lifetime: 60 * 30,
});

// Exportamos 'sql' pero con el nombre 'supabase' para engañar al sistema
export { sql as supabase };

// También lo exportamos por defecto por si acaso
export default sql;