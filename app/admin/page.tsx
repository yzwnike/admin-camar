// /app/admin/page.tsx
import { supabase } from '@/lib/supabase'
import Link from 'next/link'

async function getStats() {
  // Ejecutamos las tres consultas en paralelo
  const [resMat, resPro, resNews] = await Promise.all([
    supabase`SELECT COUNT(*) FROM materiales`,
    supabase`SELECT COUNT(*) FROM proyectos`,
    supabase`SELECT COUNT(*) FROM noticias`
  ]);

  // Extraemos los valores (postgres.js devuelve un array de objetos)
  const matCount = parseInt(resMat[0].count);
  const proCount = parseInt(resPro[0].count);
  const newsCount = parseInt(resNews[0].count);

  return { matCount, proCount, newsCount };
}

export default async function AdminDashboard() {
  const stats = await getStats()

  const cards = [
    { title: 'Materiales', count: stats.materials, color: 'bg-blue-500', href: '/admin/materials' },
    { title: 'Proyectos', count: stats.projects, color: 'bg-purple-500', href: '/admin/projects' },
    { title: 'Noticias', count: stats.news, color: 'bg-emerald-500', href: '/admin/news' },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Estado del Contenido</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div key={card.title} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <div className={`w-12 h-12 ${card.color} rounded-lg mb-4 flex items-center justify-center text-white text-xl shadow-inner`}>
              {card.title === 'Materiales' ? '📦' : card.title === 'Proyectos' ? '🏗️' : '📰'}
            </div>
            <p className="text-slate-500 font-medium">{card.title}</p>
            <h3 className="text-4xl font-black text-slate-900">{card.count}</h3>
            <Link href={card.href} className="mt-4 inline-block text-sm text-blue-600 hover:underline">
              Gestionar →
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}