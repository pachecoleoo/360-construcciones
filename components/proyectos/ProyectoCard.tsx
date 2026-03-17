import Image from "next/image";
import Link from "next/link";
import type { ProyectoUnified } from "./types";

function splitLeadingNumber(title: string) {
  const m = title.match(/^(\d+)\s+(.*)$/);
  if (!m) return { num: "", rest: title };
  return { num: m[1], rest: m[2] };
}

export default function ProyectoCard({ p }: { p: ProyectoUnified }) {
  const href = "slug" in p && p.slug ? `/proyectos/${p.slug}` : undefined;

  if (p.status === "ejecucion") {
    const Wrapper = href ? Link : "div";
    const wrapperProps = href
      ? {
          href,
          className:
            "group block rounded-3xl border border-slate-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition",
        }
      : {
          className:
            "group block rounded-3xl border border-slate-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition",
        };

    return (
      <Wrapper {...wrapperProps}>
        <article>
          <div className="relative h-48 bg-slate-200">
            <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
              <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(0,0,0,.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.18)_1px,transparent_1px)] [background-size:32px_32px]" />
            </div>

            <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold tracking-widest uppercase text-[#062a47] backdrop-blur">
              {p.badge ?? "En ejecución"}
            </div>
          </div>

          <div className="p-6">
            <h4 className="text-lg font-bold text-slate-900">{p.title}</h4>

            {p.description ? (
              <p className="mt-2 text-sm text-slate-600">{p.description}</p>
            ) : null}

            <div className="mt-5 h-px w-full bg-slate-200" />

            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#3b2358]">
                En ejecución
              </span>

              <span className="text-xs text-slate-500 transition group-hover:text-slate-700">
                {href ? "Ver detalles →" : "Próximamente"}
              </span>
            </div>
          </div>
        </article>
      </Wrapper>
    );
  }

  const Wrapper = href ? Link : "div";
  const wrapperProps = href
    ? {
        href,
        className:
          "group block border border-slate-300 bg-white overflow-hidden transition-all duration-500 shadow-[0_12px_28px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.22)] focus:outline-none focus:ring-2 focus:ring-[#062a47]/30",
      }
    : {
        className:
          "group block border border-slate-300 bg-white overflow-hidden transition-all duration-500 shadow-[0_12px_28px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.22)]",
      };

  return (
    <Wrapper {...wrapperProps}>
      <article className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]">
        {p.imageSrc ? (
          <Image
            src={p.imageSrc}
            alt={p.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 bg-slate-200" />
        )}

        <div className="absolute inset-0 bg-black/55 transition duration-500 group-hover:bg-black/15" />

        <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
          <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:32px_32px]" />
        </div>

        <div
          className="
            absolute inset-x-0 bottom-0 z-20
            px-6 pb-8
            opacity-100 translate-y-0
            transition-all duration-500
            group-hover:opacity-0 group-hover:translate-y-3
            pointer-events-none
          "
        >
          {(() => {
            const { num, rest } = splitLeadingNumber(p.title);

            return (
              <h2
                className="
                  text-white
                  text-4xl sm:text-5xl md:text-6xl
                  tracking-normal
                  leading-[0.95]
                  drop-shadow-[0_0_26px_rgba(6,42,71,0.95)]
                "
              >
                {num ? (
                  <>
                    <span className="font-ultra text-6xl tracking-[-0.01em]">
                      {num}
                    </span>{" "}
                    <span className="font-extra text-6xl">{rest}</span>
                  </>
                ) : (
                  <span className="font-extra font-black">{rest}</span>
                )}
              </h2>
            );
          })()}
        </div>

        {p.logoSrc ? (
          <div
            className="
              pointer-events-none
              absolute bottom-0 left-0 right-0 z-10
              p-2
              opacity-0 translate-y-4 scale-[0.98]
              transition-all duration-700
              ease-[cubic-bezier(0.22,1,0.36,1)] delay-100
              md:group-hover:opacity-100
              md:group-hover:translate-y-0
              md:group-hover:scale-100
            "
          >
            <div className="flex items-end justify-center h-full pb-4">
              <Image
                src={p.logoSrc}
                alt={`${p.title} logo`}
                width={70}
                height={40}
                className="object-contain opacity-95 drop-shadow-xl"
              />
            </div>
          </div>
        ) : null}
      </article>
    </Wrapper>
  );
}
