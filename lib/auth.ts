import 'server-only'
import { cookies } from 'next/headers'
import { signToken, verifyToken, type SessionPayload } from './session'

const COOKIE_NAME = 'session'
const SESSION_DURATION_MS = 7 * 24 * 60 * 60 * 1000 // 7 días

export async function createSession(userId: string) {
  const expiresAt = Date.now() + SESSION_DURATION_MS
  const token = await signToken({ userId, exp: expiresAt })
  const cookieStore = await cookies()
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    expires: new Date(expiresAt),
    path: '/',
  })
}

export async function deleteSession() {
  const cookieStore = await cookies()
  cookieStore.delete(COOKIE_NAME)
}

/** Lee y verifica la sesión actual desde la cookie (para Server Components/Actions). */
export async function getSession(): Promise<SessionPayload | null> {
  const cookieStore = await cookies()
  return verifyToken(cookieStore.get(COOKIE_NAME)?.value)
}
