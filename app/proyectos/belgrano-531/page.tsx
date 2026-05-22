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
        title="Belgrano 531"
        location="Neuquén, Argentina"
        heroImageSrc="/images/belgrano/comprimido/belgrano3.jpg"
      />

      <ProjectIntroWithData
        eyebrow=""
        title="Arquitectura, detalle y presencia urbana"
        paragraphs={[
          "Belgrano 531 es un desarrollo concebido para integrarse al tejido urbano de Neuquén con una imagen contemporánea, sólida y sobria.",
          "La propuesta combina lenguaje arquitectónico, funcionalidad y una lectura técnica del proyecto, buscando expresar calidad constructiva y una presencia clara dentro de la ciudad.",
        ]}
        dataTitle="Ficha técnica"
        items={[
          { label: "Proyecto", value: "Belgrano 531" },
          { label: "Ubicación", value: "Neuquén, Argentina" },
          { label: "Tipo", value: "Desarrollo residencial" },
          { label: "Estado", value: "Desarrollado" },
          { label: "Ambientes", value: "2, 3, 4 & 5 " },
          { label: "Pisos", value: "19" },
        ]}
        button={{
          label: "Ver brochure",
          href: "/brochures/Belgrano531.pdf",
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
            label: "Pileta",
            description: "Piscina de 24 metros con solárium.",
          },
          {
            icon: "/icons/aire.png",
            label: "Aire acondicionado",
            description: "Preinstalación en todos los ambientes.",
          },
          {
            icon: "/icons/losa2.png",
            label: "Losa radiante",
            description: "Sistema con termostato individual.",
          },
          {
            icon: "/icons/seguridad.png",
            label: "Seguridad",
            description: "Cámaras y control de accesos.",
          },
          {
            icon: "/icons/ascensor.png",
            label: "Ascensores",
            description: "Última generación.",
          },
          {
            icon: "/icons/cocheras.png",
            label: "Cocheras",
            description: "Amplias y funcionales.",
          },
        ]}
      />

      <ProjectGallery
        eyebrow=""
        title="GALERIA DE LA OBRA"
        intro="Una lectura visual de los espacios, materiales y atmósfera general del desarrollo."
        images={[
          {
            src: "/images/belgrano/comprimido/ingreso.jpg",
            alt: "Ingreso",
            label: "Ingreso",
          },
          {
            src: "/images/belgrano/comprimido/belgrano2.jpg",
            alt: "Pileta",
            label: "Pileta",
          },
          {
            src: "/images/belgrano/comprimido/belgrano6.jpg",
            alt: "Balcón ",
            label: "Balcón",
          },
          {
            src: "/images/belgrano/comprimido/belgrano7.jpg",
            alt: "Ubicación",
            label: "Ubicación",
          },
        ]}
      />
      <ProjectLocationMap
        title="Ubicación"
        description="Belgrano 531 se implanta en una ubicación estratégica dentro del tejido urbano de Neuquén, con acceso a servicios, equipamientos y los principales corredores de circulación de la ciudad."
        address="Belgrano 531, Neuquén Capital, Argentina"
        mapQuery="Belgrano 531, Neuquén Capital, Argentina"
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
            src: "/images/belgrano/comprimido/terraza2.jpg",
            alt: "Terraza",
            label: "Terraza",
          },
          {
            src: "/images/belgrano/comprimido/pileta.jpg",
            alt: "Pileta",
            label: "Pileta",
          },
          {
            src: "/images/belgrano/comprimido/cochera.jpg",
            alt: "Cochera",
            label: "Cochera",
          },
          {
            src: "/images/belgrano/comprimido/ingreso.jpg",
            alt: "Ingreso",
            label: "Ingreso",
          },
        ]}
      />
      <ProjectContactForm
        eyebrow="Contacto"
        title="SOLICITÁ MÁS INFORMACIÓN"
        intro="Completá el formulario y te contactaremos para compartirte detalles del proyecto, disponibilidad y documentación comercial."
      />
      <Footer />
    </main>
  );
}
