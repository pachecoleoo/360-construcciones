"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
  label?: string;
};

type ProjectGalleryProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  images: GalleryImage[];
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
      { threshold: 0.18 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

export default function ProjectGallery({
  eyebrow = "Galería",
  title,
  intro = "Una selección visual del desarrollo, sus espacios y su lenguaje arquitectónico.",
  images,
}: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, visible } = useInViewOnce<HTMLElement>();

  const safeImages = useMemo(() => images.slice(0, 4), [images]);

  if (!safeImages?.length) return null;

  const featured = safeImages[activeIndex];
  const sideImages = safeImages.filter((_, index) => index !== activeIndex);

  return (
    <section
      id="Galeria"
      ref={ref}
      className="border-t border-[#d9dde2] bg-[#f4f5f6] pt-20 md:pt-24"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        {/* HEADER */}
        <div className="relative mb-10 md:mb-12">
          {/* NÚMERO 02 */}
          <div
            className={cx(
              "pointer-events-none absolute right-0 -top-10 md:-top-10  select-none",
              "font-heading font-black leading-none",
              "text-[120px] md:text-[180px]",
              "text-[#C9D8E2]/60",
              "transition-all duration-1000 ease-out",
              visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
            )}
          >
            02
          </div>

          {/* CONTENIDO */}
          <div className="relative z-10 max-w-3xl pr-6 md:pr-20">
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
                  "mt-2 text-[34px] md:text-[54px]",
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

            {/* LÍNEA SUTIL */}
            <div className="mt-3 h-[2px] w-16 overflow-hidden">
              <div
                className={cx(
                  "h-full bg-[#062a47] transition-all duration-[1100ms] delay-200 ease-out",
                  visible ? "w-full" : "w-0",
                )}
              />
            </div>

            {/* INTRO */}
            <p
              className={cx(
                "mt-6 max-w-[760px] text-[15px] leading-8 text-[#5f6f84] md:text-base",
                "transition-all duration-700 delay-200 ease-out",
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0",
              )}
            >
              {intro}
            </p>
          </div>
        </div>
      </div>

      {/* GALERÍA */}
      <div
        className={cx(
          "transition-all duration-1000 delay-300 ease-out",
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        )}
      >
        <div className="h-[85vh] overflow-hidden">
          {" "}
          {/* MOBILE */}
          <div className="block md:hidden">
            <div className="relative h-[55vh] w-full overflow-hidden">
              <div
                key={featured.src}
                className="absolute inset-0 gallery-fade-zoom"
              >
                <Image
                  src={featured.src}
                  alt={featured.alt}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              <div className="absolute bottom-0 left-0 z-10 p-4">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white">
                  {featured.label ?? featured.alt}
                </p>
              </div>
            </div>

            <div className="flex gap-3 overflow-x-auto px-4 py-4">
              {safeImages.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="relative h-[90px] min-w-[140px] flex-shrink-0 overflow-hidden"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />

                  {index !== activeIndex && (
                    <div className="absolute inset-0 bg-black/40" />
                  )}

                  <div className="absolute bottom-0 left-0 z-10 p-2">
                    <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-white/90">
                      {image.label ?? image.alt}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
          {/* DESKTOP */}
          <div className="hidden h-full md:grid md:grid-cols-[1.8fr_0.7fr] gap-[2px] bg-white/40">
            {" "}
            {/* principal */}
            <article className="relative overflow-hidden">
              <div
                key={featured.src}
                className="absolute inset-0 gallery-fade-zoom"
              >
                <Image
                  src={featured.src}
                  alt={featured.alt}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              <div className="absolute bottom-0 left-0 z-10 p-6">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white">
                  {featured.label ?? featured.alt}
                </p>
              </div>
            </article>
            {/* columna lateral */}
            <div className="grid h-full grid-rows-3 gap-[2px] ">
              {" "}
              {sideImages.map((image, index) => {
                const realIndex = safeImages.findIndex(
                  (img) => img.src === image.src,
                );

                return (
                  <button
                    key={`${image.src}-${index}`}
                    type="button"
                    onClick={() => setActiveIndex(realIndex)}
                    className="group relative min-h-[28vh] overflow-hidden text-left"
                    aria-label={`Ver imagen ${image.label ?? image.alt}`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />

                    <div className="absolute inset-0 bg-black/45 transition-colors duration-300 group-hover:bg-black/28" />

                    <div className="absolute bottom-0 left-0 z-10 p-4 md:p-5">
                      <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/90 md:text-[11px]">
                        {image.label ?? image.alt}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
