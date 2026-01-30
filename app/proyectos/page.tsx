"use client";

import HeroBackground from "@/components/HeroBackground";
import { useMemo, useState } from "react";
import ProjectsSection from "@/components/proyectos/ProjectsSection";
import type { ProyectoTerminado } from "@/components/proyectos/ProyectoTerminadoCard";
import type { ProyectoFuturo } from "@/components/proyectos/ProyectoFuturoCard";
import Footer from "@/components/footer/Footer";
import NewsletterCTA from "@/components/NewsletterCTA";

const DESARROLLOS: ProyectoTerminado[] = [
  {
    id: "d1",
    title: "531 BELGRANO",
    location: "Neuquén Capital, Belgrano 531",
    year: "2024",
    type: "Residencial",
    imageSrc: "/images/renders/belgrano531.jpg",
    highlights: ["Hormigón visto", "Detalle técnico", "Entrega llave en mano"],
    href: "/proyectos/belgrano-531",
    logoSrc: "/images/marca/Belgrano 531.png",
  },
  {
    id: "d2",
    title: "498 GATICA",
    location: "Neuquen",
    year: "2023",
    type: "Mixto",
    imageSrc: "/images/renders/gatica.jpg",
    highlights: ["Eficiencia", "Calidad", "Terminaciones premium"],
    href: "/proyectos/Gatica",
    logoSrc: "",
  },
  {
    id: "d3",
    title: "MENDOZA 331",
    location: "Neuquen, Mendoza 331",
    year: "2022",
    type: "Residencial",
    imageSrc: "/images/renders/mendoza331.jpg",
    highlights: ["Ingeniería", "Control", "Ejecución"],
    href: "/proyectos/Mendoza",
    logoSrc: "",
  },
  {
    id: "d4",
    title: "CORDOBA 434",
    location: "Neuquen, Cordoba 434",
    year: "2022",
    type: "Residencial",
    imageSrc: "/images/renders/cordoba434.jpg",
    highlights: ["Ingeniería", "Control", "Ejecución"],
    href: "/proyectos/Mendoza",
    logoSrc: "",
  },
  {
    id: "d5",
    title: "SALTA 256",
    location: "Neuquen, Salta 256",
    year: "2022",
    type: "Residencial",
    imageSrc: "/images/renders/salta256.jpg",
    highlights: ["Ingeniería", "Control", "Ejecución"],
    href: "/proyectos/Mendoza",
    logoSrc: "",
  },
  {
    id: "d6",
    title: "SALTA 246",
    location: "Neuquen, Salta 246",
    year: "2022",
    type: "Residencial",
    imageSrc: "/images/renders/salta246.jpg",
    highlights: ["Ingeniería", "Control", "Ejecución"],
    href: "/proyectos/Mendoza",
    logoSrc: "/images/marca/Belgrano 531.png",
  },
];

const FUTUROS: ProyectoFuturo[] = [
  {
    id: "f1",
    title: "Proyecto #1",
    description: "Ubicación · Tipología · Estado actual de obra.",
    badge: "En desarrollo",
  },
  {
    id: "f2",
    title: "Proyecto #2",
    description: "Ubicación · Tipología · Estado actual de obra.",
    badge: "En desarrollo",
  },
  {
    id: "f3",
    title: "Proyecto #3",
    description: "Ubicación · Tipología · Estado actual de obra.",
    badge: "En desarrollo",
  },
];

export default function ProyectosPage() {
  // si querés que el hero cambie con la tab:
  const [heroState, setHeroState] = useState({
    title: "Proyectos terminados",
    subtitle:
      "Obras finalizadas con estándar técnico, planificación y ejecución controlada.",
  });

  return (
    <>
      <HeroBackground
        eyebrow="PROYECTOS"
        title={heroState.title}
        subtitle={heroState.subtitle}
        imageSrc="/images/original/frameGatica3.jpg"
      />

      <main className="bg-white">
        <ProjectsSection
          desarrollos={DESARROLLOS}
          futuros={FUTUROS}
          onHeroChange={setHeroState}
        />
      </main>

      <NewsletterCTA />
      <Footer />
    </>
  );
}
