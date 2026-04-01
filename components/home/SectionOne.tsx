"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button from "../ui/Button";

export default function SectionOne() {
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
      { threshold: 0.35 },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const buttonIcon = (
    <svg
      className="h-[25px] w-[25px]"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        d="M19 12H5m14 0-4 4m4-4-4-4"
      />
    </svg>
  );

  return (
    <section className="mt-12 overflow-hidden bg-white px-6 py-0 text-center sm:px-8 md:px-10 md:text-left lg:px-16">
      <div
        ref={ref}
        className={`
          mx-auto max-w-7xl
          grid grid-cols-1 md:grid-cols-2 items-center
          gap-10 md:gap-16
          transition-all duration-[900ms] ease-out
          ${visible ? "translate-x-0 opacity-100" : "-translate-x-24 opacity-0"}
        `}
      >
        {/* IZQUIERDA: TEXTO */}
        <div className="order-1">
          <h2 className="font-heading font-black uppercase tracking-[0.02em] text-[42px] -mb-10 leading-[0.95] text-[#002849] sm:text-5xl md:text-6xl md:leading-[1.05] md:mb-0">
            Desarrollo
            <br />
            inmobiliario
          </h2>

          {/* BOTÓN SOLO DESKTOP */}
          <div className="mt-10 hidden md:block">
            <Button href="/proyectos" variant="dark" icon={buttonIcon}>
              Proyectos desarrollados
            </Button>
          </div>
        </div>

        {/* DERECHA: IMAGEN + BOTÓN MOBILE */}
        <div
          className={`
            order-2
            flex flex-col items-center md:items-end
            transition-all duration-[1200ms] ease-out delay-150
            ${visible ? "translate-x-0 opacity-100" : "translate-x-24 opacity-0"}
          `}
        >
          <Image
            src="/images/belgranoLineas.png"
            alt="Desarrollo inmobiliario"
            width={280}
            height={420}
            className="h-auto w-[280px] opacity-90 sm:w-[220px] md:w-[280px]"
            priority
          />

          {/* BOTÓN SOLO MOBILE */}
          <div className="mb-14 md:hidden">
            <Button href="/proyectos" variant="dark" icon={buttonIcon}>
              Proyectos desarrollados
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
