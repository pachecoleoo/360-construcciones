"use client";

import { useEffect, useRef, useState } from "react";

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
      { threshold: 0.18 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

export default function ProjectsIntroSection() {
  const { ref, visible } = useInViewOnce<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-b border-[#d9dde2] bg-[#f4f5f6] py-20 md:py-24 lg:py-28"
    >
      {/* grid técnica sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6,42,71,0.14) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6,42,71,0.14) 1px, transparent 1px)
          `,
          backgroundSize: "78px 78px",
        }}
      />

      <div className="relative mx-auto max-w-[1380px] px-6 md:px-10">
        {/* EYEBROW */}
        <p
          className={cx(
            "text-[11px] uppercase tracking-[0.28em] text-[#7a8a97]",
            "transition-all duration-700 ease-out",
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
        >
          Proyectos
        </p>

        {/* TITULO FULL WIDTH */}
        <div className="mt-3 overflow-hidden">
          <h2
            className={cx(
              "max-w-[1200px] font-heading font-black uppercase text-[#062a47]",
              "leading-[0.9] tracking-[0.01em]",
              "text-[48px] sm:text-[62px] md:text-[82px] lg:text-[104px] xl:text-[108px]",
              "transition-all duration-700 delay-100 ease-out",
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-[110%] opacity-0",
            )}
          >
            Proyectamos espacios con identidad
          </h2>
        </div>

        {/* LINEA */}
        <div className="mt-4 h-[2px] w-24 overflow-hidden md:mt-5">
          <div
            className={cx(
              "h-full bg-[#062a47] transition-all duration-[1100ms] delay-200 ease-out",
              visible ? "w-full" : "w-0",
            )}
          />
        </div>

        {/* BLOQUE INFERIOR */}
        <div
          className={cx(
            "mt-10 grid gap-8 border-t border-[#cfd5dc] pt-8 md:mt-12 md:grid-cols-[1.15fr_0.85fr] md:gap-10",
            "transition-all duration-700 delay-200 ease-out",
            visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
          )}
        >
          <div className="max-w-[820px]">
            <p className="text-[15px] leading-8 text-[#5f6f84] md:text-[16px] md:leading-9 lg:text-[17px]">
              Cada obra expresa una manera de proyectar, coordinar y
              materializar arquitectura. Reunimos técnica, identidad y ejecución
              para desarrollar edificios y espacios con precisión, presencia y
              consistencia constructiva.
            </p>
          </div>

          <div className="flex items-end md:justify-end">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#8a99a8]">
              Selección de proyectos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
