import 'server-only'
import { scrypt, randomBytes, timingSafeEqual } from 'crypto'
import { promisify } from 'util'

const scryptAsync = promisify(scrypt)

/** Devuelve "salt:hash" */
export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16).toString('hex')
  const buf = (await scryptAsync(password, salt, 64)) as Buffer
  return `${salt}:${buf.toString('hex')}`
}

/** Compara en tiempo constante una contraseña con un "salt:hash" guardado */
export async function verifyPassword(password: string, stored: string): Promise<boolean> {
  const [salt, key] = stored.split(':')
  if (!salt || !key) return false
  const keyBuf = Buffer.from(key, 'hex')
  const buf = (await scryptAsync(password, salt, 64)) as Buffer
  return keyBuf.length === buf.length && timingSafeEqual(keyBuf, buf)
}
