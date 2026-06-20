"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
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
      // 1. Generamos un slug único añadiendo un timestamp
      // Esto asegura la compatibilidad óptima en servidores y evita conflictos de archivos
      const timestamp = Date.now()
      const baseSlug = trimmedName
        .toLowerCase()
        .trim()
        .normalize("NFD") // Elimina acentos
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, '-')
        .replace(/[^\w-]/g, '') // Elimina caracteres especiales

      const uniqueSlug = `${baseSlug}-${timestamp}`

      // 2. Preparamos el FormData
      const data = new FormData()
      data.append('id', '') // Indica creación
      data.append('slug_es', uniqueSlug)
      data.append('slug_en', uniqueSlug)

      // Serializamos los objetos para que la Server Action los reciba correctamente
      data.append('projectName', JSON.stringify({ es: trimmedName, en: trimmedName }))
      data.append('projectLocation', JSON.stringify({ es: "", en: "" }))
      data.append('type', JSON.stringify([]))

      // Estructura completa de projectPage para evitar campos undefined en el editor
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

      // 3. Llamada a la acción unificada
      const result = await upsertProjectAction(data)

      if (result.success) {
        // Redirigimos al editor del nuevo proyecto usando el slug generado
        router.push(`/admin/projects/${uniqueSlug}`)
        router.refresh()
      } else {
        alert("Error al crear el proyecto: " + result.error)
      }
    } catch (err) {
      console.error("Client Error:", err)
      alert("Ocurrió un error inesperado al procesar el formulario.")
    } finally {
      setIsCreating(false)
    }
  }

  return (
    <form onSubmit={handleCreate} className="space-y-4">
      <input
        type="text"
        placeholder="Nombre del proyecto (ej: Casa Bosque)"
        className="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={isCreating}
        required
      />
      <button type="submit" disabled={isCreating || !name.trim()} className="btn-primary w-full py-3">
        {isCreating ? (
          <span className="flex items-center justify-center gap-2">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-baliPearl border-t-transparent" />
            <span>Iniciando editor...</span>
          </span>
        ) : (
          "Crear e ir al editor"
        )}
      </button>
    </form>
  )
}
