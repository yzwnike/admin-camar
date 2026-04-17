// /types/material.ts
export interface I18nText {
  es: string;
  en: string;
}

export interface Material {
  id?: string; // Autogenerado por Supabase
  material_name: string;
  material_type: I18nText;
  location: I18nText;
  description: I18nText;
  use: string[];
  image_url?: string;
  created_at?: string;
}