// app/admin/import/page.tsx
// ¡IMPORTANTE!: No pongas "use client" aquí
import { ejecutarImportacion } from '@/lib/seed'
import { importarProyectos } from '@/lib/seed-proyectos'
import { importarNoticias } from '@/lib/seed-noticias'
import ImportButtons from './ImportButtons'

export default function ImportPage() {
  
  // Definimos Server Actions locales para envolver las funciones de lib
  async function actionMateriales() {
    "use server"
    await ejecutarImportacion()
  }

  async function actionProyectos() {
    "use server"
    await importarProyectos()
  }

  async function actionNoticias() {
    "use server"
    await importarNoticias()
  }

  return (
    <main className="max-w-2xl mx-auto p-10">
      <h1 className="text-4xl font-black mb-8 italic uppercase tracking-tighter">
        Panel de Importación
      </h1>
      
      <p className="mb-6 text-slate-500 text-sm">
        Selecciona el conjunto de datos que deseas sincronizar con la base de datos de Neon.
      </p>

      {/* Pasamos las Server Actions al componente cliente */}
      <ImportButtons 
        importarMateriales={actionMateriales}
        importarProyectos={actionProyectos}
        importarNoticias={actionNoticias}
      />
    </main>
  )
}