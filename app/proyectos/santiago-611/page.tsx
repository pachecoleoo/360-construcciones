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
        title="Santiago 611"
        location="Neuquén, Argentina"
        heroImageSrc="/images/stgo611/18.jpg"
      />
      <ProjectIntroWithData
        eyebrow=""
        title="Una experiencia residencial basada en el confort y la armonía"
        paragraphs={[
          "Santiago del Estero 611 propone una forma de habitar donde la arquitectura, la luz y la materialidad se integran para generar espacios equilibrados y serenos. Cada ambiente fue diseñado para transmitir calma y bienestar en el uso cotidiano.",
          "El proyecto combina unidades amplias con áreas comunes que funcionan como una extensión del hogar, consolidando una propuesta residencial sofisticada, donde el confort y la calidad constructiva acompañan cada momento.",
        ]}
        dataTitle="Ficha técnica"
        items={[
          { label: "Proyecto", value: "Santiago del Estero 611" },
          { label: "Ubicación", value: "Neuquén Capital" },
          { label: "Tipologías", value: "3 y 4 ambientes" },
          { label: "Concepto", value: "Amplitud, luz natural y confort" },
          {
            label: "Áreas comunes",
            value: "Espacios diseñados para relax y encuentro",
          },
          { label: "Cocheras", value: "Autos, motos y bauleras" },
          { label: "Superficie", value: "85 m² a 175 m² totales" },
        ]}
        button={{
          label: "Ver brochure",
          href: "/brochures/Santiago611.pdf",
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
            label: "Piscina",
            description:
              "Espacio exterior pensado para el relax, con visuales abiertas y conexión con el entorno.",
          },
          {
            icon: "/icons/parrilla.png",
            label: "SUM con parrilla",
            description:
              "Ambiente diseñado para encuentros sociales, con una atmósfera cálida y cuidada.",
          },
          {
            icon: "/icons/terraza.png",
            label: "Terraza accesible",
            description:
              "Superficie común que amplía el uso del edificio y refuerza la experiencia al aire libre.",
          },
          {
            icon: "/icons/hall.png",
            label: "Hall de acceso",
            description:
              "Ingreso en doble altura que aporta jerarquía y define la identidad del proyecto.",
          },
          {
            icon: "/icons/ascensor.png",
            label: "Ascensores modernos",
            description:
              "Equipamiento de última generación que garantiza confort en la circulación diaria.",
          },
          {
            icon: "/icons/seguridad.png",
            label: "Seguridad integrada",
            description:
              "Sistema de control y monitoreo que acompaña el funcionamiento del edificio.",
          },
        ]}
      />
      <ProjectGallery
        eyebrow=""
        title="GALERIA DE LA OBRA"
        intro="Una lectura visual de los espacios, materiales y atmósfera general del desarrollo."
        images={[
          {
            src: "/images/stgo611/01.jpg",
            alt: "Exterior",
            label: "Exterior",
          },
          {
            src: "/images/stgo611/06.jpg",
            alt: "Entrada",
            label: "Entrada",
          },
          {
            src: "/images/stgo611/03.jpg",
            alt: "Recepción",
            label: "Recepción",
          },
          {
            src: "/images/stgo611/16.jpg",
            alt: "Pileta",
            label: "Pileta",
          },
        ]}
      />
      <ProjectLocationMap
        title="Ubicación"
        description="Santiago del Estero 611 se ubica en un entorno urbano consolidado de Neuquén Capital, combinando conectividad con una experiencia residencial más serena. Su localización permite moverse con facilidad por la ciudad sin resignar calidad de vida ni tranquilidad."
        address="Santiago del Estero 611, Neuquén Capital, Argentina"
        mapQuery="Santiago del Estero 611, Neuquén Capital, Argentina"
      />
      <ProjectGallerySlider2
        eyebrow=""
        title="Recorrido"
        description="Explorá los distintos espacios del desarrollo a través de renders y
            visualizaciones. Una mirada integral del proyecto, su diseño y su
            integración con el entorno urbano."
        metaLabel="Dirección"
        metaValue="Santiago del Estero 611, Neuquén Capital, Argentina"
        images={[
          {
            src: "/images/stgo611/20.jpg",
            alt: "Exterior",
            label: "Exterior",
          },
          {
            src: "/images/stgo611/19.jpg",
            alt: "Terraza",
            label: "Terraza",
          },

          {
            src: "/images/stgo611/22.jpg",
            alt: "Interior",
            label: "Interior",
          },
          {
            src: "/images/stgo611/24.jpg",
            alt: "Exterior",
            label: "Exterior",
          },
          {
            src: "/images/stgo611/11.jpg",
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
