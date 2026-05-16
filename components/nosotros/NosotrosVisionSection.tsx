"use client";

import Image from "next/image";
import { useReveal } from "@/components/hooks/useReveal";

export default function NosotrosVisionSection() {
  const s2 = useReveal({ duration: 1100 });
  const IMG_FOCUS_MS = 2500;

  return (
    <section
      id="vision"
      data-section="02"
      className="relative overflow-hidden bg-[#002B49] text-white"
    >
      <div
        className={`
    pointer-events-none
    absolute
    right-3 top-86 md:top-80 sm:top-90 lg:top-10
    sm:right-[-10px] md:right-[-20px] lg:right-[-40px]
    z-10
    font-heading font-black
    text-[88px] sm:text-[88px] md:text-[180px]
    leading-none
    text-white/10
    select-none
    transition-all duration-1000 ease-out
    ${s2.visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}
  `}
      >
        02
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.22) 1px, transparent 1px)",
          backgroundSize: "92px 92px",
        }}
      />

      <div
        ref={s2.ref as any}
        className={`transition-opacity ease-out ${s2.fadeClass}`}
        style={s2.fadeStyle}
      >
        <div className="grid min-h-[64vh] md:min-h-[70vh] lg:grid-cols-12">
          {/* IMAGEN */}
          <div
            className={`
              group relative h-[40vh] overflow-hidden transition-[filter] ease-out
              sm:h-[45vh] lg:col-span-3 lg:h-auto
              ${s2.visible ? "blur-0" : "blur-md"}
            `}
            style={{ transitionDuration: `${IMG_FOCUS_MS}ms` }}
          >
            <Image
              src="/images/original/obreros.JPG"
              alt="Visión"
              fill
              className="
                object-cover object-[center_25%] md:object-center
                will-change-transform transition-transform duration-700 ease-out
                group-hover:scale-105
              "
            />

            <div className="absolute inset-0 bg-black/45 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          </div>

          {/* TEXTO */}
          <div
            className={`
    lg:col-span-9 flex items-center
    px-12 sm:px-8 md:px-16 
    py-14 sm:py-14 md:py-16 
    transition-all ease-out delay-300 duration-700
    ${s2.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
  `}
          >
            <div className="max-w-3xl w-full mx-auto lg:mx-0 lg:ml-10">
              <h2 className="mt-4 font-heading font-black uppercase text-5xl md:text-6xl leading-[1.05]">
                Visión
              </h2>

              <p className="mt-8 font-body text-white/85 text-base md:text-xl leading-relaxed">
                Queremos ser el faro de innovación en ingeniería y construcción
                del sur de la región. Estamos construyendo nuestro liderazgo
                sobre la base de la más{" "}
                <strong className="font-semibold text-white">
                  sólida confianza de nuestros clientes, el talento de nuestros
                  equipos y de un resultado excepcional
                </strong>{" "}
                en cada uno de nuestros proyectos y desarrollos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
