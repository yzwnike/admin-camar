"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"

export function CreateProjectForm() {
  const [name, setName] = useState("")
  const [isCreating, setIsCreating] = useState(false)
  const router = useRouter()

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || isCreating) return

    setIsCreating(true)

    try {
      // Generamos un slug básico a partir del nombre
      const slug = name.toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');

      // 1. Insertamos con la estructura que pide tu panel de Admin
      const { data: newProject, error: saveError } = await supabase
        .from("proyectos") // Asegúrate de que la tabla sea 'proyectos'
        .insert([{ 
          slug: slug,
          // Estructura de traducciones que espera tu Admin
          project_name: { es: name.trim(), en: name.trim() },
          title: { es: "", en: "" },
          project_location: { es: "", en: "" },
          type: [], // Array vacío para evitar errores de malformed array
          // Estructura del JSON de página
          project_page: {
            gallery: [],
            materials: [],
            sobreElProyecto: { es: "", en: "" }
          }
        }])
        .select()
        .single()

      if (saveError) throw saveError

      // 2. Si tienes una lógica de SEED para proyectos (opcional)
      // Si no es necesario generar jugadores/equipos aquí, puedes saltar al paso 3
      /*
      const res = await fetch("/api/seed-project", {
        method: "POST",
        body: JSON.stringify({ projectId: newProject.id }),
      })
      */

      // 3. Redirigimos directamente a la edición del nuevo proyecto
      router.push(`/admin/projects/${newProject.slug}`)
      
    } catch (err) {
      console.error("Error:", err)
      alert("Error al crear el proyecto. Quizás el nombre ya existe.")
    } finally {
      setIsCreating(false)
    }
  }

  return (
    <form onSubmit={handleCreate} className="space-y-4">
      <input
        type="text"
        placeholder="Nombre del Proyecto (ej: Casa Bosque)"
        className="w-full p-4 bg-slate-900 text-white rounded-2xl border-none focus:ring-2 focus:ring-emerald-500 font-bold"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={isCreating}
      />
      <button
        type="submit"
        disabled={isCreating || !name.trim()}
        className="w-full py-4 bg-emerald-500 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-emerald-600 transition disabled:opacity-50"
      >
        {isCreating ? "Creando..." : "Crear e ir al Editor"}
      </button>
    </form>
  )
}