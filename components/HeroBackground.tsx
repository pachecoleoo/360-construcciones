import Image from "next/image";
import { ReactNode } from "react";

type HeroBackgroundProps = {
  title: string;
  highlight?: string[]; // palabras o frases exactas a colorear (case-sensitive)
  highlightClassName?: string; // opcional para override
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

  // Filtra vacíos y ordena por longitud desc (para priorizar frases largas)
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

        // Inserta el token entre piezas (menos al final)
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

  return (
    <section className="relative min-h-screen overflow-hidden">
      <Image src={imageSrc} alt="" fill priority className="object-cover" />

      {/* overlays estilo banner */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent" />

      <div className="relative z-10 min-h-screen">
        <div className="mx-auto max-w-7xl px-6 min-h-screen flex items-center pt-[var(--nav-h)]">
          <div
            className={
              align === "center" ? "mx-auto text-center max-w-4xl" : "max-w-4xl"
            }
          >
            {eyebrow ? (
              <p className="text-white/75 text-xs tracking-[0.35em] uppercase">
                {eyebrow}
              </p>
            ) : null}

            <h1
              className="hero-title
                mt-4
                font-extra font-black  uppercase
                text-white
                text-6xl md:text-7xl
                leading-[1.02]
                tracking-[0.01em]
                whitespace-pre-line
                [text-shadow:0_8px_30px_rgba(0,0,0,0.55)]
              "
            >
              {titleNodes}
            </h1>

            {subtitle ? (
              <p className="hero-subtitle mt-6 text-white/90 text-sm md:text-base max-w-3xl">
                {subtitle}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
