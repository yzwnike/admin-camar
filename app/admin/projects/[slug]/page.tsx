import { supabase } from '@/lib/supabase'
import { notFound, redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import Link from 'next/link'
import ProjectMaterialsEditor from '@/components/admin/ProjectMaterialsEditor'
import ProjectGalleryEditor from '@/components/admin/ProjectGalleryEditor'
import { DeleteProjectButton } from '@/components/admin/DeleteProjectButton'

/**
 * SERVER ACTION: ACTUALIZAR PROYECTO
 * Corregido para reconstruir URLs absolutas de BunnyCDN y limpiar datos vacíos.
 */
async function updateProjectAction(formData: FormData) {
  'use server'

  const id = formData.get('id')?.toString();
  if (!id) return;

  // 1. OBTENER DATOS ACTUALES Y CONFIGURACIÓN
  const currentRes = await supabase`SELECT * FROM proyectos WHERE id = ${id}`;
  const current = currentRes[0];
  if (!current) return;

  const pullZone = process.env.PULL_ZONE_URL; // Ej: https://lanzadera-digital.b-cdn.net/camar.es
  const fixedSlug = current.slug;

  // 2. DETECTAR CARPETA DEL PROYECTO
  let folder = "";
  const pgOld = typeof current.project_page === 'string' ? JSON.parse(current.project_page) : (current.project_page || {});
  
  if (pgOld.folder) {
    folder = pgOld.folder;
  } else if (current.main_image) {
    const match = current.main_image.match(/Proyectos\/([^/]+)/);
    if (match) folder = match[1];
  }

  // 3. PROCESAR GALERÍA (RECONSTRUCCIÓN DE URLS)
  let galleryArray = [];
  const galleryInput = formData.get('gallery_json')?.toString();
  try { 
    const parsed = galleryInput ? JSON.parse(galleryInput) : [];
    galleryArray = parsed
      .filter((img: any) => img.src && img.src.trim() !== "")
      .map((img: any) => {
        // Si la URL no es absoluta (no empieza por http), le ponemos la ruta completa
        if (!img.src.startsWith('http')) {
          return {
            ...img,
            src: `${pullZone}/Proyectos/${folder}/${img.src}`
          };
        }
        return img;
      });
  } catch (e) { galleryArray = []; }

  // 4. RECONSTRUIR EL OBJETO PROJECT_PAGE (JSONB)
  const updatedProjectPage = {
    ...pgOld,
    folder: folder, // Aseguramos persistencia de la carpeta
    gallery: galleryArray,
    materials: JSON.parse(formData.get('materials')?.toString() || "[]"),
    pageTitle: {
      es: formData.get('title_es')?.toString() || "",
      en: formData.get('title_en')?.toString() || ""
    },
    sobreElProyecto: {
      es: formData.get('sobreElProyecto_es')?.toString() || "",
      en: formData.get('sobreElProyecto_en')?.toString() || ""
    }
  };

  // 5. EJECUTAR UPDATE EN POSTGRES
  try {
    const finalName = JSON.stringify({ 
      es: formData.get('project_name_es')?.toString() || "", 
      en: formData.get('project_name_en')?.toString() || "" 
    });
    const finalLocation = JSON.stringify({ 
      es: formData.get('project_location_es')?.toString() || "", 
      en: formData.get('project_location_en')?.toString() || "" 
    });

    // Procesar Main Image (reconstruir si es solo nombre)
    let finalMain = formData.get('main_image')?.toString() || (galleryArray.length > 0 ? galleryArray[0].src : current.main_image);
    if (finalMain && !finalMain.startsWith('http')) {
      finalMain = `${pullZone}/camar.es/Proyectos/${folder}/${finalMain}`;
    }

    await supabase`
      UPDATE proyectos SET
        project_name = ${finalName},
        project_location = ${finalLocation},
        project_page = ${JSON.stringify(updatedProjectPage)},
        main_image = ${finalMain},
        type = ${formData.get('type') ? [formData.get('type')] : (current.type || [])}
      WHERE id = ${id}
    `;
  } catch (error) {
    console.error("Error crítico en Update:", error);
    return;
  }

  revalidatePath('/admin/projects');
  revalidatePath(`/admin/projects/${fixedSlug}`);
  revalidatePath(`/proyectos/${fixedSlug}`);
  
  redirect(`/admin/projects/${fixedSlug}?updated=${Date.now()}`);
}

/**
 * SERVER ACTION: ELIMINAR PROYECTO
 */
async function deleteProjectAction(formData: FormData) {
  'use server'
  const id = formData.get('id')?.toString();
  if (!id) return;
  await supabase`DELETE FROM proyectos WHERE id = ${id}`;
  revalidatePath('/admin/projects');
  redirect('/admin/projects');
}

/**
 * PÁGINA DE EDICIÓN (SERVER COMPONENT)
 */
export default async function EditProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug: rawSlug } = await params;
  const decodedSlug = decodeURIComponent(rawSlug);

  const res = await supabase`
    SELECT * FROM proyectos 
    WHERE slug = ${decodedSlug} 
    LIMIT 1
  `;
  const p = res[0];

  if (!p) return notFound();

  const parseJSON = (data: any, fallback: any) => {
    if (!data) return fallback;
    if (typeof data === 'object' && data !== null) return data;
    try { return JSON.parse(data); } catch { return fallback; }
  };

  const nameData = parseJSON(p.project_name, { es: "", en: "" });
  const locData = parseJSON(p.project_location, { es: "", en: "" });
  const pg = parseJSON(p.project_page, {});
  
  const gallery = Array.isArray(pg.gallery) ? pg.gallery : [];
  const materials = Array.isArray(pg.materials) ? pg.materials : [];
  const pageTitle = pg.pageTitle || { es: "", en: "" };
  const sobreElProyecto = pg.sobreElProyecto || { es: "", en: "" };

  // Detección de carpeta para el componente de Galería
  let detectedFolder = pg.folder || "";
  if (!detectedFolder && gallery.length > 0) {
    const firstImg = gallery[0]?.src || "";
    const folderMatch = firstImg.match(/Proyectos\/([^/]+)/);
    if (folderMatch) detectedFolder = folderMatch[1];
  }

  const bunnyConfig = {
    storageZone: process.env.BUNNY_STORAGE_ZONE,
    accessKey: process.env.BUNNY_ACCESS_KEY,
    storageUrl: process.env.BUNNY_BASE_URL,
    pullZone: process.env.PULL_ZONE_URL
  };

  const PROJECT_TYPES = ["Hoteles", "Vivienda Privada", "Proyectos Singulares", "Fuentes", "Proyectos Religiosos", "Otro"];

  return (
    <div className="mx-auto max-w-6xl pb-20">
      <form action={updateProjectAction}>
        <input type="hidden" name="id" value={p.id} />

        <div className="mb-10 flex items-end justify-between">
          <div className="space-y-2">
            <Link href="/admin/projects" className="group flex items-center gap-2 text-[10px] uppercase tracking-widest text-dynamicBlack/50 default-transition hover:text-dynamicBlack">
              <span className="text-lg default-transition group-hover:-translate-x-1">←</span> Volver al listado
            </Link>
            <h1 className="font-vollkorn text-5xl uppercase leading-none tracking-tight text-dynamicBlack">
              {nameData.es || "Sin nombre"}
            </h1>
          </div>
          <button type="submit" className="btn-primary">
            Guardar cambios
          </button>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="space-y-10 lg:col-span-8">

            {/* IDENTIDAD */}
            <section className="rounded-xl border border-secondaryBlack bg-dynamicBlack p-10 text-baliPearl">
              <h3 className="mb-8 flex items-center gap-2 font-vollkorn text-sm uppercase tracking-widest text-baliPearl/60">
                <span className="h-2 w-2 rounded-full bg-bubonicBrown"></span> Identidad principal
              </h3>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="space-y-3">
                  <label className="block text-[10px] uppercase tracking-wide text-baliPearl/50">Nombre comercial</label>
                  <input name="project_name_es" type="text" defaultValue={nameData.es} className="w-full rounded-md border border-secondaryBlack bg-secondaryBlack/50 p-3 text-baliPearl outline-none default-transition focus:border-bubonicBrown" />
                  <input name="project_name_en" type="text" defaultValue={nameData.en} className="w-full rounded-md border border-secondaryBlack bg-secondaryBlack/50 p-3 text-baliPearl outline-none default-transition focus:border-bubonicBrown" />
                </div>
                <div className="space-y-3">
                  <label className="block text-[10px] uppercase tracking-wide text-baliPearl/50">Ubicación</label>
                  <input name="project_location_es" type="text" defaultValue={locData.es} className="w-full rounded-md border border-secondaryBlack bg-secondaryBlack/50 p-3 text-baliPearl outline-none default-transition focus:border-bubonicBrown" />
                  <input name="project_location_en" type="text" defaultValue={locData.en} className="w-full rounded-md border border-secondaryBlack bg-secondaryBlack/50 p-3 text-baliPearl outline-none default-transition focus:border-bubonicBrown" />
                </div>
              </div>
            </section>

            {/* GALERÍA DINÁMICA */}
            <ProjectGalleryEditor
              initialGallery={gallery}
              initialMain={p.main_image}
              initialBg={pg.bg_image || ""}
              bunnyConfig={bunnyConfig}
              projectName={nameData.es}
              existingFolder={detectedFolder}
            />

            {/* TEXTOS Y SEO */}
            <section className="card space-y-6">
              <h3 className="flex items-center gap-2 font-vollkorn text-sm uppercase tracking-widest text-dynamicBlack/60">
                <span className="h-2 w-2 rounded-full bg-bubonicBrown"></span> Títulos y descripción
              </h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-3">
                  <label className="label">Título de página (H1)</label>
                  <input name="title_es" type="text" defaultValue={pageTitle.es} className="input" />
                  <input name="title_en" type="text" defaultValue={pageTitle.en} className="input" />
                </div>
                <div className="space-y-3">
                  <label className="label">Sobre el proyecto</label>
                  <textarea name="sobreElProyecto_es" rows={4} defaultValue={sobreElProyecto.es} className="input resize-none" />
                  <textarea name="sobreElProyecto_en" rows={4} defaultValue={sobreElProyecto.en} className="input resize-none" />
                </div>
              </div>
            </section>
          </div>

          {/* LATERAL */}
          <div className="space-y-8 lg:col-span-4">
            <ProjectMaterialsEditor initialMaterials={materials} />

            <section className="card">
              <h3 className="mb-6 text-xs uppercase tracking-widest text-dynamicBlack/50">
                Ajustes técnicos
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="label">Tipo de proyecto</label>
                  <select
                    name="type"
                    defaultValue={Array.isArray(p.type) ? p.type[0] : (p.type || "")}
                    className="input cursor-pointer"
                  >
                    {PROJECT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div className="space-y-1 break-all border-t border-dynamicBlack/10 pt-4 font-mono text-[9px] text-dynamicBlack/40">
                  <p>DATABASE ID: {p.id}</p>
                  <p>SLUG: {p.slug}</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </form>

      {/* ZONA DE ELIMINACIÓN */}
      <div className="mt-16 flex flex-col items-center border-t border-dynamicBlack/10 pt-10">
        <DeleteProjectButton
          id={p.id}
          projectName={nameData.es || "este proyecto"}
          deleteAction={deleteProjectAction}
        />
      </div>
    </div>
  )
}