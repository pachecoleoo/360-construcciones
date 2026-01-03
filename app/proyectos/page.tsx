import Link from "next/link";
import HeroBackground from "@/components/HeroBackground";

type Proyecto = {
  id: string;
  titulo: string;
  ubicacion: string;
  tipo: "Residencial" | "Comercial" | "Industrial";
  estado: "Anteproyecto" | "Proyecto ejecutivo" | "Obra en marcha";
  avance: number; // 0-100
  fecha: string; // ej: "Q1 2026"
  tags: string[];
};

const PROYECTOS_EN_DESARROLLO: Proyecto[] = [
  {
    id: "p-001",
    titulo: "Edificio Vista Norte",
    ubicacion: "Neuquén, AR",
    tipo: "Residencial",
    estado: "Obra en marcha",
    avance: 62,
    fecha: "Q2 2026",
    tags: ["Estructura", "Instalaciones", "Terminaciones"],
  },
  {
    id: "p-002",
    titulo: "Centro Comercial Alto Valle",
    ubicacion: "Cipolletti, RN",
    tipo: "Comercial",
    estado: "Proyecto ejecutivo",
    avance: 35,
    fecha: "Q4 2025",
    tags: ["Planos", "Cómputo", "Permisos"],
  },
  {
    id: "p-003",
    titulo: "Planta de Servicios",
    ubicacion: "Añelo, NQN",
    tipo: "Industrial",
    estado: "Anteproyecto",
    avance: 18,
    fecha: "Q1 2026",
    tags: ["Layout", "Ingeniería", "Costos"],
  },
];

function cx(...c: Array<string | false | null | undefined>) {
  return c.filter(Boolean).join(" ");
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
      {children}
    </span>
  );
}

function Progress({ value }: { value: number }) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between text-xs text-slate-500">
        <span>Avance</span>
        <span className="font-semibold text-slate-700">{value}%</span>
      </div>
      <div className="mt-2 h-2 w-full rounded-full bg-slate-100 overflow-hidden border border-slate-200">
        <div
          className="h-full rounded-full bg-slate-900"
          style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
        />
      </div>
    </div>
  );
}

export default function ProyectosPage({
  searchParams,
}: {
  searchParams?: { estado?: string };
}) {
  const estado = searchParams?.estado ?? "desarrollados";
  const isEnDesarrollo = estado === "en-desarrollo";

  return (
    <>
      {/* HERO */}
      <HeroBackground
        eyebrow={isEnDesarrollo ? "PROYECTOS EN DESARROLLO" : "PROYECTOS"}
        title={
          isEnDesarrollo
            ? "Seguimiento real: hitos, avances y control técnico."
            : "Proyectos desarrollados: resultados y ejecución."
        }
        subtitle={
          isEnDesarrollo
            ? "Obras en marcha y proyectos en etapa de definición. Transparencia, planificación y documentación en cada paso."
            : "Una selección de trabajos finalizados con foco en calidad, eficiencia y detalle."
        }
        imageSrc={
          isEnDesarrollo
            ? "/hero/proyectos-en-desarrollo.jpg"
            : "/hero/proyectos.jpg"
        }
        align="left"
      />

      {/* CONTENIDO */}
      <main className="bg-white">
        {/* Header de sección + filtros */}
        <section className="py-14">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-500">
                  {isEnDesarrollo ? "Pipeline activo" : "Portfolio"}
                </p>
                <h2 className="mt-3 text-2xl md:text-3xl font-extrabold text-slate-900">
                  {isEnDesarrollo
                    ? "Proyectos en desarrollo"
                    : "Proyectos desarrollados"}
                </h2>
                <p className="mt-3 text-slate-600">
                  {isEnDesarrollo
                    ? "Acá podés mostrar obras en marcha, etapas y próximos hitos. Después lo conectamos a datos reales."
                    : "Acá va tu galería de proyectos terminados."}
                </p>
              </div>

              {/* Switch entre estados */}
              <div className="flex gap-3">
                <Link
                  href="/proyectos?estado=desarrollados"
                  className={cx(
                    "rounded-xl px-5 py-3 text-sm font-semibold border transition",
                    !isEnDesarrollo
                      ? "bg-slate-900 text-white border-slate-900"
                      : "bg-white text-slate-900 border-slate-200 hover:bg-slate-50"
                  )}
                >
                  Desarrollados
                </Link>
                <Link
                  href="/proyectos?estado=en-desarrollo"
                  className={cx(
                    "rounded-xl px-5 py-3 text-sm font-semibold border transition",
                    isEnDesarrollo
                      ? "bg-slate-900 text-white border-slate-900"
                      : "bg-white text-slate-900 border-slate-200 hover:bg-slate-50"
                  )}
                >
                  En desarrollo
                </Link>
              </div>
            </div>

            {/* GRID de proyectos */}
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {PROYECTOS_EN_DESARROLLO.map((p) => (
                <article
                  key={p.id}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-extrabold text-slate-900 leading-snug">
                        {p.titulo}
                      </h3>
                      <p className="mt-1 text-sm text-slate-600">
                        {p.ubicacion}
                      </p>
                    </div>

                    <Badge>{p.tipo}</Badge>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <Badge>{p.estado}</Badge>
                    <Badge>{p.fecha}</Badge>
                  </div>

                  <div className="mt-6">
                    <Progress value={p.avance} />
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-semibold text-slate-600 bg-slate-50 border border-slate-200 rounded-full px-3 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center justify-between">
                    <Link
                      href={`/proyectos/${p.id}`}
                      className="text-sm font-semibold text-slate-900 hover:underline"
                    >
                      Ver detalle
                    </Link>

                    <span className="text-xs text-slate-500">
                      ID: {p.id.toUpperCase()}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="max-w-2xl">
                <h3 className="text-2xl font-extrabold text-slate-900">
                  ¿Querés que tu proyecto avance con orden?
                </h3>
                <p className="mt-2 text-slate-600">
                  Agendamos una reunión, definimos alcance y te pasamos una
                  propuesta con etapas claras.
                </p>
              </div>

              <Link
                href="/contacto"
                className="inline-flex w-fit rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
              >
                Pedir presupuesto
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
