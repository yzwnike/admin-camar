// /lib/neon.ts
import postgres from 'postgres';

// Usamos la cadena de conexión de Neon
const connectionString = process.env.DATABASE_URL!;

export const sql = postgres(connectionString, {
  ssl: 'require',
  // Esto ayuda a que no se queden conexiones abiertas en desarrollo
  idle_timeout: 20,
  max_lifetime: 60 * 30,
});