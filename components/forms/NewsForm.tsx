'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { upsertNewsAction } from '@/app/admin/news/actions'
import ImageUploader from '../ImageUploader'
import { deleteFileFromBunny } from '@/lib/bunny-actions'

interface Props {
  initialData?: any
  isEditing?: boolean
  existingFolder?: string
}

export default function NewsForm({ initialData, isEditing, existingFolder }: Props) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const PULL_ZONE = "https://lanzadera-digital.b-cdn.net"

  // 1. PRIORIDAD ABSOLUTA: folder_custom de la base de datos
  const [folderName, setFolderName] = useState(initialData?.folder_custom || existingFolder || '');

  const parseSafe = (data: any, fallback: any) => {
    if (!data) return fallback;
    if (typeof data !== 'string') return data;
    try {
      const parsed = JSON.parse(data);
      return typeof parsed === 'string' ? JSON.parse(parsed) : parsed;
    } catch {
      return fallback;
    }
  };

  const [formData, setFormData] = useState({
    id: initialData?.id || '',
    title: parseSafe(initialData?.title, { es: '', en: '' }),
    slug_es: initialData?.slug_es || '',
    slug_en: initialData?.slug_en || '',
    date: initialData?.date ? new Date(initialData.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
    excerpt: parseSafe(initialData?.excerpt, { es: '', en: '' }),
    content: parseSafe(initialData?.content, { es: '', en: '' }),
    main_image: initialData?.main_image || '',
    gallery: parseSafe(initialData?.gallery, [])
  })

  const slugify = (text: string) =>
    text.toLowerCase().trim()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');

  // 2. SOLO GENERAR FOLDER SI ES NUEVA NOTICIA
  useEffect(() => {
    if (isEditing || folderName) return;
    if (formData.title.es) {
      setFolderName(slugify(formData.title.es));
    }
  }, [formData.title.es, isEditing, folderName]);

  // 3. RUTA DE IMAGEN: Usa folderName que es folder_custom
  const getImageUrl = (fileName: string) => {
    if (!fileName) return '';
    if (fileName.startsWith('http')) return fileName;
    const path = folderName || slugify(formData.title.es) || 'temp';
    return `${PULL_ZONE}/camar.es/Noticias/${path}/${fileName}`;
  };

  const handleTitleChange = (val: string) => {
    setFormData(prev => ({
      ...prev,
      title: { ...prev.title, es: val },
      slug_es: slugify(val)
    }));
  }

  const handleDeleteImage = async (fileName: string, isGallery: boolean, index?: number) => {
    if (!confirm("¿Borrar permanentemente del CDN?")) return;
    try {
      const res = await deleteFileFromBunny('Noticias', fileName, folderName);
      if (res.success || res.status === 404) {
        if (isGallery && index !== undefined) {
          const newGallery = [...formData.gallery];
          newGallery.splice(index, 1);
          setFormData(prev => ({ ...prev, gallery: newGallery }));
        } else {
          setFormData(prev => ({ ...prev, main_image: '' }));
        }
      }
    } catch (error) {
      alert("Error al borrar");
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const data = new FormData()
      data.append('id', formData.id)
      data.append('slug_es', formData.slug_es)
      data.append('slug_en', formData.slug_en || slugify(formData.title.en || formData.slug_es))

      // 4. GUARDAR EXPLÍCITAMENTE folder_custom
      data.append('folder_custom', folderName)

      data.append('date', formData.date)
      data.append('main_image', formData.main_image)
      data.append('title', JSON.stringify(formData.title))
      data.append('excerpt', JSON.stringify(formData.excerpt))
      data.append('content', JSON.stringify(formData.content))
      data.append('gallery', JSON.stringify(formData.gallery))

      const result = await upsertNewsAction(data)
      if (result?.success) {
        router.push('/admin/news')
        router.refresh()
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10 pb-32">

      {/* INFO RUTA - Debug Visual */}
      <section className="rounded-xl border border-secondaryBlack bg-dynamicBlack p-6">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-baliPearl/50">
            Storage Path (folder_custom)
          </p>
          <p className="mt-1 font-mono text-xs text-bubonicBrown">/Noticias/{folderName || 'generando...'}/</p>
        </div>
      </section>

      {/* MULTIMEDIA */}
      <section className="rounded-xl border border-dynamicBlack/10 bg-baliPearl p-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">

          <div className="space-y-4 lg:col-span-1">
            <label className="label">Portada</label>
            <div className="group relative aspect-4/5 overflow-hidden rounded-xl border border-dynamicBlack/10 bg-white">
              {formData.main_image ? (
                <>
                  <img src={getImageUrl(formData.main_image)} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Main" />
                  <button
                    type="button"
                    onClick={() => handleDeleteImage(formData.main_image, false)}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-red-600/90 text-baliPearl opacity-0 default-transition group-hover:opacity-100"
                  >
                    <span className="text-xs font-bold uppercase tracking-wide">Eliminar archivo</span>
                  </button>
                </>
              ) : (
                <div className="flex h-full items-center justify-center p-10 text-center text-[10px] uppercase italic leading-relaxed text-dynamicBlack/30">Sube la portada principal</div>
              )}
            </div>
            <ImageUploader
              folder={`Noticias/${folderName}` as any}
              onUploadSuccess={(file) => setFormData({...formData, main_image: file})}
            />
          </div>

          <div className="space-y-4 lg:col-span-3">
            <label className="label">Galería de imágenes</label>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
              {formData.gallery.map((item: any, idx: number) => {
                const src = typeof item === 'string' ? item : item.src;
                return (
                  <div key={idx} className="group relative aspect-square overflow-hidden rounded-md border border-dynamicBlack/10 bg-white">
                    <img src={getImageUrl(src)} className="h-full w-full object-cover" alt={`Gal ${idx}`} />
                    <button
                      type="button"
                      onClick={() => handleDeleteImage(src, true, idx)}
                      className="absolute inset-0 flex items-center justify-center bg-red-600/95 text-[9px] font-bold uppercase tracking-wide text-baliPearl opacity-0 default-transition group-hover:opacity-100"
                    >
                      Borrar
                    </button>
                  </div>
                )
              })}
              <div className="aspect-square">
                <ImageUploader
                  folder={`Noticias/${folderName}` as any}
                  label="+"
                  onUploadSuccess={(file) => setFormData({...formData, gallery: [...formData.gallery, { src: file, type: 'image' }]})}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENIDO IDIOMAS */}
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
        {/* Castellano */}
        <section className="card space-y-6">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-bubonicBrown"></span>
            <span className="font-vollkorn text-sm uppercase tracking-widest text-dynamicBlack/60">Castellano</span>
          </div>
          <input
            placeholder="Título de la noticia..."
            className="w-full border-0 border-b-2 border-dynamicBlack/10 bg-transparent pb-4 font-vollkorn text-4xl text-dynamicBlack outline-none default-transition placeholder:text-dynamicBlack/20 focus:border-bubonicBrown"
            value={formData.title.es}
            onChange={(e) => handleTitleChange(e.target.value)}
            required
          />
          <div>
            <label className="label">Contenido (Markdown)</label>
            <textarea
              placeholder="Cuerpo de la noticia..."
              className="input min-h-120 leading-relaxed"
              value={formData.content.es}
              onChange={(e) => setFormData({...formData, content: {...formData.content, es: e.target.value}})}
            />
          </div>
        </section>

        {/* Inglés */}
        <section className="card space-y-6 bg-baliPearl">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-dynamicBlack"></span>
            <span className="font-vollkorn text-sm uppercase tracking-widest text-dynamicBlack/60">English</span>
          </div>
          <input
            placeholder="News headline..."
            className="w-full border-0 border-b-2 border-dynamicBlack/10 bg-transparent pb-4 font-vollkorn text-4xl text-dynamicBlack outline-none default-transition placeholder:text-dynamicBlack/20 focus:border-dynamicBlack"
            value={formData.title.en}
            onChange={(e) => setFormData({...formData, title: {...formData.title, en: e.target.value}})}
          />
          <div>
            <label className="label">Content (Markdown)</label>
            <textarea
              placeholder="News body content..."
              className="input min-h-120 leading-relaxed"
              value={formData.content.en}
              onChange={(e) => setFormData({...formData, content: {...formData.content, en: e.target.value}})}
            />
          </div>
        </section>
      </div>

      {/* FECHA Y SLUG */}
      <section className="grid grid-cols-1 gap-8 rounded-xl border border-secondaryBlack bg-dynamicBlack p-10 md:grid-cols-2">
        <div>
          <label className="label text-baliPearl/50!">Slug English (SEO)</label>
          <input
            className="w-full rounded-md border border-secondaryBlack bg-secondaryBlack/50 p-4 font-mono text-sm text-bubonicBrown outline-none default-transition focus:border-bubonicBrown"
            value={formData.slug_en}
            onChange={e => setFormData({...formData, slug_en: slugify(e.target.value)})}
          />
        </div>
        <div>
          <label className="label text-baliPearl/50!">Fecha de publicación</label>
          <input
            type="date"
            className="w-full rounded-md border border-secondaryBlack bg-secondaryBlack/50 p-4 text-sm text-baliPearl outline-none default-transition focus:border-bubonicBrown scheme-dark"
            value={formData.date}
            onChange={e => setFormData({...formData, date: e.target.value})}
          />
        </div>
      </section>

      {/* BOTÓN FLOTANTE */}
      <div className="fixed bottom-10 left-1/2 z-100 w-full max-w-md -translate-x-1/2 px-8">
        <button type="submit" disabled={loading} className="btn-gold w-full py-4 text-lg shadow-2xl">
          {loading ? 'Guardando cambios...' : (isEditing ? 'Actualizar noticia' : 'Publicar noticia')}
        </button>
      </div>
    </form>
  )
}
