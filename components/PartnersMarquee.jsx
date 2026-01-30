"use client";

import Image from "next/image";

type Partner = {
  name: string;
  logoSrc: string; // en /public/...
  href?: string;
};

export default function PartnersMarquee({
  title = "Marcas asociadas y partners",
  items,
  speed = 32, // segundos (más alto = más lento)
}: {
  title?: string;
  items: Partner[];
  speed?: number;
}) {
  // Duplicamos para que el loop sea continuo sin “cortes”
  const track = [...items, ...items];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-8 md:px-16 lg:px-24">
        <div className="mb-10">
          <p className="font-body text-xs tracking-[0.28em] uppercase text-[#002B49]/60">
            Alianzas
          </p>
          <h2 className="mt-3 font-heading font-black uppercase text-3xl md:text-4xl text-[#002B49]">
            {title}
          </h2>
          <p className="mt-3 font-body text-[#081835]/70 max-w-2xl">
            Trabajamos con proveedores y marcas que garantizan calidad, disponibilidad y terminaciones consistentes.
          </p>
        </div>

        {/* Marco / máscara */}
        <div
          className="
            relative overflow-hidden rounded-2xl
            border border-[#002B49]/10
            bg-[#F6F9FB]
          "
        >
          {/* fades laterales (premium) */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#F6F9FB] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#F6F9FB] to-transparent z-10" />

          {/* Track */}
          <div
            className="flex w-max gap-10 py-8 px-6 marquee-track hover:[animation-play-state:paused]"
            style={{ ["--marquee-duration" as any]: `${speed}s` }}
            aria-label="Carrusel continuo de marcas asociadas"
          >
            {track.map((p, idx) => {
              const content = (
                <div
                  className="
                    flex items-center justify-center
                    h-14 md:h-16
                    w-[140px] md:w-[160px]
                    opacity-80 hover:opacity-100
                    transition-opacity
                    grayscale hover:grayscale-0
                  "
                  title={p.name}
                >
                  <Image
                    src={p.logoSrc}
                    alt={p.name}
                    width={180}
                    height={80}
                    className="h-full w-auto object-contain"
                  />
                </div>
              );

              return p.href ? (
                <a
                  key={`${p.name}-${idx}`}
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="focus:outline-none focus:ring-2 focus:ring-[#002B49]/40 rounded-xl"
                >
                  {content}
                </a>
              ) : (
                <div key={`${p.name}-${idx}`}>{content}</div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CSS inline (global o module también sirve) */}
      <style jsx global>{`
        .marquee-track {
          animation: marquee var(--marquee-duration, 32s) linear infinite;
        }
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none !important;
            transform: translateX(0) !important;
          }
        }
      `}</style>
    </section>
  );
}
