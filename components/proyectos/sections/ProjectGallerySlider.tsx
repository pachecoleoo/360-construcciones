"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
  label?: string;
};

type ProjectGallerySliderProps = {
  eyebrow?: string;
  title?: string;
  images: GalleryImage[];
};

export default function ProjectGallerySlider({
  eyebrow = "Galería",
  title = "Galería",
  images,
}: ProjectGallerySliderProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [page, setPage] = useState(0);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(images.length / itemsPerPage);

  const visibleImages = useMemo(() => {
    const start = page * itemsPerPage;
    return images.slice(start, start + itemsPerPage);
  }, [images, page]);
  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIndex === null) return;

      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") {
        setActiveIndex((prev) =>
          prev === null ? 0 : (prev + 1) % images.length,
        );
      }
      if (e.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev === null ? 0 : (prev - 1 + images.length) % images.length,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, images.length]);

  const openImage = activeIndex !== null ? images[activeIndex] : null;

  const goPrevPage = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goNextPage = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };

  const goPrevImage = () => {
    setActiveIndex((prev) =>
      prev === null ? 0 : (prev - 1 + images.length) % images.length,
    );
  };

  const goNextImage = () => {
    setActiveIndex((prev) => (prev === null ? 0 : (prev + 1) % images.length));
  };
  useEffect(() => {
    if (activeIndex !== null) {
      // bloquea scroll
      document.body.style.overflow = "hidden";
    } else {
      // restaura scroll
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  return (
    <>
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-8">
          <div className="mb-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#062a47]/45">
              {eyebrow}
            </p>

            <h3 className="mt-3 text-3xl font-black tracking-[-0.02em] text-[#111111] md:text-5xl">
              / {title}
            </h3>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {visibleImages.map((image, index) => {
              const realIndex = page * itemsPerPage + index;

              return (
                <button
                  key={`${image.src}-${realIndex}`}
                  type="button"
                  onClick={() => setActiveIndex(realIndex)}
                  className="group relative overflow-hidden bg-[#f3f3f3] text-left"
                  aria-label={`Abrir imagen ${image.label ?? image.alt}`}
                >
                  <div className="relative aspect-[4/4] w-full overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />

                    <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* CONTROLES ABAJO */}
          {totalPages > 1 && (
            <div className="mt-8 flex items-center justify-center gap-5">
              <button
                type="button"
                onClick={goPrevPage}
                className="inline-flex h-10 w-10 items-center justify-center border border-[#062a47]/15 text-[#062a47] transition hover:bg-[#062a47] hover:text-white"
                aria-label="Imágenes anteriores"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                >
                  <path
                    d="M15 6L9 12L15 18"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setPage(i)}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      page === i
                        ? "bg-[#062a47]"
                        : "bg-[#062a47]/20 hover:bg-[#062a47]/40"
                    }`}
                    aria-label={`Ir a página ${i + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={goNextPage}
                className="inline-flex h-10 w-10 items-center justify-center border border-[#062a47]/15 text-[#062a47] transition hover:bg-[#062a47] hover:text-white"
                aria-label="Más imágenes"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                >
                  <path
                    d="M9 6L15 12L9 18"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* LIGHTBOX */}
      {openImage && (
        <div className="fixed inset-0 z-[2147483647] bg-black/88 backdrop-blur-[2px]">
          {/* cerrar haciendo click afuera */}
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute inset-0"
            aria-label="Cerrar galería"
          />

          {/* VISOR CENTRADO */}
          <div className="absolute inset-0 flex items-center justify-center px-4 py-8 md:px-8 md:py-10">
            <div
              className="relative z-10 w-[calc(100vw-24px)] max-w-[1500px] h-[72vh] md:w-[calc(100vw-64px)] md:h-[78vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* imagen */}
              <div
                key={openImage.src}
                className="relative h-full w-full animate-[lightboxSoftIn_.38s_cubic-bezier(0.22,1,0.36,1)]"
              >
                <Image
                  src={openImage.src}
                  alt={openImage.alt}
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              {/* degradado inferior */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent" />

              {/* título */}
              <div className="absolute bottom-0 left-0 z-20 p-4 md:p-6">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/86 md:text-[11px]">
                  {openImage.label ?? openImage.alt}
                </p>
              </div>

              {/* contador */}
              <div className="absolute left-0 top-0 z-20 p-4 md:p-6">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/55 md:text-[11px]">
                  {String((activeIndex ?? 0) + 1).padStart(2, "0")} /{" "}
                  {String(images.length).padStart(2, "0")}
                </p>
              </div>

              {/* X */}
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                className="absolute right-3 top-3 z-20 inline-flex h-10 w-10 items-center justify-center border border-white/15 bg-black/25 text-white/80 backdrop-blur-sm transition hover:bg-white/10 hover:text-white md:right-4 md:top-4"
                aria-label="Cerrar"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                >
                  <path
                    d="M6 6L18 18M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              {/* flecha izquierda */}
              <button
                type="button"
                onClick={goPrevImage}
                className="absolute left-3 top-1/2 z-20 -translate-y-1/2 border border-white/15 bg-black/25 p-3 text-white/80 backdrop-blur-sm transition hover:bg-white/10 hover:text-white md:left-4 md:p-4"
                aria-label="Imagen anterior"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5 md:h-6 md:w-6"
                >
                  <path
                    d="M15 6L9 12L15 18"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* flecha derecha */}
              <button
                type="button"
                onClick={goNextImage}
                className="absolute right-3 top-1/2 z-20 -translate-y-1/2 border border-white/15 bg-black/25 p-3 text-white/80 backdrop-blur-sm transition hover:bg-white/10 hover:text-white md:right-4 md:p-4"
                aria-label="Imagen siguiente"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5 md:h-6 md:w-6"
                >
                  <path
                    d="M9 6L15 12L9 18"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
