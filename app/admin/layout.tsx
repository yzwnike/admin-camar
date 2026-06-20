// /app/admin/layout.tsx
import Link from 'next/link'
import SidebarNav from '@/components/admin/SidebarNav'
import Logo from '@/components/admin/Logo'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <aside className="hidden w-64 flex-col bg-dynamicBlack p-6 text-baliPearl md:flex">
        <Link href="/admin/materials" className="mb-10 block">
          <Logo className="h-auto w-32 text-baliPearl" />
          <p className="mt-2 text-[10px] uppercase tracking-widest text-bubonicBrown">
            Panel de gestión
          </p>
        </Link>

        <SidebarNav />

        <div className="mt-auto border-t border-baliPearl/20 pt-6">
          <p className="font-vollkorn text-sm italic text-baliPearl/50">Desde 1977</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-8">
        {children}
      </main>
    </div>
  )
}
