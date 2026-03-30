"use client";

import { useEffect, useRef, useState } from "react";

type ProjectLocationMapProps = {
  eyebrow?: string;
  title: string;
  description: string;
  address: string;
  mapQuery: string;
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

export default function ProjectLocationMap({
  eyebrow = "",
  title,
  description,
  address,
  mapQuery,
}: ProjectLocationMapProps) {
  const { ref, visible } = useInViewOnce<HTMLDivElement>();

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    mapQuery,
  )}&output=embed`;

  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    mapQuery,
  )}`;

  return (
    <section
      ref={ref}
      className="border-t border-[#d9dde2] bg-white py-20 md:py-20"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        {/* HEADER */}
        <div className="relative mb-10 md:mb-12">
          {/* NÚMERO 04 */}
          <div
            className={cx(
              "pointer-events-none absolute right-0 -top-5 md:top-16 select-none",
              "font-heading font-black",
              "text-[120px] md:text-[180px]",
              "leading-none",
              "text-[#062a47]/10",
              "transition-all duration-1000 ease-out",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            )}
          >
            04
          </div>

          {/* CONTENIDO */}
          <div className="relative z-10 pr-6 md:pr-20 max-w-3xl">
            {/* EYEBROW */}
            <p
              className={cx(
                "text-[11px] uppercase tracking-[0.28em] text-[#7a8a97]",
                "transition-all duration-700",
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0",
              )}
            >
              {eyebrow}
            </p>

            {/* TÍTULO (REVEAL BLOQUE) */}
            <div className="overflow-hidden">
              <h2
                className={cx(
                  "mt-3 text-[34px] md:text-[54px]",
                  "leading-[0.95] tracking-tight",
                  "text-[#062a47]",
                  "font-heading font-black uppercase",
                  "transition-all duration-700 delay-100",
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-[110%] opacity-0",
                )}
              >
                {title}
              </h2>
            </div>

            {/* LÍNEA ANIMADA */}
            <div className="mt-5 h-[2px] w-16 overflow-hidden">
              <div
                className={cx(
                  "h-full bg-[#062a47] transition-all duration-[1100ms] delay-200",
                  visible ? "w-full" : "w-0",
                )}
              />
            </div>

            {/* DESCRIPCIÓN */}
            <p
              className={cx(
                "mt-8 text-[15px] leading-8 text-[#5f6f84] md:text-base",
                "transition-all duration-700 delay-200",
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0",
              )}
            >
              {description}
            </p>
          </div>
        </div>

        {/* DIRECCIÓN */}
        <div
          className={cx(
            "mt-10 border-t border-[#d9dde2]",
            "transition-all duration-700 delay-300",
            visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
          )}
        >
          <div className="grid gap-4 border-b border-[#d9dde2] py-5 md:grid-cols-[140px_1fr] md:gap-6">
            <span className="text-[11px] uppercase tracking-[0.24em] text-[#8a9aa8]">
              Dirección
            </span>

            <p className="text-[15px] leading-8 text-[#22384f]">{address}</p>
          </div>
        </div>

        {/* MAPA */}
        <div
          className={cx(
            "mt-10 overflow-hidden border border-[#d9dde2] bg-[#f4f5f6]",
            "transition-all duration-1000 delay-400",
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
          )}
        >
          <iframe
            src={mapSrc}
            className="w-full h-[520px] grayscale contrast-95"
            loading="lazy"
          />
        </div>

        {/* LINK */}
        <div
          className={cx(
            "mt-5",
            "transition-all duration-700 delay-500",
            visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
          )}
        >
          <a
            href={mapsLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#062a47] transition hover:opacity-70"
          >
            Ver en Google Maps →
          </a>
        </div>
      </div>
    </section>
  );
}
