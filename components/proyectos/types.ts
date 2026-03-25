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
      type: "typologies";
      eyebrow?: string;
      title: string;
      items: {
        name: string;
        units?: string[];
        description?: string;
        covered?: string;
        semiCovered?: string;
        total?: string;
        imageSrc?: string;
      }[];
    }
  | {
      type: "cta";
      title: string;
      description: string;
    };
