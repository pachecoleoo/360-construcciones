import Image from "next/image";
import Link from "next/link";

export type ProyectoTerminado = {
  id: string;
  title: string;
  location: string;
  year: string;
  type: string;
  imageSrc: string;
  highlights: string[];
  href: string; // <-- link al detalle
  logoSrc: string; // 👈 logo del edificio
};
function splitLeadingNumber(title: string) {
  const m = title.match(/^(\d+)\s+(.*)$/);
  if (!m) return { num: "", rest: title };
  return { num: m[1], rest: m[2] };
}

export default function ProyectoTerminadoCard({ p }: { p: ProyectoTerminado }) {
  return (
    <Link
      href={p.href}
      className="
    group block
    border border-slate-300 bg-white
    overflow-hidden
    transition-all duration-500
    shadow-[0_12px_28px_rgba(0,0,0,0.12)]
    hover:shadow-[0_20px_40px_rgba(0,0,0,0.22)]
    focus:outline-none focus:ring-2 focus:ring-[#062a47]/30
  "
    >
      {/* POSTER vertical */}
      <article className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]">
        <Image
          src={p.imageSrc}
          alt={p.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          sizes="(max-width: 1024px) 100vw, 33vw"
          priority={false}
        />

        {/* Overlay base (suave) */}
        <div className="absolute inset-0 bg-black/55 transition duration-500 group-hover:bg-black/15" />

        {/* Blueprint lines sutil */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
          <div
            className="absolute inset-0  background-image:linear-gradient(to_right,rgba(255,255,255,.35)_1px, transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.35)_1px,transparent_1px)] 
            [bg-size:32px_32px]"
          />
        </div>

        {/* Badge */}
        {/* <div
          className="absolute  z-10 rounded-full bg-white/90  left-4 top-4 px-3 py-1 text-[10px]
font-bold tracking-widest uppercase text-[#062a47] backdrop-blur"
        >
          Desarrollado
        </div> */}

        {/* Título estilo logo (abajo, grande, no centrado) */}
        <div
          className="
    absolute inset-x-0 bottom-0 z-20
    px-6 pb-8
    opacity-100 translate-y-0
    transition-all duration-500
    group-hover:opacity-0 group-hover:translate-y-3
    pointer-events-none
  "
        >
          {" "}
          {(() => {
            const { num, rest } = splitLeadingNumber(p.title);

            return (
              <h2
                className="
    text-white
    text-4xl sm:text-5xl md:text-6xl
    tracking-normal 
    leading-[0.95]
drop-shadow-[0_0_26px_rgba(6,42,71,0.95)]
  "
              >
                {num ? (
                  <>
                    <span className="font-ultra text-6xl tracking-[-0.01em] ">
                      {num}
                    </span>{" "}
                    <span className="font-extra  text-6xl ">{rest}</span>
                  </>
                ) : (
                  <span className="font-extra font-black">{rest}</span>
                )}
              </h2>
            );
          })()}
        </div>

        {/* Footer info abajo (se oculta en hover) */}
        {/* Banner glass (SOLO en hover) */}
        {/* Banner glass (aparece SOLO en hover – transición armónica) */}
        <div
          className="
    pointer-events-none
    absolute bottom-0 left-0 right-0 z-10
    p-2
    opacity-0 translate-y-4 scale-[0.98]
    transition-all duration-700
    ease-[cubic-bezier(0.22,1,0.36,1)]  delay-100    md:group-hover:opacity-100
    md:group-hover:translate-y-0
    md:group-hover:scale-100
  "
        >
          <div className="flex items-end justify-center h-full pb-4">
            <Image
              src={p.logoSrc}
              alt={`${p.title} logo`}
              width={70}
              height={40}
              className="
      object-contain
      opacity-95
      drop-shadow-xl
    "
            />
          </div>
        </div>
      </article>
    </Link>
  );
}
