'use client'
import { useState } from 'react'

export default function MaterialUsesEditor({ initialUses }: { initialUses: string[] }) {
  const [uses, setUses] = useState(initialUses)

  const addUse = () => {
    const val = prompt("Nuevo uso (ej: Encimeras, Suelos...):")
    if (val) setUses([...uses, val])
  }

  const removeUse = (index: number) => {
    setUses(uses.filter((_, i) => i !== index))
  }

  return (
    <section className="card">
      <h3 className="mb-4 text-xs uppercase tracking-widest text-dynamicBlack/50">Usos recomendados</h3>
      <div className="flex flex-wrap gap-2">
        {uses.map((u, i) => (
          <span key={i} className="flex items-center gap-2 rounded-md bg-dynamicBlack py-2 pl-4 pr-2 text-[10px] uppercase tracking-wide text-baliPearl">
            {u}
            <button type="button" onClick={() => removeUse(i)} className="text-sm default-transition hover:text-bubonicBrown">×</button>
          </span>
        ))}
        <button
          type="button"
          onClick={addUse}
          className="rounded-md border-2 border-dashed border-dynamicBlack/15 px-4 py-2 text-[10px] uppercase tracking-wide text-dynamicBlack/50 default-transition hover:border-dynamicBlack hover:text-dynamicBlack"
        >
          + Añadir
        </button>
      </div>
      <input type="hidden" name="use" value={JSON.stringify(uses)} />
    </section>
  )
}
