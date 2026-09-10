"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ITEMS = [
  {
    n: "01",
    title: "Servicios",
    image: "/images/suelo/suelo1.jpeg",
    text: "Soluciones integrales para obras de ingeniería, construcción y montajes industriales, con foco en planificación, ejecución y control técnico.",
    details: [
      "Ingeniería y planificación",
      "Construcción y montajes",
      "Supervisión integral",
    ],
  },
  {
    n: "02",
    title: "Infraestructura",
    image: "/images/suelo/suelo2.jpg",
    text: "Desarrollo de infraestructura civil, redes, accesos, bases y obras complementarias para proyectos urbanos e industriales.",
    details: ["Obras civiles", "Redes y servicios", "Accesos y bases"],
  },
  {
    n: "03",
    title: "Edificios\nde viviendas",
    image: "/images/suelo/infra3.JPG",
    text: "Construcción de edificios de viviendas con coordinación de obra, calidad constructiva y seguimiento integral de cada etapa.",
    details: ["Dirección de obra", "Calidad constructiva", "Gestión de etapas"],
  },
  {
    n: "04",
    title: "Partners",
    image: "/images/suelo/suelo4.JPG",
    text: "Relaciones de largo plazo con proveedores, equipos técnicos y aliados estratégicos para sostener proyectos eficientes y confiables.",
    details: [
      "Alianzas estratégicas",
      "Proveedores especializados",
      "Trabajo colaborativo",
    ],
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
      {
        threshold: 0.18,
      },
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
      className="relative overflow-visible border-t border-[#d9dde2] bg-[#f4f5f6] py-16 md:py-28"
    >
      {/* Fondo cuadriculado */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(6,42,71,0.16) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(6,42,71,0.16) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-10">
        {/* Introducción */}
        <div className="mx-auto max-w-[1180px] text-center">
          <p
            className={cx(
              "text-[10px] uppercase tracking-[0.24em] text-[#7a8a97] sm:text-[11px] sm:tracking-[0.28em]",
              "transition-all duration-700 ease-out",
              visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
            )}
          >
            Servicios e infraestructura
          </p>

          <div className="mt-4 overflow-visible ">
            <h2
              className={cx(
                "font-heading text-[clamp(38px,11vw,88px)] font-black  uppercase leading-[0.9] tracking-[0.01em] text-[#062a47]",
                "transition-all delay-100 duration-700 ease-out",
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-[110%] opacity-0",
              )}
            >
              Capacidad técnica para resolver obras complejas
            </h2>
          </div>

          <div className="mx-auto mt-5 h-[2px] w-24 overflow-hidden">
            <div
              className={cx(
                "h-full bg-[#062a47] transition-all delay-200 duration-[1100ms] ease-out",
                visible ? "w-full" : "w-0",
              )}
            />
          </div>

          <p
            className={cx(
              "mx-auto mt-7 max-w-[820px] text-[16px] leading-7 text-[#5f6f84] sm:text-[18px] sm:leading-8 md:mt-8 md:text-[22px] md:leading-9",
              "transition-all delay-200 duration-700 ease-out",
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

        {/* Tarjetas de navegación */}
        <div
          className={cx(
            "mx-auto mt-12 grid max-w-[1180px] grid-cols-2 gap-3 sm:gap-5 md:mt-20 md:grid-cols-4 md:gap-6",
            "transition-all delay-300 duration-700 ease-out",
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
                aria-pressed={isActive}
                className={cx(
                  "group relative min-h-[165px] min-w-0 overflow-hidden border p-4 text-left",
                  "transition-all duration-500 ease-out",
                  "hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(6,42,71,0.20)]",
                  "sm:min-h-[190px] sm:p-5",
                  isActive
                    ? "border-[#062a47] bg-[#062a47]"
                    : "border-[#cfd6dd] bg-[#c8d8e3]/80 hover:border-[#062a47]/50 hover:bg-[#062a47]",
                )}
              >
                <span
                  className={cx(
                    "absolute left-4 top-5 h-px transition-all duration-500 sm:left-5",
                    isActive
                      ? "w-16 bg-white/45"
                      : "w-10 bg-[#062a47]/25 group-hover:w-16 group-hover:bg-white/45",
                  )}
                />

                <span
                  className={cx(
                    "relative z-10 mt-16 block font-heading text-[36px] font-black leading-none tracking-[-0.05em] transition-colors duration-500",
                    "sm:mt-20 sm:text-[42px]",
                    isActive
                      ? "text-white"
                      : "text-[#062a47] group-hover:text-white",
                  )}
                >
                  {item.n}
                </span>

                <span
                  className={cx(
                    "relative z-10 mt-4 block min-w-0 whitespace-pre-line break-words",
                    "font-heading text-[clamp(14px,4.2vw,20px)] font-black uppercase leading-[0.95] tracking-[-0.01em]",
                    "transition-colors duration-500 sm:mt-5",
                    isActive
                      ? "text-white"
                      : "text-[#062a47] group-hover:text-white",
                  )}
                >
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Panel del servicio activo */}
        <div
          className={cx(
            "mx-auto mt-8 w-full max-w-[1180px] md:mt-10",
            "transition-all delay-[450ms] duration-700 ease-out",
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
          )}
        >
          <div className="relative min-w-0 border border-[#d9dde2] bg-white/55 p-2 shadow-[0_30px_90px_rgba(6,42,71,0.08)] backdrop-blur-md sm:p-3">
            {/* Esquinas decorativas */}
            <span className="absolute left-0 top-0 h-10 w-10 border-l border-t border-[#062a47]/25" />
            <span className="absolute right-0 top-0 h-10 w-10 border-r border-t border-[#062a47]/25" />
            <span className="absolute bottom-0 left-0 h-10 w-10 border-b border-l border-[#062a47]/25" />
            <span className="absolute bottom-0 right-0 h-10 w-10 border-b border-r border-[#062a47]/25" />

            {/* Imagen */}
            <div className="relative h-[260px] min-w-0 overflow-hidden sm:h-[300px] md:h-[480px]">
              <Image
                key={active.image}
                src={active.image}
                alt={active.title.replace("\n", " ")}
                fill
                sizes="(max-width: 768px) 100vw, 1180px"
                className="object-cover transition-all duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#062a47]/60 via-[#062a47]/10 to-transparent" />

              <span className="absolute right-4 top-4 font-heading text-[90px] font-black leading-none tracking-[-0.08em] text-white/10 sm:right-5 sm:text-[120px] md:text-[170px]">
                {active.n}
              </span>
            </div>

            {/* Información */}
            <div className="relative -mt-14 grid min-w-0 gap-4 px-2 pb-3 sm:-mt-20 sm:px-4 sm:pb-5 md:-mt-24 md:grid-cols-[1.05fr_0.95fr] md:px-6">
              {/* Descripción principal */}
              <div className="relative min-w-0 overflow-hidden bg-[#062a47] p-5 text-white shadow-[0_24px_60px_rgba(6,42,71,0.22)] sm:p-7 md:p-9">
                <p className="break-words text-[9px] uppercase tracking-[0.18em] text-white/55 sm:text-[10px] sm:tracking-[0.28em]">
                  {active.n} / {active.title.replace("\n", " ")}
                </p>

                <h3 className="mt-4 max-w-full break-words font-heading text-[clamp(29px,8.5vw,58px)] font-black uppercase leading-[0.9] tracking-[-0.025em]">
                  {active.title}
                </h3>

                <div className="mt-6 h-px w-16 bg-white/35 md:mt-7" />

                <p className="mt-5 text-[14px] leading-7 text-white/75 sm:text-[15px] md:mt-6 md:text-[16px]">
                  {active.text}
                </p>
              </div>

              {/* Alcance específico */}
              <div className="min-w-0 border border-[#d9dde2] bg-white/90 p-5 sm:p-7 md:p-8">
                <p className="text-[9px] uppercase tracking-[0.22em] text-[#7a8a97] sm:text-[10px] sm:tracking-[0.28em]">
                  Alcance del servicio
                </p>

                <div className="mt-6 space-y-4">
                  {active.details.map((detail, index) => (
                    <div
                      key={detail}
                      className="flex min-w-0 items-center gap-3 border-b border-[#d9dde2] pb-3 last:border-b-0 sm:gap-4"
                    >
                      <span className="shrink-0 font-heading text-[12px] font-black text-[#062a47]/35">
                        0{index + 1}
                      </span>

                      <span className="min-w-0 flex-1 break-words text-[11px] uppercase leading-5 tracking-[0.12em] text-[#5f6f84] sm:text-[13px] sm:tracking-[0.18em]">
                        {detail}
                      </span>

                      <span className="h-2 w-2 shrink-0 bg-[#062a47]" />
                    </div>
                  ))}
                </div>

                <p className="mt-8 text-[9px] uppercase tracking-[0.22em] text-[#7a8a97] sm:text-[10px] sm:tracking-[0.24em]">
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
