'use client'

import { useEffect } from 'react'
import { useNavigationBlocker } from '@/components/admin/NavigationBlocker'

/**
 * Marca la página de edición como "con cambios sin guardar" en cuanto el usuario
 * toca cualquier campo. Cubre:
 *  - Navegación interna (la intercepta AdminLink mostrando el banner).
 *  - Refrescar / cerrar pestaña (aviso nativo del navegador: única forma de
 *    bloquear de verdad un reload).
 * Al guardar (submit) o salir de la página, se limpia el bloqueo.
 */
export default function UnsavedChangesGuard() {
  const { isBlocked, setIsBlocked } = useNavigationBlocker()

  useEffect(() => {
    const markDirty = () => setIsBlocked(true)
    const onSubmit = () => setIsBlocked(false)

    document.addEventListener('input', markDirty)
    document.addEventListener('change', markDirty)
    document.addEventListener('submit', onSubmit, true)

    return () => {
      document.removeEventListener('input', markDirty)
      document.removeEventListener('change', markDirty)
      document.removeEventListener('submit', onSubmit, true)
      // Al desmontar (salir de la edición) limpiamos el bloqueo.
      setIsBlocked(false)
    }
  }, [setIsBlocked])

  useEffect(() => {
    const handler = (e: BeforeUnloadEvent) => {
      if (!isBlocked) return
      e.preventDefault()
      e.returnValue = ''
    }
    window.addEventListener('beforeunload', handler)
    return () => window.removeEventListener('beforeunload', handler)
  }, [isBlocked])

  return null
}
