"use client";

import { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button";

type DataItem = {
  label: string;
  value: string;
};

type ProjectIntroWithDataProps = {
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  dataTitle?: string;
  items: DataItem[];
};

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

export default function ProjectIntroWithData({
  eyebrow = "Descripción general",
  title,
  paragraphs,
  dataTitle = "Información",
  items,
}: ProjectIntroWithDataProps) {
  const { ref, visible } = useInViewOnce<HTMLElement>();

  return (
    <section
      id="proyecto"
      ref={ref}
      className="relative border-b border-[#d9dde2] bg-[#f4f5f6] py-20 md:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          {/* IZQUIERDA */}
          <div className="relative max-w-3xl">
            {/* NÚMERO 00 */}
            {/* <div
              className={cx(
                "pointer-events-none absolute right-0 top-10 select-none lg:right-[-120px] lg:top-0",
                "font-heading font-black leading-none",
                "text-[120px] md:text-[180px]",
                "text-[#062a47]/10",
                "transition-all duration-1000 ease-out",
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0",
              )}
            >
              PB
            </div> */}

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
                {eyebrow}
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
                  {title}
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

              {/* PÁRRAFOS */}
              <div
                className={cx(
                  "mt-8 space-y-6",
                  "transition-all duration-700 delay-200 ease-out",
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0",
                )}
              >
                {paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="max-w-2xl text-[15px] leading-8 text-[#5f6f84] md:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* BOTÓN */}
              <div
                className={cx(
                  "mt-8",
                  "transition-all duration-700 delay-300 ease-out",
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0",
                )}
              >
                <Button
                  href="/brochures/belgrano531.pdf"
                  variant="dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Brochure
                </Button>
              </div>
            </div>
          </div>

          {/* DERECHA — FICHA TÉCNICA */}
          <aside
            className={cx(
              "lg:pt-12",
              "transition-all duration-1000 delay-300 ease-out",
              visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
            )}
          >
            <div className="border-t border-[#cfd5dc] pt-4 lg:border-t-0 lg:pt-0">
              {/* TÍTULO FICHA */}
              <div className="relative mb-6">
                <div
                  className={cx(
                    "pointer-events-none absolute right-0 -top-35 md:-mt-34 select-none lg:top-0",
                    "font-heading font-black leading-none",
                    "text-[120px] md:text-[180px]",
                    "text-[#062a47]/10",
                    "transition-all duration-1000 ease-out",
                    visible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0",
                  )}
                >
                  PB
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
                  {dataTitle}
                </p>
              </div>

              <div className="mt-6 border-t border-[#cfd5dc]">
                {items.map((item, index) => (
                  <div
                    key={`${item.label}-${index}`}
                    className={cx(
                      "grid grid-cols-[110px_1fr] gap-6 border-b border-[#cfd5dc] py-5",
                      "transition-all duration-300 hover:bg-white/55",
                      "md:grid-cols-[130px_1fr]",
                      "hover:shadow-[8px_8px_0px_rgba(6,42,71,0.04),16px_16px_0px_rgba(6,42,71,0.02)]",
                    )}
                  >
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#062a47]/55">
                      {item.label}
                    </span>

                    <div>
                      <p className="text-[15px] leading-8 text-[#22384f]">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
