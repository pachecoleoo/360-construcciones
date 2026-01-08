"use client";

import { useEffect, useRef, useState } from "react";

const values = [
  {
    title: "Calidad",
    desc: "Ejecución precisa, materiales adecuados y control en cada etapa.",
  },
  {
    title: "Seguridad",
    desc: "Protocolos, prevención y responsabilidad en obra como prioridad.",
  },
  {
    title: "Cumplimiento",
    desc: "Planificación realista y entrega a tiempo, con transparencia.",
  },
  {
    title: "Gestión integral",
    desc: "Acompañamiento completo: diseño, obra, coordinación y entrega.",
  },
];

export default function SectionWhoWeAre() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-white py-20 md:py-24 px-6 overflow-hidden">
      {/* Blueprint grid sutil (muy leve, para “ingeniería”) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,40,73,0.22) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,40,73,0.22) 1px, transparent 1px)",
          backgroundSize: "84px 84px",
        }}
      />

      {/* Vignette suave superior para “conectar” con el Hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[52rem] -translate-x-1/2 rounded-full bg-[#002849]/10 blur-3xl"
      />

      <div
        ref={ref}
        className={`
          relative mx-auto max-w-7xl
          transition-all duration-[900ms] ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}
      >
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6">
            {/* Eyebrow */}
            <p className="font-body text-[#081835]/70 text-xs tracking-[0.28em] uppercase">
              360 Construcciones
            </p>

            {/* Slogan / headline */}
            <h2 className="mt-4 font-heading font-black uppercase tracking-[0.02em] text-4xl md:text-6xl text-[#002849] leading-[1.05]">
              Construimos con método,
              <br />
              entregamos con precisión
            </h2>
          </div>

          <div className="lg:col-span-6">
            {/* Quiénes somos */}
            <p className="font-body text-[#081835]/80 text-base md:text-lg leading-relaxed">
              Somos una empresa orientada a la arquitectura, la ingeniería y la
              ejecución de obras con gestión integral. Nos involucramos desde la
              planificación hasta la entrega final, cuidando el detalle técnico,
              los tiempos y la calidad del resultado.
            </p>

            {/* CTA a Nosotros */}
            <div className="mt-8">
              <a
                href="#Nosotros"
                className="
                  inline-flex items-center gap-3
                  border border-[#002849]
                  px-6 py-3
                  text-sm uppercase tracking-[0.18em]
                  text-[#002849]
                  transition
                  hover:bg-[#002849]
                  hover:text-white
                "
              >
                Conocé más
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* micro línea técnica
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-[#002849]/20 to-transparent" />
            </div> */}
      </div>
    </section>
  );
}
