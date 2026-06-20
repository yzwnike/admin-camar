import 'server-only'
import { cookies } from 'next/headers'

/**
 * Deja un mensaje "flash" de un solo uso en una cookie (legible por el cliente).
 * Lo consume y borra <FlashNotice> tras mostrar la notificación.
 * Se usa en lugar de un query param para evitar que el Router Cache lo reproduzca.
 */
export async function setFlash(value: string) {
  const cookieStore = await cookies()
  cookieStore.set('flash', value, {
    httpOnly: false,
    sameSite: 'lax',
    path: '/',
    maxAge: 30,
  })
}
