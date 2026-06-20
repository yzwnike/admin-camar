'use client'

import { deleteNewsAction } from './actions'

export default function DeleteNewsButton({ slug }: { slug: string }) {
  // Manejamos la confirmación antes de ejecutar la Server Action
  const clientAction = async (formData: FormData) => {
    const si = confirm("¿Estás seguro de eliminar esta noticia? Esta acción no se puede deshacer.");
    if (si) {
      await deleteNewsAction(formData);
    }
  };

  return (
    <form action={clientAction}>
      <input type="hidden" name="slug" value={slug} />
      <button type="submit" className="btn-danger btn-sm">
        Eliminar
      </button>
    </form>
  );
}
