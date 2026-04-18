"use client"
import { useState, ChangeEvent, useEffect } from 'react'

interface ImagePickerProps {
  currentImage?: string;
}

export default function ImagePicker({ currentImage }: ImagePickerProps) {
  const [preview, setPreview] = useState<string | null>(currentImage || null)
  const [error, setError] = useState<string | null>(null)

  // Limpieza de memoria: Revocar la URL creada cuando el componente se desmonte
  // o cuando la preview cambie para evitar fugas de memoria.
  useEffect(() => {
    return () => {
      if (preview && preview.startsWith('blob:')) {
        URL.revokeObjectURL(preview);
      }
    }
  }, [preview]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    setError(null)

    if (file) {
      // Validación estricta de 1MB
      if (file.size > 1024 * 1024) {
        setError("El archivo es demasiado grande (Máximo 1MB)");
        setPreview(currentImage || null);
        e.target.value = ""; // Limpia el input
        return;
      }

      // Crear nueva previsualización
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
    }
  }

  return (
    <div className="space-y-4">
      <label 
        className={`block aspect-[4/5] rounded-[2.5rem] border-2 border-dashed transition-all relative overflow-hidden cursor-pointer group
          ${error ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-slate-50 hover:border-emerald-400'}`}
      >
        <input 
          type="file" 
          name="image" 
          className="hidden" 
          onChange={handleImageChange} 
          accept="image/*" 
        />
        
        {preview ? (
          <>
            <img 
              src={preview} 
              className="absolute inset-0 w-full h-full object-cover" 
              alt="Preview" 
            />
            {/* Overlay para indicar que se puede cambiar */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white">
              <span className="text-2xl mb-1">🔄</span>
              <span className="text-[10px] font-black uppercase tracking-widest">Cambiar Imagen</span>
            </div>
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 group-hover:text-emerald-500 transition-colors">
            <span className="text-4xl mb-2">📸</span>
            <span className="text-[10px] font-black uppercase tracking-tighter">Subir Fotografía</span>
          </div>
        )}
      </label>

      <div className="min-h-[20px]">
        {error ? (
          <p className="text-red-500 text-[10px] text-center uppercase font-bold animate-pulse">
            {error}
          </p>
        ) : preview && preview !== currentImage ? (
          <p className="text-emerald-600 text-[9px] text-center uppercase font-black tracking-widest">
            ✓ Nueva imagen lista para guardar
          </p>
        ) : null}
      </div>
    </div>
  )
}