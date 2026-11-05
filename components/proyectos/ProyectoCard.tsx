"use client";

import Image from "next/image";
import Link from "next/link";
import type { ProyectoUnified } from "./types";
import { useLanguage } from "@/context/LanguageContext";

function splitProjectTitle(title: string) {
  const match = title.trim().match(/^(.*?)\s*(\d+)$/);
  if (!match) return { street: title.trim(), number: "" };
  return { street: match[1].trim(), number: match[2] };
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

function CardContent({ p }: { p: ProyectoUnified }) {
  const statusLabel = getStatusLabel(p.status);
  const { t } = useLanguage();

  return (
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

      <div className="absolute left-4 top-4 z-20 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#062a47] backdrop-blur">
        {t(statusLabel)}
      </div>

      <div
        className="
          absolute inset-x-0 bottom-0 z-20
          px-4 pb-8 sm:px-6
          opacity-100 translate-y-0
          transition-all duration-500
          group-hover:opacity-0 group-hover:translate-y-3
          pointer-events-none
        "
      >
        {(() => {
          const { street, number } = splitProjectTitle(p.title);

          return (
            <h2
              style={{ lineHeight: 1.16, paddingBlock: "0.16em" }}
              className="
                ios-safe-title relative overflow-visible
                flex max-w-full flex-wrap items-baseline
                text-white
                text-[clamp(26px,7.3vw,34px)] sm:text-5xl md:text-6xl
                tracking-normal
              "
            >
              <span className="min-w-0 font-heading font-black tracking-[-0.045em]">{street}</span>
              {number && <span className="shrink-0 font-body font-normal tracking-[-0.065em]">{number}</span>}
            </h2>
          );
        })()}
      </div>

      <div
        className="
          pointer-events-none
          absolute bottom-0 left-0 right-0 z-10
          p-4
          opacity-0 translate-y-4 scale-[0.98]
          transition-all duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)] delay-100
          md:group-hover:opacity-100
          md:group-hover:translate-y-0
          md:group-hover:scale-100
        "
      >
        <div className="flex h-full flex-col items-center justify-end gap-3 pb-4 text-center">
          {p.logoSrc ? (
            <Image
              src={p.logoSrc}
              alt={`${p.title} logo`}
              width={80}
              height={46}
              className="object-contain opacity-95 drop-shadow-xl"
            />
          ) : null}

          <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
            {p.location ?? t(statusLabel)}
          </div>

          {p.slug ? (
            <span className="text-xs uppercase tracking-[0.18em] text-white/85">
              {t("Ver proyecto")}
            </span>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function ProyectoCard({ p }: { p: ProyectoUnified }) {
  const href = p.slug ? `/proyectos/${p.slug}` : null;

  const className =
    "group block overflow-hidden border border-slate-300 bg-white transition-all duration-500 shadow-[0_12px_28px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.22)] focus:outline-none focus:ring-2 focus:ring-[#062a47]/30";

  if (href) {
    return (
      <Link href={href} className={className}>
        <CardContent p={p} />
      </Link>
    );
  }

  return (
    <div className={className}>
      <CardContent p={p} />
    </div>
  );
}
