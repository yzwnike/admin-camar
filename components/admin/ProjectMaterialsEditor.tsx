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
    <section className="card">
      <h3 className="mb-4 text-center text-xs uppercase tracking-widest text-dynamicBlack/50">Materiales</h3>
      <div className="flex flex-wrap justify-center gap-2">
        {materials?.map((m, i) => (
          <span key={i} className="group flex items-center gap-2 rounded-md bg-secondaryGray px-4 py-2 text-[10px] uppercase tracking-wide text-dynamicBlack/70">
            {m}
            <button onClick={() => removeMaterial(i)} className="opacity-0 default-transition hover:text-red-500 group-hover:opacity-100">×</button>
          </span>
        ))}
        <button
          onClick={addMaterial}
          className="rounded-md border-2 border-dashed border-dynamicBlack/15 px-4 py-2 text-[10px] uppercase tracking-wide text-dynamicBlack/50 default-transition hover:border-dynamicBlack hover:text-dynamicBlack"
        >
          + Añadir
        </button>
      </div>
      {/* Input oculto para que el formulario envíe los datos actualizados si usas un form */}
      <input type="hidden" name="materials" value={JSON.stringify(materials)} />
    </section>
  )
}
