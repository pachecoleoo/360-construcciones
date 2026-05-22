"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ProjectHeroProps = {
  title: string;
  location?: string;
  heroImageSrc?: string;
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function useInViewOnce<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

export default function ProjectHero({
  title,
  location,
  heroImageSrc,
}: ProjectHeroProps) {
  const { ref, visible } = useInViewOnce<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[720px] overflow-hidden bg-[#062a47]"
    >
      {/* IMAGEN */}
      {heroImageSrc ? (
        <Image
          src={heroImageSrc}
          alt={title}
          fill
          priority
          className="object-cover object-center"
        />
      ) : (
        <div className="absolute inset-0 bg-[#062a47]" />
      )}

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-black/28" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/28 via-black/12 to-black/58" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/18 via-transparent to-transparent" />

      {/* CONTENIDO */}
      <div className="relative z-10 flex h-full flex-col">
        {/* LOGO */}
        {/* <div className="absolute left-5 top-5 z-30 sm:left-7 sm:top-7 md:left-16 md:top-8">
          <Image
            src="/brand/360blanco2.png"
            alt="360 Construcciones"
            width={130}
            height={70}
            priority
            className="h-auto w-[85px] sm:w-[85px] md:w-[95px] lg:w-[105px]"
          />
        </div> */}

        {/* BLOQUE HERO */}
        <div className="mx-auto flex h-full w-full max-w-[1400px] items-end px-5 pb-[90px] sm:px-7 md:px-10 md:pb-[110px]">
          <div className="max-w-[900px]">
            {/* TÍTULO */}
            <div className="mt-3 overflow-hidden">
              <h1
                className={cx(
                  "text-[44px] leading-[0.9] tracking-tight text-white sm:text-[62px] md:text-[82px] lg:text-[96px]",
                  "font-heading font-black uppercase",
                  "transition-all duration-700 delay-100 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-[110%] opacity-0",
                )}
              >
                {title}
              </h1>
            </div>

            {/* LÍNEA */}
            <div className="mt-4 h-[2px] w-16 overflow-hidden">
              <div
                className={cx(
                  "h-full bg-white transition-all duration-[1100ms] delay-200 ease-out",
                  visible ? "w-full" : "w-0",
                )}
              />
            </div>
          </div>
        </div>

        {/* NAV INTERNA */}
        <div className="absolute bottom-0 left-0 right-0 hidden border-t border-white/10 bg-black/20 backdrop-blur-md md:block">
          <div className="mx-auto flex max-w-[1400px] items-center gap-8 px-10 py-4">
            <a
              href="#proyecto"
              className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
            >
              Ficha
            </a>
            <a
              href="#amenities"
              className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
            >
              Aminities
            </a>
            <a
              href="#Galeria"
              className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
            >
              Galería
            </a>
            <a
              href="#ubicacion"
              className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
            >
              Ubicación
            </a>
            <a
              href="#recorrido"
              className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
            >
              Recorrido
            </a>
            <a
              href="#contacto"
              className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
