import { supabase } from '@/lib/supabase'
import { revalidatePath } from 'next/cache'
import Link from 'next/link'
import ProjectsList, { type ProjectItem } from '@/components/admin/ProjectsList'
import { triggerDeploy } from '@/lib/deploy-hook'

/**
 * ACCIÓN PARA ELIMINAR (Adaptada a Neon/SQL)
 */
async function deleteProjectAction(formData: FormData) {
  'use server'
  // Convertimos a string para que postgres.js no falle
  const id = formData.get('id')?.toString();
  
  if (!id) return;

  try {
    // Usamos SQL puro para eliminar con tagged template
    await supabase`
      DELETE FROM proyectos 
      WHERE id = ${id}
    `;
  } catch (error) {
    console.error(" Error eliminando proyecto en Neon:", error);
    return;
  }

  await triggerDeploy();
  revalidatePath('/admin/projects');
}

export default async function ProjectsListPage() {
  // 1. Obtenemos los proyectos ordenados por ID (Neon/SQL)
  // Inicializamos con tipo para evitar error de "implicitly has any type"
  let proyectos: any[] = [];
  
  try {
    const data = await supabase`
      SELECT * FROM proyectos 
      ORDER BY id DESC
    `;
    proyectos = data;
  } catch (err) {
    console.error(" Error en Neon Proyectos:", err);
    proyectos = [];
  }

  // Función de ayuda interna para parsear campos JSON/Text
  const safeParse = (data: any) => {
    if (!data) return null;
    if (typeof data !== 'string') return data;
    try {
      return JSON.parse(data);
    } catch (e) {
      return data; // Devuelve el texto tal cual si no es JSON
    }
  };

  // Construimos el modelo de vista (serializable) para el listado con buscador
  const items: ProjectItem[] = proyectos.map((p: any) => {
    const titleObj = safeParse(p.project_name || p.title);
    const locationObj = safeParse(p.project_location);
    const pageObj = safeParse(p.project_page);

    const titulo = titleObj?.es || (typeof titleObj === 'string' ? titleObj : 'Sin título');
    const ubicacion = locationObj?.es || (typeof locationObj === 'string' ? locationObj : 'Ubicación no definida');
    const portada = p.image_url || pageObj?.main_image || p.main_image || p.mainImage || "/placeholder-project.jpg";
    const filtro = pageObj?.filtro || 'Proyecto';

    const searchText = [titulo, ubicacion, filtro]
      .join(' ')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();

    return {
      id: p.id,
      titulo,
      ubicacion,
      portada,
      filtro,
      editHref: `/admin/projects/${p.slug || p.id}`,
      searchText,
    };
  });

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-vollkorn text-4xl uppercase tracking-tight text-dynamicBlack">Proyectos</h1>
          <p className="mt-2 text-dynamicBlack/60">Gestiona el portafolio de obras</p>
        </div>
        <Link href="/admin/projects/new" className="btn-primary">
          + Nuevo proyecto
        </Link>
      </div>

      <ProjectsList items={items} deleteAction={deleteProjectAction} />
    </div>
  )
}