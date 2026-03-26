"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Amenity = {
  icon: string;
  label: string;
  description?: string;
};

type ProjectAmenitiesProps = {
  eyebrow?: string;
  title: string;
  items: Amenity[];
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

export default function ProjectAmenities({
  eyebrow = "",
  title,
  items,
}: ProjectAmenitiesProps) {
  const { ref, visible } = useInViewOnce<HTMLDivElement>();

  if (!items?.length) return null;

  return (
    <section ref={ref} className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        {/* HEADER */}
        <div className="relative mb-14">
          {/* NÚMERO 01 */}
          <div
            className={cx(
              "pointer-events-none absolute right-0 -top-6 md:-top-15 select-none",
              "font-heading font-black",
              "text-[120px] md:text-[180px]",
              "leading-none",
              "text-[#062a47]/10",
              "transition-all duration-1000 ease-out",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            )}
          >
            01
          </div>

          {/* CONTENIDO */}
          <div className="relative z-10 pr-6 md:pr-20 max-w-3xl">
            {/* EYEBROW */}
            <p
              className={cx(
                "text-[11px] uppercase tracking-[0.28em] text-[#7a8a97]",
                "transition-all duration-700",
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0",
              )}
            >
              {eyebrow}
            </p>

            {/* TÍTULO (MISMO ESTILO QUE LAS OTRAS) */}
            <div className="overflow-hidden">
              <h2
                className={cx(
                  "mt-2 text-[34px] md:text-[54px]",
                  "leading-[0.95] tracking-tight",
                  "text-[#062a47]",
                  "font-heading font-black uppercase",
                  "transition-all duration-700 delay-100",
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-[110%] opacity-0",
                )}
              >
                {title}
              </h2>
            </div>
          </div>
        </div>

        {/* GRID */}
        <div
          className={cx(
            "grid gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3",
            "transition-all duration-1000 delay-300",
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
          )}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="group flex items-start gap-5 border-t border-[#e2e6ea] pt-6 transition-all duration-300"
            >
              {/* ICONO */}
              <div className="relative h-[42px] w-[42px] flex-shrink-0">
                <Image
                  src={item.icon}
                  alt={item.label}
                  fill
                  className="object-contain opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105"
                />
              </div>

              {/* TEXTO */}
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#062a47]">
                  {item.label}
                </p>

                {item.description && (
                  <p className="mt-2 text-[14px] leading-7 text-[#5f6f84]">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
