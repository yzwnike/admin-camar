'use client'
import { useState } from 'react'
import { ejecutarImportacion } from '@/lib/seed' // Materiales
import { importarProyectos } from '@/lib/seed-proyectos' // Proyectos
import { importarNoticias } from '@/lib/seed-noticias' // Noticias

export default function ImportPage() {
  const [status, setStatus] = useState<{ [key: string]: string }>({})
  const [loading, setLoading] = useState<{ [key: string]: boolean }>({})

  const handleAction = async (name: string, fn: () => Promise<any>) => {
    setLoading(prev => ({ ...prev, [name]: true }))
    try {
      const res = await fn()
      if (res.success) {
        setStatus(prev => ({ ...prev, [name]: `✅ ¡Éxito! (${res.count || 0})` }))
      } else {
        setStatus(prev => ({ ...prev, [name]: `❌ Error: ${res.error}` }))
      }
    } catch (err) {
      setStatus(prev => ({ ...prev, [name]: '❌ Error fatal en la consola' }))
    }
    setLoading(prev => ({ ...prev, [name]: false }))
  }

  return (
    <div className="p-10 bg-slate-50 min-h-screen flex flex-col items-center">
      <div className="max-w-2xl w-full bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
        <h1 className="text-3xl font-black text-slate-800 mb-2">Migración de Datos</h1>
        <p className="text-slate-500 mb-8 font-medium">Pulsa cada botón para subir los datos a Supabase.</p>

        <div className="space-y-6">
          {/* BOTÓN MATERIALES */}
          <div className="flex flex-col gap-2">
            <button 
              onClick={() => handleAction('materiales', ejecutarImportacion)}
              disabled={loading['materiales']}
              className="w-full py-4 bg-slate-800 text-white font-bold rounded-xl hover:bg-black transition disabled:opacity-50"
            >
              {loading['materiales'] ? 'Subiendo...' : '📦 Importar 185 Materiales'}
            </button>
            {status['materiales'] && <p className="text-sm font-bold text-center">{status['materiales']}</p>}
          </div>

          {/* BOTÓN PROYECTOS */}
          <div className="flex flex-col gap-2">
            <button 
              onClick={() => handleAction('proyectos', importarProyectos)}
              disabled={loading['proyectos']}
              className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading['proyectos'] ? 'Subiendo...' : '🏗️ Importar Proyectos'}
            </button>
            {status['proyectos'] && <p className="text-sm font-bold text-center">{status['proyectos']}</p>}
          </div>

          {/* BOTÓN NOTICIAS */}
          <div className="flex flex-col gap-2">
            <button 
              onClick={() => handleAction('noticias', importarNoticias)}
              disabled={loading['noticias']}
              className="w-full py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition disabled:opacity-50"
            >
              {loading['noticias'] ? 'Subiendo...' : '📰 Importar Noticias (1 y 2)'}
            </button>
            {status['noticias'] && <p className="text-sm font-bold text-center text-emerald-600">{status['noticias']}</p>}
          </div>
        </div>
      </div>
    </div>
  )
}