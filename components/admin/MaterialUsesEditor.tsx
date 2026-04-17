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
    <section className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-sm">
      <h3 className="text-[10px] font-black uppercase text-slate-400 mb-4 tracking-widest">Usos Recomendados</h3>
      <div className="flex flex-wrap gap-2">
        {uses.map((u, i) => (
          <span key={i} className="pl-4 pr-2 py-2 bg-slate-900 text-white rounded-full text-[10px] font-black uppercase flex items-center gap-2">
            {u}
            <button type="button" onClick={() => removeUse(i)} className="hover:text-red-400 text-xs transition">×</button>
          </span>
        ))}
        <button 
          type="button"
          onClick={addUse}
          className="px-4 py-2 border-2 border-dashed border-slate-200 rounded-full text-[10px] font-black text-slate-400 hover:border-slate-900 hover:text-slate-900 transition"
        >
          + Añadir
        </button>
      </div>
      <input type="hidden" name="use" value={JSON.stringify(uses)} />
    </section>
  )
}