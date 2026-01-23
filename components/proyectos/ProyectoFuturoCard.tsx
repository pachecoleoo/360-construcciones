import Image from "next/image";

export type ProyectoTerminado = {
  id: string;
  title: string;
  location: string;
  year: string;
  type: string;
  imageSrc: string;
  highlights: string[];
};

export default function ProyectoTerminadoCard({ p }: { p: ProyectoTerminado }) {
  return (
    <article
      className="
        group relative overflow-hidden rounded-3xl
        border border-slate-200 bg-white
        shadow-sm transition-all duration-500
        hover:shadow-2xl
      "
    >
      {/* CONTENEDOR ALARGADO */}
      <div className="relative h-[340px] w-full">
        {/* Imagen */}
        <Image
          src={p.imageSrc}
          alt={p.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />

        {/* Overlay base */}
        <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/55" />

        {/* Blueprint lines sutil */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
          <div
            className="absolute inset-0 
            [background-image:linear-gradient(to_right,rgba(255,255,255,.35)_1px,transparent_1px),
            linear-gradient(to_bottom,rgba(255,255,255,.35)_1px,transparent_1px)]
            [background-size:32px_32px]"
          />
        </div>

        {/* BADGE */}
        <div className="absolute left-6 top-6 z-10 rounded-full bg-white/90 px-4 py-1 text-[11px] font-bold tracking-widest uppercase text-[#062a47] backdrop-blur">
          Desarrollado
        </div>

        {/* TEXTO CENTRADO EN HOVER */}
        <div
          className="
            absolute inset-0 z-10 flex items-center justify-center
            opacity-0 group-hover:opacity-100
            transition-opacity duration-500
          "
        >
          <h3
            className="
              text-center text-white
              text-3xl md:text-4xl
              font-extrabold tracking-tight
              drop-shadow-xl
            "
          >
            {p.title}
          </h3>
        </div>

        {/* INFO INFERIOR (queda, pero baja protagonismo en hover) */}
        <div
          className="
            absolute bottom-0 left-0 right-0 z-10
            p-6 text-white
            transition-all duration-500
            group-hover:opacity-0 group-hover:translate-y-4
          "
        >
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm text-white/80">
              {p.location} · {p.type}
            </p>
            <span className="rounded-full border border-white/30 px-3 py-1 text-xs font-semibold">
              {p.year}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
