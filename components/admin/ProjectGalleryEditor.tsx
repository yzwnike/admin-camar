'use client'

import { useState, useEffect } from 'react'
import ImageUploader from '../ImageUploader'
import { deleteFileFromBunny } from '@/lib/bunny-actions'

interface Props {
  initialGallery: any[]
  initialMain: string
  initialBg: string
  bunnyConfig: any
  projectName?: string
  existingFolder?: string
}

export default function ProjectGalleryEditor({
  initialGallery,
  initialMain,
  initialBg,
  bunnyConfig,
  projectName = "",
  existingFolder
}: Props) {

  const [gallery, setGallery] = useState(initialGallery)
  const [mainImage, setMainImage] = useState(initialMain)

  // 1. GESTIÓN DE CARPETAS
  const [folderName, setFolderName] = useState(() => {
    if (existingFolder) return existingFolder;
    return "proyecto-sin-nombre";
  });

  const slugify = (text: string) =>
    text.toLowerCase()
      .trim()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');

  useEffect(() => {
    if (!existingFolder && projectName && projectName.trim() !== "") {
      setFolderName(slugify(projectName));
    }
  }, [projectName, existingFolder]);

  // 2. CONFIGURACIÓN DE RUTAS CDN
  const CDN_BASE = bunnyConfig?.pullZone?.replace(/\/$/, '') || "https://lanzadera-digital.b-cdn.net";
  const PULL_ZONE = CDN_BASE.includes('camar.es') ? CDN_BASE : `${CDN_BASE}/camar.es`;

  const getImageUrl = (src: string) => {
    if (!src) return '';
    // Si ya es una URL completa (lo que acabamos de arreglar), devuélvela tal cual
    if (src.startsWith('http')) return src;

    // Si por algún motivo solo tienes el nombre del archivo (fallback)
    return `${PULL_ZONE}/Proyectos/${folderName}/${src}`;
  };

  // 3. LÓGICA DE BORRADO (CDN + BBDD)
  const removeImage = async (index: number) => {
    const imageToDelete = gallery[index];
    const src = typeof imageToDelete === 'string' ? imageToDelete : imageToDelete.src;
    const fileName = src.split('/').pop();

    if (!window.confirm("¡Cuidado! Esto borrará la imagen del servidor y de la base de datos ahora mismo.")) return;

    try {
      // 1. Borrar de Bunny
      const res = await deleteFileFromBunny('Proyectos', fileName, folderName);

      // Si es 200 (ok) o 404 (ya no estaba), procedemos a limpiar la BBDD
      if (res.success || res.status === 404) {
        const newGallery = gallery.filter((_, i) => i !== index);

        // 2. Actualizar estado local
        setGallery(newGallery);

        console.log("Sincronizado: CDN y BBDD actualizados.");
      }
    } catch (error) {
      alert("Error crítico de sincronización");
    }
  };

  return (
    <section className="space-y-8 rounded-xl border border-dynamicBlack/10 bg-baliPearl p-8">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 font-vollkorn text-sm uppercase tracking-widest text-dynamicBlack/60">
          <span className="h-2 w-2 rounded-full bg-bubonicBrown"></span> Multimedia del proyecto
        </h3>
        <div className="flex flex-col items-end">
          <p className="mb-1 text-[9px] uppercase tracking-wide text-dynamicBlack/40">
            {existingFolder ? "Carpeta heredada" : "Carpeta nueva"}
          </p>
          <div className="rounded-md border border-dynamicBlack/10 bg-white px-3 py-1 font-mono text-[10px] text-bubonicBrown">
            /camar.es/Proyectos/{folderName}/
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {/* PORTADA */}
        <div className="space-y-4">
          <label className="label">Portada</label>
          <div className="group relative aspect-4/5 overflow-hidden rounded-xl border border-dynamicBlack/10 bg-white">
            {mainImage ? (
              <img
                src={getImageUrl(mainImage)}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt="Portada"
                key={`${folderName}-${mainImage}`}
              />
            ) : (
              <div className="flex h-full items-center justify-center p-6 text-center text-[10px] uppercase italic text-dynamicBlack/30">Esperando imagen...</div>
            )}
          </div>
          <ImageUploader
              // 1. Enviamos la ruta limpia al servidor para evitar carpetas duplicadas físicamente
              folder={`Proyectos/${folderName}` as any}
              label="+"
              onUploadSuccess={(fileName) => {
                  // CONSTRUIMOS LA URL COMPLETA AQUÍ
                  const urlParaBBDD = `${CDN_BASE}/camar.es/Proyectos/${folderName}/${fileName}`;
                  setMainImage(urlParaBBDD); // <--- ACTUALIZA LA PORTADA

                  // Opcional: También añadirla a la galería si quieres
                  setGallery(prev => [...prev, { type: 'image', src: urlParaBBDD }]);
              }}
            />
          <input type="hidden" name="main_image" value={mainImage} />
        </div>

        {/* GALERÍA */}
        <div className="space-y-4 md:col-span-3">
          <label className="label">Galería ({gallery.length})</label>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {gallery.map((img, idx) => {
              const src = typeof img === 'string' ? img : img.src;
              return (
                <div key={idx} className="group relative aspect-square overflow-hidden rounded-md border border-dynamicBlack/10 bg-white">
                  <img src={getImageUrl(src)} className="h-full w-full object-cover" alt={`Galería ${idx}`} />
                  <button
                    type="button"
                    onClick={() => removeImage(idx)}
                    className="absolute inset-0 flex items-center justify-center bg-red-600/90 text-[10px] font-bold uppercase tracking-wide text-baliPearl opacity-0 backdrop-blur-sm default-transition group-hover:opacity-100"
                  >
                    Eliminar
                  </button>
                </div>
              );
            })}

            <div className="flex aspect-square items-center justify-center rounded-md">
              <ImageUploader
                folder={`Proyectos/${folderName}` as any}
                label="+"
                onUploadSuccess={(fileName) => {
                    // CONSTRUIMOS LA URL COMPLETA AQUÍ TAMBIÉN
                    const urlParaBBDD = `${CDN_BASE}/camar.es/Proyectos/${folderName}/${fileName}`;
                    setGallery(prev => [...prev, { type: 'image', src: urlParaBBDD }]);
                }}
              />
            </div>
          </div>
          <input type="hidden" name="gallery_json" value={JSON.stringify(gallery)} />
        </div>
      </div>
    </section>
  )
}
