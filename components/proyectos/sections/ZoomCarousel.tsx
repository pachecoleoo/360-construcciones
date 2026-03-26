"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type CarouselImage = {
  src: string;
  alt?: string;
  title?: string;
};

type ZoomCarouselProps = {
  images: CarouselImage[];
  heightClassName?: string;
  zoomDuration?: number; // duración del zoom por slide
  overlay?: boolean;
  showArrows?: boolean;
  showDots?: boolean;
  showThumbnails?: boolean;
  autoPlay?: boolean;
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function ZoomCarousel({
  images,
  heightClassName = "h-[520px] md:h-[620px]",
  zoomDuration = 6000,
  overlay = true,
  showArrows = true,
  showDots = true,
  showThumbnails = true,
  autoPlay = true,
}: ZoomCarouselProps) {
  const safeImages = useMemo(() => images ?? [], [images]);
  const [current, setCurrent] = useState(0);

  const goTo = (index: number) => {
    if (!safeImages.length) return;
    const nextIndex = (index + safeImages.length) % safeImages.length;
    setCurrent(nextIndex);
  };

  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  useEffect(() => {
    if (!autoPlay || safeImages.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prevIndex) => (prevIndex + 1) % safeImages.length);
    }, zoomDuration);

    return () => clearInterval(timer);
  }, [autoPlay, safeImages.length, zoomDuration]);

  if (!safeImages.length) return null;

  return (
    <section className="w-full">
      <div className="relative w-full overflow-hidden rounded-none bg-white">
        {/* SLIDER PRINCIPAL */}
        <div className={cx("relative w-full rounded-none", heightClassName)}>
          {safeImages.map((image, index) => {
            const isActive = index === current;

            return (
              <div
                key={`${image.src}-${index}`}
                className={cx(
                  "absolute inset-0 overflow-hidden rounded-none transition-opacity duration-1000 ease-out",
                  isActive ? "opacity-100 z-10" : "opacity-0 z-0",
                )}
              >
                <div
                  className={cx(
                    "absolute inset-0 will-change-transform",
                    isActive ? "animate-kenburns" : "",
                  )}
                  style={
                    isActive
                      ? ({
                          animationDuration: `${zoomDuration}ms`,
                        } as React.CSSProperties)
                      : undefined
                  }
                >
                  <Image
                    src={image.src}
                    alt={image.alt ?? `Slide ${index + 1}`}
                    fill
                    priority={index === 0}
                    className="object-cover select-none rounded-none"
                  />
                </div>

                {overlay && (
                  <div className="absolute inset-0 bg-black/25 pointer-events-none" />
                )}

                {image.title && (
                  <div className="absolute left-6 bottom-6 md:left-10 md:bottom-10 z-20">
                    <p className="text-white text-3xl md:text-5xl font-light tracking-tight">
                      {image.title}
                    </p>
                  </div>
                )}
              </div>
            );
          })}

          {/* FLECHAS */}
          {showArrows && safeImages.length > 1 && (
            <div className="absolute right-5 bottom-5 z-30 flex items-center gap-3">
              <button
                onClick={prev}
                aria-label="Imagen anterior"
                className="grid h-12 w-12 place-items-center border border-white/25 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 active:scale-95 rounded-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 18l-6-6 6-6"
                  />
                </svg>
              </button>

              <button
                onClick={next}
                aria-label="Imagen siguiente"
                className="grid h-12 w-12 place-items-center border border-white/25 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 active:scale-95 rounded-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 6l6 6-6 6"
                  />
                </svg>
              </button>
            </div>
          )}

          {/* DOTS */}
          {showDots && safeImages.length > 1 && (
            <div className="absolute left-1/2 bottom-6 z-30 flex -translate-x-1/2 items-center gap-2">
              {safeImages.map((_, index) => {
                const active = index === current;

                return (
                  <button
                    key={index}
                    onClick={() => goTo(index)}
                    aria-label={`Ir a imagen ${index + 1}`}
                    className={cx(
                      "h-[3px] transition-all duration-300 rounded-none",
                      active
                        ? "w-10 bg-white"
                        : "w-4 bg-white/40 hover:bg-white/70",
                    )}
                  />
                );
              })}
            </div>
          )}
        </div>

        {/* THUMBNAILS */}
        {showThumbnails && safeImages.length > 1 && (
          <div className="mt-4 flex w-full gap-3 overflow-x-auto rounded-none bg-transparent pb-1">
            {safeImages.map((image, index) => {
              const active = index === current;

              return (
                <button
                  key={`${image.src}-thumb-${index}`}
                  onClick={() => goTo(index)}
                  className={cx(
                    "relative h-24 min-w-[140px] overflow-hidden border transition rounded-none",
                    active
                      ? "border-white opacity-100"
                      : "border-white/20 opacity-60 hover:opacity-100",
                  )}
                >
                  <Image
                    src={image.src}
                    alt={image.alt ?? `Miniatura ${index + 1}`}
                    fill
                    className="object-cover rounded-none"
                  />
                  <div className="absolute inset-0 bg-black/15" />
                </button>
              );
            })}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes kenburnsZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.12);
          }
        }

        .animate-kenburns {
          animation-name: kenburnsZoom;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }
      `}</style>
    </section>
  );
}
