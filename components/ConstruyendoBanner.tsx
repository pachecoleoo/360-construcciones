"use client";

import { useEffect, useState } from "react";

const ITEMS = [
  { text: "soluciones a la altura de nuestros clientes.", highlight: false },
  {
    text: "relaciones a largo plazo con nuestros proveedores.",
    highlight: false,
  },
  { text: "una empresa cada vez más completa.", highlight: false },
  { text: "una imagen basada en nuestra eficiencia.", highlight: false },
  { text: "confianza a través de nuestra experiencia.", highlight: false },
  { text: "una organización flexible y transparente.", highlight: false },
  { text: "una nueva manera de construir.", highlight: true },
];

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function ConstruyendoBanner() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"idle" | "out" | "in">("idle");

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase("out");

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % ITEMS.length);
        setPhase("in");

        setTimeout(() => {
          setPhase("idle");
        }, 420);
      }, 420);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  const current = ITEMS[index];

  return (
    <section className="relative overflow-hidden  bg-[#000000] py-10 md:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(6,42,71,0.14) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6,42,71,0.14) 1px, transparent 1px)
          `,
          backgroundSize: "76px 76px",
        }}
      />

      <div className="relative mx-auto max-w-[1480px] px-6 md:px-10">
        {/* <p className="text-[11px] uppercase tracking-[0.28em] text-[#7a8a97]">
          Principios
        </p> */}

        <div className="mt-6 grid items-center gap-2 lg:grid-cols-[560px_minmax(0,1fr)] lg:gap-10  text-center">
          {/* palabra fija */}
          <div className="min-w-0">
            <h2 className="md:ml-32 font-heading text-[40px] font-black uppercase leading-[0.92] tracking-[0.01em] text-[#ffffff] sm:text-[54px] md:text-[68px] lg:text-[82px] ">
              Construyendo
            </h2>
          </div>

          {/* frase rotativa */}
          <div className="relative h-[40px] overflow-hidden md:h-[46px] lg:h-[76px]">
            <div
              className={cx(
                "absolute inset-0 flex items-center will-change-transform",
                "transition-all duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                phase === "idle" && "translate-y-0 rotate-x-0 opacity-100",
                phase === "out" &&
                  "-translate-y-full -rotate-x-[75deg] opacity-0 [transform-origin:top_center]",
                phase === "in" &&
                  "translate-y-0 rotate-x-0 opacity-100 [transform-origin:bottom_center]",
              )}
              style={
                phase === "in"
                  ? {
                      animation:
                        "bannerEnterFromBelow 420ms cubic-bezier(0.22,1,0.36,1)",
                    }
                  : undefined
              }
            >
              <p
                className={cx(
                  "w-full whitespace-nowrap leading-none md:mt-7", //LETRA DE ABAJO
                  "text-[20px] md:text-[26px] lg:text-[30px] ml-0 md:mr-17  md:ml-5",
                  current.highlight
                    ? "font-heading font-black lg:text-[40px]  md:ml-10 -mb-2 uppercase tracking-[0.01em] text-[#ffffff]"
                    : "font-body font-medium text-[#ffffff]",
                )}
              >
                {current.text}
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bannerEnterFromBelow {
          0% {
            transform: translateY(100%) rotateX(-75deg);
            opacity: 0;
            transform-origin: bottom center;
          }
          100% {
            transform: translateY(0) rotateX(0deg);
            opacity: 1;
            transform-origin: bottom center;
          }
        }
      `}</style>
    </section>
  );
}
