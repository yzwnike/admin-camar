# Integración de Noticias en el Front (Astro)

> **Para el agente que trabaja en el repositorio del FRONT.**
> Este documento es el contrato de datos + los pasos para mostrar las Noticias
> que se gestionan desde el panel admin (`admin-camar`).
> El panel **escribe** en la base de datos; el front solo **lee** (read-only).

---

## 1. Resumen / objetivo

- Las noticias viven en una base de datos **Neon Postgres**, tabla `noticias`.
- El front (Astro) leerá esa tabla **directamente** con el cliente `postgres` (postgres.js),
  en el lado servidor (frontmatter `---` de Astro / endpoints / `getStaticPaths`).
- Los **textos** son bilingües (ES/EN) guardados como JSONB `{ es, en }`.
- Las **imágenes y vídeos** NO están en la BD: solo se guarda el nombre de archivo.
  Las URLs reales se construyen apuntando a la CDN de Bunny.
- El campo `content` es **Markdown** y hay que renderizarlo a HTML.

Hay que crear:
1. Un cliente de BD reutilizable + funciones de consulta tipadas.
2. Helpers para URLs de CDN y para renderizar Markdown.
3. Página de **listado** de noticias.
4. Página de **detalle** por slug (ES y EN).

---

## 2. Origen de datos

- Motor: **PostgreSQL (Neon)**, acceso vía pooler.
- Cliente recomendado: [`postgres`](https://www.npmjs.com/package/postgres) (postgres.js), igual que el admin.
- La cadena de conexión ya usa el **pooler** de Neon (`-pooler` en el host), apto para serverless/SSR.

> **Seguridad — importante:** el front solo necesita `SELECT`. Lo ideal es **no** reutilizar
> la credencial del admin (que tiene permisos de escritura), sino crear un **rol read-only** en Neon
> y usar su connection string en el front. Ver §10.

### Variable de entorno

En el repo del front, crea `.env` (y configúrala también en el hosting):

```bash
# Connection string read-only de Neon (Postgres). Formato pooler:
DATABASE_URL="postgresql://USER:PASSWORD@HOST-pooler.REGION.aws.neon.tech/neondb?sslmode=require"
```

> ⚠️ **Trampa conocida:** no uses `process.env.DATABASE_URL!` (el `!` de TypeScript no garantiza nada
> en runtime). Si la variable falta, postgres.js intenta conectarse a `localhost:5432` y falla con
> `ECONNREFUSED` de forma confusa. **Valida la variable y lanza un error claro** (ver código abajo).

---

## 3. Esquema real de la tabla `noticias`

| Columna         | Tipo Postgres              | Nulo | Notas |
|-----------------|----------------------------|------|-------|
| `id`            | `uuid`                     | NO   | PK |
| `slug_es`       | `text`                     | sí   | Slug para la URL en español |
| `slug_en`       | `text`                     | sí   | Slug para la URL en inglés |
| `date`          | `date`                     | sí   | Fecha de publicación |
| `main_image`    | `text`                     | sí   | **Solo el nombre de archivo** (ej. `escultor-portugues-main.webp`) |
| `gallery`       | `jsonb` (default `[]`)     | sí   | Array de `{ type, src }` |
| `title`         | `jsonb` (default `{}`)     | sí   | `{ es, en }` |
| `excerpt`       | `jsonb` (default `{}`)     | sí   | `{ es, en }` (resumen / subtítulo) |
| `content`       | `jsonb` (default `{}`)     | sí   | `{ es, en }` — **Markdown** |
| `created_at`    | `timestamptz` (default now)| sí   | Auditoría |
| `folder_custom` | `text`                     | sí   | Carpeta en la CDN (ver §5) |

`postgres.js` devuelve las columnas `jsonb` **ya parseadas** (objetos/arrays JS), no strings.

### Ejemplo real de fila (devuelta por postgres.js)

```json
{
  "id": "14392f4b-7206-4cd9-bfc5-7ea395c123b5",
  "slug_es": "escultor-portugues-...",
  "slug_en": "the-portuguese-sculptor-...",
  "date": "2023-11-10T00:00:00.000Z",
  "main_image": "escultor-portugues-main.webp",
  "gallery": [
    { "type": "image", "src": "escultor-portugues-1.webp" },
    { "type": "video", "src": "escultor-portugues-1.mp4" }
  ],
  "title":   { "es": "El escultor portugués...", "en": "The Portuguese sculptor..." },
  "excerpt": { "es": "Resumen en español...",    "en": "Summary in english..." },
  "content": { "es": "Markdown en español...",   "en": "Markdown in english..." },
  "created_at": "2026-05-13T17:24:04.018Z",
  "folder_custom": "escultor-portugues"
}
```

---

## 4. Tipos TypeScript

Crea `src/lib/news.types.ts`:

```ts
export type Locale = 'es' | 'en';

export interface LocalizedText {
  es: string;
  en: string;
}

export interface GalleryItem {
  type: 'image' | 'video';
  src: string; // solo el nombre de archivo
}

export interface Noticia {
  id: string;
  slug_es: string | null;
  slug_en: string | null;
  date: string | null;          // viene como Date/ISO; trátalo como fecha
  main_image: string | null;    // solo nombre de archivo
  gallery: GalleryItem[];
  title: LocalizedText;
  excerpt: LocalizedText;
  content: LocalizedText;        // Markdown por idioma
  created_at: string;
  folder_custom: string | null;
}
```

---

## 5. Construcción de URLs de medios (CDN Bunny)

Las imágenes/vídeos **no** están en la BD. Se sirven desde Bunny CDN con esta estructura:

```
https://lanzadera-digital.b-cdn.net/camar.es/Noticias/{CARPETA}/{NOMBRE_ARCHIVO}
```

Donde:
- `{CARPETA}` = `folder_custom` **si existe**, si no `slug_es` (mismo fallback que usa el admin).
- `{NOMBRE_ARCHIVO}` = `main_image` o cada `gallery[i].src`.

Ejemplo:
```
folder_custom = "escultor-portugues"
main_image    = "escultor-portugues-main.webp"
→ https://lanzadera-digital.b-cdn.net/camar.es/Noticias/escultor-portugues/escultor-portugues-main.webp
```

> Los `gallery[i]` con `type: "video"` son normalmente `.mp4` → renderízalos con `<video>`, no `<img>`.

---

## 6. Internacionalización (ES / EN)

- Una misma fila contiene **ambos idiomas**.
- Para ES usa: `slug_es`, `title.es`, `excerpt.es`, `content.es`.
- Para EN usa: `slug_en`, `title.en`, `excerpt.en`, `content.en`.
- **Fallback:** algunos registros pueden tener el idioma EN vacío (`""`). Si el texto del idioma
  pedido está vacío, cae al español. (Helper `pick()` más abajo.)
- Dominios del proyecto (según enlaces internos del contenido): ES = `camar.es`, EN = `camarmarble.com`.
- Para `hreflang`/alternates: la URL ES de una noticia sale de `slug_es` y la EN de `slug_en` de la
  **misma fila**, así que puedes enlazarlas entre sí.

---

## 7. Markdown en `content`

`content.es` / `content.en` son **Markdown** (usan `**negrita**`, `## títulos`, listas `-`,
y enlaces `[texto](url)`). Hay que convertir a HTML y **sanear** antes de inyectar.

Instala:
```bash
npm i marked sanitize-html
npm i -D @types/sanitize-html
```

`src/lib/markdown.ts`:
```ts
import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

export function renderMarkdown(md: string | null | undefined): string {
  if (!md) return '';
  const rawHtml = marked.parse(md, { async: false }) as string;
  return sanitizeHtml(rawHtml, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'h1', 'h2']),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      a: ['href', 'name', 'target', 'rel'],
      img: ['src', 'alt'],
    },
    transformTags: {
      // abre enlaces externos en pestaña nueva de forma segura
      a: sanitizeHtml.simpleTransform('a', { rel: 'noopener noreferrer' }),
    },
  });
}
```

Luego en Astro se inyecta con `<div set:html={html} />` (ver §9).

---

## 8. Cliente de BD + consultas

`src/lib/db.ts`:
```ts
import postgres from 'postgres';

const connectionString = import.meta.env.DATABASE_URL ?? process.env.DATABASE_URL;

if (!connectionString) {
  // Falla claro en vez del confuso ECONNREFUSED a localhost:5432
  throw new Error('DATABASE_URL no está definida. Revisa el .env del front.');
}

// Reutiliza una sola instancia (evita agotar conexiones en dev/HMR y serverless)
export const sql = postgres(connectionString, {
  ssl: 'require',
  idle_timeout: 20,
  max: 5,
});
```

`src/lib/news.ts`:
```ts
import { sql } from './db';
import type { Noticia, Locale, LocalizedText } from './news.types';

const CDN_BASE = 'https://lanzadera-digital.b-cdn.net/camar.es/Noticias';

/** URL absoluta de un archivo (imagen/vídeo) de una noticia en la CDN. */
export function mediaUrl(n: Pick<Noticia, 'folder_custom' | 'slug_es'>, file: string): string {
  const folder = n.folder_custom || n.slug_es;
  return `${CDN_BASE}/${folder}/${file}`;
}

/** Devuelve el texto del idioma pedido, con fallback a español. */
export function pick(t: LocalizedText | null | undefined, lang: Locale): string {
  if (!t) return '';
  return (lang === 'en' ? t.en : t.es) || t.es || '';
}

/** Todas las noticias, más recientes primero. */
export async function getAllNews(): Promise<Noticia[]> {
  return await sql<Noticia[]>`SELECT * FROM noticias ORDER BY date DESC`;
}

/** Una noticia por slug, según idioma. */
export async function getNewsBySlug(slug: string, lang: Locale): Promise<Noticia | null> {
  const column = lang === 'en' ? 'slug_en' : 'slug_es';
  const rows = await sql<Noticia[]>`
    SELECT * FROM noticias WHERE ${sql(column)} = ${slug} LIMIT 1
  `;
  return rows[0] ?? null;
}
```

---

## 9. Páginas Astro

> **Decisión clave (SSG vs SSR):** con `getStaticPaths` la BD se lee **en build** → noticias nuevas
> no salen hasta reconstruir. Si necesitas que aparezcan al instante, usa **SSR**
> (`export const prerender = false;` con el adaptador node/vercel). Ver §10.

### 9.1. Listado — `src/pages/noticias/index.astro` (ES)

```astro
---
import { getAllNews, mediaUrl, pick } from '../../lib/news';
const lang = 'es';
const noticias = await getAllNews();
---
<section class="noticias">
  {noticias.map((n) => (
    <a href={`/noticias/${n.slug_es}`} class="card">
      {n.main_image && (
        <img src={mediaUrl(n, n.main_image)} alt={pick(n.title, lang)} loading="lazy" />
      )}
      <h2>{pick(n.title, lang)}</h2>
      <p>{pick(n.excerpt, lang)}</p>
      {n.date && <time datetime={n.date}>
        {new Date(n.date).toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' })}
      </time>}
    </a>
  ))}
</section>
```

### 9.2. Detalle — `src/pages/noticias/[slug].astro` (ES)

```astro
---
import { getAllNews, getNewsBySlug, mediaUrl, pick } from '../../lib/news';
import { renderMarkdown } from '../../lib/markdown';

const lang = 'es';

// SSG: genera una ruta por noticia con slug_es.
// (Para SSR, borra getStaticPaths y añade: export const prerender = false;)
export async function getStaticPaths() {
  const noticias = await getAllNews();
  return noticias
    .filter((n) => n.slug_es)
    .map((n) => ({ params: { slug: n.slug_es! } }));
}

const { slug } = Astro.params;
const noticia = await getNewsBySlug(slug!, lang);
if (!noticia) return Astro.redirect('/404');

const contentHtml = renderMarkdown(pick(noticia.content, lang));
---
<article class="noticia">
  <h1>{pick(noticia.title, lang)}</h1>
  {noticia.date && <time datetime={noticia.date}>
    {new Date(noticia.date).toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' })}
  </time>}

  {noticia.main_image && (
    <img src={mediaUrl(noticia, noticia.main_image)} alt={pick(noticia.title, lang)} />
  )}

  <div class="contenido" set:html={contentHtml} />

  {noticia.gallery.length > 0 && (
    <div class="galeria">
      {noticia.gallery.map((item) =>
        item.type === 'video' ? (
          <video src={mediaUrl(noticia, item.src)} controls preload="metadata"></video>
        ) : (
          <img src={mediaUrl(noticia, item.src)} alt="" loading="lazy" />
        )
      )}
    </div>
  )}
</article>
```

### 9.3. Versión inglés

Replica las páginas para EN (p. ej. `src/pages/en/news/index.astro` y `[slug].astro`),
usando `lang = 'en'`, `slug_en` y `'en-GB'`/`'en-US'` en el formateo de fecha.
Reutiliza exactamente los mismos helpers (`getAllNews`, `getNewsBySlug`, `mediaUrl`, `pick`).

> Ajusta las rutas (`/noticias` vs `/news`, prefijos de locale, dominios) a la convención i18n
> que **ya exista en el repo del front**. Revisa primero cómo están montadas las demás secciones.

---

## 10. Decisiones y consideraciones operativas

1. **SSG vs SSR (frescura del contenido).**
   - SSG (`getStaticPaths`): rápido y barato, pero requiere rebuild para ver noticias nuevas.
     Si se elige SSG, configura un **webhook de rebuild** (o build programado) cuando se publique.
   - SSR (`prerender = false` + adaptador node/vercel): siempre fresco; necesita la BD accesible
     en runtime. **Recomendado** si el equipo edita noticias con frecuencia.
2. **Credencial read-only (seguridad).** Crea en Neon un rol con solo `SELECT` sobre `noticias`:
   ```sql
   CREATE ROLE front_readonly LOGIN PASSWORD '...';
   GRANT CONNECT ON DATABASE neondb TO front_readonly;
   GRANT USAGE ON SCHEMA public TO front_readonly;
   GRANT SELECT ON noticias TO front_readonly;
   ```
   Usa su connection string (con `-pooler`) como `DATABASE_URL` del front.
3. **Pool de conexiones.** Usa siempre el host `-pooler` de Neon y una sola instancia de `sql`
   (no crear cliente por request). En serverless mantén `max` bajo (p. ej. 5).
4. **Secreto del servidor.** `DATABASE_URL` **nunca** debe llevar prefijo `PUBLIC_` ni exponerse al
   cliente. Solo se usa en frontmatter/endpoints (lado servidor). Si tu versión es **Astro 5**,
   considera declararla con `astro:env/server` (typed env) en lugar de leer `import.meta.env` a pelo.
5. **Sanitización.** El Markdown se inyecta con `set:html`: pásalo **siempre** por `sanitize-html`
   (ya incluido en el helper). No inyectes `content` sin sanear.
6. **Campos opcionales.** `main_image` y `slug_*` pueden ser `null`, y `gallery` puede ser `[]`.
   Renderiza condicionalmente (los ejemplos ya lo hacen).

---

## 11. Checklist de aceptación

- [ ] `npm i postgres marked sanitize-html` (+ `@types/sanitize-html`) en el repo del front.
- [ ] `DATABASE_URL` (read-only, pooler) en `.env` y en el hosting.
- [ ] `src/lib/db.ts`, `news.types.ts`, `news.ts`, `markdown.ts` creados.
- [ ] Listado `/noticias` muestra portada (`main_image`), título y `excerpt`, ordenado por fecha desc.
- [ ] Detalle `/noticias/[slug]` resuelve por `slug_es`, renderiza Markdown de `content` y la galería
      (imágenes y vídeos).
- [ ] Versión EN funcionando con `slug_en` y textos `.en` (con fallback a ES).
- [ ] URLs de CDN correctas: `…/camar.es/Noticias/{folder_custom||slug_es}/{archivo}`.
- [ ] SEO: `<title>`/meta description desde `title`/`excerpt`; `og:image` = URL CDN de `main_image`;
      `hreflang` enlazando ES↔EN de la misma noticia.
- [ ] 404 correcto cuando el slug no existe.
- [ ] Verificado contra datos reales (hay ~11 noticias en la BD a fecha de este documento).

---

## 12. Apéndice — consulta rápida para validar conexión

Snippet de prueba (Node, lado servidor) para confirmar que la credencial lee bien:

```ts
import { getAllNews } from './src/lib/news';
const noticias = await getAllNews();
console.log(noticias.length, noticias[0]?.title?.es);
```
