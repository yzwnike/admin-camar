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
        className={`group relative block aspect-4/5 cursor-pointer overflow-hidden rounded-xl border-2 border-dashed default-transition
          ${error ? 'border-red-400 bg-red-50' : 'border-dynamicBlack/15 bg-white hover:border-bubonicBrown'}`}
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
              className="absolute inset-0 h-full w-full object-cover"
              alt="Preview"
            />
            {/* Overlay para indicar que se puede cambiar */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-dynamicBlack/40 text-baliPearl opacity-0 default-transition group-hover:opacity-100">
              <span className="text-[10px] uppercase tracking-widest">Cambiar imagen</span>
            </div>
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-dynamicBlack/40 default-transition group-hover:text-bubonicBrown">
            <span className="text-[10px] uppercase tracking-wide">Subir fotografía</span>
          </div>
        )}
      </label>

      <div className="min-h-5">
        {error ? (
          <p className="animate-pulse text-center text-[10px] font-bold uppercase text-red-500">
            {error}
          </p>
        ) : preview && preview !== currentImage ? (
          <p className="text-center text-[9px] uppercase tracking-widest text-green-700">
            Nueva imagen lista para guardar
          </p>
        ) : null}
      </div>
    </div>
  )
}
