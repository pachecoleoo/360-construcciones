import HeroBackground from "@/components/HeroBackground";
import Link from "next/link";

export default function ProyectosEnDesarrolloPage() {
  return (
    <>
      <HeroBackground
        eyebrow="PROYECTOS"
        title="Proyectos en desarrollo"
        subtitle="Obras y desarrollos actualmente en ejecución. Seguimos cada proyecto con planificación, control técnico y compromiso."
        imageSrc="/hero/nosotros.jpg"
      />

      <main className="bg-white">
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                En ejecución
              </h2>
              <p className="mt-3 text-slate-600">
                Estos proyectos se encuentran en distintas etapas de desarrollo.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="rounded-3xl border border-slate-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition"
                >
                  <div className="h-48 bg-slate-200" />
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900">
                      Proyecto #{i}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      Ubicación · Tipología · Estado actual de obra.
                    </p>
                    <div className="mt-4 text-xs font-semibold uppercase tracking-widest text-[#3b2358]">
                      En desarrollo
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
