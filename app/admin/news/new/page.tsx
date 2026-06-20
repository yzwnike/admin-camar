import NewsForm from '@/components/forms/NewsForm'
import Link from 'next/link'

export default function CreateNewsPage() {
  return (
    <div className="mx-auto max-w-6xl">

      {/* Cabecera del Creador */}
      <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="space-y-2">
          <Link
            href="/admin/news"
            className="group flex items-center gap-2 text-[10px] uppercase tracking-widest text-bubonicBrown default-transition hover:text-rawSienna"
          >
            <span className="text-lg default-transition group-hover:-translate-x-1">←</span>
            Volver al listado
          </Link>
          <h1 className="font-vollkorn text-5xl uppercase leading-none tracking-tight text-dynamicBlack">
            Nueva noticia
          </h1>
          <p className="italic text-dynamicBlack/40">
            Configurando una nueva entrada para el blog de <span className="ml-1 text-sm font-bold not-italic text-dynamicBlack/70">CAMAR ALMERÍA</span>
          </p>
        </div>

        <div className="flex flex-col items-end gap-2">
          <div className="rounded-md bg-dynamicBlack px-5 py-2 text-[10px] uppercase tracking-widest text-baliPearl">
            Borrador nuevo
          </div>
          <span className="font-mono text-[10px] italic text-dynamicBlack/30">Esperando publicación...</span>
        </div>
      </div>

      {/*
          CONTENEDOR DEL FORMULARIO
          isEditing={false} activa el auto-slug y auto-folder mientras escribes el título.
          El ImageUploader funcionará automáticamente apuntando a la carpeta generada.
      */}
      <div className="rounded-xl border border-dynamicBlack/10 bg-white p-6 md:p-12">
        {/* Usamos el formulario robusto que ya gestiona la lógica de guardado */}
        <NewsForm isEditing={false} />
      </div>

      <div className="mt-8 flex flex-col gap-1 text-center">
        <p className="text-xs text-dynamicBlack/40">
          Al publicar, el sistema generará automáticamente las URLs amigables y organizará los assets en la CDN.
        </p>
        <p className="text-[10px] uppercase tracking-wide text-dynamicBlack/30">
          Conexión segura con Neon & Bunny.net
        </p>
      </div>
    </div>
  )
}