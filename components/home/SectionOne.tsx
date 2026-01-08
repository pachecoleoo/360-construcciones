"use client";

import { useEffect, useRef, useState } from "react";

export default function SectionOne() {
  // ref para detectar cuándo entra en viewport
  const ref = useRef<HTMLDivElement | null>(null);

  // visible = true cuando el bloque se ve
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // cuando aparece, activamos animación y desconectamos (solo 1 vez)
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35, // % visible para disparar
      }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-14 px-6 overflow-hidden">
      <div
        ref={ref}
        className={`
          mx-auto max-w-7xl
          transition-all duration-[900ms] ease-out
          ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-24"}
        `}
      >
        {/* Título */}
        <h2 className="font-heading font-black uppercase tracking-[0.02em] text-4xl md:text-6xl text-[#002849] leading-[1.05]">
          Desarrollo
          <br />
          inmobiliario
        </h2>
        {/* <h1 className="font-ultra text-7xl uppercase">ULTRA TEST</h1>

        <h2 className="font-extra text-5xl uppercase">EXTRA TEST</h2>

        <h3 className="font-heading font-black text-4xl uppercase">
          BLACK CONDENSED
        </h3>

        <p className="font-body text-base">CONDENSED NORMAL</p> */}
        {/* Botón */}
        <div className="mt-10">
          <a
            href="#proyectos-desarrollados"
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
            Proyectos desarrollados
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
