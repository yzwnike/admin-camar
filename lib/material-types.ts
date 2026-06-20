// Mapa interno de tipos de material (fuente de verdad).
// Formato capitalizado y traducción ES -> EN, tal y como están los datos correctos en la BD.
export interface MaterialType {
  es: string
  en: string
}

export const MATERIAL_TYPES: MaterialType[] = [
  { es: 'Mármol', en: 'Marble' },
  { es: 'Granito', en: 'Granite' },
  { es: 'Cuarcita', en: 'Quartzite' },
  { es: 'Caliza', en: 'Limestone' },
  { es: 'Travertino', en: 'Travertine' },
  { es: 'Ónix', en: 'Onyx' },
  { es: 'Arenisca', en: 'Sandstone' },
  { es: 'Pórfido', en: 'Porphyry' },
  { es: 'Alabastro', en: 'Alabaster' },
  { es: 'Mineral', en: 'Mineral' },
]

// Lista de valores ES (capitalizados) para los desplegables
export const MATERIAL_TYPE_ES = MATERIAL_TYPES.map((t) => t.es)

const normalize = (s: string) =>
  (s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim()

/** Devuelve la traducción EN a partir del valor ES (insensible a acentos/mayúsculas). */
export function getMaterialTypeEn(es: string): string {
  const match = MATERIAL_TYPES.find((t) => normalize(t.es) === normalize(es))
  return match ? match.en : es
}

/**
 * Normaliza cualquier valor ES guardado (incluido legacy en MAYÚSCULAS) al
 * valor canónico capitalizado del mapa. Devuelve '' si no coincide con ninguno.
 */
export function resolveMaterialTypeEs(value: string): string {
  const match = MATERIAL_TYPES.find((t) => normalize(t.es) === normalize(value))
  return match ? match.es : ''
}
