"use client";

import { useEffect, useRef, useState } from "react";

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

export default function LocationSection() {
  const address = "Salta 256, Neuquén Capital, Argentina";
  const { ref, visible } = useInViewOnce<HTMLElement>();

  return (
    <section
      ref={ref}
      id="ubicacion"
      className="relative overflow-hidden border-t border-[#d9dde2] bg-[#f4f5f6] text-[#062a47]"
    >
      {/* blueprint grid sutil */}
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

      {/* número grande de sección */}
      <div
        aria-hidden="true"
        className={cx(
          "pointer-events-none absolute right-4 top-16 font-heading text-[92px] font-black leading-none tracking-[-0.04em] text-[#062a47]/[0.08] sm:right-8 sm:text-[120px] md:right-12 md:top-10 md:text-[180px]",
          "transition-all duration-1000 ease-out",
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        )}
      >
        02
      </div>

      <div className="relative mx-auto grid max-w-[1380px] gap-12 px-6 py-12 md:px-10 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
        {/* TEXTO */}
        <div
          className={cx(
            "max-w-xl",
            "transition-all duration-1000 ease-out",
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
          )}
        >
          <p
            className={cx(
              "text-[11px] uppercase tracking-[0.28em] text-[#7a8a97]",
              "transition-all duration-700 ease-out",
              visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
            )}
          >
            Ubicación
          </p>

          <div className="overflow-hidden">
            <h2
              className={cx(
                "mt-4 font-heading text-[42px] font-black uppercase leading-[0.92] tracking-[0.01em] text-[#062a47] sm:text-[56px] md:text-[74px] lg:text-[88px]",
                "transition-all duration-700 delay-100 ease-out",
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-[110%] opacity-0",
              )}
            >
              Nuestra
              <br />
              oficina
            </h2>
          </div>

          <div className="mt-3 h-[2px] w-20 overflow-hidden">
            <div
              className={cx(
                "h-full bg-[#062a47] transition-all duration-[1100ms] delay-200 ease-out",
                visible ? "w-full" : "w-0",
              )}
            />
          </div>

          <p
            className={cx(
              "mt-6 max-w-[34rem] text-[15px] leading-8 text-[#5f6f84] md:text-[17px] md:leading-9",
              "transition-all duration-700 delay-200 ease-out",
              visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
            )}
          >
            Coordinamos reuniones técnicas, planificación de obra y seguimiento
            de proyectos desde nuestra sede en Neuquén Capital.
          </p>

          {/* bloque dirección */}
          <div
            className={cx(
              "mt-10 border border-[#d9dde2] bg-white px-6 py-6 shadow-[0_14px_34px_rgba(6,42,71,0.06)] md:px-7 md:py-7",
              "transition-all duration-1000 delay-300 ease-out",
              visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
            )}
          >
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#7a8a97]">
              Dirección
            </p>

            <p className="mt-3 max-w-[20ch] font-heading text-[26px] font-black uppercase leading-[1] text-[#062a47] md:text-[32px]">
              {address}
            </p>

            <div className="mt-6 h-px w-full bg-[#d9dde2]" />

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://maps.google.com/?q=Salta+256+Neuquén"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-[#062a47] px-5 py-3 text-[11px] font-medium uppercase tracking-[0.16em] text-white transition hover:bg-[#0b3a63]"
              >
                Cómo llegar
              </a>

              <a
                href="/contacto"
                className="inline-flex items-center rounded-full border border-[#062a47]/16 px-5 py-3 text-[11px] font-medium uppercase tracking-[0.16em] text-[#062a47] transition hover:border-[#062a47]/30 hover:bg-[#062a47]/[0.03]"
              >
                Coordinar reunión
              </a>
            </div>
          </div>
        </div>

        {/* MAPA */}
        <div
          className={cx(
            "relative",
            "transition-all duration-1000 delay-400 ease-out",
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
          )}
        >
          <div className="relative overflow-hidden border border-[#d9dde2] bg-white shadow-[0_18px_40px_rgba(6,42,71,0.08)] md:mt-10">
            <div className="flex items-center justify-between border-b border-[#d9dde2] px-5 py-4">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#7a8a97]">
                Neuquén Capital
              </p>

              <span className="text-[11px] uppercase tracking-[0.18em] text-[#062a47]/55">
                Oficina técnica
              </span>
            </div>

            <div className="aspect-[4/3] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1769981291374!6m8!1m7!1sZoQ3gW5TbVU0YpVnSuIihw!2m2!1d-38.95225935308583!2d-68.06626726662016!3f280.6842718309308!4f3.241860353552511!5f0.546861300257367"
                className="h-full w-full grayscale contrast-110"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                style={{ border: 0 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
