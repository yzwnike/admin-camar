"use client" // Este archivo sí puede usar useState
import { useState } from 'react'

interface Props {
  // Pasamos las funciones como Server Actions
  importarMateriales: () => Promise<void>;
  importarProyectos: () => Promise<void>;
  importarNoticias: () => Promise<void>;
}

export default function ImportButtons({ importarMateriales, importarProyectos, importarNoticias }: Props) {
  const [loading, setLoading] = useState(false);

  const handleAction = async (fn: () => Promise<void>, name: string) => {
    setLoading(true);
    try {
      await fn();
      alert(`${name} completado con éxito`);
    } catch (e) {
      alert(`Error en ${name}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <button 
        disabled={loading}
        onClick={() => handleAction(importarMateriales, "Materiales")}
        className="block w-full bg-slate-900 text-white p-4 rounded-xl font-bold disabled:opacity-50"
      >
        {loading ? 'Procesando...' : '🚀 Importar Materiales'}
      </button>

      <button 
        disabled={loading}
        onClick={() => handleAction(importarProyectos, "Proyectos")}
        className="block w-full bg-indigo-600 text-white p-4 rounded-xl font-bold disabled:opacity-50"
      >
        {loading ? 'Procesando...' : '📁 Importar Proyectos'}
      </button>

      <button 
        disabled={loading}
        onClick={() => handleAction(importarNoticias, "Noticias")}
        className="block w-full bg-emerald-600 text-white p-4 rounded-xl font-bold disabled:opacity-50"
      >
        {loading ? 'Procesando...' : '📰 Importar Noticias'}
      </button>
    </div>
  );
}