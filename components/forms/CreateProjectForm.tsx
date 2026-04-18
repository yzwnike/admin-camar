"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createProjectAction } from "@/app/admin/projects/actions"

export function CreateProjectForm() {
  const [name, setName] = useState("")
  const [isCreating, setIsCreating] = useState(false)
  const router = useRouter()

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const trimmedName = name.trim()
    if (!trimmedName || isCreating) return

    setIsCreating(true)

    try {
      // Llamamos a la Server Action
      const result = await createProjectAction(trimmedName)

      if (result.success && result.slug) {
        // Redirigimos al editor del nuevo proyecto
        router.push(`/admin/projects/${result.slug}`)
        router.refresh() // Forzamos actualización de la caché
      } else {
        alert("Error: El proyecto o el slug ya existen.")
      }
    } catch (err) {
      console.error("Client Error:", err)
      alert("Ocurrió un error inesperado.")
    } finally {
      setIsCreating(false)
    }
  }

  return (
    <form onSubmit={handleCreate} className="space-y-4">
      <input
        type="text"
        placeholder="Nombre del Proyecto (ej: Casa Bosque)"
        className="w-full p-4 bg-slate-900 text-white rounded-2xl border-none focus:ring-2 focus:ring-emerald-500 font-bold placeholder:text-slate-500"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={isCreating}
        required
      />
      <button
        type="submit"
        disabled={isCreating || !name.trim()}
        className="w-full py-4 bg-emerald-500 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-emerald-600 transition disabled:opacity-50 active:scale-[0.98]"
      >
        {isCreating ? (
          <div className="flex items-center justify-center gap-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>Creando...</span>
          </div>
        ) : (
          "Crear e ir al Editor"
        )}
      </button>
    </form>
  )
}