"use client"
import { useState, ChangeEvent } from 'react'

interface ImagePickerProps {
  currentImage?: string;
}

export default function ImagePicker({ currentImage }: ImagePickerProps) {
  const [preview, setPreview] = useState<string | null>(currentImage || null)
  const [error, setError] = useState<string | null>(null)

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    setError(null)
    if (file) {
      if (file.size > 1024 * 1024) {
        setError("Máximo 1MB");
        setPreview(currentImage || null);
        e.target.value = "";
        return;
      }
      setPreview(URL.createObjectURL(file))
    }
  }

  return (
    <div className="space-y-4">
      <label className="block aspect-[4/5] rounded-[2.5rem] border-2 border-dashed border-slate-200 relative overflow-hidden cursor-pointer group">
        <input type="file" name="image" className="hidden" onChange={handleImageChange} accept="image/*" />
        {preview ? (
          <img src={preview} className="absolute inset-0 w-full h-full object-cover" alt="Preview" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-slate-400">📸</div>
        )}
      </label>
      {error && <p className="text-red-500 text-[10px] text-center uppercase font-bold">{error}</p>}
    </div>
  )
}