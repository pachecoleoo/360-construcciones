import ProyectoCard from "@/components/proyectos/ProyectoCard";
import type { ProyectoUnified } from "@/components/proyectos/types";

export default function ProjectsSection({
  projects,
}: {
  projects: ProyectoUnified[];
}) {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#062a47]/60">
            Proyectos
          </p>

          <h2 className="mt-3 text-2xl font-black uppercase tracking-[0.02em] text-slate-900 md:text-3xl">
            Nuestro trabajo
          </h2>

          <div className="mt-4 h-px w-20 bg-[#062a47]/20" />

          <p className="mt-4 text-slate-600">
            Una selección de desarrollos que reflejan nuestra manera de
            proyectar, ejecutar y construir con criterio técnico, presencia
            urbana y atención al detalle.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProyectoCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
