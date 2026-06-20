'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems = [
  { name: 'Materiales', href: '/admin/materials' },
  { name: 'Proyectos', href: '/admin/projects' },
  { name: 'Noticias', href: '/admin/news' },
]

export default function SidebarNav() {
  const pathname = usePathname()

  const isActive = (href: string) => pathname.startsWith(href)

  return (
    <nav className="space-y-1">
      {menuItems.map((item) => {
        const active = isActive(item.href)
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`block rounded-md px-3 py-2.5 font-vollkorn text-sm uppercase tracking-wide default-transition ${
              active
                ? 'bg-baliPearl/10 text-baliPearl'
                : 'text-baliPearl/70 hover:bg-secondaryBlack hover:text-baliPearl'
            }`}
          >
            {item.name}
          </Link>
        )
      })}
    </nav>
  )
}
