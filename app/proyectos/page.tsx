"use client";

import HeroBackground from "@/components/HeroBackground";
import { useMemo, useState } from "react";
import ProjectsSection from "@/components/proyectos/ProjectsSection";
import Footer from "@/components/footer/Footer";
import NewsletterCTA from "@/components/NewsletterCTA";
import type { ProyectoUnified } from "@/components/proyectos/types";

const PROJECTS: ProyectoUnified[] = [
  // ===== DESARROLLADOS =====
  {
    id: "d1",
    status: "desarrollado",
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
    status: "desarrollado",
    title: "498 GATICA",
    location: "Neuquén",
    year: "2023",
    type: "Mixto",
    imageSrc: "/images/renders/gatica.jpg",
    highlights: ["Eficiencia", "Calidad", "Terminaciones premium"],
    href: "/proyectos/gatica",
    logoSrc: "", // si está vacío, el card no muestra logo
  },
  {
    id: "d3",
    status: "desarrollado",
    title: "331 MENDOZA",
    location: "Neuquén, Mendoza 331",
    year: "2022",
    type: "Residencial",
    imageSrc: "/images/renders/mendoza331.jpg",
    highlights: ["Ingeniería", "Control", "Ejecución"],
    href: "/proyectos/mendoza",
    logoSrc: "",
  },
  {
    id: "d4",
    status: "desarrollado",
    title: "434 CORDOBA",
    location: "Neuquén, Córdoba 434",
    year: "2022",
    type: "Residencial",
    imageSrc: "/images/renders/cordoba434.jpg",
    highlights: ["Ingeniería", "Control", "Ejecución"],
    href: "/proyectos/cordoba",
    logoSrc: "",
  },
  {
    id: "d5",
    status: "desarrollado",
    title: "256 SALTA",
    location: "Neuquén, Salta 256",
    year: "2022",
    type: "Residencial",
    imageSrc: "/images/renders/salta256.jpg",
    highlights: ["Ingeniería", "Control", "Ejecución"],
    href: "/proyectos/salta-256",
    logoSrc: "",
  },
  {
    id: "d6",
    status: "desarrollado",
    title: "246 SALTA",
    location: "Neuquén, Salta 246",
    year: "2022",
    type: "Residencial",
    imageSrc: "/images/renders/salta246.jpg",
    highlights: ["Ingeniería", "Control", "Ejecución"],
    href: "/proyectos/salta-246",
    logoSrc: "/images/marca/Belgrano 531.png",
  },

  // ===== EN EJECUCIÓN =====
  {
    id: "e1",
    status: "ejecucion",
    title: "Proyecto #1",
    description: "Ubicación · Tipología · Estado actual de obra.",
    badge: "En ejecución",
    // opcional: imageSrc si querés mostrar imagen también acá
    // imageSrc: "/images/renders/proyecto1.jpg",
  },
];

export default function ProyectosPage() {
  const [heroState] = useState({
    title: "Proyectos",
    subtitle: "Obras desarrolladas y desarrollos en ejecución",
  });

  // si después filtrás/sort, tiene sentido useMemo; si no, podés pasar PROJECTS directo
  const projects = useMemo(() => PROJECTS, []);

  return (
    <>
      <HeroBackground
        eyebrow=""
        title={heroState.title}
        subtitle={heroState.subtitle}
        imageSrc="/images/original/frameGatica3.jpg"
      />

      <main className="bg-white">
        <ProjectsSection projects={projects} />
      </main>

      <NewsletterCTA />
      <Footer />
    </>
  );
}
