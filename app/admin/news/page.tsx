'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'

export default function NewsListPage() {
  const [news, setNews] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  // URL base de la Pull Zone de Bunny.net
  const PULL_ZONE = "https://lanzadera-digital.b-cdn.net/camar.es/Noticias/"

  useEffect(() => {
    async function fetchNews() {
      const { data, error } = await supabase
        .from('noticias')
        .select('*')
        .order('date', { ascending: false })
      
      if (error) {
        console.error("Error cargando noticias:", error.message)
      } else {
        setNews(data || [])
      }
      setLoading(false)
    }
    fetchNews()
  }, [])

  const handleDelete = async (slug: string) => {
    if (!confirm('¿Seguro que quieres eliminar esta noticia definitivamente?')) return
    
    const { error } = await supabase
      .from('noticias')
      .delete()
      .eq('slug_es', slug)

    if (error) {
      alert("Error al eliminar: " + error.message)
    } else {
      setNews(news.filter(item => item.slug_es !== slug))
    }
  }

  // Función auxiliar para formatear la fecha
  const formatDate = (dateString: string) => {
    if (!dateString) return '---'
    return new Date(dateString).toLocaleDateString('es-ES', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    })
  }

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Noticias</h1>
          <p className="text-slate-500 text-sm font-medium">Panel de gestión de prensa y actualidad</p>
        </div>
        <Link 
          href="/admin/news/new" 
          className="bg-emerald-600 text-white px-6 py-3 rounded-2xl font-black hover:bg-emerald-700 transition shadow-lg flex items-center gap-2 uppercase text-[10px] tracking-widest active:scale-95"
        >
          <span className="text-lg">+</span> Nueva Noticia
        </Link>
      </div>

      {/* TABLA */}
      <div className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50/50 border-b border-slate-200 text-slate-400 text-[10px] uppercase font-black tracking-widest">
            <tr>
              <th className="p-6 w-24 text-center">Preview</th>
              <th className="p-6">Contenido</th>
              <th className="p-6 text-center">Publicación</th>
              <th className="p-6 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {loading ? (
              <tr>
                <td colSpan={4} className="p-20 text-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Cargando noticias...</span>
                  </div>
                </td>
              </tr>
            ) : news.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-20 text-center">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">No hay noticias publicadas todavía</span>
                </td>
              </tr>
            ) : news.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50/50 transition group">
                {/* COLUMNA IMAGEN */}
                <td className="p-6">
                  <div className="w-16 h-16 rounded-2xl bg-slate-100 overflow-hidden border border-slate-200 relative shadow-sm group-hover:scale-105 transition-transform">
                    {item.main_image ? (
                      <img 
                        src={`${PULL_ZONE}${item.folder_custom || item.slug_es}/${item.main_image}`} 
                        className="w-full h-full object-cover"
                        alt=""
                        onError={(e) => {
                          const img = e.currentTarget;
                          const folder = item.folder_custom || item.slug_es;
                          if (img.src.includes(folder + '/')) {
                            img.src = `${PULL_ZONE}${item.main_image}`; // Fallback a raíz
                          }
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[8px] text-slate-300 font-bold uppercase p-1 text-center bg-slate-50">
                        N/A
                      </div>
                    )}
                  </div>
                </td>

                {/* COLUMNA TÍTULO */}
                <td className="p-6">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-900 text-lg leading-tight group-hover:text-emerald-600 transition-colors">
                      {item.title?.es}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 mt-1 uppercase tracking-tighter">
                      URL: /{item.slug_es}
                    </span>
                  </div>
                </td>

                {/* COLUMNA FECHA */}
                <td className="p-6 text-center">
                  <span className="inline-block px-3 py-1 bg-slate-100 rounded-full text-slate-600 text-[10px] font-black uppercase">
                    {formatDate(item.date)}
                  </span>
                </td>

                {/* COLUMNA ACCIONES */}
                <td className="p-6 text-right">
                  <div className="flex justify-end gap-2">
                    <Link 
                      href={`/admin/news/${item.slug_es}`}
                      className="bg-slate-900 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-sm"
                    >
                      Editar
                    </Link>
                    <button 
                      onClick={() => handleDelete(item.slug_es)}
                      className="text-slate-400 hover:text-red-600 hover:bg-red-50 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all"
                    >
                      Eliminar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}