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
        title="Cordoba 434"
        location="Neuquén, Argentina"
        heroImageSrc="/images/belgrano/afuera.JPG"
      />

      <ProjectIntroWithData
        eyebrow=""
        title="Arquitectura contemporánea en el corazón de Neuquén"
        paragraphs={[
          "Mendoza 331 es un desarrollo residencial pensado para integrarse con fuerza y claridad al centro de Neuquén, combinando lenguaje contemporáneo, calidad constructiva y una propuesta funcional para la vida urbana.",
          "El proyecto articula viviendas de 1 y 2 dormitorios, amplias áreas de cocheras y amenities en altura, incorporando soluciones técnicas de alta prestación y una lectura arquitectónica sobria, sólida y actual.",
        ]}
        dataTitle="Ficha técnica"
        items={[
          { label: "Proyecto", value: "Mendoza 331" },
          { label: "Ubicación", value: "Neuquén Capital, Argentina" },
          { label: "Tipo", value: "Edificio residencial" },
          { label: "Estado", value: "Desarrollado" },
          { label: "Pisos", value: "22" },
          { label: "Unidades", value: "Departamentos de 1 y 2 dormitorios" },
          { label: "Cocheras", value: "Planta baja y pisos 1 a 3" },
          {
            label: "Amenities",
            value: "Pileta, solárium, SUM y terraza verde",
          },
        ]}
        button={{
          label: "Ver brochure",
          href: "/brochures/Cordoba434.pdf",
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
            src: "/images/cordoba/afuera.JPG",
            alt: "Cocina integrada",
            label: "Cocina integrada",
          },
          {
            src: "/images/belgrano/renders/terraza.jpg",
            alt: "Terraza exterior",
            label: "Terraza exterior",
          },
          {
            src: "/images/belgrano/renders/balcon.jpg",
            alt: "Balcón con visuales",
            label: "Balcón con visuales",
          },
          {
            src: "/images/belgrano/renders/living.jpg",
            alt: "Living principal",
            label: "Living principal",
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
            src: "/images/belgrano/renders/cocina.jpg",
            alt: "Cocina",
            label: "Cocina",
          },
          {
            src: "/images/belgrano/renders/terraza.jpg",
            alt: "Terraza",
            label: "Terraza",
          },
          {
            src: "/images/belgrano/renders/balcon.jpg",
            alt: "Balcon",
            label: "Balcon",
          },
          {
            src: "/images/belgrano/renders/living.jpg",
            alt: "Living",
            label: "Living",
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
