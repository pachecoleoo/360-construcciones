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
        title="Córdoba 434"
        location="Neuquén Capital, Argentina"
        heroImageSrc="/images/cordoba/afuera.JPG"
      />

      <ProjectIntroWithData
        eyebrow=""
        title="Un desarrollo innovador y flexible en el centro de Neuquén"
        paragraphs={[
          "Córdoba 434 es un desarrollo residencial ubicado estratégicamente en el centro de Neuquén Capital, rodeado de áreas administrativas, comerciales, gastronómicas, educativas y espacios verdes.",
          "El proyecto propone ambientes versátiles, funcionales y confortables, pensados tanto para vivienda como para inversión. Integra monoambientes, departamentos de un dormitorio, cocheras, bauleras, un local comercial y espacios comunes en altura.",
        ]}
        dataTitle="Ficha técnica"
        items={[
          {
            label: "Proyecto",
            value: "Córdoba 434",
          },
          {
            label: "Ubicación",
            value: "Córdoba 434, Neuquén Capital",
          },
          {
            label: "Tipo",
            value: "Desarrollo residencial y comercial",
          },
          {
            label: "Estado",
            value: "En construcción",
          },
          {
            label: "Pisos",
            value: "20",
          },
          {
            label: "Unidades",
            value: "136 monoambientes y 68 departamentos de 1 dormitorio",
          },
          {
            label: "Local comercial",
            value: "Local de 2 niveles",
          },
          {
            label: "Cocheras",
            value: "91 módulos para autos y 5 para motos",
          },
          {
            label: "Bauleras",
            value: "22 unidades",
          },
          {
            label: "Amenities",
            value: "Piscina, SUM con parrilla y lockers",
          },
          {
            label: "Entrega estimada",
            value: "Diciembre de 2028",
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
        title="Amenities y equipamiento"
        items={[
          {
            icon: "/icons/pileta.png",
            label: "Piscina",
            description: "Piscina ubicada en la terraza del edificio.",
          },
          {
            icon: "/icons/parrilla.png",
            label: "SUM con parrilla",
            description: "Espacio común pensado para reuniones y encuentros.",
          },
          {
            icon: "/icons/hall.png",
            label: "Hall de acceso",
            description: "Recepción en doble altura.",
          },
          {
            icon: "/icons/aire.png",
            label: "Climatización",
            description:
              "Losa radiante y preinstalación de aire acondicionado.",
          },
          {
            icon: "/icons/seguridad.png",
            label: "Seguridad",
            description: "Cámaras en los accesos peatonales y vehiculares.",
          },
          {
            icon: "/icons/ascensor.png",
            label: "Ascensores",
            description:
              "Amplias cabinas con terminaciones en acero inoxidable.",
          },
        ]}
      />

      <ProjectGallery
        eyebrow=""
        title="GALERÍA DEL PROYECTO"
        intro="Una mirada a la arquitectura, los espacios comunes y las distintas tipologías que conforman Córdoba 434."
        images={[
          {
            src: "/images/cordoba/afuera.JPG",
            alt: "Fachada de Córdoba 434",
            label: "Fachada",
          },
          {
            src: "/images/cordoba/renders/piscina.jpg",
            alt: "Piscina en la terraza",
            label: "Piscina",
          },
          {
            src: "/images/cordoba/renders/sum.jpg",
            alt: "SUM con parrilla",
            label: "SUM con parrilla",
          },
          {
            src: "/images/cordoba/renders/departamento.jpg",
            alt: "Interior de una unidad",
            label: "Interiores",
          },
        ]}
      />

      <ProjectLocationMap
        title="Ubicación"
        description="Córdoba 434 se encuentra en un punto estratégico del centro de Neuquén Capital, con acceso inmediato a comercios, universidades, organismos públicos, centros de salud, propuestas gastronómicas y las principales vías de circulación de la ciudad."
        address="Córdoba 434, Neuquén Capital, Argentina"
        mapQuery="Córdoba 434, Neuquén Capital, Argentina"
      />

      <ProjectGallerySlider2
        eyebrow=""
        title="Recorrido"
        description="Explorá los diferentes espacios de Córdoba 434, desde sus unidades residenciales hasta los amenities y sectores comunes que completan la propuesta."
        metaLabel="Dirección"
        metaValue="Córdoba 434, Neuquén Capital, Argentina"
        images={[
          {
            src: "/images/cordoba/renders/monoambiente.jpg",
            alt: "Monoambiente",
            label: "Monoambiente",
          },
          {
            src: "/images/cordoba/renders/living.jpg",
            alt: "Living comedor",
            label: "Living comedor",
          },
          {
            src: "/images/cordoba/renders/dormitorio.jpg",
            alt: "Departamento de un dormitorio",
            label: "Dormitorio",
          },
          {
            src: "/images/cordoba/renders/balcon.jpg",
            alt: "Balcón",
            label: "Balcón",
          },
        ]}
      />

      <ProjectContactForm
        eyebrow="Contacto"
        title="SOLICITÁ MÁS INFORMACIÓN"
        intro="Completá el formulario y te contactaremos para compartirte información sobre unidades disponibles, financiación, documentación comercial y avance de obra."
      />

      <Footer />
    </main>
  );
}
