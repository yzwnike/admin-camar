'use client'

import { useState } from 'react'
import Link from 'next/link'
import MaterialImage from '@/components/admin/MaterialImage'
import { DeleteProjectButton } from '@/components/admin/DeleteProjectButton'
import SearchInput from '@/components/admin/SearchInput'

export interface MaterialItem {
  id: string
  nombre: string
  tipo: string
  pais: string
  desc: string
  thumb: string
  uses: string[]
  editHref: string
  searchText: string
}

interface Props {
  items: MaterialItem[]
  deleteAction: (formData: FormData) => Promise<void>
}

// Normaliza para búsqueda insensible a mayúsculas y acentos
const norm = (s: string) =>
  s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

export default function MaterialsList({ items, deleteAction }: Props) {
  const [query, setQuery] = useState('')
  const q = norm(query.trim())
  const filtered = q ? items.filter((m) => m.searchText.includes(q)) : items

  return (
    <div className="space-y-6">
      <SearchInput
        value={query}
        onChange={setQuery}
        count={filtered.length}
        total={items.length}
        placeholder="Buscar materiales por nombre, tipo u origen..."
      />

      {filtered.length === 0 ? (
        <div className="rounded-xl border-2 border-dashed border-dynamicBlack/15 bg-white py-20 text-center">
          <p className="italic text-dynamicBlack/40">
            {items.length === 0
              ? 'No hay materiales en el catálogo.'
              : `Sin resultados para “${query}”.`}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((m) => (
            <div key={m.id} className="group relative flex flex-col overflow-hidden rounded-xl border border-dynamicBlack/10 bg-white default-transition hover:shadow-lg">

              {/* BOTÓN ELIMINAR FLOTANTE */}
              <div className="absolute right-4 top-4 z-20">
                <DeleteProjectButton id={m.id} projectName={m.nombre} deleteAction={deleteAction} />
              </div>

              {/* CONTENEDOR DE IMAGEN */}
              <div className="relative aspect-square overflow-hidden bg-secondaryGray">
                <div className="h-full w-full transition-transform duration-700 group-hover:scale-110">
                  <MaterialImage src={m.thumb} alt={m.nombre} />
                </div>
              </div>

              {/* INFORMACIÓN Y ACCIONES */}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-6">
                  <h3 className="line-clamp-1 font-vollkorn text-xl leading-tight text-dynamicBlack">
                    {m.nombre}
                  </h3>
                  <p className="mt-1 text-[10px] uppercase tracking-widest text-bubonicBrown">
                    {m.pais}
                  </p>
                </div>

                {/* BOTÓN EDITAR */}
                <Link href={m.editHref} className="btn-primary mt-auto w-full">
                  Editar ficha
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
