"use client";

import Image from "next/image";
import { BrandButtonC } from "../ui/BrandButtonC";

export default function HeroImage() {
  const scrollNext = () => {
    document
      .getElementById("primera-seccion")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* IMAGEN FONDO */}
      <Image
        src="/images/original/grua2.jpg"
        alt="360 Construcciones - Contacto"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/45" />

      {/* CONTENIDO */}
      <div className="relative z-10 flex h-full items-center justify-center px-0 md:px-6">
        <div className="text-center max-w-3xl">
          <h1 className=" text-white font-extra font-black uppercase tracking-[0.02em] text-6xl md:text-7xl leading-[1.05] ">
            {" "}
            Contactanos <span className="text-brand-blue">AHORA</span>{" "}
          </h1>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <BrandButtonC href="#email" variant="outline">
              Envíanos un email
            </BrandButtonC>

            <BrandButtonC href="#whatsapp" variant="outline">
              Contactate con un asesor
            </BrandButtonC>
          </div>
        </div>
      </div>

      {/* FLECHA SCROLL */}
      <button
        onClick={scrollNext}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/70 hover:text-white transition animate-bounce z-20"
      >
        <svg
          width="56"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
    </section>
  );
}
