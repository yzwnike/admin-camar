// /components/ImageUploader.tsx
'use client'
import { useState } from 'react'

interface Props {
  folder: 'Materiales' | 'Noticias' | 'Proyectos'
  onUploadSuccess: (fileName: string) => void
  label?: string
}

export default function ImageUploader({ folder, onUploadSuccess, label }: Props) {
  const [status, setStatus] = useState<'idle' | 'uploading' | 'success'>('idle')

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return
    
    setStatus('uploading')
    const file = e.target.files[0]
    
    // Limpieza de nombre: "Casa Irlanda.JPG" -> "casa-irlanda.jpg"
    const cleanName = file.name.toLowerCase()
      .replace(/\s+/g, '-')
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    try {
      const res = await fetch(`/api/upload?file=${cleanName}&folder=${folder}`, {
        method: 'PUT',
        body: file,
      })

      if (res.ok) {
        setStatus('success')
        onUploadSuccess(cleanName)
        setTimeout(() => setStatus('idle'), 3000)
      } else {
        alert("Error en la subida")
        setStatus('idle')
      }
    } catch (err) {
      setStatus('idle')
      alert("Error de conexión")
    }
  }

  return (
    <div className={`relative border-2 border-dashed rounded-3xl p-6 transition-all cursor-pointer
      ${status === 'uploading' ? 'border-blue-400 bg-blue-50' : 
        status === 'success' ? 'border-emerald-400 bg-emerald-50' : 'border-slate-200 bg-slate-50 hover:bg-white'}`}>
      
      <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleUpload} disabled={status === 'uploading'} />
      
      <div className="text-center">
        {status === 'idle' && (
          <>
            <p className="text-xs font-black text-slate-400 uppercase tracking-tighter">{label || `Subir a ${folder}`}</p>
            <p className="text-[10px] text-slate-300 mt-1">Arrastra o haz click aquí</p>
          </>
        )}
        {status === 'uploading' && <p className="text-xs font-bold text-blue-600 animate-bounce tracking-widest">SUBIENDO...</p>}
        {status === 'success' && <p className="text-xs font-bold text-emerald-600 tracking-widest">¡SUBIDO CON ÉXITO!</p>}
      </div>
    </div>
  )
}