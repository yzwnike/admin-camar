import 'server-only'

/**
 * Dispara el deploy hook (rebuild del front en Astro/Cloudflare Pages)
 * cuando hay un cambio de contenido.
 *
 * Controlado por flag para no redeployar en desarrollo:
 *   - DEPLOY_HOOK_ENABLED=true   -> activa el envío
 *   - DEPLOY_HOOK_URL=...        -> URL del deploy hook
 *
 * Nunca lanza: un fallo del hook no debe romper el guardado.
 */
export async function triggerDeploy() {
  if (process.env.DEPLOY_HOOK_ENABLED !== 'true') return
  const url = process.env.DEPLOY_HOOK_URL
  if (!url) return

  try {
    const res = await fetch(url, { method: 'POST' })
    if (res.ok) {
      console.log('🚀 Deploy hook disparado (rebuild del front)')
    } else {
      console.error('Deploy hook respondió', res.status)
    }
  } catch (error) {
    console.error('No se pudo disparar el deploy hook:', error)
  }
}
