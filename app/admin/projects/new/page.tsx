import { CreateProjectForm } from "@/components/forms/CreateProjectForm"
import Link from "next/link"

export default function CreateProjectPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-black">
      <div className="w-full max-w-md">
        <Link 
          href="/projects" 
          className="text-xs uppercase opacity-50 hover:opacity-100 mb-8 inline-block transition-opacity"
        >
          ← Volver a mis proyectos
        </Link>
        
        <div className="mb-10">
          <h1 className="text-5xl font-black italic tracking-tighter leading-none mb-2">
            NUEVO<br/>PROYECTO
          </h1>
          <p className="text-muted-foreground">Define el nombre de tu base de datos y genera el universo inicial.</p>
        </div>

        <CreateProjectForm />
      </div>
    </main>
  )
}