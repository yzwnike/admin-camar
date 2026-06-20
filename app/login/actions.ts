'use server'

import { redirect } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { verifyPassword } from '@/lib/password'
import { createSession, deleteSession } from '@/lib/auth'

export interface LoginState {
  error?: string
}

export async function login(_prev: LoginState, formData: FormData): Promise<LoginState> {
  const email = (formData.get('email') as string || '').trim().toLowerCase()
  const password = (formData.get('password') as string) || ''

  if (!email || !password) {
    return { error: 'Introduce email y contraseña.' }
  }

  let user: { id: string; password_hash: string } | undefined
  try {
    const rows = await supabase`
      SELECT id, password_hash FROM admin_users WHERE email = ${email} LIMIT 1
    `
    user = rows[0] as any
  } catch (e) {
    console.error('Error consultando admin_users:', e)
    return { error: 'Error del servidor. Inténtalo de nuevo.' }
  }

  // Comprueba siempre el hash (aunque no exista el usuario) para no filtrar tiempos
  const ok = user ? await verifyPassword(password, user.password_hash) : false
  if (!user || !ok) {
    return { error: 'Credenciales incorrectas.' }
  }

  await createSession(user.id)
  redirect('/admin/materials')
}

export async function logout() {
  await deleteSession()
  redirect('/login')
}
