// /app/admin/projects/[slug]/page.tsx
import { supabase } from '@/lib/supabase'
import { notFound, redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import Link from 'next/link'
import ProjectMaterialsEditor from '@/components/admin/ProjectMaterialsEditor'
import ProjectGalleryEditor from '@/components/admin/ProjectGalleryEditor'

/**
 * SERVER ACTION: ACTUALIZAR PROYECTO
 */
async function updateProjectAction(formData: FormData) {
  'use server'

  // Convertimos a string explícitamente para evitar errores de tipo con postgres.js
  const id = formData.get('id')?.toString();
  const slug = formData.get('slug')?.toString();

  if (!id) {
    console.error("ID no proporcionado");
    return;
  }

  // 1. Recuperamos el estado actual usando postgres.js
  // Al ser 'id' un string, el compilador ya no lanza el error de 'never'
  const currentRes = await supabase`SELECT * FROM proyectos WHERE id = ${id}`;
  const current = currentRes[0];
  const oldPageData = current?.project_page || {};

  // 2. Procesamos la galería enviada por el componente de cliente
  let galleryArray = oldPageData.gallery || [];
  try {
    const galleryInput = formData.get('gallery_json')?.toString();
    if (galleryInput) {
      galleryArray = JSON.parse(galleryInput);
    }
  } catch (e) { 
    console.error("Error procesando JSON de galería:", e); 
  }

  // 3. Procesamos el campo 'type' (Postgres espera un array)
  const typeRaw = formData.get('type')?.toString();
  const typeArray = typeRaw 
    ? typeRaw.split(',').map(t => t.trim()).filter(Boolean) 
    : [];

  // 4. Construimos el nuevo objeto project_page (JSON)
  const updatedProjectPage = {
    ...oldPageData,
    gallery: galleryArray,
    pageTitle: {
      es: formData.get('title_es')?.toString() || "",
      en: formData.get('title_en')?.toString() || ""
    },
    sobreElProyecto: {
      es: formData.get('sobreElProyecto_es')?.toString() || "",
      en: formData.get('sobreElProyecto_en')?.toString() || ""
    },
    materials: formData.get('materials') 
      ? JSON.parse(formData.get('materials') as string) 
      : (oldPageData.materials || [])
  };

  // 5. Update a la tabla usando sintaxis SQL pura
  try {
    // Serializamos los objetos a JSON string para las columnas JSONB
    await supabase`
      UPDATE proyectos SET
        project_name = ${JSON.stringify({
          es: formData.get('project_name_es')?.toString() || "",
          en: formData.get('project_name_en')?.toString() || ""
        })},
        title = ${JSON.stringify({
          es: formData.get('title_es')?.toString() || "",
          en: formData.get('title_en')?.toString() || ""
        })},
        project_location = ${JSON.stringify({
          es: formData.get('project_location_es')?.toString() || "",
          en: formData.get('project_location_en')?.toString() || ""
        })},
        type = ${typeArray},
        main_image = ${galleryArray.length > 0 ? galleryArray[0].src : (current?.main_image || null)},
        project_page = ${JSON.stringify(updatedProjectPage)}
      WHERE id = ${id}
    `;
  } catch (error: any) {
    console.error("Error actualizando Supabase:", error.message);
    return;
  }

  // 6. Revalidación de caché
  revalidatePath('/admin/projects');
  if (slug) {
    revalidatePath(`/admin/projects/${slug}`);
    revalidatePath(`/proyectos/${slug}`); 
  }
  
  // 7. Redirección
  redirect('/admin/projects?success=' + Date.now());
}

/**
 * SERVER ACTION: ELIMINAR PROYECTO
 */
async function deleteProjectAction(formData: FormData) {
  'use server'
  const id = formData.get('id');
  
  try {
    await supabase`DELETE FROM proyectos WHERE id = ${id}`;
  } catch (error: any) {
    console.error("Error eliminando:", error.message);
    return;
  }

  revalidatePath('/admin/projects');
  redirect('/admin/projects?deleted=' + Date.now());
}

/**
 * COMPONENTE DE PÁGINA (SERVER COMPONENT)
 */
export default async function EditProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Buscamos el proyecto usando postgres.js
  const res = await supabase`SELECT * FROM proyectos WHERE slug = ${slug} LIMIT 1`;
  const p = res[0];

  if (!p) return notFound();

  const pg = p.project_page || {};
  const gallery = pg.gallery || [];

  return (
    <div className="max-w-6xl mx-auto p-6 pb-20">
      <form action={updateProjectAction}>
        <input type="hidden" name="id" value={p.id} />
        <input type="hidden" name="slug" value={p.slug} />
        
        {/* HEADER */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <Link href="/admin/projects" className="text-slate-400 text-xs font-black uppercase mb-2 block hover:text-slate-900 transition">
              ← Volver a Proyectos
            </Link>
            <h1 className="text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none">
              {p.project_name?.es || "Editar Proyecto"}
            </h1>
          </div>
          <div className="flex gap-4">
            <button type="submit" className="bg-emerald-500 text-white px-10 py-5 rounded-2xl font-black hover:bg-emerald-600 transition shadow-xl uppercase text-[10px] tracking-widest active:scale-95">
              Guardar Cambios Totales
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* COLUMNA PRINCIPAL */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* IDENTIFICACIÓN */}
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

            {/* GALERÍA VISUAL */}
            <ProjectGalleryEditor initialGallery={gallery} />

            {/* TITULOS Y DESCRIPCIÓN */}
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
            <ProjectMaterialsEditor initialMaterials={pg.materials || []} />

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

            {/* BOTÓN ELIMINAR PROYECTO */}
            <form action={deleteProjectAction} className="mt-10" onSubmit={(e) => { if(!confirm("¿Seguro que quieres eliminar este proyecto?")) e.preventDefault(); }}>
              <input type="hidden" name="id" value={p.id} />
              <button className="w-full p-4 rounded-2xl border-2 border-red-100 text-red-400 text-[10px] font-black uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all">
                Eliminar Proyecto Permanentemente
              </button>
            </form>
          </div>
        </div>
      </form>
    </div>
  )
}