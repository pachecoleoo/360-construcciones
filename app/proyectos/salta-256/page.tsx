import ProjectHero from "@/components/proyectos/sections/ProjectHero";
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
        title="Salta 256"
        location="Neuquén, Argentina"
        heroImageSrc="/images/salta/foto.jpg"
      />

      <ProjectIntroWithData
        eyebrow="Nuestra sede"
        title="El espacio donde construimos cada proyecto"
        paragraphs={[
          "Salta 256 es la sede de 360 Construcciones en la ciudad de Neuquén. Un espacio pensado para acompañar el trabajo diario del equipo y representar la identidad, la solidez y la trayectoria de la empresa.",
          "Desde estas oficinas se desarrollan ideas, se planifican proyectos y se coordinan las distintas etapas de cada obra. Es el punto de encuentro entre arquitectura, construcción, gestión y atención personalizada.",
        ]}
        dataTitle="Información"
        items={[
          {
            label: "Nombre",
            value: "Salta 256",
          },
          {
            label: "Ubicación",
            value: "Neuquén Capital, Argentina",
          },
          {
            label: "Dirección",
            value: "Salta 256",
          },
          {
            label: "Uso",
            value: "Sede corporativa y oficinas",
          },
          {
            label: "Empresa",
            value: "360 Construcciones",
          },
          {
            label: "Estado",
            value: "En funcionamiento",
          },
        ]}
      />

      <ProjectGallery
        eyebrow="Nuestra sede"
        title="GALERÍA"
        intro="Una mirada a las oficinas de 360 Construcciones, su arquitectura y los espacios donde se desarrollan nuestros proyectos."
        images={[
          {
            src: "/images/salta/drone.JPG",
            alt: "Vista aérea de las oficinas de 360 Construcciones",
            label: "Vista aérea",
          },
          {
            src: "/images/salta/entrada.jpg",
            alt: "Acceso a las oficinas de 360 Construcciones",
            label: "Acceso principal",
          },
          {
            src: "/images/salta/abertura2.jpg",
            alt: "Detalle arquitectónico de las oficinas",
            label: "Detalles",
          },
          {
            src: "/images/salta/fachada2.jpg",
            alt: "Fachada de las oficinas de 360 Construcciones",
            label: "Fachada",
          },
        ]}
      />

      <ProjectLocationMap
        title="Ubicación"
        description="Las oficinas de 360 Construcciones se encuentran en Salta 256, en la ciudad de Neuquén. Desde nuestra sede coordinamos el desarrollo y la ejecución de cada proyecto."
        address="Salta 256, Neuquén Capital, Argentina"
        mapQuery="Salta 256, Neuquén Capital, Argentina"
      />

      <ProjectGallerySlider2
        eyebrow="360 Construcciones"
        title="Nuestro espacio"
        description="Un recorrido por la sede de 360 Construcciones, el lugar donde nuestro equipo transforma ideas en proyectos y proyectos en obras."
        metaLabel="Dirección"
        metaValue="Salta 256, Neuquén Capital, Argentina"
        images={[
          {
            src: "/images/salta/renders/img3.jpg",
            alt: "Vista de la sede de 360 Construcciones",
            label: "Salta 256",
          },
          {
            src: "/images/salta/renders/img2.jpg",
            alt: "Espacio de las oficinas de 360 Construcciones",
            label: "Nuestra sede",
          },
          {
            src: "/images/salta/renders/img1.jpg",
            alt: "Interior de las oficinas de 360 Construcciones",
            label: "Espacios de trabajo",
          },
          {
            src: "/images/salta/renders/img4.jpg",
            alt: "Detalle interior de las oficinas",
            label: "Interior",
          },
          {
            src: "/images/salta/renders/img5.jpg",
            alt: "Arquitectura de la sede de 360 Construcciones",
            label: "Arquitectura",
          },
        ]}
      />

      <ProjectContactForm
        eyebrow="Contacto"
        title="HABLEMOS DE TU PRÓXIMO PROYECTO"
        intro="Contactanos para conocer más sobre nuestros servicios, proyectos y desarrollos. Nuestro equipo te acompañará desde la primera idea hasta la ejecución de la obra."
      />

      <Footer />
    </main>
  );
}
