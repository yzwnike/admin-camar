'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { upsertProjectAction, deleteCDNFileAction } from '@/app/admin/projects/actions'
import ImageUploader from '../ImageUploader'

export default function ProjectForm({ initialData }: { initialData?: any }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const PULL_ZONE = "https://lanzadera-digital.b-cdn.net/camar.es/Proyectos/"

  /**
   * Función de parseo ultra-segura.
   */
  const parseSafe = (data: any, fallback: any) => {
    if (!data) return fallback;
    if (typeof data === 'object' && !Array.isArray(data)) return data;
    try {
      let parsed = typeof data === 'string' ? JSON.parse(data) : data;
      // Manejar doble serialización si ocurre
      if (typeof parsed === 'string') parsed = JSON.parse(parsed);
      return parsed || fallback;
    } catch (e) {
      console.warn("Error parseando campo, usando fallback", e);
      return fallback;
    }
  };

  // Inicialización del estado
  const [formData, setFormData] = useState({
    id: initialData?.id || '',
    slug_es: initialData?.slug_es || '',
    slug_en: initialData?.slug_en || '',
    projectName: parseSafe(initialData?.projectName, { es: '', en: '' }),
    projectLocation: parseSafe(initialData?.projectLocation, { es: '', en: '' }),
    type: parseSafe(initialData?.type, []),
    mainImage: initialData?.mainImage || '',
    bgImage: initialData?.bgImage || '',
    projectPage: parseSafe(initialData?.projectPage, {
      filtro: "Vivienda Privada",
      pageTitle: { es: '', en: '' },
      pageDescription: { es: '', en: '' },
      gallery: [],
      sobreElProyecto: { es: '', en: '' },
      projectDetails: [
        { label: { es: "Categoría", en: "Category" }, value: { es: "", en: "" } },
        { label: { es: "Fecha", en: "Date" }, value: { es: "", en: "" } },
        { label: { es: "País", en: "Country" }, value: { es: "", en: "" } }
      ],
      masInformacion: [],
      materials: []
    })
  })

  // Sincronización con el servidor
  useEffect(() => {
    if (initialData && initialData.id === formData.id) {
      setFormData(prev => ({
        ...prev,
        projectName: parseSafe(initialData.projectName, prev.projectName),
        projectLocation: parseSafe(initialData.projectLocation, prev.projectLocation),
        projectPage: parseSafe(initialData.projectPage, prev.projectPage),
        mainImage: initialData.mainImage || prev.mainImage,
        bgImage: initialData.bgImage || prev.bgImage,
        slug_es: initialData.slug_es || prev.slug_es,
        slug_en: initialData.slug_en || prev.slug_en
      }));
    }
  }, [initialData]);

  const removeGalleryImage = async (idx: number, fileName: string) => {
    if (!confirm("¿Eliminar de la nube?")) return;
    const result = await deleteCDNFileAction("Proyectos", fileName);
    if (result.success) {
      const newGallery = formData.projectPage.gallery.filter((_: any, i: number) => i !== idx)
      setFormData({
        ...formData,
        projectPage: { ...formData.projectPage, gallery: newGallery }
      })
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const data = new FormData()
      data.append('id', formData.id)
      data.append('slug_es', formData.slug_es)
      data.append('slug_en', formData.slug_en)
      data.append('mainImage', formData.mainImage)
      data.append('bgImage', formData.bgImage)

      data.append('projectName', JSON.stringify(formData.projectName))
      data.append('projectLocation', JSON.stringify(formData.projectLocation))
      data.append('type', JSON.stringify(formData.type))
      data.append('projectPage', JSON.stringify(formData.projectPage))

      const result = await upsertProjectAction(data)

      if (result?.success) {
        router.refresh();
        alert("¡Cambios guardados con éxito!");
      } else {
        alert("Error al guardar: " + result?.error)
      }
    } catch (err) {
      console.error(err);
      alert("Error crítico al guardar");
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10 pb-32 text-dynamicBlack">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* SECCIÓN CASTELLANO */}
        <div className="card space-y-6">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-bubonicBrown"></span>
            <span className="font-vollkorn text-sm uppercase tracking-widest text-dynamicBlack/60">Castellano</span>
          </div>
          <div>
            <label className="label">Nombre del proyecto <span className="required">*</span></label>
            <input
              className="input font-vollkorn text-2xl"
              value={formData.projectName?.es || ''}
              onChange={e => setFormData({...formData, projectName: {...formData.projectName, es: e.target.value}})}
              required
            />
          </div>
          <div>
            <label className="label">Ubicación</label>
            <input
              className="input"
              value={formData.projectLocation?.es || ''}
              onChange={e => setFormData({...formData, projectLocation: {...formData.projectLocation, es: e.target.value}})}
            />
          </div>
        </div>

        {/* SECCIÓN INGLÉS */}
        <div className="card space-y-6 bg-baliPearl">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-dynamicBlack"></span>
            <span className="font-vollkorn text-sm uppercase tracking-widest text-dynamicBlack/60">English</span>
          </div>
          <div>
            <label className="label">Project name <span className="required">*</span></label>
            <input
              className="input font-vollkorn text-2xl"
              value={formData.projectName?.en || ''}
              onChange={e => setFormData({...formData, projectName: {...formData.projectName, en: e.target.value}})}
              required
            />
          </div>
          <div>
            <label className="label">Location</label>
            <input
              className="input"
              value={formData.projectLocation?.en || ''}
              onChange={e => setFormData({...formData, projectLocation: {...formData.projectLocation, en: e.target.value}})}
            />
          </div>
        </div>
      </div>

      <section className="card">
        <h3 className="mb-6 font-vollkorn text-xl uppercase tracking-tight text-dynamicBlack">Galería de imágenes</h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-8">
          {formData.projectPage.gallery.map((img: any, i: number) => (
            <div key={i} className="group relative aspect-square overflow-hidden rounded-md border border-dynamicBlack/10">
              <img src={`${PULL_ZONE}${img.src}`} className="h-full w-full object-cover" alt={`Galería ${i}`} />
              <button
                type="button"
                onClick={() => removeGalleryImage(i, img.src)}
                className="absolute inset-0 flex items-center justify-center bg-red-600/80 text-[10px] font-bold uppercase tracking-wide text-baliPearl opacity-0 default-transition group-hover:opacity-100"
              >
                Quitar
              </button>
            </div>
          ))}
          <div className="aspect-square">
            <ImageUploader
              folder="Proyectos"
              onUploadSuccess={(name) => setFormData({
                ...formData,
                projectPage: {
                  ...formData.projectPage,
                  gallery: [...formData.projectPage.gallery, {type:'image', src:name}]
                }
              })}
            />
          </div>
        </div>
      </section>

      <div className="fixed bottom-10 left-1/2 z-50 w-full max-w-md -translate-x-1/2 px-6">
        <button type="submit" disabled={loading} className="btn-gold w-full py-4 text-lg shadow-2xl">
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="h-5 w-5 animate-spin rounded-full border-4 border-baliPearl border-t-transparent"></span>
              Guardando...
            </span>
          ) : 'Guardar cambios'}
        </button>
      </div>
    </form>
  )
}
