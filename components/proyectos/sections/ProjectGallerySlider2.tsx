"use client";

import ZoomCarousel from "@/components/proyectos/sections/ZoomCarousel";
import { useEffect, useRef, useState } from "react";

type ImageItem = {
  src: string;
  alt?: string;
  label?: string;
};

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  metaLabel?: string;
  metaValue?: string;
  images: ImageItem[];
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
      {
        threshold: 0.2,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

export default function ProjectGallerySlider2({
  eyebrow = "Galería",
  title,
  description,
  metaLabel = "Proyecto",
  metaValue,
  images,
}: Props) {
  const { ref, visible } = useInViewOnce<HTMLDivElement>();

  return (
    <section ref={ref} className="w-full py-14 md:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        {/* HEADER */}
        <div className="relative mb-10 md:mb-12">
          <div
            className={cx(
              "pointer-events-none absolute -top-10 md:top-8  right-0  select-none",
              "font-heading font-black",
              "text-[120px] md:text-[180px]",
              "leading-none",
              "text-[#0b2f4a]/10",
              "transition-all duration-1000 ease-out",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            )}
          >
            05
          </div>
          <div className="mb-10 md:mb-12">
            <p
              className={cx(
                "text-[11px] uppercase tracking-[0.28em] text-[#7a8a97] transition-all duration-700 ease-out",
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0",
              )}
            >
              {eyebrow}
            </p>

            <div className="overflow-hidden">
              <h2
                className={cx(
                  "mt-3 max-w-[950px]",
                  "text-[34px] md:text-[54px]",
                  "leading-[0.95] tracking-tight",
                  "text-[#0b2f4a]",
                  "font-heading font-black uppercase",
                  "transform transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-[110%] opacity-0",
                )}
              >
                {title}
              </h2>
            </div>

            <div className="mt-5 h-[2px] w-16 overflow-hidden bg-transparent">
              <div
                className={cx(
                  "h-full bg-[#0b2f4a] transition-all duration-[1100ms] delay-200 ease-out",
                  visible ? "w-full" : "w-0",
                )}
              />
            </div>

            {description && (
              <p
                className={cx(
                  "mt-6 max-w-[760px] text-[15px] leading-[2] text-[#6f8190] md:text-[17px]",
                  "transition-all duration-700 delay-200 ease-out",
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0",
                )}
              >
                {description}
              </p>
            )}

            {(metaLabel || metaValue) && (
              <div
                className={cx(
                  "mt-8 border-t border-[#d9dfe5] pt-5",
                  "transition-all duration-700 delay-300 ease-out",
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0",
                )}
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <span className="text-[11px] uppercase tracking-[0.24em] text-[#90a0ad]">
                    {metaLabel}
                  </span>

                  {metaValue && (
                    <span className="text-[14px] text-[#506372] md:text-[15px]">
                      {metaValue}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        {/* CAROUSEL */}
        <div
          className={cx(
            "transition-all duration-1000 delay-300 ease-out",
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
          )}
        >
          <ZoomCarousel
            images={images.map((img) => ({
              src: img.src,
              alt: img.alt,
              title: img.label,
            }))}
            heightClassName="h-[420px] md:h-[620px]"
            zoomDuration={3000}
            overlay
            showArrows
            showDots
            showThumbnails
            autoPlay
          />
        </div>
      </div>
    </section>
  );
}
