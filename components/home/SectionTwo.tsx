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

  return (
    <section
      className="mt-12 bg-[#081835] py-20 px-25 overflow-hidden  md:min-h-0 md:block
  pt-12 pb-1  "
    >
      <div
        ref={ref}
        className={`
          mx-auto max-w-7xl
          grid grid-cols-1 md:grid-cols-2 items-left gap-10
          transition-all duration-[900ms] ease-out
          ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-24"}
        `}
      >
        {/* IZQUIERDA: IMAGEN */}
        <div
          className={`
            order-2 md:order-1
            flex justify-center md:justify-start
            transition-all duration-[1200ms] ease-out delay-150
            ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-24"}
          `}
        >
          <Image
            src="/images/gaticaPngRecorte.png" // <-- ajustá la ruta
            alt="Infraestructura y movimiento de suelo"
            width={280}
            height={460}
            className="opacity-90"
            priority
          />
        </div>

        {/* DERECHA: TEXTO (tu mismo bloque, coherente con SectionOne) */}
        <div className=" order-1 md:order-2 text-center md:text-right max-w-3xl mt-5 md:ml-auto">
          <h2 className="font-heading font-black uppercase tracking-[0.02em] text-4xl md:text-6xl text-white leading-[1.05] text-center md:text-left">
            <span className="block">Infraestructura</span>

            <span className="block mt-3 md:mt-0">y movimiento</span>
          </h2>

          <div className="mt-10 ">
            <div className="mt-10">
              <Button
                href="/infraestructura"
                variant="light"
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
                      d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
                    />
                  </svg>
                }
              >
                Nuestros servicios
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
