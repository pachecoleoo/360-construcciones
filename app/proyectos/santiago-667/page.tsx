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
        title="Santiago 667"
        location="Neuquén, Argentina"
        heroImageSrc="/images/stgo667/16.jpg"
      />
      <ProjectIntroWithData
        eyebrow=""
        title="Arquitectura pensada para una vida urbana más flexible"
        paragraphs={[
          "Santiago del Estero 667 se proyecta como una propuesta residencial contemporánea que prioriza la adaptabilidad y el confort. Sus espacios fueron diseñados para responder a distintas formas de habitar, integrando funcionalidad, diseño y calidad constructiva.",
          "El desarrollo combina tipologías eficientes con áreas comunes que amplían el uso cotidiano, generando una experiencia más completa dentro del edificio y alineada con el ritmo actual de la vida urbana en Neuquén.",
        ]}
        dataTitle="Ficha técnica"
        items={[
          { label: "Proyecto", value: "Santiago del Estero 667" },
          { label: "Ubicación", value: "Neuquén Capital" },
          { label: "Tipologías", value: "Monoambientes, 1 y 2 dormitorios" },
          { label: "Concepto", value: "Espacios versátiles y funcionales" },
          {
            label: "Áreas comunes",
            value: "Diseñadas para uso cotidiano y social",
          },
          { label: "Cocheras", value: "Autos, motos y bauleras" },
          { label: "Superficie", value: "37 m² a 92 m² totales" },
        ]}
        button={{
          label: "Ver brochure",
          href: "/brochures/Santiago667.pdf",
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
              "Amenity exterior pensado para expandir la experiencia residencial y sumar espacios de relax y disfrute.",
          },
          {
            icon: "/icons/parrilla.png",
            label: "SUM con parrilla",
            description:
              "Salón de usos múltiples con parrilla, diseñado para encuentros sociales y momentos compartidos.",
          },
          {
            icon: "/icons/terraza.png",
            label: "Terraza accesible",
            description:
              "Espacio común abierto que amplía el uso del edificio y refuerza la conexión con el exterior.",
          },
          {
            icon: "/icons/hall.png",
            label: "Hall doble altura",
            description:
              "Acceso principal jerarquizado con una recepción de doble altura que potencia la llegada al edificio.",
          },
          {
            icon: "/icons/ascensor.png",
            label: "Ascensores de última generación",
            description:
              "Cabinas amplias con interior de acero inoxidable para una circulación cómoda y contemporánea.",
          },
          {
            icon: "/icons/seguridad.png",
            label: "Seguridad y control",
            description:
              "Cámaras en accesos peatonales y vehiculares, junto con sistema de detección de incendios.",
          },
        ]}
      />
      <ProjectGallery
        eyebrow=""
        title="GALERIA DE LA OBRA"
        intro="Una lectura visual de los espacios, materiales y atmósfera general del desarrollo."
        images={[
          {
            src: "/images/stgo667/01.jpg",
            alt: "Exterior",
            label: "Exterior",
          },
          {
            src: "/images/stgo667/02.jpg",
            alt: "Entrada",
            label: "Entrada",
          },
          {
            src: "/images/stgo667/03.jpg",
            alt: "Recepción",
            label: "Recepción",
          },
          {
            src: "/images/stgo667/19.jpg",
            alt: "Pileta",
            label: "Pileta",
          },
        ]}
      />
      <ProjectLocationMap
        title="Ubicación"
        description="Ubicado en un sector consolidado de Neuquén Capital, Santiago del Estero 667 combina cercanía a los principales corredores urbanos con un entorno dinámico. Su implantación permite un acceso ágil a servicios, espacios verdes y puntos clave de la ciudad."
        address="Santiago del Estero 667, Neuquén Capital, Argentina"
        mapQuery="Santiago del Estero 667, Neuquén Capital, Argentina"
      />
      <ProjectGallerySlider2
        eyebrow=""
        title="Recorrido"
        description="Explorá los distintos espacios del desarrollo a través de renders y
            visualizaciones. Una mirada integral del proyecto, su diseño y su
            integración con el entorno urbano."
        metaLabel="Dirección"
        metaValue="Santiago del Estero 667, Neuquén Capital, Argentina"
        images={[
          {
            src: "/images/stgo667/17.jpg",
            alt: "Exterior",
            label: "Exterior",
          },
          {
            src: "/images/stgo667/15.jpg",
            alt: "Terraza",
            label: "Terraza",
          },
          {
            src: "/images/stgo667/24.jpg",
            alt: "Exterior",
            label: "Exterior",
          },
          {
            src: "/images/stgo667/25.jpg",
            alt: "Terraza",
            label: "Terraza",
          },
          {
            src: "/images/stgo667/19.jpg",
            alt: "Interior",
            label: "Interior",
          },
          {
            src: "/images/stgo667/18.jpg",
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
