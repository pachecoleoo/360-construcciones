"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ITEMS = [
  {
    n: "01",
    title: "Servicios",
    image: "/images/suelo/suelo1.jpeg",
    text: "Soluciones integrales para obras de ingeniería, construcción y montajes industriales, con foco en planificación, ejecución y control técnico.",
  },
  {
    n: "02",
    title: "Infraestructura",
    image: "/images/suelo/suelo2.jpg",
    text: "Desarrollo de infraestructura civil, redes, accesos, bases y obras complementarias para proyectos urbanos e industriales.",
  },
  {
    n: "03",
    title: "Edificios\nde viviendas",
    image: "/images/suelo/infra5.jpg",
    text: "Construcción de edificios de viviendas con coordinación de obra, calidad constructiva y seguimiento integral de cada etapa.",
  },
  {
    n: "04",
    title: "Partners",
    image: "/images/suelo/suelo4.jpg",
    text: "Relaciones de largo plazo con proveedores, equipos técnicos y aliados estratégicos para sostener proyectos eficientes y confiables.",
  },
];

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

export default function Infraestructuraysuelo() {
  const [active, setActive] = useState(ITEMS[0]);

  const { ref, visible } = useInViewOnce<HTMLElement>();

  return (
    <section
      id="primera-seccion"
      ref={ref}
      className="relative overflow-hidden border-t border-[#d9dde2] bg-[#f4f5f6] py-20 md:py-28"
    >
      {/* GRID */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(6,42,71,0.16) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6,42,71,0.16) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">
        {/* INTRO */}
        <div className="mx-auto max-w-[1180px] text-center">
          <p
            className={cx(
              "text-[11px] uppercase tracking-[0.28em] text-[#7a8a97]",
              "transition-all duration-700 ease-out",
              visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
            )}
          >
            Servicios e infraestructura
          </p>

          <div className="mt-4 overflow-hidden">
            <h2
              className={cx(
                "font-heading text-[42px] font-black uppercase leading-[0.9] tracking-[0.01em] text-[#062a47]",
                "sm:text-[58px] md:text-[76px] lg:text-[88px]",
                "transition-all duration-700 delay-100 ease-out",
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-[110%] opacity-0",
              )}
            >
              Capacidad técnica para resolver obras complejas
            </h2>
          </div>

          {/* LINEA */}
          <div className="mx-auto mt-5 h-[2px] w-24 overflow-hidden">
            <div
              className={cx(
                "h-full bg-[#062a47] transition-all duration-[1100ms] delay-200 ease-out",
                visible ? "w-full" : "w-0",
              )}
            />
          </div>

          <p
            className={cx(
              "mx-auto mt-8 max-w-[820px] text-[18px] leading-8 text-[#5f6f84] md:text-[22px] md:leading-9",
              "transition-all duration-700 delay-200 ease-out",
              visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
            )}
          >
            <strong className="font-semibold text-[#062a47]">
              Creamos, ejecutamos y gestionamos soluciones innovadoras
            </strong>{" "}
            para resolver proyectos de ingeniería, construcción y montajes
            industriales, honrando los compromisos asumidos y las relaciones a
            largo plazo con nuestros partners.
          </p>
        </div>

        {/* BOTONES */}
        <div
          className={cx(
            "mx-auto mt-16 grid max-w-[1180px] grid-cols-2 gap-5 md:mt-20 md:grid-cols-4 md:gap-6",
            "transition-all duration-700 delay-300 ease-out",
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
          )}
        >
          {ITEMS.map((item) => {
            const isActive = active.n === item.n;

            return (
              <button
                key={item.n}
                type="button"
                onClick={() => setActive(item)}
                className={`
                  group relative min-h-[190px] overflow-hidden
                  border p-5 text-left
                  transition-all duration-500 ease-out
                  hover:-translate-y-2
                  hover:shadow-[0_26px_70px_rgba(6,42,71,0.20)]
                  ${
                    isActive
                      ? "border-[#062a47] bg-[#062a47]"
                      : "border-[#cfd6dd] bg-[#c8d8e3]/80 hover:border-[#062a47]/50 hover:bg-[#062a47]"
                  }
                `}
              >
                <span
                  className={`absolute left-5 top-5 h-px transition-all duration-500 ${
                    isActive
                      ? "w-16 bg-white/45"
                      : "w-10 bg-[#062a47]/25 group-hover:w-16 group-hover:bg-white/45"
                  }`}
                />

                <span
                  className={`relative z-10 mt-20 block font-heading text-[42px] font-black leading-none tracking-[-0.05em] transition-colors duration-500 ${
                    isActive
                      ? "text-white"
                      : "text-[#062a47] group-hover:text-white"
                  }`}
                >
                  {item.n}
                </span>

                <span
                  className={`relative z-10 mt-5 block whitespace-pre-line font-heading text-[20px] font-black uppercase leading-[0.9] tracking-[-0.02em] transition-colors duration-500 ${
                    isActive
                      ? "text-white"
                      : "text-[#062a47] group-hover:text-white"
                  }`}
                >
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* PANEL */}
        <div
          className={cx(
            "mx-auto mt-10 max-w-[1180px]",
            "transition-all duration-700 delay-[450ms] ease-out",
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
          )}
        >
          <div className="relative border border-[#d9dde2] bg-white/55 p-3 shadow-[0_30px_90px_rgba(6,42,71,0.08)] backdrop-blur-md">
            {/* esquinas */}
            <span className="absolute left-0 top-0 h-10 w-10 border-l border-t border-[#062a47]/25" />
            <span className="absolute right-0 top-0 h-10 w-10 border-r border-t border-[#062a47]/25" />
            <span className="absolute bottom-0 left-0 h-10 w-10 border-b border-l border-[#062a47]/25" />
            <span className="absolute bottom-0 right-0 h-10 w-10 border-b border-r border-[#062a47]/25" />

            {/* IMAGEN */}
            <div className="relative h-[300px] overflow-hidden md:h-[480px]">
              <Image
                key={active.image}
                src={active.image}
                alt={active.title}
                fill
                className="object-cover transition-all duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#062a47]/60 via-[#062a47]/10 to-transparent" />

              <span className="absolute right-5 top-4 font-heading text-[120px] font-black leading-none tracking-[-0.08em] text-white/10 md:text-[170px]">
                {active.n}
              </span>
            </div>

            {/* INFO */}
            <div className="relative -mt-20 grid gap-4 px-4 pb-5 md:-mt-24 md:grid-cols-[1.05fr_0.95fr] md:px-6">
              <div className="relative bg-[#062a47] p-7 text-white shadow-[0_24px_60px_rgba(6,42,71,0.22)] md:p-9">
                <p className="text-[10px] uppercase tracking-[0.28em] text-white/55">
                  {active.n} / {active.title.replace("\n", " ")}
                </p>

                <h3 className="mt-4 font-heading text-[42px] font-black uppercase leading-[0.88] tracking-[-0.02em] md:text-[58px]">
                  {active.title}
                </h3>

                <div className="mt-7 h-px w-16 bg-white/35" />

                <p className="mt-6 text-[15px] leading-7 text-white/75 md:text-[16px]">
                  {active.text}
                </p>
              </div>

              <div className="border border-[#d9dde2] bg-white/90 p-7 md:p-8">
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#7a8a97]">
                  Desarrollo técnico
                </p>

                <div className="mt-6 space-y-4">
                  {["Planificación", "Ejecución", "Control de obra"].map(
                    (item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between border-b border-[#d9dde2] pb-3 last:border-b-0"
                      >
                        <span className="text-[13px] uppercase tracking-[0.18em] text-[#5f6f84]">
                          {item}
                        </span>

                        <span className="h-2 w-2 bg-[#062a47]" />
                      </div>
                    ),
                  )}
                </div>

                <p className="mt-8 text-[10px] uppercase tracking-[0.24em] text-[#7a8a97]">
                  360 Construcciones
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
