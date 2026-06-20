'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useNavigationBlocker } from '@/components/admin/NavigationBlocker'
import { useNotifications } from '@/components/admin/NotificationProvider'

type Props = React.ComponentProps<typeof Link>

/**
 * Link que respeta el bloqueo de navegación: si hay cambios sin guardar,
 * cancela la navegación y muestra el banner de confirmación global.
 */
export default function AdminLink({ children, ...props }: Props) {
  const { isBlocked, setIsBlocked } = useNavigationBlocker()
  const { notify } = useNotifications()
  const router = useRouter()

  return (
    <Link
      {...props}
      onNavigate={(e) => {
        if (!isBlocked) return
        e.preventDefault()
        const href = typeof props.href === 'string' ? props.href : props.href.toString()
        notify({
          tone: 'confirm',
          dismissible: false,
          message: 'Tienes cambios sin guardar',
          description: 'Si sales de esta página se perderán los cambios de esta edición.',
          actions: [
            {
              label: 'Salir sin guardar',
              variant: 'danger',
              onClick: () => {
                setIsBlocked(false)
                router.push(href)
              },
            },
            { label: 'Seguir editando', variant: 'ghost' },
          ],
        })
      }}
    >
      {children}
    </Link>
  )
}
