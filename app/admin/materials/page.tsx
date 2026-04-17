// /app/admin/materials/page.tsx
import { supabase } from '@/lib/supabase'
import { revalidatePath } from 'next/cache'
import Link from 'next/link'
import MaterialImage from '@/components/admin/MaterialImage'
import { DeleteProjectButton } from '@/components/admin/DeleteProjectButton'

/**
 * ACCIÓN PARA ELIMINAR MATERIAL (Server Action)
 */
async function deleteMaterialAction(formData: FormData) {
  'use server'
  
  const id = formData.get('id') as string;
  if (!id) return;

  try {
    // 1. OBTENER LA URL DE LA IMAGEN ANTES DE BORRAR EL REGISTRO
    // Esto es opcional, pero recomendable para borrar el archivo de Bunny
    const [material] = await supabase`
      SELECT image_url FROM materiales WHERE id = ${id}
    `;

    if (material?.image_url) {
      // Extraemos el nombre del archivo de la URL
      const fileName = material.image_url.split('/').pop();
      const storageUrl = `${process.env.BUNNY_BASE_URL}/${process.env.BUNNY_STORAGE_ZONE}/camar.es/Materiales/${fileName}`;

      // 2. BORRAR DE BUNNY.NET
      await fetch(storageUrl, {
        method: 'DELETE',
        headers: {
          'AccessKey': process.env.BUNNY_ACCESS_KEY!,
        },
      });
      console.log("✅ Imagen borrada de Bunny");
    }

    // 3. BORRAR DE NEON (SQL PURO)
    await supabase`
      DELETE FROM materiales 
      WHERE id = ${id}
    `;

    console.log("✅ Registro borrado de la base de datos");

  } catch (error: any) {
    console.error("❌ Error eliminando material:", error.message);
    return;
  }

  // Revalidamos la ruta para que desaparezca de la lista
  revalidatePath('/admin/materials');
}

export default async function MaterialsListPage() {
  // 1. Obtenemos los materiales ordenados por nombre usando SQL puro (Neon)
  let materiales;
  try {
    materiales = await supabase`
      SELECT * FROM materiales 
      ORDER BY material_name ASC
    `;
  } catch (err) {
    return (
      <div className="p-10 text-red-500 font-mono bg-red-50 rounded-3xl border border-red-100 m-6">
        <h2 className="font-black uppercase mb-2">Error de Conexión (Neon)</h2>
        <p className="text-sm">No se pudo conectar a la base de datos o la tabla no existe.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 p-6">
      {/* HEADER DE SECCIÓN */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tighter leading-none">
            Materiales
          </h1>
          <p className="text-slate-500 font-medium mt-2">
            Catálogo de piedra natural ({materiales?.length || 0})
          </p>
        </div>
        <Link 
          href="/admin/materials/new" 
          className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-700 transition shadow-xl hover:scale-105 active:scale-95 transition-all uppercase text-[10px] tracking-widest"
        >
          + Añadir Material
        </Link>
      </div>

      {/* GRID DE MATERIALES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {materiales?.map((m) => {
          // --- FUNCIÓN DE AYUDA PARA EVITAR ERRORES ---
          const safeParse = (data: any) => {
            if (!data || typeof data !== 'string') return data;
            try {
              return JSON.parse(data);
            } catch (e) {
              return data; // Si no es JSON, devuelve el texto tal cual
            }
          };

          // Aplicamos el parseo seguro
          const materialType = safeParse(m.material_type);
          const location = safeParse(m.location);
          const description = safeParse(m.description);

          const CDN_BASE = "https://lanzadera-digital.b-cdn.net/camar.es/Materiales";
          
          let baseSlug = m.slug?.replace(/^\//, '').replace(/-hq$/, '');
          
          if (!baseSlug && m.material_name) {
            baseSlug = m.material_name.toLowerCase().trim().replace(/\s+/g, '-');
          }

          // Priorizamos image_url (la de Bunny) sobre las antiguas
          const materialThumb = m.image_url || m.main_image || m.image || `${CDN_BASE}/${baseSlug}-hq.webp`;

          const nombre = m.material_name || "Sin nombre";
          
          // Si es un objeto usamos .es, si es un string lo usamos directo
          const tipo = materialType?.es || (typeof materialType === 'string' ? materialType : "Piedra Natural");
          const pais = location?.es || (typeof location === 'string' ? location : "Origen no especificado");
          const desc = description?.es || (typeof description === 'string' ? description : "Sin descripción disponible.");

          return (
            <div key={m.id} className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all group flex flex-col relative">
              
              {/* BOTÓN ELIMINAR FLOTANTE */}
              <div className="absolute top-4 right-4 z-20">
                <DeleteProjectButton 
                  id={m.id} 
                  projectName={nombre} 
                  deleteAction={deleteMaterialAction} 
                />
              </div>

              {/* CONTENEDOR DE IMAGEN */}
              <div className="aspect-square bg-slate-100 relative overflow-hidden">
                <div className="w-full h-full group-hover:scale-110 transition-transform duration-700">
                  <MaterialImage src={materialThumb} alt={nombre} />
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase shadow-sm border border-white/50 z-10">
                  {tipo}
                </div>
              </div>

              {/* INFORMACIÓN Y ACCIONES */}
              <div className="p-8 flex flex-col flex-1">
                <div className="mb-4">
                  <h3 className="font-black text-xl text-slate-900 uppercase tracking-tighter leading-tight line-clamp-1">
                    {nombre}
                  </h3>
                  <p className="text-emerald-600 text-[10px] font-bold uppercase tracking-widest mt-1">
                    🌍 {pais}
                  </p>
                </div>

                <p className="text-slate-400 text-xs line-clamp-2 font-medium leading-relaxed mb-6">
                  {desc}
                </p>
                
                <div className="mt-auto space-y-4">
                  {/* TAGS DE USO */}
                  <div className="flex flex-wrap gap-2">
                    {Array.isArray(m.use) && m.use.length > 0 ? (
                      m.use.slice(0, 3).map((u: string) => (
                        <span key={u} className="bg-slate-50 text-slate-400 border border-slate-100 px-3 py-1 rounded-xl text-[9px] font-black uppercase">
                          {u}
                        </span>
                      ))
                    ) : (
                      <span className="text-[9px] font-black text-slate-300 uppercase italic">Multiuso</span>
                    )}
                  </div>

                  {/* BOTÓN EDITAR */}
                  <Link 
                    href={`/admin/materials/${m.slug?.replace(/^\//, '') || m.id}`} 
                    className="block w-full text-center bg-slate-900 text-white py-4 rounded-2xl text-[10px] font-black hover:bg-black transition-all uppercase tracking-[0.2em] shadow-lg"
                  >
                    Editar Ficha
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}