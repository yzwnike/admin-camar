import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyToken } from '@/lib/session'

export default async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl
  const session = await verifyToken(req.cookies.get('session')?.value)

  const isAdmin = pathname.startsWith('/admin')
  const isLogin = pathname === '/login'

  // Bloquear /admin sin sesión -> al login
  if (isAdmin && !session) {
    const url = new URL('/login', req.url)
    return NextResponse.redirect(url)
  }

  // Si ya hay sesión y entra al login -> al panel
  if (isLogin && session) {
    return NextResponse.redirect(new URL('/admin/materials', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/login'],
}
