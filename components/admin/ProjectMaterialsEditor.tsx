'use client'
import { useState } from 'react'

export default function ProjectMaterialsEditor({ initialMaterials }: { initialMaterials: string[] }) {
  const [materials, setMaterials] = useState(initialMaterials)

  const removeMaterial = (index: number) => {
    setMaterials(materials.filter((_, i) => i !== index))
  }

  const addMaterial = () => {
    const newMaterial = prompt("Nombre del material:")
    if (newMaterial) setMaterials([...materials, newMaterial])
  }

  return (
    <section className="bg-white rounded-[3rem] p-8 border border-slate-200 shadow-sm">
      <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 text-center">Materiales</h3>
      <div className="flex flex-wrap gap-2 justify-center">
        {materials?.map((m, i) => (
          <span key={i} className="group px-4 py-2 bg-slate-100 rounded-full text-[10px] font-black text-slate-600 uppercase flex items-center gap-2">
            {m}
            <button onClick={() => removeMaterial(i)} className="hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">×</button>
          </span>
        ))}
        <button 
          onClick={addMaterial}
          className="px-4 py-2 border-2 border-dashed border-slate-200 rounded-full text-[10px] font-black text-slate-400 hover:border-slate-900 hover:text-slate-900 transition"
        >
          + AÑADIR
        </button>
      </div>
      {/* Input oculto para que el formulario envíe los datos actualizados si usas un form */}
      <input type="hidden" name="materials" value={JSON.stringify(materials)} />
    </section>
  )
}