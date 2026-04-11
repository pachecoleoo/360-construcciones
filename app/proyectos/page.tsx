import HeroBackground from "@/components/HeroBackground";
import ProjectsIntroSection from "@/components/proyectos/ProjectsIntroSection";
import ProjectsGridSection from "@/components/proyectos/ProjectsGridSection";
import Footer from "@/components/footer/Footer";
import NewsletterCTA from "@/components/NewsletterCTA";
import ConstruyendoBanner from "@/components/ConstruyendoBanner";
import { PROJECTS } from "@/components/proyectos/data";

export default function ProyectosPage() {
  return (
    <>
      <HeroBackground
        title="Proyectos"
        subtitle="Obras desarrolladas y desarrollos en ejecución"
        imageSrc="/images/original/frameGatica3.jpg"
      />

      <main id="primera-seccion">
        <ProjectsIntroSection />
        <ProjectsGridSection projects={PROJECTS} />
      </main>

      <ConstruyendoBanner />
      {/* <NewsletterCTA /> */}
      <Footer />
    </>
  );
}
