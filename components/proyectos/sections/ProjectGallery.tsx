"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
  label?: string;
};

type ProjectGalleryProps = {
  eyebrow?: string;
  title: string;
  images: GalleryImage[];
};

export default function ProjectGallery({
  eyebrow = "Galería",
  title,
  images,
}: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const safeImages = useMemo(() => images.slice(0, 4), [images]);

  if (!safeImages?.length) return null;

  const featured = safeImages[activeIndex];
  const sideImages = safeImages.filter((_, index) => index !== activeIndex);

  return (
    <section id="galeria" className="py-20 md:py-24">
      {/* encabezado */}
      <div className="mb-8 px-6 md:mb-10 md:px-10 lg:px-14">
        <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#062a47]/60">
          {eyebrow}
        </p>

        <h3 className="mt-3 text-2xl font-black uppercase text-[#062a47] md:text-4xl">
          {title}
        </h3>
      </div>

      {/* GALERÍA */}
      <div className="min-h-[85vh]">
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
        <div className="hidden min-h-[85vh] md:grid md:grid-cols-[1.8fr_0.7fr]">
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
          <div className="grid grid-cols-1">
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
                    <p className="text-[10px] md:text-[11px] font-medium uppercase tracking-[0.18em] text-white/90">
                      {image.label ?? image.alt}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
