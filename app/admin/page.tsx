// /app/admin/page.tsx
import { supabase } from '@/lib/supabase'
import Link from 'next/link'

async function getStats() {
  try {
    // Ejecutamos las tres consultas en paralelo con postgres.js
    const [resMat, resPro, resNews] = await Promise.all([
      supabase`SELECT COUNT(*) FROM materiales`,
      supabase`SELECT COUNT(*) FROM proyectos`,
      supabase`SELECT COUNT(*) FROM noticias`
    ]);

    // Extraemos los valores convirtiéndolos a número
    return { 
      materials: parseInt(resMat[0].count) || 0, 
      projects: parseInt(resPro[0].count) || 0, 
      news: parseInt(resNews[0].count) || 0 
    };
  } catch (error) {
    console.error("Error cargando estadísticas:", error);
    return { materials: 0, projects: 0, news: 0 };
  }
}

export default async function AdminDashboard() {
  const stats = await getStats()

  const cards = [
    { 
      title: 'Materiales', 
      count: stats.materials, 
      color: 'bg-blue-500', 
      href: '/admin/materials',
      icon: '📦'
    },
    { 
      title: 'Proyectos', 
      count: stats.projects, 
      color: 'bg-purple-500', 
      href: '/admin/projects',
      icon: '🏗️'
    },
    { 
      title: 'Noticias', 
      count: stats.news, 
      color: 'bg-emerald-500', 
      href: '/admin/news',
      icon: '📰'
    },
  ]

  return (
    <div className="p-4 md:p-8">
      <h2 className="text-3xl font-black text-slate-800 mb-8 uppercase tracking-tighter">
        Estado del Contenido
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card) => (
          <div 
            key={card.title} 
            className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 hover:shadow-xl transition-all group"
          >
            <div className={`w-14 h-14 ${card.color} rounded-2xl mb-6 flex items-center justify-center text-white text-2xl shadow-lg transform group-hover:scale-110 transition-transform`}>
              {card.icon}
            </div>
            
            <p className="text-slate-400 text-xs font-black uppercase tracking-widest">
              {card.title}
            </p>
            
            <h3 className="text-5xl font-black text-slate-900 mt-1">
              {card.count}
            </h3>
            
            <Link 
              href={card.href} 
              className="mt-8 flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-slate-900 transition-colors uppercase tracking-tight"
            >
              Gestionar contenido <span className="text-lg">→</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}