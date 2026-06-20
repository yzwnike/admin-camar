// Crea/actualiza el usuario admin desde ADMIN_EMAIL / ADMIN_PASSWORD del .env.local
// Uso:  node scripts/seed-admin.mjs
import postgres from 'postgres'
import { scrypt, randomBytes, randomUUID } from 'crypto'
import { promisify } from 'util'
import fs from 'fs'

const scryptAsync = promisify(scrypt)

function readEnv() {
  const env = fs.readFileSync(new URL('../.env.local', import.meta.url), 'utf8')
  const get = (k) => {
    const line = env.split('\n').find((l) => l.startsWith(k + '='))
    return line ? line.slice(k.length + 1).trim().replace(/^["']|["']$/g, '') : undefined
  }
  return { url: get('DATABASE_URL'), email: get('ADMIN_EMAIL'), password: get('ADMIN_PASSWORD') }
}

async function hashPassword(password) {
  const salt = randomBytes(16).toString('hex')
  const buf = await scryptAsync(password, salt, 64)
  return `${salt}:${buf.toString('hex')}`
}

const { url, email, password } = readEnv()
if (!url) { console.error('Falta DATABASE_URL'); process.exit(1) }
if (!email || !password) {
  console.error('Define ADMIN_EMAIL y ADMIN_PASSWORD en .env.local antes de ejecutar.')
  process.exit(1)
}

const sql = postgres(url, { ssl: 'require' })
try {
  const password_hash = await hashPassword(password)
  await sql`
    INSERT INTO admin_users (id, email, password_hash)
    VALUES (${randomUUID()}, ${email.toLowerCase()}, ${password_hash})
    ON CONFLICT (email) DO UPDATE SET password_hash = EXCLUDED.password_hash
  `
  console.log(`✓ Admin listo: ${email.toLowerCase()}`)
} catch (e) {
  console.error('ERROR:', e.message)
} finally {
  await sql.end()
}
