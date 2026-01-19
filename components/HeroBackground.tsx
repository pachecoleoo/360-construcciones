import Image from "next/image";

type HeroBackgroundProps = {
  title: string;
  eyebrow?: string;
  subtitle?: string;
  imageSrc: string;
  align?: "left" | "center";
};

export default function HeroBackground({
  title,
  eyebrow,
  subtitle,
  imageSrc,
  align = "left",
}: HeroBackgroundProps) {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <Image src={imageSrc} alt="" fill priority className="object-cover" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Top fade (navbar legibility) */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 min-h-screen">
        <div className="mx-auto max-w-7xl px-6 min-h-screen flex items-center pt-[var(--nav-h)]">
          <div
            className={
              align === "center" ? "mx-auto text-center max-w-4xl" : "max-w-4xl"
            }
          >
            {eyebrow && (
              <p className="text-white/70 text-xs tracking-[0.35em] uppercase font-medium">
                {eyebrow}
              </p>
            )}

            <h1 className="mt-4 text-white text-4xl md:text-6xl font-heading font-black uppercase tracking-[0.02em] leading-[1.05]">
              {title}
            </h1>

            {subtitle && (
              <p className="mt-6 text-white/85 text-sm md:text-base leading-relaxed max-w-3xl">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
