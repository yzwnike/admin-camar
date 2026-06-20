'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { upsertMaterialAction } from '@/app/admin/materials/actions'
import ImageUploader from '../ImageUploader'

export default function MaterialForm({ initialData }: { initialData?: any }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const PULL_ZONE = "https://lanzadera-digital.b-cdn.net/camar.es/Materiales/"

  const [formData, setFormData] = useState({
    id: initialData?.id || '',
    material_name: initialData?.material_name || '',
    material_type: initialData?.material_type || { es: '', en: '' },
    location: initialData?.location || { es: '', en: '' },
    description: initialData?.description || { es: '', en: '' },
    use: initialData?.use || [],
    main_image: initialData?.main_image || ''
  })

  // Función para manejar el envío de forma segura
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Creamos un FormData real para enviarlo a la Server Action
      const data = new FormData()
      data.append('id', formData.id)
      data.append('material_name', formData.material_name)
      data.append('main_image', formData.main_image)

      // Enviamos los objetos complejos como JSON strings
      data.append('material_type', JSON.stringify(formData.material_type))
      data.append('location', JSON.stringify(formData.location))
      data.append('description', JSON.stringify(formData.description))
      data.append('use', JSON.stringify(formData.use))

      const result = await upsertMaterialAction(data)

      if (result?.error) {
        alert("Error al guardar: " + result.error)
      } else {
        alert("¡Material guardado con éxito!")
        router.push('/admin/materials')
        router.refresh()
      }
    } catch (err) {
      console.error(err)
      alert("Error crítico en el formulario")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10 pb-20">

      {/* 1. SECCIÓN DE IMAGEN */}
      <section className="rounded-xl border border-dynamicBlack/10 bg-white p-6">
        <h3 className="mb-6 font-vollkorn text-xl uppercase tracking-tight text-dynamicBlack">Textura del material</h3>
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
             <ImageUploader
                folder="Materiales"
                label="Subir foto real"
                onUploadSuccess={(fileName) => setFormData({...formData, main_image: fileName})}
              />
          </div>

          <div className="flex items-center gap-6 rounded-md border border-dynamicBlack/10 bg-baliPearl p-4 md:col-span-2">
            <div className="h-32 w-32 shrink-0 overflow-hidden rounded-md border border-dynamicBlack/10 bg-secondaryGray">
              {formData.main_image ? (
                <img
                  src={`${PULL_ZONE}${formData.main_image}`}
                  alt="Preview"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center p-4 text-center text-[10px] uppercase text-dynamicBlack/30">Sin imagen</div>
              )}
            </div>
            <div>
              <p className="mb-1 text-xs uppercase tracking-widest text-dynamicBlack/50">Nombre en CDN</p>
              <p className="break-all font-mono text-sm text-bubonicBrown">{formData.main_image || 'esperando subida...'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DATOS PRINCIPALES */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <label className="label">Nombre comercial <span className="required">*</span></label>
          <input
            className="input font-vollkorn text-2xl"
            value={formData.material_name}
            onChange={e => setFormData({...formData, material_name: e.target.value})}
            placeholder="Ej: Cuarcita Monterra"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="label">Tipo (ES)</label>
            <input
              className="input"
              value={formData.material_type.es}
              onChange={e => setFormData({...formData, material_type: {...formData.material_type, es: e.target.value}})}
              placeholder="Mármol"
            />
          </div>
          <div>
            <label className="label">Type (EN)</label>
            <input
              className="input"
              value={formData.material_type.en}
              onChange={e => setFormData({...formData, material_type: {...formData.material_type, en: e.target.value}})}
              placeholder="Marble"
            />
          </div>
        </div>
      </div>

      {/* 3. ORIGEN Y USOS */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
         <div>
            <label className="label">País de origen</label>
            <div className="flex gap-4">
              <input className="input" placeholder="ES" value={formData.location.es} onChange={e => setFormData({...formData, location: {...formData.location, es: e.target.value}})} />
              <input className="input" placeholder="EN" value={formData.location.en} onChange={e => setFormData({...formData, location: {...formData.location, en: e.target.value}})} />
            </div>
         </div>

         <div>
            <label className="label">Usos (separados por coma)</label>
            <input
              className="input font-mono text-sm"
              placeholder="hogar, suelos..."
              value={formData.use.join(", ")}
              onChange={e => {
                const val = e.target.value.split(",").map(item => item.trim()).filter(i => i !== "");
                setFormData({...formData, use: val})
              }}
            />
            <div className="mt-3 flex flex-wrap gap-2">
              {formData.use.map((tag: string, i: number) => (
                <span key={i} className="badge text-[10px]">{tag}</span>
              ))}
            </div>
         </div>
      </div>

      {/* 4. DESCRIPCIONES */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <label className="label">Descripción (ES)</label>
          <textarea
            rows={5}
            className="input"
            value={formData.description.es}
            onChange={e => setFormData({...formData, description: {...formData.description, es: e.target.value}})}
            placeholder="Descripción en castellano"
          />
        </div>
        <div>
          <label className="label">Description (EN)</label>
          <textarea
            rows={5}
            className="input"
            value={formData.description.en}
            onChange={e => setFormData({...formData, description: {...formData.description, en: e.target.value}})}
            placeholder="Description in english"
          />
        </div>
      </div>

      <div className="flex justify-center pt-6">
        <button type="submit" disabled={loading} className="btn-primary w-full max-w-2xl py-4 text-lg">
          {loading ? 'Guardando...' : (initialData?.id ? 'Actualizar material' : 'Crear material')}
        </button>
      </div>
    </form>
  )
}
