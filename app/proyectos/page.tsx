"use client";

import HeroBackground from "@/components/HeroBackground";
import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";

type TabKey = "terminados" | "futuros";

const DESARROLLOS = [
  {
    id: "d1",
    title: "Belgrano 531",
    location: "Neuquén Capital, Belgrano 531",
    year: "2024",
    type: "Residencial",
    imageSrc: "/images/renders/belgrano531.jpg",
    highlights: ["Hormigón visto", "Detalle técnico", "Entrega llave en mano"],
  },
  {
    id: "d2",
    title: "Gatica",
    location: "Neuquen",
    year: "2023",
    type: "Mixto",
    imageSrc: "/images/renders/gatica.jpg",
    highlights: ["Eficiencia", "Calidad", "Terminaciones premium"],
  },
  {
    id: "d3",
    title: "Mendoza 331",
    location: "Neuquen, Mendoza 331",
    year: "2022",
    type: "Residencial",
    imageSrc: "/images/renders/mendoza331.jpg",
    highlights: ["Ingeniería", "Control", "Ejecución"],
  },
];

const FUTUROS = [
  {
    id: "f1",
    title: "Proyecto #1",
    description: "Ubicación · Tipología · Estado actual de obra.",
    badge: "En desarrollo",
  },
  {
    id: "f2",
    title: "Proyecto #2",
    description: "Ubicación · Tipología · Estado actual de obra.",
    badge: "En desarrollo",
  },
  {
    id: "f3",
    title: "Proyecto #3",
    description: "Ubicación · Tipología · Estado actual de obra.",
    badge: "En desarrollo",
  },
];

export default function ProyectosPage() {
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

  return (
    <>
      <HeroBackground
        eyebrow="PROYECTOS"
        title={hero.title}
        subtitle={hero.subtitle}
        imageSrc="/images/construccion2.jpg"
      />

      <main className="bg-white">
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

              {/* Pill tabs */}
              <div className="relative inline-flex w-fit items-center rounded-full border border-slate-200 bg-white p-1 shadow-sm">
                <TabButton
                  active={tab === "terminados"}
                  onClick={() => setTab("terminados")}
                >
                  Terminados
                </TabButton>

                <TabButton
                  active={tab === "futuros"}
                  onClick={() => setTab("futuros")}
                >
                  Futuros / En desarrollo
                </TabButton>
              </div>
            </div>

            {/* Content */}
            {tab === "futuros" ? (
              <>
                <div className="mb-8 max-w-2xl">
                  <h3 className="text-xl md:text-2xl font-extrabold text-slate-900">
                    En ejecución
                  </h3>
                  <p className="mt-2 text-slate-600">
                    Estos proyectos se encuentran en distintas etapas de
                    desarrollo.
                  </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {FUTUROS.map((p) => (
                    <article
                      key={p.id}
                      className="rounded-3xl border border-slate-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition"
                    >
                      <div className="relative h-48 bg-slate-200">
                        {/* Si después tenés imágenes, reemplazá esto por <Image /> */}
                        <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
                          <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(0,0,0,.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.18)_1px,transparent_1px)] [background-size:32px_32px]" />
                        </div>

                        <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold tracking-widest uppercase text-[#062a47] backdrop-blur">
                          {p.badge}
                        </div>
                      </div>

                      <div className="p-6">
                        <h4 className="text-lg font-bold text-slate-900">
                          {p.title}
                        </h4>
                        <p className="mt-2 text-sm text-slate-600">
                          {p.description}
                        </p>

                        <div className="mt-5 h-px w-full bg-slate-200" />

                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-xs font-semibold uppercase tracking-widest text-[#3b2358]">
                            En desarrollo
                          </span>
                          <span className="text-xs text-slate-500 hover:text-slate-700 transition">
                            Ver detalles →
                          </span>
                        </div>
                      </div>
                    </article>
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
                  {DESARROLLOS.map((p) => (
                    <article
                      key={p.id}
                      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
                    >
                      {/* Imagen */}
                      <div className="relative h-56">
                        <Image
                          src={p.imageSrc}
                          alt={p.title}
                          fill
                          className="object-cover transition duration-500 group-hover:scale-[1.03]"
                          sizes="(max-width: 1024px) 100vw, 33vw"
                          priority={false}
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#062a47]/80 via-[#062a47]/20 to-transparent opacity-95" />

                        {/* Badge */}
                        <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold tracking-widest uppercase text-[#062a47] backdrop-blur">
                          Desarrollado
                        </div>

                        {/* “Blueprint lines” sutil */}
                        <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
                          <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:32px_32px]" />
                        </div>
                      </div>

                      {/* Contenido */}
                      <div className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <h4 className="text-lg font-extrabold text-slate-900">
                            {p.title}
                          </h4>
                          <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
                            {p.year}
                          </span>
                        </div>

                        <p className="mt-2 text-sm text-slate-600">
                          {p.location} · {p.type}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {p.highlights?.slice(0, 3).map((h) => (
                            <span
                              key={h}
                              className="rounded-full bg-slate-100 px-3 py-1 text-[12px] font-semibold text-slate-700"
                            >
                              {h}
                            </span>
                          ))}
                        </div>

                        <div className="mt-5 h-px w-full bg-slate-200" />

                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-xs font-semibold uppercase tracking-widest text-[#062a47]">
                            Proyecto finalizado
                          </span>
                          <span className="text-xs text-slate-500 group-hover:text-slate-700 transition">
                            Ver detalles →
                          </span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                Nuestros desarrollos (opcion 1)
              </h2>
              <p className="mt-3 text-slate-600">
                Obras finalizadas. Hover para ver ficha técnica rápida.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {DESARROLLOS.map((p) => (
                <article
                  key={p.id}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
                >
                  <div className="relative h-64">
                    <Image
                      src={p.imageSrc}
                      alt={p.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>

                  {/* Panel técnico (reveal) */}
                  <div className="absolute inset-y-0 right-0 w-[78%] translate-x-[78%] bg-white/95 backdrop-blur transition-transform duration-500 group-hover:translate-x-0">
                    <div className="h-full p-6 flex flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-base font-extrabold text-slate-900">
                          {p.title}
                        </h3>
                        <span className="rounded-full border border-slate-200 px-3 py-1 text-[11px] font-semibold text-slate-700">
                          {p.year}
                        </span>
                      </div>

                      <p className="mt-2 text-sm text-slate-600">
                        {p.location} · {p.type}
                      </p>

                      <div className="mt-4 rounded-2xl border border-slate-200 p-4">
                        <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                          Estado
                        </div>
                        <div className="mt-2 text-sm font-extrabold text-[#062a47]">
                          Desarrollado / Entregado
                        </div>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.highlights?.slice(0, 3).map((h) => (
                          <span
                            key={h}
                            className="rounded-full bg-slate-100 px-3 py-1 text-[12px] font-semibold text-slate-700"
                          >
                            {h}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto pt-5">
                        <div className="h-px w-full bg-slate-200" />
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-xs font-semibold uppercase tracking-widest text-[#062a47]">
                            Ver ficha →
                          </span>
                          <span className="text-xs text-slate-500">
                            Calidad + Control
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Título base (se ve sin hover) */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-extrabold text-slate-900">
                        {p.title}
                      </h3>
                      <span className="rounded-full bg-[#062a47]/10 px-3 py-1 text-xs font-semibold text-[#062a47]">
                        Desarrollado
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">
                      {p.location} · {p.type} · {p.year}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-10 max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                Nuestros desarrollos (opcion 2)
              </h2>
              <p className="mt-3 text-slate-600">
                Selección de obras entregadas. Podés destacar la más importante.
              </p>
            </div>

            {(() => {
              const [featured, ...rest] = DESARROLLOS;
              return (
                <div className="grid gap-8 lg:grid-cols-12">
                  {/* Featured */}
                  <article className="lg:col-span-7 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                    <div className="relative h-[340px]">
                      <Image
                        src={featured.imageSrc}
                        alt={featured.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#062a47]/85 via-[#062a47]/20 to-transparent" />
                      <div className="absolute bottom-0 p-7">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold tracking-widest uppercase text-[#062a47] backdrop-blur">
                          <span className="h-2 w-2 rounded-full bg-[#062a47]" />
                          Obra destacada
                        </div>
                        <h3 className="mt-3 text-2xl font-extrabold text-white">
                          {featured.title}
                        </h3>
                        <p className="mt-2 text-sm text-white/85">
                          {featured.location} · {featured.type} ·{" "}
                          {featured.year}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {featured.highlights?.slice(0, 3).map((h) => (
                            <span
                              key={h}
                              className="rounded-full bg-white/10 px-3 py-1 text-[12px] font-semibold text-white/90 backdrop-blur"
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="grid gap-3 sm:grid-cols-3">
                        <div className="rounded-2xl border border-slate-200 p-4">
                          <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                            Estado
                          </div>
                          <div className="mt-2 font-extrabold text-[#062a47]">
                            Finalizado
                          </div>
                        </div>
                        <div className="rounded-2xl border border-slate-200 p-4">
                          <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                            Gestión
                          </div>
                          <div className="mt-2 font-extrabold text-slate-900">
                            Integral
                          </div>
                        </div>
                        <div className="rounded-2xl border border-slate-200 p-4">
                          <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                            Enfoque
                          </div>
                          <div className="mt-2 font-extrabold text-slate-900">
                            Técnico
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>

                  {/* List */}
                  <div className="lg:col-span-5 space-y-4">
                    {rest.map((p) => (
                      <article
                        key={p.id}
                        className="group flex gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
                      >
                        <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-2xl bg-slate-200">
                          <Image
                            src={p.imageSrc}
                            alt={p.title}
                            fill
                            className="object-cover transition duration-300 group-hover:scale-[1.03]"
                            sizes="112px"
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-3">
                            <h3 className="truncate text-base font-extrabold text-slate-900">
                              {p.title}
                            </h3>
                            <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-700">
                              {p.year}
                            </span>
                          </div>

                          <p className="mt-1 text-sm text-slate-600">
                            {p.location} · {p.type}
                          </p>

                          <div className="mt-2 text-xs font-semibold uppercase tracking-widest text-[#062a47]">
                            Desarrollado
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                  Nuestros desarrollos (opcion 3)
                </h2>
                <p className="mt-3 text-slate-600">
                  Obras finalizadas con estándar técnico, planificación y
                  ejecución controlada.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold tracking-widest uppercase text-[#062a47]">
                <span className="h-2 w-2 rounded-full bg-[#062a47]" />
                Desarrollados
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {DESARROLLOS.map((p) => (
                <article
                  key={p.id}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
                >
                  {/* Imagen */}
                  <div className="relative h-56">
                    <Image
                      src={p.imageSrc}
                      alt={p.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      priority={false}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#062a47]/80 via-[#062a47]/20 to-transparent opacity-95" />

                    {/* Badge */}
                    <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold tracking-widest uppercase text-[#062a47] backdrop-blur">
                      Desarrollado
                    </div>

                    {/* “Blueprint lines” sutil */}
                    <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
                      <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:32px_32px]" />
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-extrabold text-slate-900">
                        {p.title}
                      </h3>
                      <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
                        {p.year}
                      </span>
                    </div>

                    <p className="mt-2 text-sm text-slate-600">
                      {p.location} · {p.type}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.highlights?.slice(0, 3).map((h) => (
                        <span
                          key={h}
                          className="rounded-full bg-slate-100 px-3 py-1 text-[12px] font-semibold text-slate-700"
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 h-px w-full bg-slate-200" />

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-widest text-[#062a47]">
                        Proyecto finalizado
                      </span>
                      <span className="text-xs text-slate-500 group-hover:text-slate-700 transition">
                        Ver detalles →
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

/* ---------- UI: Tab button con pill animada ---------- */
function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative isolate rounded-full px-4 py-2 text-[12px] sm:text-[13px] font-semibold transition"
    >
      {active && (
        <motion.span
          layoutId="projectsPill"
          className="absolute inset-0 -z-10 rounded-full bg-slate-900/6"
          transition={{ type: "spring", stiffness: 320, damping: 30 }}
        />
      )}
      <span
        className={
          active ? "text-slate-900" : "text-slate-600 hover:text-slate-900"
        }
      >
        {children}
      </span>
    </button>
  );
}
