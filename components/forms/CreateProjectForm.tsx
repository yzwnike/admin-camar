"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
// CAMBIADO: Importamos la nueva función upsertProjectAction
import { upsertProjectAction } from "@/app/admin/projects/actions"

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
      // 1. Preparamos el FormData (porque la nueva acción espera FormData)
      // Generamos un slug básico para que el editor tenga una ruta inicial
      const slug = trimmedName.toLowerCase().trim().replace(/\s+/g, '-')
      
      const data = new FormData()
      data.append('id', '') // ID vacío indica que es una creación
      data.append('slug_es', slug)
      data.append('slug_en', slug)
      
      // Enviamos el objeto de nombre serializado
      data.append('projectName', JSON.stringify({ es: trimmedName, en: trimmedName }))
      
      // Enviamos el resto de campos mínimos requeridos como objetos vacíos serializados
      data.append('projectLocation', JSON.stringify({ es: "", en: "" }))
      data.append('type', JSON.stringify([]))
      data.append('projectPage', JSON.stringify({
        filtro: "Vivienda Privada",
        pageTitle: { es: "", en: "" },
        pageDescription: { es: "", en: "" },
        gallery: [],
        materials: [],
        sobreElProyecto: { es: "", en: "" },
        projectDetails: [
          { label: { es: "Categoría", en: "Category" }, value: { es: "", en: "" } },
          { label: { es: "Fecha", en: "Date" }, value: { es: "", en: "" } },
          { label: { es: "País", en: "Country" }, value: { es: "", en: "" } }
        ]
      }))

      // 2. Llamamos a la Server Action unificada
      const result = await upsertProjectAction(data)

      if (result.success) {
        // Redirigimos usando el slug que acabamos de generar
        router.push(`/admin/projects/${slug}`)
        router.refresh()
      } else {
        alert("Error: " + result.error)
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