// /app/admin/news/[slug]/page.tsx
import { supabase } from '@/lib/supabase'
import NewsForm from '@/components/forms/NewsForm'
import { notFound } from 'next/navigation'
import Link from 'next/link'

// Definimos los tipos para Next.js 15
interface Props {
  params: Promise<{ slug: string }>
}

export default async function EditNewsPage({ params }: Props) {
  // 1. Esperamos a que los params se resuelvan (Obligatorio en Next 15)
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // 2. Buscamos la noticia en Supabase usando el slug de la URL
  const { data: noticia, error } = await supabase
    .from('noticias')
    .select('*')
    .eq('slug_es', slug)
    .maybeSingle() // Usamos maybeSingle para que no explote si no hay nada

  // 3. Si hay error o la noticia no existe, mandamos al 404
  if (error || !noticia) {
    console.error("Error de Supabase o noticia inexistente:", error?.message);
    return notFound();
  }

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">
      {/* Cabecera del Editor */}
      <div className="mb-10 flex justify-between items-end">
        <div className="space-y-2">
          <Link 
            href="/admin/news" 
            className="group flex items-center gap-2 text-emerald-600 text-[10px] font-black uppercase tracking-widest hover:text-emerald-700 transition-colors"
          >
            <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span> 
            Volver al listado
          </Link>
          <h1 className="text-5xl font-black text-slate-900 tracking-tight uppercase leading-none">
            Editar Noticia
          </h1>
          <p className="text-slate-400 font-medium italic">
            Editando: <span className="text-slate-600">"{noticia.title?.es}"</span>
          </p>
        </div>

        <div className="hidden md:flex flex-col items-end gap-2">
          <div className="bg-emerald-500 text-white px-4 py-1.5 rounded-full text-[10px] font-black border border-emerald-600 shadow-xl shadow-emerald-200 animate-pulse">
            SISTEMA CONECTADO
          </div>
          <span className="text-[10px] font-mono text-slate-300">ID: {noticia.id}</span>
        </div>
      </div>

      {/* El Formulario con los datos cargados */}
      <div className="bg-white p-6 md:p-12 rounded-[3.5rem] border border-slate-200 shadow-2xl shadow-slate-200/60 relative overflow-hidden">
        {/* Decoración visual de fondo */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -z-10 opacity-50"></div>
        
        <NewsForm initialData={noticia} isEditing={true} />
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-slate-400 text-xs">
          Cualquier cambio realizado se sincronizará con la CDN de Bunny.net y la DB de Supabase.
        </p>
      </div>
    </div>
  )
}