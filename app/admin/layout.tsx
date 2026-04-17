// /app/admin/layout.tsx
import Link from 'next/link'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const menuItems = [
    { name: 'Dashboard', href: '/admin', icon: '📊' },
    { name: 'Materiales', href: '/admin/materials', icon: '📦' },
    { name: 'Proyectos', href: '/admin/projects', icon: '🏗️' },
    { name: 'Noticias', href: '/admin/news', icon: '📰' },
    { name: 'Importador', href: '/admin/import', icon: '🚀' },
  ]

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white p-6 hidden md:block">
        <div className="mb-10">
          <h1 className="text-xl font-black tracking-tighter text-emerald-400">CAMAR CMS</h1>
          <p className="text-xs text-slate-400">Panel de Control v1.0</p>
        </div>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition text-slate-300 hover:text-white font-medium"
            >
              <span>{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8 bg-white p-4 rounded-xl shadow-sm border border-slate-200">
          <div className="font-bold text-slate-800 italic">Bienvenido, Admin</div>
          <button className="text-sm bg-slate-100 px-4 py-2 rounded-lg hover:bg-slate-200 transition">Cerrar Sesión</button>
        </header>
        {children}
      </main>
    </div>
  )
}