"use client"
import { useState, ChangeEvent, useEffect } from 'react'
import { useNotifications } from '@/components/admin/NotificationProvider'

interface ImagePickerProps {
  currentImage?: string;
}

const MAX_SIZE = 500 * 1024 // 500KB
const ACCEPTED = 'image/png,image/jpeg,image/webp'

export default function ImagePicker({ currentImage }: ImagePickerProps) {
  const [preview, setPreview] = useState<string | null>(currentImage || null)
  const { notify } = useNotifications()

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

    if (file) {
      // Validación de peso (500KB). Avisa con una notificación informativa.
      if (file.size > MAX_SIZE) {
        notify({
          tone: 'error',
          message: 'Imagen demasiado pesada',
          description: 'La imagen supera el máximo de 500KB. Elige una más ligera.',
        })
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
        className={`group relative block aspect-4/5 cursor-pointer overflow-hidden rounded-xl default-transition ${
          preview
            ? 'border border-transparent'
            : 'border border-dashed border-dynamicBlack/15 bg-white hover:border-bubonicBrown'
        }`}
      >
        <input
          type="file"
          name="image"
          className="hidden"
          onChange={handleImageChange}
          accept={ACCEPTED}
        />

        {preview ? (
          <>
            <img
              src={preview}
              className="absolute inset-0 h-full w-full object-cover"
              alt="Preview"
            />
            {/* Texto abajo con degradado oscuro para legibilidad */}
            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-dynamicBlack/80 to-transparent pb-3 pt-10 text-center">
              <span className="text-[10px] uppercase tracking-widest text-baliPearl">Cambiar foto</span>
            </div>
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-dynamicBlack/40 default-transition group-hover:text-bubonicBrown">
            <span className="text-[10px] uppercase tracking-wide">Subir fotografía</span>
          </div>
        )}
      </label>

      {preview && preview !== currentImage && (
        <p className="text-center text-[9px] uppercase tracking-widest text-green-700">
          Nueva imagen lista para guardar
        </p>
      )}
    </div>
  )
}
