"use client";

import Image from "next/image";
import { useReveal } from "@/components/hooks/useReveal";

export default function NosotrosIntroSection() {
  const s1 = useReveal({ duration: 900 });

  return (
    <section
      data-section="01"
      className="relative overflow-hidden bg-white py-16 md:py-24"
    >
      {/* grid técnico suave */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(6,42,71,0.16) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6,42,71,0.16) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* número */}
      <div
        className={`
          pointer-events-none absolute right-6 top-10
          font-heading text-[92px] font-black leading-none
           text-[#002B49]/10
          md:left-[-20px]  lg:left-[-40px] md:right-auto md:top-16 md:text-[180px]
          transition-all duration-1000 ease-out
          ${s1.visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}
        `}
      >
        01
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-16 lg:px-24">
        <div
          ref={s1.ref as any}
          className={`transition-opacity ease-out ${s1.fadeClass}`}
          style={s1.fadeStyle}
        >
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* TEXTO */}
            <div
              className={`
                relative z-10 lg:col-span-8
                transition-all ease-out delay-200 duration-700
                ${s1.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
              `}
            >
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#7a8a97]">
                Sobre nosotros
              </p>

              <h2 className="mt-4 max-w-[720px] font-heading text-[48px] font-black uppercase leading-[0.9] tracking-[0.01em] text-[#002B49] md:text-6xl">
                Somos 360
              </h2>

              <p className="mt-7 max-w-[680px] font-body text-[17px] leading-8 text-[#081835]/75 md:text-xl md:leading-9">
                Integramos arquitectura e ingeniería en un flujo claro y
                medible. Desde la planificación hasta la entrega final, cuidamos
                cada decisión técnica y cada detalle constructivo.
              </p>
            </div>

            {/* LOGO */}
            <div
              className={`
                relative z-10 flex justify-start lg:col-span-4 lg:justify-end
                transition-all duration-[1800ms] ease-out
                ${s1.visible ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-sm translate-y-3"}
              `}
            >
              <Image
                src="/brand/360azul.png"
                alt="360 Construcciones"
                width={220}
                height={220}
                className="h-[130px] w-[130px] object-contain md:h-[220px] md:w-[220px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
