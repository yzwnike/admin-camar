// /lib/queries.ts
import { supabase } from './supabase'

/**
 * Equivalente a getMaterialesByUse
 * Filtra materiales usando el operador de contención de Postgres (@>)
 */
export const getMaterialesByUse = async (use: string, limit = 4) => {
  try {
    if (use === 'all') {
      return await supabase`
        SELECT * FROM materiales 
        LIMIT ${limit}
      `;
    }

    // El operador @> busca si el valor existe dentro del array/JSONB
    return await supabase`
      SELECT * FROM materiales 
      WHERE use @> ${JSON.stringify([use])}
      LIMIT ${limit}
    `;
  } catch (error) {
    console.error("Error en getMaterialesByUse:", error);
    return [];
  }
}

/**
 * Equivalente a getRelatedMateriales
 * Filtra por tipo dentro de JSONB y excluye el nombre actual
 */
export const getRelatedMateriales = async (materialName: string, typeEs: string) => {
  try {
    // Usamos ->> para acceder a la propiedad de texto dentro del JSONB de Postgres
    return await supabase`
      SELECT * FROM materiales 
      WHERE material_type->>'es' = ${typeEs}
      AND material_name != ${materialName}
      LIMIT 5
    `;
  } catch (error) {
    console.error("Error en getRelatedMateriales:", error);
    return [];
  }
}