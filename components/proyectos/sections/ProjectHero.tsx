import Image from "next/image";

type ProjectHeroProps = {
  title: string;
  location?: string;
  heroImageSrc?: string;
};

export default function ProjectHero({
  title,
  location,
  heroImageSrc,
}: ProjectHeroProps) {
  return (
    <section className="relative h-screen min-h-[760px] overflow-hidden bg-[#062a47]">
      {heroImageSrc ? (
        <Image
          src={heroImageSrc}
          alt={title}
          fill
          priority
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-[#062a47]" />
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/55" />

      <div className="relative z-10 flex h-full flex-col">
        {/* logo */}
        <div className="absolute -top-2 left-4 z-20 sm:top-6 sm:left-6 md:-top-4 md:left-27">
          <Image
            src="/brand/360blanco2.png"
            alt="360 Construcciones"
            width={140}
            height={50}
            className="object-contain w-[80px] sm:w-[80px] md:w-[100px] lg:w-[130px]"
            priority
          />
        </div>

        {/* contenido */}
        <div className="mx-auto flex h-full w-full max-w-7xl items-end px-6 pb-14">
          <div className="max-w-4xl">
            <h1 className="mt-4 text-5xl font-black uppercase leading-[0.92] text-white sm:text-6xl md:text-7xl lg:text-[75px]">
              {title}
            </h1>

            {location && (
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
                {<br></br>}
              </p>
            )}
          </div>
        </div>

        {/* nav interna */}
        <div className="absolute bottom-0 left-0 right-0 hidden border-t border-white/10 bg-black/10 backdrop-blur md:block">
          <div className="mx-auto flex max-w-7xl items-center gap-8 px-6 py-4">
            <a
              href="#proyecto"
              className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
            >
              Proyecto
            </a>
            <a
              href="#ficha"
              className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
            >
              Ficha
            </a>
            <a
              href="#galeria"
              className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
            >
              Galería
            </a>
            <a
              href="#contacto"
              className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
