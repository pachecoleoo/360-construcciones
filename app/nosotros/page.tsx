import Link from "next/link";
import HeroBackground from "@/components/HeroBackground";

export default function NosotrosPage() {
  return (
    <>
      {/* HERO BACKGROUND (detrás del navbar fijo) */}
      <HeroBackground
        eyebrow="Nosotros"
        title="Construimos con método, calidad y compromiso."
        subtitle="En 360 Construcciones unimos arquitectura e ingeniería para entregar proyectos sólidos, eficientes y listos para crecer. Nos enfocamos en la planificación, el detalle y la experiencia del cliente en cada etapa."
        imageSrc="/hero/nosotros.jpg"
        align="left"
      />

      {/* CONTENIDO REAL (debajo del hero) */}
      <main className="min-h-screen bg-white">
        {/* QUIÉNES SOMOS */}
        <section className="py-14">
          <div className="mx-auto max-w-7xl px-6 grid gap-10 lg:grid-cols-2 items-center">
            {/* Texto */}
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                Un equipo orientado a resultados
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Trabajamos con un enfoque integral: definimos objetivos, relevamos
                requerimientos, planificamos plazos y presupuesto, y ejecutamos con
                control técnico. Nuestro diferencial es la coordinación entre
                disciplinas y la comunicación clara con el cliente.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Misión
                  </p>
                  <p className="mt-2 text-slate-800">
                    Entregar obras confiables, eficientes y estéticamente sólidas,
                    cuidando calidad y tiempos.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Visión
                  </p>
                  <p className="mt-2 text-slate-800">
                    Ser referentes por la excelencia técnica, la transparencia y la
                    mejora continua en cada proyecto.
                  </p>
                </div>
              </div>

              {/* Botones (si querés mantenerlos dentro del contenido) */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contacto"
                  className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
                >
                  Hablemos de tu proyecto
                </Link>
                <Link
                  href="/proyectos?estado=desarrollados"
                  className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
                >
                  Ver proyectos
                </Link>
              </div>
            </div>
 
            {/* Imagen placeholder */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <div className="rounded-2xl bg-linear-to-br from-slate-200 to-slate-100 h-72 w-full" />
              <p className="mt-4 text-sm text-slate-600">
                Después ponemos una foto real en{" "}
                <span className="font-semibold">/public/hero/nosotros.jpg</span>.
              </p>
            </div>
          </div>
        </section>

        {/* VALORES */}
        <section className="bg-slate-50 py-14">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-500">
                Valores
              </p>
              <h2 className="mt-3 text-2xl md:text-3xl font-extrabold text-slate-900">
                Cómo trabajamos
              </h2>
              <p className="mt-3 text-slate-600">
                Priorizamos procesos claros para que el proyecto avance sin sorpresas.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Transparencia", desc: "Presupuestos claros, seguimiento y comunicación constante." },
                { title: "Calidad", desc: "Estándares técnicos y control de ejecución en cada etapa." },
                { title: "Planificación", desc: "Cronogramas realistas, hitos y orden de trabajo." },
                { title: "Compromiso", desc: "Cumplimos lo acordado y cuidamos el detalle final." },
              ].map((v) => (
                <div key={v.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <h3 className="text-lg font-bold text-slate-900">{v.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NÚMEROS */}
        <section className="py-14">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                    Indicadores que importan
                  </h2>
                  <p className="mt-2 text-slate-600 max-w-2xl">
                    Placeholders por ahora, después cargás los reales.
                  </p>
                </div>

                <Link
                  href="/contacto"
                  className="inline-flex w-fit rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
                >
                  Solicitar presupuesto
                </Link>
              </div>

              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { kpi: "+50", label: "Proyectos gestionados" },
                  { kpi: "98%", label: "Satisfacción del cliente" },
                  { kpi: "24/7", label: "Soporte y seguimiento" },
                  { kpi: "1", label: "Equipo coordinado (Arq + Ing)" },
                ].map((s) => (
                  <div key={s.label} className="rounded-2xl bg-slate-50 p-6 border border-slate-200">
                    <div className="text-3xl font-extrabold text-slate-900">{s.kpi}</div>
                    <div className="mt-1 text-sm text-slate-600">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROCESO */}
        <section className="py-14 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
              Nuestro proceso, de punta a punta
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl">
              Un flujo simple y claro para que avances con confianza.
            </p>

            <div className="mt-10 grid gap-6 lg:grid-cols-4">
              {[
                { step: "01", title: "Relevamiento", desc: "Objetivos, alcance, sitio y requisitos." },
                { step: "02", title: "Propuesta", desc: "Presupuesto, plazos y plan de trabajo." },
                { step: "03", title: "Ejecución", desc: "Coordinación, control técnico y avances." },
                { step: "04", title: "Entrega", desc: "Cierre, documentación y post-obra." },
              ].map((p) => (
                <div key={p.step} className="rounded-2xl border border-slate-200 p-6">
                  <div className="text-xs font-semibold tracking-[0.25em] text-slate-500">{p.step}</div>
                  <h3 className="mt-2 text-lg font-bold text-slate-900">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-14 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-3xl bg-[#3b2358] p-10 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold">¿Listo para empezar?</h2>
                <p className="mt-2 text-white/85">Contanos tu idea y armamos una propuesta a medida.</p>
              </div>

              <Link
                href="/contacto"
                className="inline-flex w-fit rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#3b2358] hover:bg-white/90 transition"
              >
                Contactar ahora
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
