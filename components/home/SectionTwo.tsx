"use client";

import { useEffect, useRef, useState } from "react";

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
      {
        threshold: 0.35,
      }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#081835] py-14 px-6 overflow-hidden">
      <div
        ref={ref}
        className={`
          mx-auto max-w-7xl flex justify-end
          transition-all duration-[900ms] ease-out
          ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-24"}
        `}
      >
        <div className="text-right max-w-3xl">
          {/* Título */}
          <h2 className="font-heading font-black uppercase tracking-[0.02em] text-4xl md:text-6xl text-white leading-[1.05]">
            Infraestructura
            <br />y movimiento de suelo
          </h2>

          {/* Botón */}
          <div className="mt-10">
            <a
              href="#NuestrosServicios"
              className="
                inline-flex items-center gap-3
                border border-white
                px-6 py-3
                text-sm uppercase tracking-[0.18em]
                text-white
                transition
                hover:bg-white
                hover:text-[#081835]
              "
            >
              Nuestros servicios
              <span aria-hidden="true">
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
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
