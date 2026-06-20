'use client'

import { useActionState, useState } from 'react'
import { login, type LoginState } from './actions'
import Logo from '@/components/admin/Logo'
import LoginBackdrop from '@/components/admin/LoginBackdrop'

const initialState: LoginState = {}

type FieldErrors = { email?: string; password?: string }

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(login, initialState)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const fd = new FormData(e.currentTarget)
    const next: FieldErrors = {}
    if (!((fd.get('email') as string) || '').trim()) next.email = 'Introduce tu email.'
    if (!((fd.get('password') as string) || '')) next.password = 'Introduce tu contraseña.'
    if (Object.keys(next).length > 0) {
      e.preventDefault()
      setFieldErrors(next)
    } else {
      setFieldErrors({})
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-dynamicBlack px-4">
      <LoginBackdrop />

      <div className="relative z-10 w-full max-w-sm rounded-xl border border-baliPearl/10 bg-dynamicBlack p-8 text-baliPearl shadow-2xl">
        <Logo className="mx-auto h-auto w-36 text-baliPearl" />
        <p className="mb-8 mt-2 text-center text-[10px] uppercase tracking-widest text-bubonicBrown">
          Panel de gestión
        </p>

        <form action={formAction} onSubmit={handleSubmit} noValidate className="space-y-4">
          <div>
            <label className="mb-2 block text-xs uppercase tracking-wide text-baliPearl/50">Email</label>
            <input
              name="email"
              type="email"
              autoComplete="email"
              className="w-full rounded-md border border-secondaryBlack bg-secondaryBlack/50 p-3 text-baliPearl outline-none default-transition placeholder:text-baliPearl/30 focus:border-bubonicBrown"
            />
            {fieldErrors.email && <p className="mt-1 text-xs text-red-400" role="alert">{fieldErrors.email}</p>}
          </div>

          <div>
            <label className="mb-2 block text-xs uppercase tracking-wide text-baliPearl/50">Contraseña</label>
            <input
              name="password"
              type="password"
              autoComplete="current-password"
              className="w-full rounded-md border border-secondaryBlack bg-secondaryBlack/50 p-3 text-baliPearl outline-none default-transition placeholder:text-baliPearl/30 focus:border-bubonicBrown"
            />
            {fieldErrors.password && <p className="mt-1 text-xs text-red-400" role="alert">{fieldErrors.password}</p>}
          </div>

          {state.error && (
            <p className="text-xs text-red-400" role="alert">
              {state.error}
            </p>
          )}

          <button type="submit" disabled={pending} className="btn-gold mt-6 w-full py-3">
            {pending ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  )
}
