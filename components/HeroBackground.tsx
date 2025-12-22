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
    <section className="relative h-[85vh] overflow-hidden">
      <Image
        src={imageSrc}
        alt=""
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-black/55 to-transparent" />



      <div className="relative z-10 h-full">
        <div className="mx-auto max-w-7xl px-6 h-full">
        <div className="h-full flex items-center pt-24 md:pt-28">

          <div className={align === "center" ? "mx-auto text-center max-w-4xl" : "max-w-4xl"}>
            {eyebrow && (
              <p className="text-white/70 text-xs font-semibold tracking-[0.35em] uppercase">
                {eyebrow}
              </p>
            )}

            <h1 className="mt-4 text-white text-4xl md:text-6xl font-extrabold leading-tight">
              {title}
            </h1>

            {subtitle && (
              <p className="mt-6 text-white/85 text-sm md:text-base leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
