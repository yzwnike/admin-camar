// /components/admin/ProjectGalleryEditor.tsx
'use client'

import { useState, useEffect } from 'react'

interface GalleryImage {
  src: string;
  alt?: string;
}

interface Props {
  initialGallery: GalleryImage[];
}

export default function ProjectGalleryEditor({ initialGallery }: Props) {
  // Estado local para manejar las imágenes
  const [gallery, setGallery] = useState<GalleryImage[]>(initialGallery);
  const [newImageUrl, setNewImageUrl] = useState('');

  // Función para añadir una imagen
  const addImage = () => {
    if (newImageUrl.trim()) {
      setGallery([...gallery, { src: newImageUrl.trim(), alt: '' }]);
      setNewImageUrl(''); // Limpiar input
    }
  };

  // Función para eliminar una imagen
  const removeImage = (indexToRemove: number) => {
    setGallery(gallery.filter((_, index) => index !== indexToRemove));
  };

  // Función para mover imagen (reordenar)
  const moveImage = (currentIndex: number, direction: 'up' | 'down') => {
    const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
    
    // Verificar límites
    if (newIndex < 0 || newIndex >= gallery.length) return;

    const newGallery = [...gallery];
    // Intercambiar elementos
    [newGallery[currentIndex], newGallery[newIndex]] = [newGallery[newIndex], newGallery[currentIndex]];
    
    setGallery(newGallery);
  };

  return (
    <section className="bg-white rounded-[3rem] p-10 border border-slate-200 shadow-sm">
      {/* Input oculto que enviará el JSON final al Server Action */}
      <input type="hidden" name="gallery_json" value={JSON.stringify(gallery)} />

      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xs font-black uppercase text-slate-400 tracking-widest flex items-center gap-2">
          <span className="w-2 h-2 bg-pink-500 rounded-full"></span> Galería de Imágenes
        </h3>
        <span className="text-xs font-bold text-slate-500">{gallery.length} imágenes</span>
      </div>

      {/* GRID VISUAL DE IMÁGENES */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
        {gallery.map((img, i) => (
          <div key={i} className={`group relative aspect-[4/3] rounded-3xl overflow-hidden border-2 ${i === 0 ? 'border-emerald-500 shadow-lg scale-105' : 'border-slate-100'}`}>
            <img src={img.src} alt={`Imagen ${i+1}`} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
            
            {/* Overlay de controles */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black text-white bg-black/50 px-2 py-1 rounded-full">{i + 1}</span>
                <button 
                  type="button" 
                  onClick={() => removeImage(i)}
                  className="w-7 h-7 flex items-center justify-center bg-red-500/80 rounded-full text-white text-xs hover:bg-red-600"
                >
                  🗑️
                </button>
              </div>
              
              <div className="flex justify-center gap-2">
                <button type="button" onClick={() => moveImage(i, 'up')} disabled={i === 0} className="p-2 bg-white/20 rounded-lg text-white disabled:opacity-30">⬅️</button>
                <button type="button" onClick={() => moveImage(i, 'down')} disabled={i === gallery.length - 1} className="p-2 bg-white/20 rounded-lg text-white disabled:opacity-30">➡️</button>
              </div>
            </div>

            {i === 0 && (
              <div className="absolute top-3 left-3 bg-emerald-500 text-[9px] font-black text-white px-3 py-1.5 rounded-full uppercase tracking-widest shadow">
                Portada
              </div>
            )}
          </div>
        ))}
      </div>

      {/* PANEL PARA AÑADIR NUEVA IMAGEN */}
      <div className="bg-slate-50 rounded-[2rem] p-6 border border-slate-100">
        <h4 className="text-[11px] font-black uppercase text-slate-500 mb-4 ml-2">Añadir nueva imagen (URL del CDN)</h4>
        <div className="flex flex-col md:flex-row gap-4">
          <input 
            type="text" 
            value={newImageUrl}
            onChange={(e) => setNewImageUrl(e.target.value)}
            placeholder="https://lanzadera-digital.b-cdn.net/..."
            className="flex-1 p-4 bg-white rounded-2xl border border-slate-200 font-medium text-sm focus:ring-2 focus:ring-slate-900 transition"
          />
          <button 
            type="button" 
            onClick={addImage}
            className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-black active:scale-95 transition"
          >
            + Añadir a Galería
          </button>
        </div>
      </div>
    </section>
  );
}