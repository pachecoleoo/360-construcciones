import ProyectoCard from "@/components/proyectos/ProyectoCard";
import type { ProyectoUnified } from "@/components/proyectos/types";

export default function ProjectsSection({
  projects,
}: {
  projects: ProyectoUnified[];
}) {
  const desarrollados = projects.filter((p) => p.status === "desarrollado");
  const ejecucion = projects.filter((p) => p.status === "ejecucion");

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

        {/* DESARROLLADOS */}
        {desarrollados.length > 0 && (
          <div className="mb-14">
            <div className="mb-6">
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-[0.04em] text-[#062a47]">
                Obras desarrolladas
              </h3>
              <div className="mt-3 h-[2px] w-16 bg-[#062a47]" />
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {desarrollados.map((p) => (
                <ProyectoCard key={p.id} p={p} />
              ))}
            </div>
          </div>
        )}

        {/* EN EJECUCIÓN */}
        {ejecucion.length > 0 && (
          <div>
            <div className="mb-6">
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-[0.04em] text-[#062a47]">
                Proyectos en ejecución
              </h3>
              <div className="mt-3 h-[2px] w-16 bg-[#062a47]" />
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {ejecucion.map((p) => (
                <ProyectoCard key={p.id} p={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
