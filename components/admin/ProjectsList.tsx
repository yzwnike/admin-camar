'use client'

import { useState } from 'react'
import Link from 'next/link'
import { DeleteProjectButton } from '@/components/admin/DeleteProjectButton'
import SearchInput from '@/components/admin/SearchInput'

export interface ProjectItem {
  id: string
  titulo: string
  ubicacion: string
  portada: string
  filtro: string
  editHref: string
  searchText: string
}

interface Props {
  items: ProjectItem[]
  deleteAction: (formData: FormData) => Promise<void>
}

// Normaliza para búsqueda insensible a mayúsculas y acentos
const norm = (s: string) =>
  s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

export default function ProjectsList({ items, deleteAction }: Props) {
  const [query, setQuery] = useState('')
  const q = norm(query.trim())
  const filtered = q ? items.filter((p) => p.searchText.includes(q)) : items

  return (
    <div className="space-y-6">
      <SearchInput
        value={query}
        onChange={setQuery}
        count={filtered.length}
        total={items.length}
        placeholder="Buscar proyectos por nombre, ubicación o tipo..."
      />

      {filtered.length === 0 ? (
        <div className="rounded-xl border-2 border-dashed border-dynamicBlack/15 bg-white py-20 text-center">
          <p className="italic text-dynamicBlack/40">
            {items.length === 0
              ? 'No se han encontrado proyectos en la base de datos.'
              : `Sin resultados para “${query}”.`}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <div key={p.id} className="relative overflow-hidden border border-dynamicBlack/10 bg-white">

              {/* BOTÓN ELIMINAR */}
              <div className="absolute right-4 top-4 z-10">
                <DeleteProjectButton id={p.id} projectName={p.titulo} deleteAction={deleteAction} />
              </div>

              {/* IMAGEN DE PORTADA */}
              <div className="relative aspect-video overflow-hidden bg-secondaryGray">
                <img
                  src={p.portada}
                  alt={p.titulo}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* INFO Y BOTÓN EDITAR */}
              <div className="p-6">
                <h3 className="line-clamp-1 font-vollkorn text-xl text-dynamicBlack">
                  {p.titulo}
                </h3>
                <p className="mb-6 mt-1 text-sm text-dynamicBlack/50">
                  {p.ubicacion}
                </p>
                <Link href={p.editHref} className="btn-primary w-full">
                  Editar proyecto
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
