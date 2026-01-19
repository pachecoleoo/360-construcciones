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
      { threshold: 0.35 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className=" mt-12 bg-white py-0 px-25 md:text-left text-center  overflow-hidden">
      <div
        ref={ref}
        className={`
          mx-auto max-w-7xl
          grid grid-cols-1 md:grid-cols-2 items-center gap-16
          transition-all duration-[900ms] ease-out
          ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-24"}
        `}
      >
        {/* IZQUIERDA: TEXTO */}
        <div>
          <h2 className="font-heading font-black uppercase tracking-[0.02em] text-4xl md:text-6xl text-[#002849] leading-[1.05]">
            Desarrollo
            <br />
            inmobiliario
          </h2>
          {/* <h1 className="font-ultra text-7xl uppercase">ULTRA TEST</h1> <h2 className="font-extra text-5xl uppercase">EXTRA TEST</h2> <h3 className="font-heading font-black text-4xl uppercase"> BLACK CONDENSED </h3> <p className="font-body text-base">CONDENSED NORMAL</p> */}

          <div className="mt-10">
            <Button
              href="#proyectos-desarrollados"
              variant="dark"
              icon={
                <svg
                  className="w-[25px] h-[25px]"
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
              }
            >
              Proyectos desarrollados
            </Button>
          </div>
        </div>

        {/* DERECHA: IMAGEN */}
        <div
          className={`
            flex justify-center md:justify-end -mt-10  md:-mt-10   
            transition-all duration-[1200ms] ease-out delay-150
            ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-24"}
          `}
        >
          <Image
            src="/images/belgranoLineas.png" // <-- ajustá la ruta
            alt="Desarrollo inmobiliario"
            width={280}
            height={420}
            className="opacity-90"
            priority
          />
        </div>
      </div>
    </section>
  );
}
