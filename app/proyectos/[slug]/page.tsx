import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/components/proyectos/data";

export default async function ProyectoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = PROJECTS.find(
    (p) => p.status === "desarrollado" && p.slug === slug,
  );

  if (!project) return notFound();

  const heroSrc = project.heroImageSrc || project.imageSrc || "";
  const contentItems = project.technicalItems ?? project.highlights ?? [];

  return (
    <main className="bg-white text-slate-900">
      {/* HERO FULL SCREEN */}
      <section className="relative h-screen min-h-[760px] overflow-hidden bg-[#062a47]">
        {heroSrc ? (
          <Image
            src={heroSrc}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-[#062a47]" />
        )}

        {/* overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/55" />

        <div className="relative z-10 flex h-full flex-col">
          {/* top bar */}

          {/* LOGO 360 — MARCA */}
          <div className="absolute -top-2 left-4 sm:top-6 sm:left-6 md:-top-4 md:left-27 z-20">
            <Image
              src="/brand/360blanco2.png" // 👈 logo de la empresa
              alt="360 Construcciones"
              width={140}
              height={50}
              className="
      object-contain
      w-[80px]
      sm:w-[80px]
      md:w-[100px]
      lg:w-[130px]
    "
              priority
            />
          </div>
          {/* center-bottom content */}
          <div className="mx-auto flex h-full w-full max-w-7xl items-end px-6 pb-14">
            <div className="grid w-full gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div className="max-w-4xl">
                <h1 className="mt-4 text-5xl font-black uppercase leading-[0.92] text-white sm:text-6xl md:text-7xl lg:text-[75px]">
                  {project.title}
                </h1>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
                  {project.location}
                </p>
              </div>
            </div>
          </div>

          {/* internal nav */}
          <div className="absolute bottom-0 left-0 right-0 hidden border-t border-white/10 bg-black/10 backdrop-blur md:block">
            <div className="mx-auto flex max-w-7xl items-center gap-8 px-6 py-4">
              <a
                href="#proyecto"
                className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
              >
                Proyecto
              </a>
              <a
                href="#visual"
                className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
              >
                Visual
              </a>
              <a
                href="#ficha"
                className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
              >
                Ficha
              </a>
              <a
                href="#destacados"
                className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
              >
                Destacados
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO / BRIEF */}
      <section
        id="proyecto"
        className="relative border-b border-slate-200 py-20 md:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#062a47]/60">
              {project.sectionEyebrow ?? "Descripción general"}
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#062a47] md:text-5xl">
              {project.sectionTitle ?? "Arquitectura, detalle y ejecución"}
            </h2>

            <div className="mt-5 h-[2px] w-20 bg-[#062a47]" />

            <div className="mt-8 space-y-5">
              {(project.paragraphs ?? []).map((paragraph, index) => (
                <p
                  key={index}
                  className="max-w-2xl text-[15px] leading-8 text-slate-600 md:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL BLOCK */}
      <section id="visual" className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#062a47]/60">
                Visual del proyecto
              </p>
              <h3 className="mt-3 text-2xl font-black uppercase text-[#062a47] md:text-4xl">
                Imagen y presencia del desarrollo
              </h3>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="overflow-hidden rounded-[34px] border border-slate-200 bg-slate-100 shadow-[0_22px_60px_rgba(2,12,27,0.08)]">
              <div className="relative aspect-[16/10] w-full">
                {project.imageSrc ? (
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-slate-200" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#062a47]/35 to-transparent" />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_18px_45px_rgba(2,12,27,0.05)]">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Lectura del conjunto
                </p>
                <p className="mt-4 text-[15px] leading-8 text-slate-600">
                  La página busca presentar el desarrollo como una ficha de
                  proyecto clara, visual y sobria, con una lógica cercana a un
                  brief arquitectónico.
                </p>
              </div>

              {project.logoSrc ? (
                <div className="rounded-[28px] border border-slate-200 bg-[#062a47] p-7 shadow-[0_18px_45px_rgba(2,12,27,0.10)]">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/55">
                    Identidad del proyecto
                  </p>

                  <div className="mt-6 flex min-h-[100px] items-center justify-center">
                    <Image
                      src={project.logoSrc}
                      alt={`${project.title} logo`}
                      width={210}
                      height={90}
                      className="h-auto w-auto max-h-[80px] object-contain"
                    />
                  </div>
                </div>
              ) : (
                <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Identidad
                  </p>
                  <p className="mt-4 text-[15px] leading-8 text-slate-600">
                    Desarrollo integrado a la línea visual y técnica de 360
                    Construcciones.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FICHA + DESTACADOS */}
      <section
        id="ficha"
        className="border-y border-slate-200 bg-slate-50 py-20 md:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[30px] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(2,12,27,0.05)]">
            <div className="border-b border-slate-200 px-7 py-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#062a47]/60">
                Ficha técnica
              </p>
              <h3 className="mt-2 text-2xl font-black uppercase text-[#062a47]">
                Datos del proyecto
              </h3>
            </div>

            <div className="space-y-5 px-7 py-7">
              <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  Proyecto
                </span>
                <span className="text-right text-sm font-semibold text-slate-800">
                  {project.title}
                </span>
              </div>

              <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  Ubicación
                </span>
                <span className="text-right text-sm text-slate-700">
                  {project.location ?? "-"}
                </span>
              </div>

              <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  Año
                </span>
                <span className="text-right text-sm text-slate-700">
                  {project.year ?? "-"}
                </span>
              </div>

              <div className="flex items-start justify-between gap-4">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  Tipo
                </span>
                <span className="text-right text-sm text-slate-700">
                  {project.type ?? "-"}
                </span>
              </div>
            </div>
          </div>

          <div
            id="destacados"
            className="rounded-[30px] border border-slate-200 bg-[#062a47] p-7 shadow-[0_20px_50px_rgba(2,12,27,0.10)]"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/55">
              {project.technicalTitle ?? "Aspectos destacados"}
            </p>

            <h3 className="mt-3 text-2xl font-black uppercase text-white md:text-3xl">
              Claves del desarrollo
            </h3>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {contentItems.map((item) => (
                <li
                  key={item}
                  className="rounded-[22px] border border-white/10 bg-white/8 p-5 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-[7px] h-2.5 w-2.5 rounded-full bg-white" />
                    <span className="text-sm leading-7 text-white/86">
                      {item}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 md:py-24">
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
                  contacto para recibir más información sobre nuestros
                  proyectos.
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
    </main>
  );
}
