"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button from "../ui/Button";

export default function SectionTwo() {
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
        d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
      />
    </svg>
  );

  return (
    <section className=" mt-12 overflow-hidden bg-[#081835] px-6 pt-12 pb-8 text-center sm:px-8 md:px-10 md:py-10 md:text-left lg:px-16">
      <div
        ref={ref}
        className={`  max-w-[1280px] 
          mx-auto max-w-7xl
          grid grid-cols-1 md:grid-cols-2 items-center
          gap-10 md:gap-16
          transition-all duration-[900ms] ease-out
          ${visible ? "translate-x-0 opacity-100" : "translate-x-24 opacity-0"}
        `}
      >
        {/* IZQUIERDA: IMAGEN */}
        <div
          className={`
            order-2 md:order-1 
            flex flex-col items-center md:items-start
            transition-all duration-[1200ms] ease-out delay-150
            ${visible ? "translate-x-0 opacity-100" : "-translate-x-24 opacity-0"}
          `}
        >
          <Image
            src="/images/gruaBlanca4.png"
            alt="Infraestructura y movimiento de suelo"
            width={280}
            height={460}
            className="h-auto w-[270px] opacity-90 sm:w-[300px] md:w-[420px]"
            priority
          />

          {/* BOTÓN SOLO MOBILE */}
          <div className="mt-6 mb-12 md:hidden">
            <Button href="/infraestructura" variant="light" icon={buttonIcon}>
              Nuestros servicios
            </Button>
          </div>
        </div>

        {/* DERECHA: TEXTO */}
        <div className="order-1 md:order-2 mt-2 text-center md:mt-0 md:text-left md:ml-auto">
          <h2 className="font-heading font-black uppercase tracking-[0.02em] text-[40px] leading-[0.80] text-white sm:text-5xl md:text-6xl md:leading-[0.95]">
            <span className="block text-[#C9D8E2]">Infraestructura</span>
            <span className="block mt-2">y movimiento</span>
            <span className="block mt-2 ">de suelo</span>
          </h2>

          {/* BOTÓN SOLO DESKTOP */}
          <div className="mt-10 hidden md:block">
            <Button href="/infraestructura" variant="light" icon={buttonIcon}>
              Nuestros servicios
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
