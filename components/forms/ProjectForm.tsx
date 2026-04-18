'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { upsertProjectAction } from '@/app/admin/projects/actions'
import ImageUploader from '../ImageUploader'

export default function ProjectForm({ initialData }: { initialData?: any }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  
  const PULL_ZONE = "https://lanzadera-digital.b-cdn.net/camar.es/Proyectos/"

  const [formData, setFormData] = useState({
    id: initialData?.id || '',
    slug_es: initialData?.slug_es || '',
    slug_en: initialData?.slug_en || '',
    projectName: initialData?.projectName || { es: '', en: '' },
    projectLocation: initialData?.projectLocation || { es: '', en: '' },
    type: initialData?.type || [], 
    mainImage: initialData?.mainImage || '',
    bgImage: initialData?.bgImage || '',
    projectPage: initialData?.projectPage || {
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
    }
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // 1. Convertimos el estado a FormData real
      const data = new FormData()
      data.append('id', formData.id || '')
      data.append('slug_es', formData.slug_es)
      data.append('slug_en', formData.slug_en)
      data.append('mainImage', formData.mainImage)
      data.append('bgImage', formData.bgImage)

      // 2. Serializamos los objetos complejos a JSON string
      data.append('projectName', JSON.stringify(formData.projectName))
      data.append('projectLocation', JSON.stringify(formData.projectLocation))
      data.append('type', JSON.stringify(formData.type))
      data.append('projectPage', JSON.stringify(formData.projectPage))

      // 3. Enviamos el FormData a la Server Action
      const result = await upsertProjectAction(data)
      
      if (result?.success) {
        alert("¡Proyecto guardado con éxito!")
        router.push('/admin/projects')
        router.refresh()
      } else {
        alert("Error: " + result?.error)
      }
    } catch (err) {
      console.error(err)
      alert("Error crítico al procesar el formulario")
    } finally {
      setLoading(false)
    }
  }

  const removeGalleryImage = (idx: number) => {
    const newGallery = formData.projectPage.gallery.filter((_: any, i: number) => i !== idx)
    setFormData({
      ...formData,
      projectPage: { ...formData.projectPage, gallery: newGallery }
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-12 pb-32">
      
      {/* 1. SECCIÓN IMÁGENES */}
      <section className="bg-slate-50 p-8 rounded-[3rem] border border-slate-200">
        <h3 className="text-lg font-black mb-6 text-slate-800 uppercase tracking-tighter">🖼️ Imágenes Principales</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Portada (Card)</label>
            <ImageUploader folder="Proyectos" onUploadSuccess={(name) => setFormData({...formData, mainImage: name})} />
            {formData.mainImage && (
              <div className="relative h-48 rounded-3xl overflow-hidden border-4 border-white shadow-xl">
                <img src={`${PULL_ZONE}${formData.mainImage}`} className="w-full h-full object-cover" alt="Main" />
              </div>
            )}
          </div>

          <div className="space-y-4">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Imagen Hero (Fondo)</label>
            <ImageUploader folder="Proyectos" label="Subir fondo (Wide)" onUploadSuccess={(name) => setFormData({...formData, bgImage: name})} />
            {formData.bgImage && (
              <div className="relative h-48 rounded-3xl overflow-hidden border-4 border-white shadow-xl">
                <img src={`${PULL_ZONE}${formData.bgImage}`} className="w-full h-full object-cover" alt="Background" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 2. GALERÍA */}
      <section className="bg-white p-8 rounded-[3rem] border border-slate-200">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-black text-slate-800 uppercase tracking-tighter">📸 Galería</h3>
          <span className="text-xs font-bold bg-slate-100 text-slate-500 px-3 py-1 rounded-full">{formData.projectPage.gallery.length} Fotos</span>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
          {formData.projectPage.gallery.map((img: any, i: number) => (
            <div key={i} className="group relative aspect-square rounded-2xl overflow-hidden border border-slate-200 shadow-sm text-slate-900">
              <img src={`${PULL_ZONE}${img.src}`} className="w-full h-full object-cover" alt="Gallery item" />
              <button type="button" onClick={() => removeGalleryImage(i)} className="absolute inset-0 bg-red-600/80 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center font-black text-[10px] transition-all">QUITAR</button>
            </div>
          ))}
          <div className="aspect-square">
            <ImageUploader 
              folder="Proyectos" label="+" 
              onUploadSuccess={(name) => {
                const newImg = { type: 'image', src: name };
                setFormData({ ...formData, projectPage: { ...formData.projectPage, gallery: [...formData.projectPage.gallery, newImg] } })
              }} 
            />
          </div>
        </div>
      </section>

      {/* 3. TÍTULOS Y SEO */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-emerald-50/30 p-8 rounded-[3rem] space-y-6 border border-emerald-100">
          <h3 className="text-emerald-700 font-black">🇪🇸 CASTELLANO</h3>
          <input 
            placeholder="Nombre del Proyecto"
            className="w-full text-3xl font-black bg-transparent border-b-4 border-emerald-200 outline-none pb-2 focus:border-emerald-500 text-slate-900"
            value={formData.projectName.es}
            onChange={e => setFormData({...formData, projectName: {...formData.projectName, es: e.target.value}})}
          />
          <textarea 
            placeholder="Meta Description SEO"
            className="w-full p-4 bg-white rounded-2xl border border-emerald-100 text-sm shadow-sm text-slate-900"
            rows={2}
            value={formData.projectPage.pageDescription.es}
            onChange={e => setFormData({...formData, projectPage: {...formData.projectPage, pageDescription: {...formData.projectPage.pageDescription, es: e.target.value}}})}
          />
        </div>

        <div className="bg-blue-50/30 p-8 rounded-[3rem] space-y-6 border border-blue-100">
          <h3 className="text-blue-700 font-black">🇬🇧 ENGLISH</h3>
          <input 
            placeholder="Project Name"
            className="w-full text-3xl font-black bg-transparent border-b-4 border-blue-200 outline-none pb-2 focus:border-blue-500 text-slate-900"
            value={formData.projectName.en}
            onChange={e => setFormData({...formData, projectName: {...formData.projectName, en: e.target.value}})}
          />
          <textarea 
            placeholder="Meta Description SEO EN"
            className="w-full p-4 bg-white rounded-2xl border border-blue-100 text-sm shadow-sm text-slate-900"
            rows={2}
            value={formData.projectPage.pageDescription.en}
            onChange={e => setFormData({...formData, projectPage: {...formData.projectPage, pageDescription: {...formData.projectPage.pageDescription, en: e.target.value}}})}
          />
        </div>
      </div>

      {/* 4. SOBRE EL PROYECTO */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <textarea 
            placeholder="Sobre el proyecto (ES)..."
            className="w-full p-8 bg-slate-900 text-emerald-400 rounded-[3rem] font-mono text-sm h-80 outline-none border-none shadow-2xl"
            value={formData.projectPage.sobreElProyecto.es}
            onChange={e => setFormData({...formData, projectPage: {...formData.projectPage, sobreElProyecto: {...formData.projectPage.sobreElProyecto, es: e.target.value}}})}
          />
          <textarea 
            placeholder="About the project (EN)..."
            className="w-full p-8 bg-slate-900 text-blue-400 rounded-[3rem] font-mono text-sm h-80 outline-none border-none shadow-2xl"
            value={formData.projectPage.sobreElProyecto.en}
            onChange={e => setFormData({...formData, projectPage: {...formData.projectPage, sobreElProyecto: {...formData.projectPage.sobreElProyecto, en: e.target.value}}})}
          />
      </div>

      {/* 5. CONFIGURACIÓN */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white border-2 border-slate-100 p-8 rounded-[2.5rem]">
          <h4 className="font-black text-slate-800 mb-4 uppercase text-xs tracking-widest">💎 Materiales</h4>
          <textarea 
            className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl text-xs font-mono h-32 text-slate-900"
            placeholder="Material 1, Material 2..."
            value={formData.projectPage.materials.join(", ")}
            onChange={e => setFormData({...formData, projectPage: {...formData.projectPage, materials: e.target.value.split(", ").filter(m => m !== "")}})}
          />
        </div>

        <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white">
          <h4 className="font-black mb-6 uppercase text-xs tracking-widest text-slate-500">⚙️ Slugs & Filtro</h4>
          <div className="grid grid-cols-2 gap-4">
            <input className="bg-slate-800 border-none rounded-xl p-3 text-xs font-mono text-emerald-400" placeholder="slug-es" value={formData.slug_es} onChange={e => setFormData({...formData, slug_es: e.target.value})} />
            <input className="bg-slate-800 border-none rounded-xl p-3 text-xs font-mono text-blue-400" placeholder="slug-en" value={formData.slug_en} onChange={e => setFormData({...formData, slug_en: e.target.value})} />
            <input className="bg-slate-800 border-none rounded-xl p-3 text-xs font-bold col-span-2 text-white" placeholder="Filtro: Vivienda Privada" value={formData.projectPage.filtro} onChange={e => setFormData({...formData, projectPage: {...formData.projectPage, filtro: e.target.value}})} />
          </div>
        </div>
      </section>

      {/* BOTÓN FLOTANTE */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-full max-w-md px-6 z-50">
        <button 
          type="submit" disabled={loading}
          className="w-full py-6 bg-emerald-500 text-white rounded-full font-black text-2xl shadow-xl hover:bg-emerald-600 transition-all disabled:opacity-50"
        >
          {loading ? '📦 GUARDANDO...' : '🚀 GUARDAR PROYECTO'}
        </button>
      </div>
    </form>
  )
}