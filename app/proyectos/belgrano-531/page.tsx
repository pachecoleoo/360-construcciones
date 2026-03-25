import ProjectHero from "@/components/proyectos/sections/ProjectHero";
import ProjectAmenities from "@/components/proyectos/sections/ProjectAmenities";
import ProjectIntroWithData from "@/components/proyectos/sections/ProjectIntroWithData";
import ProjectGallery from "@/components/proyectos/sections/ProjectGallery";
import ProjectCTA from "@/components/proyectos/sections/ProjectCTA";
import ProjectLocationMap from "@/components/proyectos/sections/ProjectLocationMap";
import Footer from "@/components/footer/Footer";
export default function Belgrano531Page() {
  return (
    <main className="bg-white text-slate-900">
      <ProjectHero
        title="Belgrano 531"
        location="Neuquén, Argentina"
        heroImageSrc="/images/belgrano/afuera.jpg"
      />

      {/* <ProjectIntro
        eyebrow="Descripción general"
        title="Arquitectura, detalle y presencia urbana"
        paragraphs={[
          "Belgrano 531 es un desarrollo concebido para integrarse al tejido urbano de Neuquén con una imagen contemporánea, sólida y sobria.",
          "La propuesta combina lenguaje arquitectónico, funcionalidad y una lectura técnica del proyecto, buscando expresar calidad constructiva y una presencia clara dentro de la ciudad.",
        ]}
      /> */}
      <ProjectIntroWithData
        eyebrow="Descripción general"
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
        title="Prestaciones del desarrollo"
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
        eyebrow="Visual del proyecto"
        title="Imagen y material del desarrollo"
        images={[
          {
            // src: "/images/belgrano/renders/balcon.jpg",
            src: "/images/belgrano/cochera.jpg",
            alt: "Vista principal",
            label: "Vista principal",
          },
          {
            src: "/images/belgrano/renders/terraza.jpg",
            alt: "Acceso",
            label: "Acceso",
          },
          {
            // src: "/images/belgrano/renders/cocina.jpg",
            src: "/images/belgrano/balcon.jpg",
            alt: "Fachada",
            label: "Fachada",
          },
          {
            // src: "/images/belgrano/renders/living.jpg",
            src: "/images/belgrano/balcon2.jpg",
            alt: "Detalle arquitectónico",
            label: "Detalle arquitectónico",
          },
        ]}
      />

      <ProjectLocationMap
        title="Ubicación del desarrollo"
        description="Belgrano 531 se implanta en una ubicación estratégica dentro del tejido urbano de Neuquén, con acceso a servicios, equipamientos y los principales corredores de circulación de la ciudad."
        address="Belgrano 531, Neuquén Capital, Argentina"
        mapQuery="Belgrano 531, Neuquén Capital, Argentina"
      />
      <ProjectCTA />
      <Footer />
    </main>
  );
}
