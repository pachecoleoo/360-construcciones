import Link from "next/link";

const services = [
  {
    title: "Dirección y gestión de obra",
    desc: "Planificación, coordinación de equipos y control de calidad para cumplir plazos y estándares.",
  },
  {
    title: "Construcción y ejecución",
    desc: "Obra nueva y ejecución integral con foco en terminaciones, seguridad y eficiencia.",
  },
  {
    title: "Arquitectura e ingeniería",
    desc: "Proyecto, cómputo y documentación técnica para decisiones seguras y trazables.",
  },
  {
    title: "Remodelaciones y ampliaciones",
    desc: "Intervenciones inteligentes para mejorar funcionalidad y valor, minimizando tiempos muertos.",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative bg-white py-24 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-[#062a47]/70 text-sm tracking-[0.22em] uppercase">
              Qué hacemos
            </p>
            <h2 className="mt-3 text-[#062a47] text-3xl md:text-4xl font-semibold tracking-tight">
              Servicios pensados para ejecutar sin sorpresas
            </h2>
            <p className="mt-4 text-[#062a47]/75 text-lg leading-relaxed">
              Trabajamos con metodología, control y comunicación clara. Desde el
              proyecto hasta la entrega, cuidamos cada etapa para que el
              resultado sea sólido y medible.
            </p>
          </div>

          {/* CTA lado derecho */}
          <div className="flex gap-3">
            <Link
              href="/contacto"
              className="
                inline-flex items-center justify-center rounded-full
                bg-[#062a47] text-white px-6 h-11 text-sm font-medium
                hover:bg-[#062a47]/95 transition
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#062a47]/30
              "
            >
              Pedir presupuesto
            </Link>

            <Link
              href="/proyectos?estado=desarrollados"
              className="
                inline-flex items-center justify-center rounded-full
                border border-[#062a47]/25 text-[#062a47] px-6 h-11 text-sm font-medium
                hover:bg-[#062a47]/5 transition
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#062a47]/20
              "
            >
              Ver proyectos
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} title={s.title} desc={s.desc} />
          ))}
        </div>

        {/* Banda inferior técnica */}
        <div className="mt-14 rounded-3xl border border-[#062a47]/10 bg-[#062a47]/5 px-8 py-7">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-[#062a47]/80">
              ¿Tenés un proyecto en mente? Contanos el alcance y te respondemos
              con una propuesta clara.
            </p>
            <Link
              href="/contacto"
              className="
                inline-flex items-center justify-center rounded-full
                bg-white border border-[#062a47]/20 text-[#062a47]
                px-6 h-11 text-sm font-medium
                hover:bg-white/90 transition
              "
            >
              Hablemos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div
      className="
        group rounded-3xl border border-[#062a47]/12 bg-white
        p-8 transition
        hover:border-[#062a47]/22 hover:bg-[#062a47]/[0.02]
      "
    >
      {/* “marca” técnica (línea) */}
      <div className="flex items-center gap-3">
        <span className="h-9 w-9 rounded-2xl bg-[#062a47]/10 border border-[#062a47]/15 grid place-items-center">
          <span className="h-2 w-2 rounded-full bg-[#062a47]" />
        </span>
        <h3 className="text-[#062a47] text-xl font-semibold">{title}</h3>
      </div>

      <p className="mt-4 text-[#062a47]/75 leading-relaxed">{desc}</p>

      <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-[#062a47]/15 to-transparent" />

      <p className="mt-4 text-sm text-[#062a47]/60">
        Planificación • Ejecución • Entrega
      </p>
    </div>
  );
}
