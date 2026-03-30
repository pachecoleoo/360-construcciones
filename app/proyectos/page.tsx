"use client";

import HeroBackground from "@/components/HeroBackground";
import ProjectsSection from "@/components/proyectos/ProjectsSection";
import ProjectsAccordion from "@/components/proyectos/ProjectsAccordion";
import Footer from "@/components/footer/Footer";
import NewsletterCTA from "@/components/NewsletterCTA";
import { PROJECTS } from "@/components/proyectos/data";

export default function ProyectosPage() {
  return (
    <>
      <HeroBackground
        title="Proyectos"
        subtitle="Obras desarrolladas y desarrollos en ejecución"
        imageSrc="/images/original/frameGatica3.jpg"
      />
      <main className="bg-white" id="primera-seccion">
        <ProjectsSection projects={PROJECTS} />{" "}
      </main>{" "}
      <ProjectsAccordion projects={PROJECTS} />
      <NewsletterCTA />
      <Footer />
    </>
  );
}
