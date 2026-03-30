import ProjectHero from "@/components/proyectos/sections/ProjectHero";
import ProjectAmenities from "@/components/proyectos/sections/ProjectAmenities";
import ProjectIntroWithData from "@/components/proyectos/sections/ProjectIntroWithData";
import ProjectGallery from "@/components/proyectos/sections/ProjectGallery";
import ProjectLocationMap from "@/components/proyectos/sections/ProjectLocationMap";
import ProjectContactForm from "@/components/proyectos/sections/ProjectContactForm";
import ProjectGallerySlider2 from "@/components/proyectos/sections/ProjectGallerySlider2";
import Footer from "@/components/footer/Footer";
export default function EdificioPage() {
  return (
    <main className="bg-white text-slate-900">
      <ProjectHero
        title="Gatica 498"
        location="Neuquén, Argentina"
        heroImageSrc="/images/gatica/exterior.jpg"
      />
      <ProjectIntroWithData
        eyebrow=""
        title="Un nuevo estándar residencial en Neuquén"
        paragraphs={[
          "Gatica 498 es un desarrollo pensado para elevar la experiencia urbana, integrando diseño contemporáneo, calidad constructiva y una fuerte presencia arquitectónica dentro de la ciudad.",
          "El proyecto combina soluciones técnicas de alta prestación con espacios comunes exclusivos, proponiendo una forma de habitar más completa, eficiente y alineada con las nuevas demandas residenciales.",
        ]}
        dataTitle="Ficha técnica"
        items={[
          { label: "Proyecto", value: "Gatica 498" },
          { label: "Ubicación", value: "Neuquén, Argentina" },
          { label: "Tipo", value: "Edificio residencial" },
          { label: "Estado", value: "En desarrollo" },
          { label: "Pisos", value: "17" },
          { label: "Unidades", value: "1, 2 y 3 ambientes" },
          { label: "Superficie", value: "30 a 135 m²" },
          { label: "Cocheras", value: "126 unidades" },
        ]}
        button={{
          label: "Ver brochure",
          href: "/brochures/gatica498.pdf",
          variant: "dark",
          target: "_blank",
          rel: "noopener noreferrer",
        }}
      />
      <ProjectAmenities
        title="Amenities"
        items={[
          {
            icon: "/icons/pileta.png",
            label: "Piscina & Solárium",
            description:
              "Piscina descubierta de 75 m² con solárium húmedo y seco.",
          },
          {
            icon: "/icons/parrilla.png",
            label: "SUM con vistas",
            description:
              "Dos salones de usos múltiples en piso 17 con vistas panorámicas.",
          },
          {
            icon: "/icons/wellness.png",
            label: "Área wellness",
            description: "Piscina climatizada y espacios de relax.",
          },
          {
            icon: "/icons/seguridad.png",
            label: "Seguridad integral",
            description:
              "Sistema de cámaras, control de accesos y monitoreo en espacios comunes.",
          },
          {
            icon: "/icons/ascensor.png",
            label: "Ascensores premium",
            description:
              "Ascensores de última generación con cabinas de acero inoxidable.",
          },
          {
            icon: "/icons/cocheras.png",
            label: "Cocheras",
            description:
              "Edificio independiente con 126 unidades y acceso automatizado.",
          },
        ]}
      />
      <ProjectGallery
        eyebrow=""
        title="GALERIA DE LA OBRA"
        intro="Una lectura visual de los espacios, materiales y atmósfera general del desarrollo."
        images={[
          {
            src: "/images/gatica/exterior2.jpg",
            alt: "Exterior",
            label: "Exterior",
          },
          {
            src: "/images/gatica/gaticahall3.jpg",
            alt: "Entrada",
            label: "Entrada",
          },
          {
            src: "/images/gatica/recepcion2.jpg",
            alt: "Recepción",
            label: "Recepción",
          },
          {
            src: "/images/gatica/pileta.jpg",
            alt: "Pileta",
            label: "Pileta",
          },
        ]}
      />
      <ProjectLocationMap
        title="Ubicación"
        description="Gatica 498 se emplaza en una zona estratégica de Neuquén, combinando cercanía al centro con un entorno residencial consolidado. Su ubicación permite un acceso ágil a los principales corredores urbanos, servicios y espacios verdes"
        address="Gatica 498, Neuquén Capital, Argentina"
        mapQuery="Gatica 498, Neuquén Capital, Argentina"
      />
      <ProjectGallerySlider2
        eyebrow=""
        title="Recorrido"
        description="Explorá los distintos espacios del desarrollo a través de renders y
            visualizaciones. Una mirada integral del proyecto, su diseño y su
            integración con el entorno urbano."
        metaLabel="Dirección"
        metaValue="Belgrano 531, Neuquén Capital, Argentina"
        images={[
          {
            src: "/images/gatica/renders/acceso.jpg",
            alt: "Acceso",
            label: "Acceso",
          },
          {
            src: "/images/gatica/gaticaalto2.jpg",
            alt: "Exterior",
            label: "Exterior",
          },
          {
            src: "/images/gatica/gaticaabajo.jpg",
            alt: "Exterior",
            label: "Exterior",
          },
          {
            src: "/images/gatica/renders/edificio.jpg",
            alt: "Interior",
            label: "Interior",
          },
          {
            src: "/images/gatica/renders/pileta.png",
            alt: "Interior",
            label: "Interior",
          },
          {
            src: "/images/gatica/renders/lejos.jpg",
            alt: "Exterior",
            label: "Exterior",
          },
        ]}
      />{" "}
      <ProjectContactForm
        eyebrow="Contacto"
        title="SOLICITÁ MÁS INFORMACIÓN"
        intro="Completá el formulario y te contactaremos para compartirte detalles del proyecto, disponibilidad y documentación comercial."
      />
      <Footer />
    </main>
  );
}
