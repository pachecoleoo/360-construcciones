"use client";

import Image from "next/image";
import { BrandButtonC } from "../ui/BrandButtonC";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroImage() {
  const { language, t } = useLanguage();
  const scrollNext = () => {
    document
      .getElementById("primera-seccion")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Imagen de fondo */}
      <Image
        src="/images/original/frameGatica4.jpg"
        alt={`360 Construcciones - ${t("Contacto")}`}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Oscurecimiento general equilibrado */}
      <div aria-hidden="true" className="absolute inset-0 bg-black/25" />
      {/* Sombra superior para mejorar la lectura del navbar */}
      {/* Iluminación central detrás del título */}
      {/* Sombra inferior suave */}+{/* Contenido */}
      <div className="relative z-10 flex h-full items-center justify-center px-0 md:px-6">
        <div className="max-w-2xl text-center">
          <h1
            className="
            hero-title
              font-extra
              text-4xl
              font-black
              uppercase
              leading-[1.05]
              tracking-[0.02em]
              text-white
              [text-shadow:0_3px_8px_rgba(0,0,0,0.95),0_12px_38px_rgba(0,0,0,0.8)]
              md:text-7xl
            "
          >
            {language === "es" ? "Contactanos" : "Contact us"}{" "}
            <span
              className="
                text-white
                [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_8px_30px_rgba(6,42,71,0.75)]
              "
            >
              {language === "es" ? "AHORA" : "NOW"}
            </span>
          </h1>

          <div
            className="
              mt-10
 hero-subtitle
              flex
              flex-wrap
              justify-center
              gap-4
              [filter:drop-shadow(0_12px_24px_rgba(0,0,0,0.45))]
            "
          >
            <BrandButtonC href="#email" variant="glass">
              {language === "es" ? "Envíanos un email" : "Send us an email"}
            </BrandButtonC>

            <BrandButtonC href="#asesor" variant="ghost">
              {language === "es" ? "Contactate con un asesor" : "Speak with an advisor"}
            </BrandButtonC>
          </div>
        </div>
      </div>
      {/* Flecha scroll */}
      <button
        type="button"
        onClick={scrollNext}
        aria-label={t("Ir a la primera sección")}
        className="
          absolute bottom-10 left-1/2 z-20
          flex -translate-x-1/2 flex-col items-center
          text-white/70
          transition-colors duration-300
          hover:text-white
        "
      >
        <svg
          className="animate-bounce [filter:drop-shadow(0_4px_8px_rgba(0,0,0,0.8))]"
          width="56"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
    </section>
  );
}
