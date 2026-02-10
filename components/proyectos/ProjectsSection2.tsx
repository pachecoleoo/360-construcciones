import ProyectoTerminadoCard from "@/components/proyectos/ProyectoTerminadoCard";
import ProyectoFuturoCard from "@/components/proyectos/ProyectoFuturoCard";
import type { ProyectoUnified } from "@/app/proyectos/page"; // si no te gusta importar desde page, te digo abajo cómo mover el type

export default function ProjectsSection({
  projects,
}: {
  projects: ProyectoUnified[];
}) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-[0.02em] text-slate-900">
            Nuestros proyectos
          </h2>
          <p className="mt-3 text-slate-600">
            Desarrollos finalizados y obras en ejecución.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) =>
            p.status === "desarrollado" ? (
              <ProyectoTerminadoCard key={p.id} p={p} />
            ) : (
              <ProyectoFuturoCard key={p.id} p={p} />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
