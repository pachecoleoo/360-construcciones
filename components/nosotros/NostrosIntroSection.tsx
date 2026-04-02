"use client";

import Image from "next/image";
import { useReveal } from "@/components/hooks/useReveal";

export default function NosotrosIntroSection() {
  const s1 = useReveal({ duration: 900 });
  const IMG_FOCUS_MS = 2500;

  return (
    <section data-section="01" className="relative bg-white py-24">
      {/* NÚMERO DE SECCIÓN */}
      <div
        className={`
          pointer-events-none
          absolute
          left-[-10px] md:left-[-20px] lg:left-[-40px]
          top-16
          font-heading font-black
          text-[140px] md:text-[180px]
          leading-none
          text-[#002B49]/15
          select-none
          transition-all duration-1000 ease-out
          ${s1.visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}
        `}
      >
        01
      </div>

      <div className="mx-auto max-w-7xl px-8 md:px-16 lg:px-24">
        <div
          ref={s1.ref as any}
          className={`transition-opacity ease-out ${s1.fadeClass}`}
          style={s1.fadeStyle}
        >
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* TEXTO */}
            <div
              className={`
                lg:col-span-8 text-center lg:text-left
                transition-all ease-out delay-200 duration-700
                ${s1.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
              `}
            >
              <h2 className="mt-4 font-heading font-black uppercase text-5xl leading-[1.05] text-[#002B49] md:text-6xl">
                Somos 360
              </h2>

              <p className="mx-auto mt-8 max-w-2xl font-body text-xl leading-relaxed text-[#081835]/80 lg:mx-0">
                Integramos arquitectura e ingeniería en un flujo claro y
                medible. Desde la planificación hasta la entrega final, cuidamos
                cada decisión técnica y cada detalle constructivo.
              </p>
            </div>

            {/* LOGO */}
            <div
              className={`
                lg:col-span-4 flex justify-center lg:justify-end
                transition-[filter] ease-out
                ${s1.visible ? "blur-0" : "blur-sm"}
              `}
              style={{ transitionDuration: `${IMG_FOCUS_MS}ms` }}
            >
              <Image
                src="/brand/360azul.png"
                alt="360 Construcciones"
                width={260}
                height={260}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
