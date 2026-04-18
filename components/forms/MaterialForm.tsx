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
    id: initialData?.id || null,
    material_name: initialData?.material_name || '',
    material_type: initialData?.material_type || { es: '', en: '' },
    location: initialData?.location || { es: '', en: '' },
    description: initialData?.description || { es: '', en: '' },
    use: initialData?.use || [],
    main_image: initialData?.main_image || ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const result = await upsertMaterialAction(formData)

    if (!result.success) {
      alert("Error al guardar: " + result.error)
    } else {
      alert("¡Material guardado con éxito!")
      router.push('/admin/materials')
      router.refresh()
    }
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-12 pb-20">
      
      {/* 1. SECCIÓN DE IMAGEN */}
      <section className="bg-slate-50 p-6 rounded-[2.5rem] border border-slate-200">
        <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-slate-800">📸 Textura del Material</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1">
             <ImageUploader 
                folder="Materiales" 
                label="Subir Foto Real"
                onUploadSuccess={(fileName) => setFormData({...formData, main_image: fileName})} 
              />
          </div>

          <div className="md:col-span-2 flex items-center gap-6 bg-white p-4 rounded-3xl border border-slate-100 shadow-sm">
            <div className="w-32 h-32 rounded-2xl overflow-hidden bg-slate-100 border-2 border-slate-50 shadow-inner flex-shrink-0">
              {formData.main_image ? (
                <img 
                  src={`${PULL_ZONE}${formData.main_image}`} 
                  alt="Preview" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-[10px] text-slate-300 font-bold uppercase p-4 text-center">Sin imagen</div>
              )}
            </div>
            <div>
              <p className="text-xs font-black uppercase text-slate-400 tracking-widest mb-1">Nombre en CDN</p>
              <p className="text-sm font-mono text-blue-600 break-all">{formData.main_image || 'esperando subida...'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DATOS PRINCIPALES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <label className="text-xs font-black uppercase text-slate-500 tracking-widest ml-2">Nombre Comercial</label>
          <input 
            className="w-full p-5 bg-white border-2 border-slate-100 rounded-[2rem] font-bold text-2xl outline-none focus:border-blue-500 transition-all shadow-sm"
            value={formData.material_name}
            onChange={e => setFormData({...formData, material_name: e.target.value})}
            placeholder="Ej: Cuarcita Monterra"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-3">
            <label className="text-xs font-black uppercase text-slate-500 tracking-widest ml-2">Tipo (ES)</label>
            <input 
              className="w-full p-5 bg-white border-2 border-slate-100 rounded-[2rem] outline-none focus:border-blue-500 font-bold"
              value={formData.material_type.es}
              onChange={e => setFormData({...formData, material_type: {...formData.material_type, es: e.target.value}})}
              placeholder="Mármol"
            />
          </div>
          <div className="space-y-3">
            <label className="text-xs font-black uppercase text-slate-500 tracking-widest ml-2">Type (EN)</label>
            <input 
              className="w-full p-5 bg-white border-2 border-slate-100 rounded-[2rem] outline-none focus:border-blue-500 font-bold"
              value={formData.material_type.en}
              onChange={e => setFormData({...formData, material_type: {...formData.material_type, en: e.target.value}})}
              placeholder="Marble"
            />
          </div>
        </div>
      </div>

      {/* 3. ORIGEN Y USOS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="space-y-3">
            <label className="text-xs font-black uppercase text-slate-500 tracking-widest ml-2">País de Origen</label>
            <div className="flex gap-4">
              <input className="flex-1 p-5 bg-white border-2 border-slate-100 rounded-[2rem] outline-none focus:border-blue-500" placeholder="ES" value={formData.location.es} onChange={e => setFormData({...formData, location: {...formData.location, es: e.target.value}})} />
              <input className="flex-1 p-5 bg-white border-2 border-slate-100 rounded-[2rem] outline-none focus:border-blue-500" placeholder="EN" value={formData.location.en} onChange={e => setFormData({...formData, location: {...formData.location, en: e.target.value}})} />
            </div>
         </div>

         <div className="space-y-3">
            <label className="text-xs font-black uppercase text-slate-500 tracking-widest ml-2">Usos (separados por coma)</label>
            <input 
              className="w-full p-5 bg-slate-900 text-emerald-400 border-none rounded-[2rem] font-mono text-sm outline-none"
              placeholder="hogar, suelos..."
              value={formData.use.join(", ")}
              onChange={e => {
                const val = e.target.value.split(",").map(item => item.trim()).filter(i => i !== "");
                setFormData({...formData, use: val})
              }}
            />
            <div className="flex gap-2 flex-wrap pl-2">
              {formData.use.map((tag: string, i: number) => (
                <span key={i} className="text-[10px] bg-slate-100 text-slate-500 px-2 py-1 rounded-full font-bold uppercase">{tag}</span>
              ))}
            </div>
         </div>
      </div>

      {/* 4. DESCRIPCIONES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <textarea 
          rows={5}
          className="w-full p-6 bg-white border-2 border-slate-100 rounded-[2.5rem] outline-none focus:border-blue-500"
          value={formData.description.es}
          onChange={e => setFormData({...formData, description: {...formData.description, es: e.target.value}})}
          placeholder="Descripción Castellano"
        />
        <textarea 
          rows={5}
          className="w-full p-6 bg-white border-2 border-slate-100 rounded-[2.5rem] outline-none focus:border-blue-500"
          value={formData.description.en}
          onChange={e => setFormData({...formData, description: {...formData.description, en: e.target.value}})}
          placeholder="Description English"
        />
      </div>

      <div className="pt-10 flex justify-center">
        <button 
          type="submit" 
          disabled={loading}
          className="w-full max-w-2xl py-6 bg-slate-900 text-white rounded-[2.5rem] font-black text-2xl hover:bg-emerald-600 transition-all shadow-xl disabled:opacity-50"
        >
          {loading ? '📦 GUARDANDO...' : '💎 ACTUALIZAR MATERIAL'}
        </button>
      </div>
    </form>
  )
}