// Token de sesión firmado (HMAC-SHA256) con Web Crypto.
// Funciona tanto en Node (server actions) como en el runtime del proxy.

export interface SessionPayload {
  userId: string
  exp: number // epoch ms de expiración
}

const encoder = new TextEncoder()

function getSecret(): string {
  const secret = process.env.AUTH_SECRET
  if (!secret) throw new Error('AUTH_SECRET no está definido')
  return secret
}

function bytesToB64url(bytes: Uint8Array): string {
  let str = ''
  for (const b of bytes) str += String.fromCharCode(b)
  return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

function strToB64url(s: string): string {
  return bytesToB64url(encoder.encode(s))
}

function b64urlToBytes(s: string): Uint8Array {
  s = s.replace(/-/g, '+').replace(/_/g, '/')
  const pad = s.length % 4 ? 4 - (s.length % 4) : 0
  s += '='.repeat(pad)
  const bin = atob(s)
  const bytes = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i)
  return bytes
}

function b64urlToStr(s: string): string {
  return new TextDecoder().decode(b64urlToBytes(s))
}

async function getKey(): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    'raw',
    encoder.encode(getSecret()),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify'],
  )
}

export async function signToken(payload: SessionPayload): Promise<string> {
  const body = strToB64url(JSON.stringify(payload))
  const key = await getKey()
  const sig = await crypto.subtle.sign('HMAC', key, encoder.encode(body))
  return `${body}.${bytesToB64url(new Uint8Array(sig))}`
}

export async function verifyToken(token: string | undefined): Promise<SessionPayload | null> {
  if (!token) return null
  const [body, sig] = token.split('.')
  if (!body || !sig) return null
  try {
    const key = await getKey()
    const valid = await crypto.subtle.verify('HMAC', key, b64urlToBytes(sig) as BufferSource, encoder.encode(body))
    if (!valid) return null
    const payload = JSON.parse(b64urlToStr(body)) as SessionPayload
    if (!payload.exp || Date.now() > payload.exp) return null
    return payload
  } catch {
    return null
  }
}
