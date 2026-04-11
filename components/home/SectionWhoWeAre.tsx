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
      { threshold: 0.22 },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="primera-seccion"
      className="relative overflow-hidden  bg-[#ffffff] py-20 md:py-24 lg:py-28 "
    >
      {/* Vignette suave superior */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 h-64 w-[52rem] -translate-x-1/2 rounded-full bg-[#002849]/10 blur-3xl"
      />

      <div
        ref={ref}
        className="relative mx-auto max-w-[1380px] px-6 md:px-10 -my-10"
      >
        {/* Título full width */}
        <div className="mt-3 overflow-hidden pt-4">
          <h2
            className={cx(
              "max-w-[1180px] font-heading font-black uppercase text-[#062a47]",
              "leading-[1.0] tracking-[0.01em]",
              "text-[42px] sm:text-[58px] md:text-[76px] lg:text-[92px] xl:text-[97px]",
              "transition-all duration-700 delay-100 ease-out ",
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-[110%] opacity-0",
            )}
          >
            Construimos con método,
            <br />
            entregamos con precisión
          </h2>
        </div>

        {/* Línea */}
        <div className="mt-4 h-[2px] w-24 overflow-hidden md:mt-5">
          <div
            className={cx(
              "h-full bg-[#062a47] transition-all duration-[1100ms] delay-200 ease-out",
              visible ? "w-full" : "w-0",
            )}
          />
        </div>

        {/* Bloque inferior */}
        <div
          className={cx(
            "mt-3  pt-8 md:mt-4",
            "transition-all duration-700 delay-200 ease-out",
            visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
          )}
        >
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-10 lg:gap-16  md:-mt-5 -mb-20">
            <div className="max-w-[880px] ">
              <p className="text-[15px] leading-8 text-[#5f6f84] md:text-[16px] md:leading-9 lg:text-[17px]">
                Somos una empresa orientada a la arquitectura, la ingeniería y
                la ejecución de obras con gestión integral. Nos involucramos
                desde la planificación hasta la entrega final, cuidando el
                detalle técnico, los tiempos y la calidad del resultado.
              </p>
            </div>
            <br />
            <div className="flex items-start ">
              <div
                className={cx(
                  "transition-all duration-700 delay-300 ease-out -mt-10 md:-mt-5 ",
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0",
                )}
              >
                <Button href="/nosotros" variant="dark">
                  Conocé más
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
