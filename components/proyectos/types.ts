export type ProyectoStatus = "desarrollado" | "ejecucion";

export type ProyectoUnified = {
  id: string;
  status: ProyectoStatus;
  title: string;
  slug: string;

  // común
  imageSrc?: string; // imagen de card / secundaria
  heroImageSrc?: string; // imagen principal del hero
  logoSrc?: string;

  // ejecución
  description?: string;
  badge?: string;

  // desarrollado
  location?: string;
  year?: string;
  type?: string;
  highlights?: string[];

  // contenido interno
  sectionEyebrow?: string;
  sectionTitle?: string;
  paragraphs?: string[];

  technicalTitle?: string;
  technicalItems?: string[];
};
