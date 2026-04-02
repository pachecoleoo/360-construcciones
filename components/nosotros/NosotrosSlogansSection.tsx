"use client";

import { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";
const SLOGANS = [
  "Construyendo soluciones a la altura de nuestros clientes.",
  "Construyendo relaciones a largo plazo con nuestros proveedores.",
  "Construyendo una empresa cada vez más completa.",
  "Construyendo una imagen basada en nuestra eficiencia.",
  "Construyendo confianza a través de nuestra experiencia.",
  "Construyendo una organización flexible y transparente.",
  "Construyendo una nueva manera de construir.",
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
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

export default function NosotrosSlogansSection() {
  const { ref, visible } = useInViewOnce<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-b border-[#d9dde2] bg-[#f4f5f6] py-20 md:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          {/* IZQUIERDA */}
          <div className="relative max-w-3xl">
            <div className="relative z-10 pr-6 md:pr-20">
              {/* EYEBROW */}
              <p
                className={cx(
                  "text-[11px] uppercase tracking-[0.28em] text-[#7a8a97]",
                  "transition-all duration-700 ease-out",
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0",
                )}
              >
                Nosotros
              </p>

              {/* TÍTULO */}
              <div className="overflow-hidden">
                <h2
                  className={cx(
                    "mt-2 max-w-[950px]",
                    "text-[36px] md:text-[54px] lg:text-[64px]",
                    "leading-[0.95] tracking-tight",
                    "text-[#062a47]",
                    "font-heading font-black uppercase",
                    "transition-all duration-700 delay-100 ease-out",
                    visible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-[110%] opacity-0",
                  )}
                >
                  Construimos
                  <br />
                  una manera
                  <br />
                  de trabajar
                </h2>
              </div>

              {/* LÍNEA ANIMADA */}
              <div className="mt-3 h-[2px] w-20 overflow-hidden">
                <div
                  className={cx(
                    "h-full bg-[#062a47] transition-all duration-[1100ms] delay-200 ease-out",
                    visible ? "w-full" : "w-0",
                  )}
                />
              </div>

              {/* PÁRRAFO INTRO */}
              <div
                className={cx(
                  "mt-8 space-y-6",
                  "transition-all duration-700 delay-200 ease-out",
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0",
                )}
              >
                <p className="max-w-2xl text-[15px] leading-8 text-[#5f6f84] md:text-base">
                  Nuestra identidad se define por una forma de trabajo clara,
                  técnica y consistente. Cada vínculo, cada proceso y cada obra
                  responden a una misma visión.
                </p>
                <div className="mt-8">
                  <Button
                    href="/brochures/brochures.pdf"
                    variant="dark"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Brochure
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* DERECHA */}
          <aside
            className={cx(
              "lg:pt-12",
              "transition-all duration-1000 delay-300 ease-out",
              visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
            )}
          >
            <div className="border-t border-[#cfd5dc] pt-4 lg:border-t-0 lg:pt-0">
              {/* TÍTULO COLUMNA DERECHA */}
              <div className="relative mb-6">
                <div
                  className={cx(
                    "pointer-events-none absolute right-0 -top-30 select-none lg:-top-16",
                    "font-heading font-black leading-none",
                    "text-[110px] md:text-[170px]",
                    "text-[#062a47]/10",
                    "transition-all duration-1000 ease-out",
                    visible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0",
                  )}
                >
                  360
                </div>

                <p
                  className={cx(
                    "relative z-10 text-[11px] uppercase tracking-[0.28em] text-[#7a8a97]",
                    "transition-all duration-700 delay-200 ease-out",
                    visible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0",
                  )}
                >
                  Principios
                </p>
              </div>

              <div className="mt-6 border-t border-[#cfd5dc]">
                {SLOGANS.map((item, index) => {
                  const isLast = index === SLOGANS.length - 1;
                  const rest = item.replace("Construyendo ", "");

                  return (
                    <div
                      key={`${item}-${index}`}
                      className={cx(
                        "group grid grid-cols-[32px_1fr] gap-5 border-b border-[#cfd5dc] py-5",
                        "transition-all duration-300 hover:bg-white/55",
                        "md:grid-cols-[42px_1fr]",
                        "hover:shadow-[8px_8px_0px_rgba(6,42,71,0.04),16px_16px_0px_rgba(6,42,71,0.02)]",
                      )}
                    >
                      <span className="pt-[2px] text-[11px] font-semibold uppercase tracking-[0.16em] text-[#062a47]/55">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div>
                        <p
                          className={cx(
                            "text-[15px] leading-8 text-[#22384f] md:text-[16px]",
                            "transition-all duration-300 group-hover:translate-x-[4px]",
                            isLast && "font-semibold text-[#062a47]",
                          )}
                        >
                          <span className="font-semibold">Construyendo</span>{" "}
                          {rest}
                        </p>

                        {/* LÍNEA ABAJO DEL TEXTO */}
                        <div className="mt-2 h-[1px] w-10 overflow-hidden">
                          <div className="h-full w-0 bg-[#062a47] transition-all duration-500 group-hover:w-full" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
