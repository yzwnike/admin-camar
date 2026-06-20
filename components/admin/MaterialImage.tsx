'use client'
import { useState } from 'react'

export default function MaterialImage({ src, alt }: { src: string, alt: string }) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-secondaryGray p-10 text-center text-[10px] uppercase tracking-wide text-dynamicBlack/40">
        Sin imagen en CDN<br/>{alt}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-cover"
      onError={() => setError(true)}
    />
  )
}
