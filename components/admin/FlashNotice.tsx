'use client'

import { useEffect, useRef } from 'react'
import { useNotifications } from '@/components/admin/NotificationProvider'

interface Props {
  /** Mapa valor-de-flash -> mensaje de éxito */
  messages: Record<string, string>
}

/**
 * Lee la cookie "flash" (un solo uso), muestra la notificación de éxito y borra
 * la cookie. Al no depender de la URL ni del render, no se reproduce al volver
 * a la página desde el caché de navegación.
 */
export default function FlashNotice({ messages }: Props) {
  const { notify } = useNotifications()
  const fired = useRef(false)

  useEffect(() => {
    if (fired.current) return
    const match = document.cookie.match(/(?:^|;\s*)flash=([^;]+)/)
    if (!match) return
    fired.current = true
    // Consumir: borrar la cookie inmediatamente
    document.cookie = 'flash=; Max-Age=0; path=/'
    const value = decodeURIComponent(match[1])
    const message = messages[value]
    if (message) notify({ tone: 'success', message })
  }, [messages, notify])

  return null
}
