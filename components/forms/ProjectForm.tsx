'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import ImageUploader from '../ImageUploader'

export default function ProjectForm({ initialData }: { initialData?: any }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  
  // URL base de tu Pull Zone para Proyectos
  const PULL_ZONE = "https://lanzadera-digital.b-cdn.net/camar.es/Proyectos/"

  const [formData, setFormData] = useState({
    id: initialData?.id || null,
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
      gallery: [], // Array de objetos { type: 'image', src: 'nombre.webp' }
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
    const { error } = await supabase.from('proyectos').upsert(formData)
    if (error) {
      alert("Error: " + error.message)
    } else {
      alert("¡Proyecto guardado con éxito!")
      router.push('/admin/projects')
      router.refresh()
    }
    setLoading(false)
  }

  // Eliminar imagen de la galería
  const removeGalleryImage = (idx: number) => {
    const newGallery = formData.projectPage.gallery.filter((_: any, i: number) => i !== idx)
    setFormData({
      ...formData,
      projectPage: { ...formData.projectPage, gallery: newGallery }
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-12 pb-32">
      
      {/* 1. SECCIÓN MULTIMEDIA (MAIN & BG) */}
      <section className="bg-slate-50 p-8 rounded-[3rem] border border-slate-200">
        <h3 className="text-lg font-black mb-6 flex items-center gap-2 text-slate-800 uppercase tracking-tighter">🖼️ Imágenes Principales</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Main Image */}
          <div className="space-y-4">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Imagen de Portada (Card)</label>
            <ImageUploader 
              folder="Proyectos" 
              onUploadSuccess={(name) => setFormData({...formData, mainImage: name})} 
            />
            {formData.mainImage && (
              <div className="relative h-48 rounded-3xl overflow-hidden border-4 border-white shadow-xl">
                <img src={`${PULL_ZONE}${formData.mainImage}`} className="w-full h-full object-cover" />
                <div className="absolute bottom-2 left-2 bg-black/50 text-[10px] text-white px-2 py-1 rounded font-mono">{formData.mainImage}</div>
              </div>
            )}
          </div>

          {/* Background Image */}
          <div className="space-y-4">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Imagen Hero (Fondo de página)</label>
            <ImageUploader 
              folder="Proyectos" 
              label="Subir fondo (Wide)"
              onUploadSuccess={(name) => setFormData({...formData, bgImage: name})} 
            />
            {formData.bgImage && (
              <div className="relative h-48 rounded-3xl overflow-hidden border-4 border-white shadow-xl">
                <img src={`${PULL_ZONE}${formData.bgImage}`} className="w-full h-full object-cover" />
                <div className="absolute bottom-2 left-2 bg-black/50 text-[10px] text-white px-2 py-1 rounded font-mono">{formData.bgImage}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 2. GALERÍA DINÁMICA */}
      <section className="bg-white p-8 rounded-[3rem] border border-slate-200 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-black text-slate-800 uppercase tracking-tighter">📸 Galería del Proyecto</h3>
          <span className="text-xs font-bold bg-slate-100 text-slate-500 px-3 py-1 rounded-full">{formData.projectPage.gallery.length} Fotos</span>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {formData.projectPage.gallery.map((img: any, i: number) => (
            <div key={i} className="group relative aspect-square rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition">
              <img src={`${PULL_ZONE}${img.src}`} className="w-full h-full object-cover" />
              <button 
                type="button"
                onClick={() => removeGalleryImage(i)}
                className="absolute inset-0 bg-red-600/80 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center font-black text-[10px] transition-all"
              >
                QUITAR
              </button>
            </div>
          ))}
          <div className="aspect-square">
            <ImageUploader 
              folder="Proyectos" 
              label="+" 
              onUploadSuccess={(name) => {
                const newImg = { type: 'image', src: name };
                setFormData({
                  ...formData,
                  projectPage: { ...formData.projectPage, gallery: [...formData.projectPage.gallery, newImg] }
                })
              }} 
            />
          </div>
        </div>
      </section>

      {/* 3. TÍTULOS Y SEO */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-emerald-50/30 p-8 rounded-[3rem] space-y-6 border border-emerald-100">
          <h3 className="text-emerald-700 font-black flex items-center gap-2">🇪🇸 CASTELLANO</h3>
          <input 
            placeholder="Nombre del Proyecto"
            className="w-full text-3xl font-black bg-transparent border-b-4 border-emerald-200 focus:border-emerald-500 outline-none pb-2 transition-all"
            value={formData.projectName.es}
            onChange={e => setFormData({...formData, projectName: {...formData.projectName, es: e.target.value}})}
          />
          <input 
            placeholder="Meta Title SEO"
            className="w-full p-4 bg-white rounded-2xl border border-emerald-100 text-sm shadow-sm"
            value={formData.projectPage.pageTitle.es}
            onChange={e => setFormData({...formData, projectPage: {...formData.projectPage, pageTitle: {...formData.projectPage.pageTitle, es: e.target.value}}})}
          />
          <textarea 
            placeholder="Meta Description SEO"
            className="w-full p-4 bg-white rounded-2xl border border-emerald-100 text-sm shadow-sm"
            rows={2}
            value={formData.projectPage.pageDescription.es}
            onChange={e => setFormData({...formData, projectPage: {...formData.projectPage, pageDescription: {...formData.projectPage.pageDescription, es: e.target.value}}})}
          />
        </div>

        <div className="bg-blue-50/30 p-8 rounded-[3rem] space-y-6 border border-blue-100">
          <h3 className="text-blue-700 font-black flex items-center gap-2">🇬🇧 ENGLISH</h3>
          <input 
            placeholder="Project Name"
            className="w-full text-3xl font-black bg-transparent border-b-4 border-blue-200 focus:border-blue-500 outline-none pb-2 transition-all"
            value={formData.projectName.en}
            onChange={e => setFormData({...formData, projectName: {...formData.projectName, en: e.target.value}})}
          />
          <input 
            placeholder="Meta Title SEO EN"
            className="w-full p-4 bg-white rounded-2xl border border-blue-100 text-sm shadow-sm"
            value={formData.projectPage.pageTitle.en}
            onChange={e => setFormData({...formData, projectPage: {...formData.projectPage, pageTitle: {...formData.projectPage.pageTitle, en: e.target.value}}})}
          />
          <textarea 
            placeholder="Meta Description SEO EN"
            className="w-full p-4 bg-white rounded-2xl border border-blue-100 text-sm shadow-sm"
            rows={2}
            value={formData.projectPage.pageDescription.en}
            onChange={e => setFormData({...formData, projectPage: {...formData.projectPage, pageDescription: {...formData.projectPage.pageDescription, en: e.target.value}}})}
          />
        </div>
      </div>

      {/* 4. SOBRE EL PROYECTO */}
      <section className="space-y-4">
        <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-4">📜 Historia y Descripción Detallada</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <textarea 
            placeholder="Sobre el proyecto (ES)..."
            className="w-full p-8 bg-slate-900 text-emerald-400 rounded-[3rem] font-mono text-sm h-96 shadow-2xl focus:ring-4 focus:ring-emerald-500/20 outline-none border-none"
            value={formData.projectPage.sobreElProyecto.es}
            onChange={e => setFormData({...formData, projectPage: {...formData.projectPage, sobreElProyecto: {...formData.projectPage.sobreElProyecto, es: e.target.value}}})}
          />
          <textarea 
            placeholder="About the project (EN)..."
            className="w-full p-8 bg-slate-900 text-blue-400 rounded-[3rem] font-mono text-sm h-96 shadow-2xl focus:ring-4 focus:ring-blue-500/20 outline-none border-none"
            value={formData.projectPage.sobreElProyecto.en}
            onChange={e => setFormData({...formData, projectPage: {...formData.projectPage, sobreElProyecto: {...formData.projectPage.sobreElProyecto, en: e.target.value}}})}
          />
        </div>
      </section>

      {/* 5. DATOS TÉCNICOS Y CONFIGURACIÓN */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Materiales usados en la obra */}
        <div className="bg-white border-2 border-slate-100 p-8 rounded-[2.5rem] shadow-sm">
          <h4 className="font-black text-slate-800 mb-4 uppercase text-xs tracking-widest">💎 Materiales Utilizados</h4>
          <textarea 
            className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl text-xs font-mono text-slate-600 outline-none focus:border-blue-500 h-40"
            placeholder="Ej: Mármol Crema, Granito Negro..."
            value={formData.projectPage.materials.join(", ")}
            onChange={e => setFormData({...formData, projectPage: {...formData.projectPage, materials: e.target.value.split(", ")}})}
          />
          <p className="text-[10px] text-slate-400 mt-2 italic">Separa los nombres con coma y un espacio.</p>
        </div>

        {/* Slugs y Filtros */}
        <div className="md:col-span-2 bg-slate-900 p-8 rounded-[2.5rem] text-white">
          <h4 className="font-black mb-6 uppercase text-xs tracking-widest text-slate-500">⚙️ Configuración del Sistema</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             <div className="space-y-1">
               <label className="text-[10px] font-bold text-emerald-500">SLUG CASTELLANO</label>
               <input className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-sm font-mono" placeholder="vivienda-marbella" value={formData.slug_es} onChange={e => setFormData({...formData, slug_es: e.target.value})} />
             </div>
             <div className="space-y-1">
               <label className="text-[10px] font-bold text-blue-400">SLUG ENGLISH</label>
               <input className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-sm font-mono" placeholder="marbella-residence" value={formData.slug_en} onChange={e => setFormData({...formData, slug_en: e.target.value})} />
             </div>
             <div className="space-y-1">
               <label className="text-[10px] font-bold text-slate-400">UBICACIÓN (ES)</label>
               <input className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-sm font-bold" placeholder="Costa del Sol, España" value={formData.projectLocation.es} onChange={e => setFormData({...formData, projectLocation: {...formData.projectLocation, es: e.target.value}})} />
             </div>
             <div className="space-y-1">
               <label className="text-[10px] font-bold text-slate-400">FILTRO PRINCIPAL</label>
               <input className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-sm font-bold" placeholder="Vivienda Privada" value={formData.projectPage.filtro} onChange={e => setFormData({...formData, projectPage: {...formData.projectPage, filtro: e.target.value}})} />
             </div>
          </div>
        </div>
      </section>

      {/* BOTÓN FLOTANTE FINAL */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-full max-w-xl px-6 z-50">
        <button 
          type="submit" 
          disabled={loading}
          className="w-full py-6 bg-emerald-500 text-white rounded-full font-black text-2xl shadow-[0_20px_50px_rgba(16,185,129,0.4)] hover:bg-emerald-600 hover:scale-105 transition-all active:scale-95 disabled:opacity-50"
        >
          {loading ? '📦 GUARDANDO PROYECTO...' : '🚀 GUARDAR Y PUBLICAR OBRA'}
        </button>
      </div>

    </form>
  )
}