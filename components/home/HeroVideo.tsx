"use client";

import Image from "next/image";
import { BrandButtonC } from "../ui/BrandButtonC";

export default function HeroVideo() {
  const scrollNext = () => {
    document
      .getElementById("primera-seccion")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        className="
          absolute inset-0 h-full w-full
          object-cover
          object-[center_25%]
          md:object-center
        "
        src="/images/buildvideo.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="text-center max-w-3xl">
          {/* LOGO */}
          <div className="mx-auto w-[320px] md:w-[420px]">
            <div className="logo-reveal">
              <Image
                src="/brand/logoBlanco.png"
                alt="360 Construcciones"
                width={900}
                height={220}
                priority
                className="h-auto w-full"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <BrandButtonC href="/proyectos" variant="outline">
              Desarrollo Inmobiliario
            </BrandButtonC>

            <BrandButtonC href="/" variant="outline">
              Infraestructura y movimientos de suelos
            </BrandButtonC>
          </div>
        </div>
      </div>

      {/* INDICADOR SCROLL */}
      <button
        onClick={scrollNext}
        className="
        absolute bottom-10 left-1/2 -translate-x-1/2
        z-20
        flex flex-col items-center
        gap-2
        text-white/70
        hover:text-white
        transition
        animate-bounce
      "
      >
        {/* <span className="text-[10px] uppercase tracking-[0.35em]">Ver más</span> */}

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
