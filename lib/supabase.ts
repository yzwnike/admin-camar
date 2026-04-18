// /lib/supabase.ts
// Eliminamos 'server-only' para evitar el error de compilación en el build de Vercel
import postgres from 'postgres';

const connectionString = process.env.DATABASE_URL!;

const sql = postgres(connectionString, {
  ssl: 'require',
  idle_timeout: 20,
  max_lifetime: 60 * 30,
});

export { sql as supabase };
export default sql;