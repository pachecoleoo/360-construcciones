"use client";

import Image from "next/image";
import Link from "next/link";
import type { ProyectoUnified } from "./types";

function splitLeadingNumber(title: string) {
  const m = title.match(/^(\d+)\s+(.*)$/);
  if (!m) return { num: "", rest: title };
  return { num: m[1], rest: title.replace(/^(\d+)\s+/, "") };
}

function getStatusLabel(status: ProyectoUnified["status"]) {
  switch (status) {
    case "ejecucion":
      return "En ejecución";
    case "futuro":
      return "Próximamente";
    case "desarrollado":
    default:
      return "Desarrollado";
  }
}

type Props = {
  p: ProyectoUnified;
  isActive: boolean;
  onHover: () => void;
};

function CardInner({ p, isActive }: { p: ProyectoUnified; isActive: boolean }) {
  const statusLabel = getStatusLabel(p.status);
  const { num, rest } = splitLeadingNumber(p.title);

  return (
    <article className="relative h-full w-full overflow-hidden">
      {p.imageSrc ? (
        <Image
          src={p.imageSrc}
          alt={p.title}
          fill
          className={`object-cover transition-all duration-700 ease-out ${
            isActive ? "scale-100" : "scale-[1.08]"
          }`}
          sizes="100vw"
        />
      ) : (
        <div className="absolute inset-0 bg-slate-200" />
      )}

      <div
        className={`absolute inset-0 transition-all duration-500 ${
          isActive ? "bg-black/20" : "bg-black/55"
        }`}
      />

      <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      {/* <div className="absolute left-4 top-4 z-20 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#062a47] backdrop-blur">
        {statusLabel}
      </div> */}

      {p.logoSrc && isActive ? (
        <div className="absolute right-5 top-5 z-20">
          <Image
            src={p.logoSrc}
            alt={`${p.title} logo`}
            width={92}
            height={52}
            className="object-contain opacity-95"
          />
        </div>
      ) : null}

      <div className="absolute inset-x-0 bottom-0 z-20">
        <div
          className={`px-5 pb-6 transition-all duration-500 ${
            isActive ? "translate-y-0 opacity-100" : "translate-y-0 opacity-100"
          }`}
        >
          {isActive ? (
            <div className="max-w-md">
              {/* <div className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                {p.location ?? statusLabel}
              </div> */}

              <h2 className="text-white leading-[0.92] drop-shadow-[0_0_24px_rgba(6,42,71,0.95)]">
                {num ? (
                  <>
                    <span className="block font-ultra text-6xl md:text-7xl">
                      {num}
                    </span>
                    <span className="block font-extra text-4xl md:text-5xl uppercase">
                      {rest}
                    </span>
                  </>
                ) : (
                  <span className="block font-extra text-4xl md:text-5xl uppercase">
                    {rest}
                  </span>
                )}
              </h2>

              <div className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/90">
                <span>Ver proyecto</span>
                <span aria-hidden>→</span>
              </div>
            </div>
          ) : (
            <div className="flex h-[340px] items-end justify-center pb-2">
              <div className="[writing-mode:vertical-rl] rotate-180 text-center">
                <h2 className="text-white leading-none drop-shadow-[0_0_20px_rgba(6,42,71,0.95)]">
                  {num ? (
                    <>
                      <span className="font-ultra text-4xl">{num}</span>
                      <span className="mt-2 block font-extra text-2xl uppercase">
                        {rest}
                      </span>
                    </>
                  ) : (
                    <span className="font-extra text-2xl uppercase">
                      {rest}
                    </span>
                  )}
                </h2>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function ProyectoAccordionCard({ p, isActive, onHover }: Props) {
  const href = p.slug ? `/proyectos/${p.slug}` : null;

  const classes = `
    group relative h-full min-w-0 border-r border-white/10
    duration-2500 ease-[cubic-bezier(0.0,2.0,3.25,1)]
    ${isActive ? "flex-[2]" : "flex-[1.05]"}
  `;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        onMouseEnter={onHover}
        aria-label={`Ver proyecto ${p.title}`}
      >
        <CardInner p={p} isActive={isActive} />
      </Link>
    );
  }

  return (
    <div className={classes} onMouseEnter={onHover}>
      <CardInner p={p} isActive={isActive} />
    </div>
  );
}
