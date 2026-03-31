import ProjectHero from "@/components/proyectos/sections/ProjectHero";
import ProjectAmenities from "@/components/proyectos/sections/ProjectAmenities";
import ProjectIntroWithData from "@/components/proyectos/sections/ProjectIntroWithData";
import ProjectGallery from "@/components/proyectos/sections/ProjectGallery";
import ProjectLocationMap from "@/components/proyectos/sections/ProjectLocationMap";
import ProjectContactForm from "@/components/proyectos/sections/ProjectContactForm";
import ProjectGallerySlider2 from "@/components/proyectos/sections/ProjectGallerySlider2";
import Footer from "@/components/footer/Footer";
export default function Belgrano531Page() {
  return (
    <main className="bg-white text-slate-900">
      <ProjectHero
        title="Mendoza 331"
        location="Neuquén, Argentina"
        heroImageSrc="/images/mendoza/renders/portada.jpg"
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
          href: "/brochures/Mendoza331.pdf",
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
            label: "Pileta en terraza",
            description:
              "Espacio de piscina en altura con vistas abiertas a la ciudad.",
          },
          {
            icon: "/icons/solarium.png",
            label: "Solárium",
            description:
              "Terraza verde con sector de expansión y relax al aire libre.",
          },
          {
            icon: "/icons/parrilla.png",
            label: "SUM con parrilla",
            description:
              "Salón de usos múltiples integrado a los amenities del piso 22.",
          },
          {
            icon: "/icons/losa2.png",
            label: "Calefacción por losa radiante",
            description: "Control de temperatura individual en cada ambiente.",
          },
          {
            icon: "/icons/aire.png",
            label: "Preinstalación de aire",
            description:
              "Preparación para equipos de aire acondicionado en todos los ambientes.",
          },
          {
            icon: "/icons/seguridad.png",
            label: "Seguridad y control",
            description:
              "Cámaras de vigilancia y sistema de detección de incendios.",
          },
        ]}
      />
      <ProjectGallery
        eyebrow=""
        title="GALERIA DE LA OBRA"
        intro="Una lectura visual de los espacios, materiales y atmósfera general del desarrollo."
        images={[
          {
            src: "/images/belgrano/balcon2.JPG",
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
        description="Mendoza 331 se emplaza en una ubicación estratégica dentro del centro de Neuquén, frente al área de Plaza Ministro González y con acceso inmediato a los principales corredores urbanos, servicios, comercios y equipamientos de la ciudad."
        address="Mendoza 331, Neuquén Capital, Argentina"
        mapQuery="Mendoza 331, Neuquén Capital, Argentina"
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
            src: "/images/mendoza/renders/living2.jpg",
            alt: "Living",
            label: "Living",
          },
          {
            src: "/images/mendoza/renders/exterior.jpg",
            alt: "Terraza",
            label: "Terraza",
          },
          {
            src: "/images/mendoza/renders/portada.tif",
            alt: "Exterior",
            label: "Exterior",
          },
          {
            src: "/images/mendoza/renders/living.jpg",
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
