'use client'

import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'

/* ==========================================================================
   Tipos — se ampliarán las categorías más adelante
   ========================================================================== */
export type NotificationTone = 'default' | 'confirm' | 'error' | 'success'

export interface NotificationAction {
  label: string
  onClick?: () => void
  /** primary = dorado, danger = rojo, ghost = contorno */
  variant?: 'primary' | 'danger' | 'ghost'
  /** Por defecto la notificación se cierra al pulsar la acción */
  keepOpen?: boolean
}

export interface NotificationInput {
  message: string
  description?: string
  tone?: NotificationTone
  actions?: NotificationAction[]
  /** Muestra botón de cerrar (X). Por defecto true */
  dismissible?: boolean
}

interface Notification extends NotificationInput {
  id: number
}

interface NotificationContextType {
  notify: (input: NotificationInput) => void
  dismiss: () => void
}

const NotificationContext = createContext<NotificationContextType>({
  notify: () => {},
  dismiss: () => {},
})

export function useNotifications() {
  return useContext(NotificationContext)
}

/* ==========================================================================
   Estilos por tono / variante
   ========================================================================== */
const TONE_DOT: Record<NotificationTone, string> = {
  default: 'bg-baliPearl/60',
  confirm: 'bg-bubonicBrown',
  error: 'bg-red-500',
  success: 'bg-green-500',
}

const ACTION_CLASS: Record<NonNullable<NotificationAction['variant']>, string> = {
  primary: 'bg-bubonicBrown text-baliPearl hover:bg-rawSienna',
  danger: 'bg-red-600 text-baliPearl hover:bg-red-700',
  ghost: 'border border-baliPearl/30 text-baliPearl hover:bg-secondaryBlack',
}

/* ==========================================================================
   Provider + Banner
   ========================================================================== */
const AUTO_DISMISS_MS = 3000
const EXIT_MS = 300

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [notification, setNotification] = useState<Notification | null>(null)
  const [closing, setClosing] = useState(false)
  const autoTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const exitTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearTimers = () => {
    if (autoTimer.current) clearTimeout(autoTimer.current)
    if (exitTimer.current) clearTimeout(exitTimer.current)
    autoTimer.current = null
    exitTimer.current = null
  }

  // Cierra con animación de salida (hacia abajo, fuera del viewport)
  const dismiss = useCallback(() => {
    clearTimers()
    setClosing(true)
    exitTimer.current = setTimeout(() => {
      setNotification(null)
      setClosing(false)
    }, EXIT_MS)
  }, [])

  const notify = useCallback(
    (input: NotificationInput) => {
      clearTimers()
      setClosing(false)
      setNotification({ id: Date.now(), ...input })
      // Sin CTA (solo cierre): se auto-descarta a los 5s
      if (!input.actions || input.actions.length === 0) {
        autoTimer.current = setTimeout(() => dismiss(), AUTO_DISMISS_MS)
      }
    },
    [dismiss],
  )

  useEffect(() => () => clearTimers(), [])

  return (
    <NotificationContext.Provider value={{ notify, dismiss }}>
      {children}

      {notification && (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-200 flex justify-center px-4 pb-6">
          <div
            key={notification.id}
            className={`pointer-events-auto w-full max-w-2xl rounded-xl border border-secondaryBlack bg-dynamicBlack px-6 py-4 text-baliPearl shadow-2xl ${
              closing ? 'animate-notif-out' : 'animate-notif'
            }`}
            role="alertdialog"
            aria-live="assertive"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${TONE_DOT[notification.tone || 'default']}`} />
                <div>
                  <p className="font-vollkorn text-sm uppercase tracking-wide text-baliPearl">
                    {notification.message}
                  </p>
                  {notification.description && (
                    <p className="mt-1 text-sm text-baliPearl/60">{notification.description}</p>
                  )}
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-2 sm:justify-end">
                {notification.actions?.map((action, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      action.onClick?.()
                      if (!action.keepOpen) dismiss()
                    }}
                    className={`cursor-pointer rounded-md px-4 py-2 font-vollkorn text-xs uppercase tracking-wide default-transition ${
                      ACTION_CLASS[action.variant || 'ghost']
                    }`}
                  >
                    {action.label}
                  </button>
                ))}

                {(notification.dismissible ?? true) && (
                  <button
                    type="button"
                    onClick={dismiss}
                    aria-label="Cerrar"
                    className="cursor-pointer rounded-md p-2 text-baliPearl/50 default-transition hover:bg-secondaryBlack hover:text-baliPearl"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </NotificationContext.Provider>
  )
}
