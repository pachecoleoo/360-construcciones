import ProjectHero from "@/components/proyectos/sections/ProjectHero";
import ProjectAmenities from "@/components/proyectos/sections/ProjectAmenities";
import ProjectIntroWithData from "@/components/proyectos/sections/ProjectIntroWithData";
import ProjectGallery from "@/components/proyectos/sections/ProjectGallery";
import ProjectLocationMap from "@/components/proyectos/sections/ProjectLocationMap";
// import ProjectGallerySlider from "@/components/proyectos/sections/ProjectGallerySlider";
import ProjectGallerySlider2 from "@/components/proyectos/sections/ProjectGallerySlider2";
import Footer from "@/components/footer/Footer";
export default function Belgrano531Page() {
  return (
    <main className="bg-white text-slate-900">
      <ProjectHero
        title="Belgrano 531"
        location="Neuquén, Argentina"
        heroImageSrc="/images/belgrano/afuera.jpg"
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
            src: "/images/belgrano/balcon2.jpg",
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
            alt: "Frente del edificio",
            label: "Frente del edificio",
          },
          {
            src: "/images/belgrano/renders/terraza.jpg",
            alt: "Vista de la calle",
            label: "Vista de la calle",
          },
          {
            src: "/images/belgrano/renders/balcon.jpg",
            alt: "Acceso inmediato",
            label: "Acceso inmediato",
          },
          {
            src: "/images/belgrano/renders/cocina.jpg",
            alt: "Entorno urbano",
            label: "Entorno urbano",
          },
        ]}
      />
      <Footer />
    </main>
  );
}
