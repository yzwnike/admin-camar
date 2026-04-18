import { supabase } from '@/lib/supabase'
import { revalidatePath } from 'next/cache'
import Link from 'next/link'
import { DeleteProjectButton } from '@/components/admin/DeleteProjectButton'

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
    console.error("❌ Error eliminando proyecto en Neon:", error);
    return;
  }

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
    console.error("❌ Error en Neon Proyectos:", err);
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

  return (
    <div className="space-y-8 p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Proyectos</h1>
          <p className="text-slate-500 font-medium">Gestiona el portafolio de obras ({proyectos.length})</p>
        </div>
        <Link href="/admin/projects/new" className="bg-emerald-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-emerald-700 transition shadow-lg">
          + Nuevo Proyecto
        </Link>
      </div>

      {/* LISTADO */}
      {proyectos.length === 0 ? (
        <div className="bg-white border-2 border-dashed border-slate-200 rounded-[2.5rem] py-20 text-center">
          <p className="text-slate-400 font-medium italic">No se han encontrado proyectos en la base de datos.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.map((p: any) => {
            
            // Parseo de campos que pueden venir de Supabase (JSON) o Neon (TEXT)
            const titleObj = safeParse(p.project_name || p.title);
            const locationObj = safeParse(p.project_location);
            const pageObj = safeParse(p.project_page);

            const titulo = titleObj?.es || (typeof titleObj === 'string' ? titleObj : 'Sin título');
            const ubicacion = locationObj?.es || (typeof locationObj === 'string' ? locationObj : 'Ubicación no definida');

            // Lógica de imagen (Priorizamos la nueva columna si existiera, luego los objetos antiguos)
            const portada = p.image_url || pageObj?.main_image || p.main_image || p.mainImage || "/placeholder-project.jpg";
            const filtro = pageObj?.filtro || 'Proyecto';

            return (
              <div key={p.id} className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all group relative">
                
                {/* BOTÓN ELIMINAR */}
                <div className="absolute top-4 right-4 z-10">
                  <DeleteProjectButton 
                    id={p.id} 
                    projectName={titulo} 
                    deleteAction={deleteProjectAction} 
                  />
                </div>

                {/* IMAGEN DE PORTADA */}
                <div className="aspect-video bg-slate-100 relative overflow-hidden">
                  <img 
                    src={portada} 
                    alt={titulo} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black uppercase shadow-sm border border-white/20">
                    {filtro}
                  </div>
                </div>

                {/* INFO Y BOTÓN EDITAR */}
                <div className="p-6">
                  <h3 className="font-bold text-lg text-slate-800 line-clamp-1 uppercase tracking-tight">
                    {titulo}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 flex items-center gap-1">
                    📍 {ubicacion}
                  </p>
                  <div className="flex gap-2">
                    <Link 
                      href={`/admin/projects/${p.slug || p.id}`} 
                      className="flex-1 text-center bg-slate-900 text-white py-4 rounded-xl text-[10px] font-black hover:bg-black transition-all tracking-widest"
                    >
                      EDITAR PROYECTO
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  )
}