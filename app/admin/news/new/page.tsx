import { supabase } from '@/lib/supabase'
import NewsForm from '@/components/forms/NewsForm'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import Link from 'next/link'

/**
 * Server Action para procesar la creación de la noticia
 */
async function createNewsAction(formData: FormData) {
  'use server'

  const titleEs = formData.get('title_es') as string;
  const titleEn = (formData.get('title_en') as string) || "";

  if (!titleEs) return;

  const slugify = (text: string) => 
    text.toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');

  const slug_es = slugify(titleEs);

  // CONSTRUIMOS EL PAYLOAD EXPLÍCITAMENTE SIN EL ID
  const payload = {
    title: { es: titleEs, en: titleEn },
    slug_es: slug_es,
    slug_en: titleEn ? slugify(titleEn) : slug_es,
    date: formData.get('date') || new Date().toISOString().split('T')[0],
    main_image: (formData.get('main_image') as string) || null,
    content: {
      es: (formData.get('content_es') as string) || "",
      en: (formData.get('content_en') as string) || ""
    },
    folder_custom: slug_es
  };

  // IMPORTANTE: Asegúrate de que no estamos pasando un objeto con id: null
  const { error } = await supabase
    .from('noticias')
    .insert([payload]); // Pasamos el array con el objeto limpio

  if (error) {
    console.error("DEBUG ERROR:", error.message);
    return;
  }

  revalidatePath('/admin/news');
  redirect('/admin/news');
}

export default function CreateNewsPage() {
  return (
    <div className="max-w-6xl mx-auto py-10 px-6">
      
      {/* Cabecera del Creador */}
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-2">
          <Link 
            href="/admin/news" 
            className="group flex items-center gap-2 text-emerald-600 text-[10px] font-black uppercase tracking-widest hover:text-emerald-700 transition-colors"
          >
            <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span> 
            Volver al listado
          </Link>
          <h1 className="text-5xl font-black text-slate-900 tracking-tight uppercase leading-none">
            Nueva Noticia
          </h1>
          <p className="text-slate-400 font-medium italic">
            Configurando una nueva entrada para el blog de <span className="text-slate-600 text-sm not-italic font-bold ml-1">CAMAR ALMERÍA</span>
          </p>
        </div>

        <div className="flex flex-col items-end gap-2">
          <div className="bg-slate-900 text-white px-5 py-2 rounded-full text-[10px] font-black border border-slate-800 shadow-xl shadow-slate-200 uppercase tracking-widest">
            Borrador Nuevo
          </div>
          <span className="text-[10px] font-mono text-slate-300">Autogenerando UUID...</span>
        </div>
      </div>

      {/* El Formulario de Creación */}
      <div className="bg-white p-6 md:p-12 rounded-[3.5rem] border border-slate-200 shadow-2xl shadow-slate-200/60 relative overflow-hidden">
        {/* Decoración visual de fondo */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -z-10 opacity-50"></div>
        
        {/* IMPORTANTE: 
            Pasamos isEditing={false} para que el botón diga "Crear"
            Pasamos la acción del servidor directamente.
        */}
        <NewsForm isEditing={false} action={createNewsAction} />
      </div>
      
      <div className="mt-8 text-center flex flex-col gap-1">
        <p className="text-slate-400 text-xs font-medium">
          Al publicar, el sistema generará automáticamente las URLs amigables.
        </p>
        <p className="text-slate-300 text-[10px] uppercase font-bold tracking-tighter">
          Conexión segura con Supabase Cloud
        </p>
      </div>
    </div>
  )
}