"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const DOCUMENTS_AVAILABLE = false;
// Set to true only after both verified original PDFs are added to public/documentos/.

export default function NosotrosCalidadSection() {
  const { language } = useLanguage();
  const es = language === "es";
  const steps = [
    {
      number: "01",
      title: es ? "Planificamos y controlamos" : "We plan and monitor",
      description: es
        ? "Planificamos cada proyecto, supervisamos su ejecución y medimos resultados con procedimientos definidos."
        : "We plan every project, oversee execution and measure results through defined procedures.",
      image: "/images/original/grua2.jpg",
      alt: es ? "Obra en construcción" : "Construction site",
    },
    {
      number: "02",
      title: es ? "Escuchamos" : "We listen",
      description: es
        ? "Escuchamos a quienes confían en nosotros y buscamos mejorar su experiencia en cada etapa."
        : "We listen to those who trust us and seek to improve their experience at every stage.",
      image: "/images/original/equipo3.JPG",
      alt: es ? "Equipo de trabajo" : "Construction team",
    },
    {
      number: "03",
      title: es ? "Mejoramos" : "We improve",
      description: es
        ? "Revisamos nuestros procesos y analizamos los resultados para impulsar la mejora continua."
        : "We review our processes and analyze outcomes to drive continuous improvement.",
      image: "/images/original/obreros.JPG",
      alt: es ? "Personal en obra" : "Workers on site",
    },
  ];

  return (
    <section id="calidad" data-section="04" className="relative overflow-hidden bg-[#f4f6f8] py-16 text-[#062a47] md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.45fr)] lg:gap-14">
          <div>
            <p className="font-body text-xs font-bold uppercase tracking-[0.24em] text-[#062a47]/60">
              04 / {es ? "Sistema de gestión de la calidad" : "Quality management system"}
            </p>
            <h2 className="ios-safe-title mt-5 max-w-lg font-heading text-3xl font-black uppercase leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl">
              {es ? "Seguimos construyendo calidad" : "Continuing to build quality"}
            </h2>
          </div>
          <div className="max-w-2xl self-end font-body text-base leading-8 text-[#062a47]/80 md:text-lg">
            <p>
              {es
                ? "En 2025 certificamos nuestro Sistema de Gestión de la Calidad bajo la norma ISO 9001:2015, con TÜV Rheinland como organismo certificador."
                : "In 2025, our Quality Management System was certified to ISO 9001:2015 by TÜV Rheinland."}
            </p>
            <p className="mt-3">
              {es
                ? "Una forma de trabajar que integra planificación, seguimiento y mejora continua en nuestros proyectos."
                : "An approach that brings planning, monitoring and continuous improvement into our projects."}
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-[#062a47]/15 pt-7 md:mt-16">
          <h3 className="font-heading text-xl font-bold uppercase md:text-2xl">
            {es ? "Así trabajamos" : "How we work"}
          </h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {steps.map((step) => (
              <article key={step.number} className="group overflow-hidden border border-[#062a47]/10 bg-white">
                <div className="relative h-36 overflow-hidden sm:h-44 md:h-40">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    sizes="(max-width: 767px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[#062a47]/20" />
                </div>
                <div className="p-5 md:p-6">
                  <span className="font-body text-xs font-bold tracking-widest text-[#062a47]/45">{step.number}</span>
                  <h4 className="mt-3 font-heading text-lg font-bold">{step.title}</h4>
                  <p className="mt-2 font-body text-sm leading-6 text-[#062a47]/75">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-9 grid gap-5 border-t border-[#062a47]/15 pt-8 md:grid-cols-2 md:gap-8">
          <div className="flex flex-col items-start justify-between gap-5 border-l-2 border-[#062a47] pl-5">
            <div>
              <h3 className="font-heading text-lg font-bold">{es ? "Certificación ISO 9001:2015" : "ISO 9001:2015 certification"}</h3>
              <p className="mt-2 max-w-md font-body text-sm leading-6 text-[#062a47]/70">
                {es ? "Consultá el certificado del Sistema de Gestión de la Calidad." : "View our Quality Management System certificate."}
              </p>
            </div>
            {DOCUMENTS_AVAILABLE ? (
              <a href="/documentos/certificado-iso-9001.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center bg-[#062a47] px-5 py-3 font-body text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#174a70]">
                {es ? "Ver certificado ↗" : "View certificate ↗"}
              </a>
            ) : (
              <span className="inline-flex min-h-11 items-center border border-[#062a47]/20 px-5 py-3 font-body text-xs font-semibold uppercase tracking-wide text-[#062a47]/60">
                {es ? "Documento próximamente" : "Document coming soon"}
              </span>
            )}
          </div>
          <div className="flex flex-col items-start justify-between gap-5 border-l-2 border-[#062a47] pl-5">
            <div>
              <h3 className="font-heading text-lg font-bold">{es ? "Política de Gestión" : "Management Policy"}</h3>
              <p className="mt-2 max-w-md font-body text-sm leading-6 text-[#062a47]/70">
                {es ? "Conocé los principios que orientan nuestro compromiso con la calidad." : "Learn about the principles behind our commitment to quality."}
              </p>
            </div>
            {DOCUMENTS_AVAILABLE ? (
              <a href="/documentos/politica-de-gestion.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center bg-[#062a47] px-5 py-3 font-body text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#174a70]">
                {es ? "Ver política de gestión ↗" : "View management policy ↗"}
              </a>
            ) : (
              <span className="inline-flex min-h-11 items-center border border-[#062a47]/20 px-5 py-3 font-body text-xs font-semibold uppercase tracking-wide text-[#062a47]/60">
                {es ? "Documento próximamente" : "Document coming soon"}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
