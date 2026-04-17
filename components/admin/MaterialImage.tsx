'use client'
import { useState } from 'react'

export default function MaterialImage({ src, alt }: { src: string, alt: string }) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-slate-100 text-[10px] font-black uppercase text-slate-400 p-10 text-center">
        Sin Imagen en CDN<br/>{alt}
      </div>
    )
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-full object-cover"
      onError={() => setError(true)}
    />
  )
}