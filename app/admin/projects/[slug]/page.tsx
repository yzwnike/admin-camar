// /app/admin/projects/[slug]/page.tsx
import { supabase } from '@/lib/supabase'
import { notFound, redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import Link from 'next/link'
import ProjectMaterialsEditor from '@/components/admin/ProjectMaterialsEditor'
// IMPORTAMOS EL NUEVO COMPONENTE DE CLIENTE
import ProjectGalleryEditor from '@/components/admin/ProjectGalleryEditor'

async function updateProjectAction(formData: FormData) {
  'use server'

  const id = formData.get('id');
  const slug = formData.get('slug');

  // 1. Recuperamos el estado actual para no perder datos del JSON no editados
  const { data: current } = await supabase
    .from('proyectos')
    .select('*')
    .eq('id', id)
    .single();

  const oldPageData = current?.project_page || {};

  // 2. Procesamos la galería enviada por el componente de cliente
  let galleryArray = oldPageData.gallery || [];
  try {
    const galleryInput = formData.get('gallery_json') as string;
    if (galleryInput) {
      galleryArray = JSON.parse(galleryInput);
    }
  } catch (e) { 
    console.error("Error procesando JSON de galería:", e); 
  }

  // 3. Procesamos el campo 'type' para evitar el error de "malformed array literal"
  // Convertimos el string "valor1, valor2" en un array real de JS ["valor1", "valor2"]
  const typeRaw = formData.get('type') as string;
  const typeArray = typeRaw 
    ? typeRaw.split(',').map(t => t.trim()).filter(Boolean) 
    : [];

  // 4. Construimos el nuevo objeto project_page (el JSON)
  const updatedProjectPage = {
    ...oldPageData,
    gallery: galleryArray,
    pageTitle: {
      es: formData.get('title_es'),
      en: formData.get('title_en')
    },
    sobreElProyecto: {
      es: formData.get('sobreElProyecto_es'),
      en: formData.get('sobreElProyecto_en')
    },
    // Manejo de materiales desde el componente editor
    materials: formData.get('materials') 
      ? JSON.parse(formData.get('materials') as string) 
      : (oldPageData.materials || [])
  };

  async function deleteProjectAction(formData: FormData) {
  'use server'
  const id = formData.get('id');
  
  const { error } = await supabase
    .from('proyectos')
    .delete()
    .eq('id', id);

  if (error) {
    console.error("Error eliminando:", error.message);
    return;
  }

  revalidatePath('/admin/projects');
  redirect('/admin/projects?deleted=' + Date.now());
}

  // 5. Update a la tabla con todas las columnas corregidas
  const { error } = await supabase
    .from('proyectos')
    .update({
      project_name: {
        es: formData.get('project_name_es'),
        en: formData.get('project_name_en')
      },
      title: {
        es: formData.get('title_es'),
        en: formData.get('title_en')
      },
      project_location: {
        es: formData.get('project_location_es'),
        en: formData.get('project_location_en')
      },
      // Enviamos el array procesado
      type: typeArray, 
      // Sincronizamos la primera foto de la galería como imagen principal
      main_image: galleryArray.length > 0 ? galleryArray[0].src : (current?.main_image || null), 
      project_page: updatedProjectPage
    })
    .eq('id', id);

  if (error) {
    console.error("Error actualizando Supabase:", error.message);
    // Podrías retornar el error aquí para mostrarlo en el cliente si fuera necesario
    return;
  }

  // 6. Revalidación de rutas para limpiar la caché de Next.js
  revalidatePath('/admin/projects');
  revalidatePath(`/admin/projects/${slug}`); // Revalida la propia página de edición
  revalidatePath(`/proyectos/${slug}`);      // Revalida la vista pública del proyecto
  
  // 7. Redirección final
  redirect('/admin/projects?success=' + Date.now());
}

export default async function EditProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const { data: p, error } = await supabase
    .from('proyectos')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !p) return notFound();

  const pg = p.project_page || {};
  const gallery = pg.gallery || [];

  return (
    <form action={updateProjectAction} className="max-w-6xl mx-auto p-6 pb-20">
      <input type="hidden" name="id" value={p.id} />
      <input type="hidden" name="slug" value={p.slug} />
      
      {/* HEADER */}
      <div className="flex justify-between items-end mb-10">
        <div>
          <Link href="/admin/projects" className="text-slate-400 text-xs font-black uppercase mb-2 block hover:text-slate-900 transition">
            ← Volver a Proyectos
          </Link>
          <h1 className="text-5xl font-black text-slate-900 uppercase tracking-tighterLEADING-NONE">
            {p.project_name?.es || "Editar Proyecto"}
          </h1>
        </div>
        <button type="submit" className="bg-emerald-500 text-white px-10 py-5 rounded-2xl font-black hover:bg-emerald-600 transition shadow-xl uppercase text-[10px] tracking-widest active:scale-95">
          Guardar Cambios Totales
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* COLUMNA PRINCIPAL */}
        <div className="lg:col-span-8 space-y-10">
          
          {/* IDENTIFICACIÓN (Columnas project_name y project_location) */}
          <section className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-xl">
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span> Identidad del Proyecto (Catálogo)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase text-slate-500 ml-2">Nombre del Proyecto</label>
                <input name="project_name_es" placeholder="ES" type="text" defaultValue={p.project_name?.es} className="w-full p-4 bg-slate-800 rounded-2xl border-none font-bold text-white mb-2 focus:ring-2 focus:ring-emerald-500" />
                <input name="project_name_en" placeholder="EN" type="text" defaultValue={p.project_name?.en} className="w-full p-4 bg-slate-800 rounded-2xl border-none font-bold text-emerald-400 focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase text-slate-500 ml-2">Ubicación</label>
                <input name="project_location_es" placeholder="ES" type="text" defaultValue={p.project_location?.es} className="w-full p-4 bg-slate-800 rounded-2xl border-none font-bold text-white mb-2 focus:ring-2 focus:ring-emerald-500" />
                <input name="project_location_en" placeholder="EN" type="text" defaultValue={p.project_location?.en} className="w-full p-4 bg-slate-800 rounded-2xl border-none font-bold text-emerald-400 focus:ring-2 focus:ring-emerald-500" />
              </div>
            </div>
          </section>

          {/* GALERÍA VISUAL (Aquí integramos el componente de cliente) */}
          <ProjectGalleryEditor initialGallery={gallery} />

          {/* TITULOS Y DESCRIPCIÓN (Columnas title y project_page.sobreElProyecto) */}
          <section className="bg-white rounded-[3rem] p-10 border border-slate-200 shadow-sm space-y-8">
            <h3 className="text-xs font-black uppercase text-slate-400 tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span> Títulos y Descripción Larga (Interior)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Título de Página (title)</label>
                <input name="title_es" placeholder="ES" type="text" defaultValue={p.title?.es} className="w-full p-4 bg-slate-50 rounded-2xl border-none font-bold mb-2 focus:ring-2 focus:ring-slate-900" />
                <input name="title_en" placeholder="EN" type="text" defaultValue={p.title?.en} className="w-full p-4 bg-indigo-50/50 rounded-2xl border-none font-bold text-indigo-900 focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Sobre el proyecto (Largo)</label>
                <textarea name="sobreElProyecto_es" placeholder="ES" rows={4} defaultValue={pg.sobreElProyecto?.es} className="w-full p-4 bg-slate-50 rounded-2xl border-none font-medium mb-2 text-sm focus:ring-2 focus:ring-slate-900" />
                <textarea name="sobreElProyecto_en" placeholder="EN" rows={4} defaultValue={pg.sobreElProyecto?.en} className="w-full p-4 bg-indigo-50/50 rounded-2xl border-none font-medium text-sm text-indigo-900 focus:ring-2 focus:ring-indigo-500" />
              </div>
            </div>
          </section>
        </div>

        {/* COLUMNA LATERAL */}
        <div className="lg:col-span-4 space-y-8">
          {/* EDITOR DE MATERIALES (JSON) */}
          <ProjectMaterialsEditor initialMaterials={pg.materials || []} />

          {/* TIPO DE PROYECTO (Columna type) */}
          <section className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-200">
            <h3 className="text-[10px] font-black uppercase text-slate-400 mb-6 tracking-widest">Ajustes Técnicos</h3>
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-[9px] font-black text-slate-500 uppercase ml-1">Tipo de Proyecto (type)</label>
                <input name="type" type="text" defaultValue={p.type} className="w-full bg-white border-none rounded-xl p-3 font-bold text-sm shadow-sm focus:ring-2 focus:ring-slate-900" placeholder="Ej: Vivienda" />
              </div>
              <div className="pt-4 border-t border-slate-200 text-slate-400 space-y-1 font-mono text-[10px]">
                <p>ID: {p.id}</p>
                <p>Slug: {p.slug}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </form>
  )
}