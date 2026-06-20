import { supabase } from '@/lib/supabase'
import NewsForm from '@/components/forms/NewsForm'
import { notFound } from 'next/navigation'
import AdminLink from '@/components/admin/AdminLink'
import UnsavedChangesGuard from '@/components/admin/UnsavedChangesGuard'

// Definimos los tipos para Next.js 15
interface Props {
  params: Promise<{ slug: string }>
}

export default async function EditNewsPage({ params }: Props) {
  // 1. Esperamos a que los params se resuelvan (Requisito de Next.js 15)
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // 2. Buscamos la noticia usando la sintaxis de postgres.js
  let noticia;
  try {
    const data = await supabase`
      SELECT * FROM noticias 
      WHERE slug_es = ${slug} 
      LIMIT 1
    `;
    noticia = data[0]; // postgres.js devuelve un array, tomamos el primer elemento
  } catch (err: any) {
    console.error("Error al obtener la noticia:", err.message);
    return notFound();
  }

  // 3. Si no existe la noticia, mandamos al 404
  if (!noticia) {
    return notFound();
  }

  return (
    <div className="mx-auto max-w-6xl">
      <UnsavedChangesGuard />
      {/* Cabecera del Editor */}
      <div className="mb-10 flex items-end justify-between">
        <div className="space-y-2">
          <AdminLink
            href="/admin/news"
            className="group flex items-center gap-2 text-[10px] uppercase tracking-widest text-bubonicBrown default-transition hover:text-rawSienna"
          >
            <span className="text-lg default-transition group-hover:-translate-x-1">←</span>
            Volver al listado
          </AdminLink>
          <h1 className="font-vollkorn text-5xl uppercase leading-none tracking-tight text-dynamicBlack">
            Editar noticia
          </h1>
          <p className="italic text-dynamicBlack/40">
            Editando: <span className="text-dynamicBlack/70">&ldquo;{noticia.title?.es}&rdquo;</span>
          </p>
        </div>

        <div className="hidden flex-col items-end gap-2 md:flex">
          <div className="rounded-md bg-dynamicBlack px-4 py-1.5 text-[10px] uppercase tracking-wide text-baliPearl">
            Sistema conectado
          </div>
          <span className="font-mono text-[10px] text-dynamicBlack/30">ID: {noticia.id}</span>
        </div>
      </div>

      {/* El Formulario con los datos cargados */}
      <div className="rounded-xl border border-dynamicBlack/10 bg-white p-6 md:p-12">
        {/*
            CORRECCIÓN CLAVE:
            Pasamos 'noticia.slug_es' como 'existingFolder'.
            Esto asegura que el NewsForm sepa que debe borrar/subir archivos
            en la carpeta ya existente en el CDN, ignorando cambios en el título.
        */}
        <NewsForm
          initialData={noticia}
          isEditing={true}
          existingFolder={noticia.slug_es}
        />
      </div>

      <div className="mt-8 text-center">
        <p className="text-xs text-dynamicBlack/40">
          Cualquier cambio realizado se sincronizará con la CDN de Bunny.net y la base de datos.
        </p>
      </div>
    </div>
  )
}