"use client";

import { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function SectionWhoWeAre() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="primera-seccion"
      className="relative my-0 overflow-hidden bg-white px-8 py-10 md:px-6 md:py-16"
    >
      {/* Blueprint grid sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,40,73,0.22) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,40,73,0.22) 1px, transparent 1px)",
          backgroundSize: "84px 84px",
        }}
      />

      {/* Vignette suave superior */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[52rem] -translate-x-1/2 rounded-full bg-[#002849]/10 blur-3xl"
      />

      <div ref={ref} className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            {/* Eyebrow opcional */}
            {/* <p
              className={cx(
                "font-body text-[11px] uppercase tracking-[0.28em] text-[#081835]/70",
                "transition-all duration-700 ease-out",
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0",
              )}
            >
              360 Construcciones
            </p> */}

            {/* Headline */}
            <div className="mt-4 overflow-hidden">
              <h2
                className={cx(
                  "font-heading font-black uppercase tracking-[0.02em] text-4xl md:text-6xl text-[#002849] leading-[1.05]",
                  "transition-all duration-700 delay-100 ease-out",
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-[110%] opacity-0",
                )}
              >
                Construimos con método,
                <br />
                entregamos con
                <br /> precisión
              </h2>
            </div>

            {/* Subrayado animado */}
            <div className="mt-4 h-[2px] w-20 overflow-hidden">
              <div
                className={cx(
                  "h-full bg-[#062a47] transition-all duration-[1100ms] delay-200 ease-out",
                  visible ? "w-full" : "w-0",
                )}
              />
            </div>
          </div>

          <div className="lg:col-span-6">
            {/* Texto */}
            <div
              className={cx(
                "transition-all duration-700 delay-200 ease-out",
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0",
              )}
            >
              <p className="mt-0 font-body text-base leading-relaxed text-[#081835]/80 md:mt-16 md:text-lg">
                Somos una empresa orientada a la arquitectura, la ingeniería y
                la ejecución de obras con gestión integral. Nos involucramos
                desde la planificación hasta la entrega final, cuidando el
                detalle técnico, los tiempos y la calidad del resultado.
              </p>
            </div>

            {/* CTA */}
            <div
              className={cx(
                "mt-8 transition-all duration-700 delay-300 ease-out",
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0",
              )}
            >
              <Button href="./../nosotros" variant="dark">
                Conocé más
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
