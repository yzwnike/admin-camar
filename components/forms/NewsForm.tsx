'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { upsertNewsAction } from '@/app/admin/news/actions'
import ImageUploader from '../ImageUploader'

export default function NewsForm({ initialData, isEditing }: { initialData?: any, isEditing?: boolean }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  
  const PULL_ZONE = "https://lanzadera-digital.b-cdn.net/camar.es/Noticias/"

  const [formData, setFormData] = useState({
    id: initialData?.id || '',
    title: initialData?.title || { es: '', en: '' },
    slug_es: initialData?.slug_es || '',
    slug_en: initialData?.slug_en || '',
    folder_custom: initialData?.folder_custom || '', 
    date: initialData?.date || new Date().toISOString().split('T')[0],
    excerpt: initialData?.excerpt || { es: '', en: '' },
    content: initialData?.content || { es: '', en: '' },
    main_image: initialData?.main_image || '',
    gallery: initialData?.gallery || []
  })

  const slugify = (text: string) => 
    text.toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');

  const currentFolder = (formData.folder_custom || formData.slug_es || '').replace(/\/$/, '');
  
  const getImageUrl = (fileName: string) => {
    if (!fileName) return '';
    if (fileName.startsWith('http')) return fileName;
    return `${PULL_ZONE}${currentFolder}/${fileName}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    if (!formData.title.es) {
        alert("El título en español es obligatorio")
        setLoading(false)
        return
    }

    try {
      // 1. Creamos FormData nativo para la Server Action
      const data = new FormData()
      data.append('id', formData.id)
      data.append('slug_es', formData.slug_es)
      data.append('slug_en', formData.slug_en)
      data.append('folder_custom', formData.folder_custom)
      data.append('date', formData.date)
      data.append('main_image', formData.main_image)

      // 2. Serializamos objetos complejos a JSON string
      data.append('title', JSON.stringify(formData.title))
      data.append('excerpt', JSON.stringify(formData.excerpt))
      data.append('content', JSON.stringify(formData.content))
      data.append('gallery', JSON.stringify(formData.gallery))

      const result = await upsertNewsAction(data)

      if (result?.success) {
        router.push('/admin/news')
        router.refresh()
      } else {
        alert("Error: " + result?.error)
      }
    } catch (err) {
      console.error(err)
      alert("Error crítico al procesar la noticia")
    } finally {
      setLoading(false)
    }
  }

  const removeGalleryImage = (idx: number) => {
    setFormData({
      ...formData,
      gallery: formData.gallery.filter((_: any, i: number) => i !== idx)
    })
  }

  const handleTitleChange = (val: string) => {
    const newSlug = slugify(val);
    setFormData({
      ...formData,
      title: { ...formData.title, es: val },
      slug_es: isEditing ? formData.slug_es : newSlug,
      folder_custom: isEditing ? formData.folder_custom : newSlug
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-12 pb-20">
      
      {/* SECCIÓN CDN */}
      <section className="bg-blue-50 p-6 rounded-3xl border border-blue-200">
        <div className="flex items-center gap-4">
          <div className="text-xl">📂</div>
          <div className="flex-1">
            <label className="text-[10px] font-black uppercase text-blue-400 block tracking-widest mb-1">Ruta de Carpeta en CDN</label>
            <input 
              className="w-full bg-transparent border-b border-blue-200 py-1 text-sm font-mono text-blue-800 outline-none"
              value={formData.folder_custom}
              onChange={(e) => setFormData({...formData, folder_custom: e.target.value})}
              placeholder="nombre-carpeta-noticia"
            />
          </div>
        </div>
      </section>

      {/* MULTIMEDIA */}
      <section className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
        <h3 className="text-lg font-bold mb-6 text-slate-800">🖼️ Multimedia & CDN</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 space-y-4 text-slate-900">
            <label className="text-xs font-black uppercase text-slate-400 block tracking-widest">Portada</label>
            <div className="aspect-video bg-white rounded-2xl overflow-hidden border-2 border-slate-200 relative">
              {formData.main_image ? (
                <img src={getImageUrl(formData.main_image)} className="w-full h-full object-cover" alt="Main" />
              ) : (
                <div className="flex items-center justify-center h-full text-[10px] text-slate-300 font-bold uppercase">Sin Imagen</div>
              )}
            </div>
            <ImageUploader 
              folder={`Noticias/${currentFolder}` as any} 
              label="SUBIR PORTADA"
              onUploadSuccess={(fileName) => setFormData({...formData, main_image: fileName})} 
            />
          </div>
          
          <div className="md:col-span-3 space-y-4">
            <label className="text-xs font-black uppercase text-slate-400 block tracking-widest">Galería ({formData.gallery.length})</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 text-slate-900">
              {formData.gallery.map((img: any, idx: number) => (
                <div key={idx} className="aspect-square bg-white rounded-xl overflow-hidden border border-slate-200 relative group">
                  <img src={getImageUrl(img.src || img)} className="w-full h-full object-cover" alt="Gallery" />
                  <button type="button" onClick={() => removeGalleryImage(idx)} className="absolute inset-0 bg-red-600/90 text-white opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center font-black text-[10px]">ELIMINAR</button>
                </div>
              ))}
              <div className="aspect-square">
                <ImageUploader 
                  folder={`Noticias/${currentFolder}` as any} 
                  label="+"
                  onUploadSuccess={(fileName) => {
                    const newImg = { type: 'image', src: fileName };
                    setFormData({...formData, gallery: [...formData.gallery, newImg]});
                  }} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASTELLANO */}
      <section className="space-y-6">
        <span className="bg-yellow-400 text-yellow-900 px-4 py-1.5 rounded-full text-[11px] font-black uppercase">Castellano</span>
        <div className="space-y-4">
          <input 
            placeholder="Título de la noticia"
            className="w-full text-4xl font-black bg-transparent border-b-4 border-slate-100 focus:border-yellow-400 outline-none pb-4 transition-colors text-slate-900"
            value={formData.title.es}
            onChange={(e) => handleTitleChange(e.target.value)}
          />
          <textarea 
            placeholder="Resumen..."
            className="w-full p-5 bg-slate-50 rounded-[2rem] border border-slate-200 outline-none text-slate-900"
            rows={2}
            value={formData.excerpt.es}
            onChange={(e) => setFormData({...formData, excerpt: {...formData.excerpt, es: e.target.value}})}
          />
          <textarea 
            placeholder="Contenido..."
            className="w-full p-6 bg-white rounded-[2rem] border border-slate-200 outline-none font-serif text-lg min-h-[400px] text-slate-900"
            value={formData.content.es}
            onChange={(e) => setFormData({...formData, content: {...formData.content, es: e.target.value}})}
          />
        </div>
      </section>

      {/* ENGLISH */}
      <section className="space-y-6">
        <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-[11px] font-black uppercase">English</span>
        <div className="space-y-4">
          <input 
            placeholder="English Title"
            className="w-full text-4xl font-black bg-transparent border-b-4 border-slate-100 focus:border-blue-600 outline-none pb-4 transition-colors text-slate-900"
            value={formData.title.en}
            onChange={(e) => setFormData({...formData, title: {...formData.title, en: e.target.value}})}
          />
          <textarea 
            placeholder="English content..."
            className="w-full p-6 bg-white rounded-[2rem] border border-slate-200 outline-none font-serif text-lg min-h-[400px] text-slate-900"
            value={formData.content.en}
            onChange={(e) => setFormData({...formData, content: {...formData.content, en: e.target.value}})}
          />
        </div>
      </section>

      {/* TÉCNICO */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-900 p-8 rounded-[3rem] text-white">
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Slug (ES)</label>
          <input className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-sm font-mono text-emerald-400 outline-none" value={formData.slug_es} onChange={e => setFormData({...formData, slug_es: e.target.value})} />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Slug (EN)</label>
          <input className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-sm font-mono text-blue-400 outline-none" value={formData.slug_en} onChange={e => setFormData({...formData, slug_en: e.target.value})} />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Fecha</label>
          <input type="date" className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-sm outline-none text-white" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
        </div>
      </section>

      {/* BOTÓN FLOTANTE */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-md px-4 z-50">
        <button 
          type="submit" 
          disabled={loading}
          className="w-full py-5 bg-emerald-500 text-white rounded-full font-black text-xl hover:bg-emerald-600 transition-all shadow-xl active:scale-95 disabled:opacity-50 uppercase"
        >
          {loading ? '📦 Guardando...' : isEditing ? '💾 Guardar Cambios' : '🚀 Publicar Noticia'}
        </button>
      </div>
    </form>
  )
}