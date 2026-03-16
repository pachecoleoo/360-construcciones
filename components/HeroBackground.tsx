"use client";

import Image from "next/image";
import { ReactNode } from "react";

type HeroBackgroundProps = {
  title: string;
  highlight?: string[];
  highlightClassName?: string;
  eyebrow?: string;
  subtitle?: string;
  imageSrc: string;
  align?: "left" | "center";
};

function renderHighlightedText(
  text: string,
  highlights: string[],
  className: string,
): ReactNode[] {
  if (!highlights?.length) return [text];

  const sorted = [...highlights]
    .map((h) => h?.trim())
    .filter(Boolean) as string[];

  sorted.sort((a, b) => b.length - a.length);

  let nodes: ReactNode[] = [text];
  let key = 0;

  for (const token of sorted) {
    nodes = nodes.flatMap((node) => {
      if (typeof node !== "string") return [node];
      if (!node.includes(token)) return [node];

      const pieces = node.split(token);
      const out: ReactNode[] = [];

      for (let i = 0; i < pieces.length; i++) {
        const chunk = pieces[i];
        if (chunk) out.push(chunk);

        if (i < pieces.length - 1) {
          out.push(
            <span key={`hl-${key++}`} className={className}>
              {token}
            </span>,
          );
        }
      }

      return out;
    });
  }

  return nodes;
}

export default function HeroBackground({
  title,
  highlight = [],
  highlightClassName = "text-brand-blueSoft hero-highlight",
  eyebrow,
  subtitle,
  imageSrc,
  align = "left",
}: HeroBackgroundProps) {
  const titleNodes = renderHighlightedText(
    title,
    highlight,
    highlightClassName,
  );

  const scrollNext = () => {
    document
      .getElementById("primera-seccion")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      <Image src={imageSrc} alt="" fill priority className="object-cover" />

      {/* overlays estilo banner */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent" />

      <div className="relative z-10 min-h-screen">
        <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-[var(--nav-h)]">
          <div
            className={
              align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-4xl"
            }
          >
            {eyebrow ? (
              <p className="text-xs uppercase tracking-[0.35em] text-white/75">
                {eyebrow}
              </p>
            ) : null}

            <h1
              className="hero-title
                mt-4
                whitespace-pre-line
                text-6xl
                font-extra
                font-black
                uppercase
                leading-[1.02]
                tracking-[0.01em]
                text-white
                [text-shadow:0_8px_30px_rgba(0,0,0,0.55)]
                md:text-7xl
              "
            >
              {titleNodes}
            </h1>

            {subtitle ? (
              <p className="hero-subtitle mt-6 max-w-3xl text-sm text-white/90 md:text-base">
                {subtitle}
              </p>
            ) : null}
          </div>
        </div>
      </div>

      {/* flecha scroll */}
      <button
        type="button"
        onClick={scrollNext}
        aria-label="Ir a la primera sección"
        className="
          absolute bottom-10 left-1/2 z-20 -translate-x-1/2
          flex flex-col items-center gap-2
          text-white/70 transition
          hover:text-white
          animate-bounce
        "
      >
        {/* <span className="text-[10px] uppercase tracking-[0.35em]">
          Primera sección
        </span> */}

        <svg
          width="56"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
    </section>
  );
}
