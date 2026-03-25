import Link from "next/link";

export default function ProjectCTA() {
  return (
    <section id="contacto" className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-[0_22px_60px_rgba(2,12,27,0.06)]">
          <div className="grid gap-8 px-8 py-10 md:grid-cols-[1.15fr_0.85fr] md:px-10 md:py-12">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#062a47]/55">
                360 Construcciones
              </p>

              <h3 className="mt-3 max-w-2xl text-2xl font-black uppercase leading-tight text-[#062a47] md:text-3xl">
                Más que una obra terminada: una forma de proyectar, ejecutar y
                construir.
              </h3>

              <p className="mt-4 max-w-2xl text-[15px] leading-8 text-slate-600">
                Conocé otros desarrollos de 360 Construcciones o ponete en
                contacto para recibir más información sobre nuestros proyectos.
              </p>
            </div>

            <div className="flex flex-col gap-3 md:items-end md:justify-end">
              <Link
                href="/proyectos"
                className="inline-flex items-center justify-center rounded-full bg-[#062a47] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition hover:translate-y-[-1px]"
              >
                Ver más proyectos
              </Link>

              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#062a47] transition hover:bg-slate-50"
              >
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
