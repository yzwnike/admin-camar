"use client"

import { useTransition } from "react"

interface Props {
  id: string
  projectName: string
  deleteAction: (formData: FormData) => Promise<void>
}

export function DeleteProjectButton({ id, projectName, deleteAction }: Props) {
  const [isPending, startTransition] = useTransition()

  const handleDelete = async () => {
    if (confirm(`¿Seguro que quieres borrar "${projectName}"?`)) {
      const formData = new FormData()
      formData.append("id", id)

      startTransition(async () => {
        await deleteAction(formData)
      })
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={isPending}
      className={`rounded-md border border-transparent bg-baliPearl/90 p-2 text-dynamicBlack/50 backdrop-blur default-transition hover:border-red-100 hover:bg-baliPearl hover:text-red-600 ${
        isPending ? "cursor-not-allowed opacity-50" : "cursor-pointer"
      }`}
      title="Eliminar proyecto"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/>
      </svg>
    </button>
  )
}
