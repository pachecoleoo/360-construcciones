"use client";

import { useMemo, useState } from "react";
import { ProjectsTabs, TabKey } from "./ProjectsTabs";
import ProyectoTerminadoCard, {
  ProyectoTerminado,
} from "./ProyectoTerminadoCard";
import ProyectoFuturoCard, { ProyectoFuturo } from "./ProyectoFuturoCard";

export default function ProjectsSection({
  desarrollos,
  futuros,
  onHeroChange,
}: {
  desarrollos: ProyectoTerminado[];
  futuros: ProyectoFuturo[];
  onHeroChange?: (hero: { title: string; subtitle: string }) => void;
}) {
  const [tab, setTab] = useState<TabKey>("terminados");

  const hero = useMemo(() => {
    if (tab === "terminados") {
      return {
        title: "Proyectos terminados",
        subtitle:
          "Obras finalizadas con estándar técnico, planificación y ejecución controlada.",
      };
    }
    return {
      title: "Futuros proyectos",
      subtitle:
        "Obras y desarrollos en ejecución o planificación. Seguimiento técnico, control y compromiso.",
    };
  }, [tab]);

  // Opcional: si querés que el HeroBackground cambie según tab desde la page
  useMemo(() => {
    onHeroChange?.(hero);
  }, [hero, onHeroChange]);

  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header + Pill */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
              Portfolio de obras
            </h2>
            <p className="mt-3 text-slate-600">
              Explorá proyectos finalizados y obras en curso con el mismo
              enfoque: método, ingeniería y control de ejecución.
            </p>
          </div>

          <ProjectsTabs tab={tab} onChange={setTab} />
        </div>

        {/* Content */}
        {tab === "futuros" ? (
          <>
            <div className="mb-8 max-w-2xl">
              <h3 className="text-xl md:text-2xl font-extrabold text-slate-900">
                En ejecución
              </h3>
              <p className="mt-2 text-slate-600">
                Estos proyectos se encuentran en distintas etapas de desarrollo.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {futuros.map((p) => (
                <ProyectoFuturoCard key={p.id} p={p} />
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="mb-8 max-w-2xl">
              <h3 className="text-xl md:text-2xl font-extrabold text-slate-900">
                Nuestros desarrollos
              </h3>
              <p className="mt-2 text-slate-600">
                Obras finalizadas con estándar técnico, planificación y
                ejecución controlada.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {desarrollos.map((p) => (
                <ProyectoTerminadoCard key={p.id} p={p} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
