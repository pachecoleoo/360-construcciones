export type ProyectoStatus = "desarrollado" | "ejecucion" | "futuro";

export type ProjectSection =
  | {
      type: "intro";
      eyebrow?: string;
      title: string;
      paragraphs: string[];
    }
  | {
      type: "location";
      eyebrow?: string;
      title: string;
      description: string;
      imageSrc?: string;
    }
  | {
      type: "program";
      eyebrow?: string;
      title: string;
      items: {
        label: string;
        value: string[];
      }[];
    }
  | {
      type: "equipment";
      eyebrow?: string;
      title: string;
      items: string[];
    }
  | {
      type: "gallery";
      eyebrow?: string;
      title: string;
      images: string[];
    }
  | {
      type: "plans";
      eyebrow?: string;
      title: string;
      images: string[];
    }
  | {
      type: "cta";
      title: string;
      description: string;
    };

export type ProyectoUnified = {
  id: string;
  status: ProyectoStatus;
  title: string;
  slug: string;

  location?: string;
  year?: string;
  type?: string;

  imageSrc?: string;
  heroImageSrc?: string;
  logoSrc?: string;

  sections?: ProjectSection[];
};
