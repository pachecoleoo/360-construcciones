export type ProyectoStatus = "desarrollado" | "ejecucion";

export type ProyectoUnified = {
  id: string;
  status: ProyectoStatus;
  title: string;

  // ejecución
  description?: string;
  badge?: string;

  // desarrollado
  location?: string;
  year?: string;
  type?: string;
  highlights?: string[];
  href?: string;
  logoSrc?: string;

  // común (si querés usar imagen para ambos)
  imageSrc?: string;
};
