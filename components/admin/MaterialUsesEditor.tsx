'use client'
import { useState } from 'react'

// Valor (lowercase, como se guarda en BD) + etiqueta (capitalizada para la UI)
const USE_OPTIONS = [
  { value: 'cocinas', label: 'Cocinas' },
  { value: 'baños', label: 'Baños' },
  { value: 'suelos', label: 'Suelos' },
  { value: 'fuentes', label: 'Fuentes' },
  { value: 'hogar', label: 'Hogar' },
  { value: 'empresas', label: 'Empresas' },
  { value: 'singulares', label: 'Singulares' },
  { value: 'hoteles', label: 'Hoteles' },
  { value: 'religiosos', label: 'Religiosos' },
]

const labelFor = (value: string) => USE_OPTIONS.find((o) => o.value === value)?.label ?? value

export default function MaterialUsesEditor({ initialUses }: { initialUses: string[] }) {
  // Normalizamos a lowercase (formato real en BD)
  const [uses, setUses] = useState<string[]>(() => (initialUses || []).map((u) => u.toLowerCase()))

  const addUse = (value: string) => {
    if (value && !uses.includes(value)) setUses([...uses, value])
  }

  const removeUse = (index: number) => {
    setUses(uses.filter((_, i) => i !== index))
  }

  const available = USE_OPTIONS.filter((o) => !uses.includes(o.value))

  return (
    <section className="card">
      <h3 className="mb-4 text-xs uppercase tracking-widest text-dynamicBlack/50">Usos</h3>

      <select
        value=""
        onChange={(e) => addUse(e.target.value)}
        disabled={available.length === 0}
        className="input mb-4 cursor-pointer appearance-none disabled:cursor-not-allowed disabled:opacity-50"
      >
        <option value="" disabled>
          {available.length === 0 ? 'Todos los usos añadidos' : 'Añadir uso...'}
        </option>
        {available.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>

      <div className="flex flex-wrap gap-2">
        {uses.length === 0 ? (
          <span className="text-[10px] uppercase italic tracking-wide text-dynamicBlack/30">Sin usos seleccionados</span>
        ) : (
          uses.map((u, i) => (
            <span key={i} className="flex items-center gap-2 rounded-md bg-dynamicBlack py-2 pl-4 pr-2 text-[10px] uppercase tracking-wide text-baliPearl">
              {labelFor(u)}
              <button type="button" onClick={() => removeUse(i)} className="cursor-pointer text-sm default-transition hover:text-bubonicBrown">×</button>
            </span>
          ))
        )}
      </div>

      <input type="hidden" name="use" value={JSON.stringify(uses)} />
    </section>
  )
}
