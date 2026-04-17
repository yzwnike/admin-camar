// /lib/queries.ts
import { supabase } from './supabase'

/**
 * Equivalente a getMaterialesByUse
 * Filtra materiales que contengan el uso (ej: 'hogar') en su array
 */
export const getMaterialesByUse = async (use: string, limit = 4) => {
  const query = supabase
    .from('materiales')
    .select('*')
  
  if (use !== 'all') {
    query.contains('use', [use]) // Supabase entiende arrays nativos
  }
  
  const { data } = await query.limit(limit)
  return data
}

/**
 * Equivalente a getRelatedMateriales
 * Busca materiales del mismo tipo (ej: Mármol) pero excluye el actual
 */
export const getRelatedMateriales = async (materialName: string, typeEs: string) => {
  const { data } = await supabase
    .from('materiales')
    .select('*')
    .eq('material_type->>es', typeEs) // Filtra dentro del JSONB
    .neq('material_name', materialName) // Excluye el actual
    .limit(5)
    
  return data
}