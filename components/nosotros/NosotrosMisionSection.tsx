"use client";

import Image from "next/image";
import { useReveal } from "@/components/hooks/useReveal";

export default function NosotrosMisionSection() {
  const s3 = useReveal({ duration: 1000 });
  const IMG_FOCUS_MS = 2500;

  return (
    <section
      id="mision"
      data-section="03"
      className="relative overflow-hidden bg-[#C9D8E2]"
    >
      <div
        className={`
    pointer-events-none
    absolute
    right-3 top-10
    md:left-[-20px] md:right-auto lg:left-[-40px]
    z-10
    font-heading font-black
    text-[88px] md:text-[150px] lg:text-[180px]
    leading-none
    text-[#002B49]/15
    select-none
    transition-all duration-1000 ease-out
    ${s3.visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6 md:-translate-x-6"}
  `}
      >
        03
      </div>

      <div
        ref={s3.ref as any}
        className={`transition-opacity ease-out ${s3.fadeClass}`}
        style={s3.fadeStyle}
      >
        <div className="grid min-h-[64vh] md:min-h-[70vh] lg:grid-cols-12">
          {/* TEXTO */}
          <div
            className={`
              lg:col-span-9 flex items-center px-8 py-14 transition-all ease-out delay-300 duration-700
              md:px-16 md:py-16
              ${s3.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
            `}
          >
            <div className="max-w-3xl mx-5 md:ml-30">
              <h2 className="mt-4 font-heading font-black uppercase text-5xl leading-[1.05] text-[#002B49] md:text-6xl">
                Misión
              </h2>

              <p className="mt-8 font-body text-base leading-relaxed text-[#002B49]/85 md:text-xl">
                <strong className="font-semibold text-[#002B49]">
                  Crear, ejecutar y gestionar soluciones innovadoras
                </strong>{" "}
                para resolver proyectos de ingeniería, construcción y montajes
                industriales, honrando los compromisos asumidos y las relaciones
                a largo plazo con nuestros clientes.
              </p>
            </div>
          </div>

          {/* IMAGEN */}
          <div
            className={`
              relative h-[34vh] overflow-hidden transition-[filter] ease-out
              sm:h-[42vh] lg:col-span-3 lg:h-auto
              ${s3.visible ? "blur-0" : "blur-md"}
            `}
            style={{ transitionDuration: `${IMG_FOCUS_MS}ms` }}
          >
            <Image
              src="/images/original/equipo3.JPG"
              alt="Misión"
              fill
              className="
                object-cover object-center
                will-change-transform transition-transform duration-700 ease-out
                lg:group-hover:scale-105
              "
            />

            <div className="absolute inset-0 bg-black/45 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
