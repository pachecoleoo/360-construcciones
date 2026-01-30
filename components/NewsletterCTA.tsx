"use client";

import { useState } from "react";

export default function NewsletterCTA({
  title = "Suscribite a nuestro newsletter",
  subtitle = "Novedades, avances de obra y lanzamientos. Sin spam.",
  buttonText = "SUSCRIBIRSE",
  onSubmit,
  withEmail = true, // ponelo false si querés solo botón
}: {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onSubmit?: (email?: string) => Promise<void> | void;
  withEmail?: boolean;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (withEmail && !email.trim()) return;

    setStatus("loading");
    try {
      await onSubmit?.(withEmail ? email.trim() : undefined);
      setStatus("ok");
      setEmail("");
      setTimeout(() => setStatus("idle"), 1800);
    } catch {
      setStatus("idle");
    }
  };

  return (
    <div className="bg-black">
      <div className="relative">
        {/* blueprint ultra sutil (no “card”) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.16) 1px, transparent 1px)",
            backgroundSize: "96px 96px",
          }}
        />
        {/* borde superior/inferior fino (banner) */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-20 py-10 md:py-12">
          <div className="flex flex-col gap-6 md:gap-8 md:flex-row md:items-center md:justify-between">
            {/* TEXTO */}
            <div className="min-w-0">
              <h3 className="font-heading font-black uppercase text-white text-2xl md:text-3xl leading-tight">
                {title}
              </h3>
              <p className="mt-2 font-body text-white/70 text-sm md:text-base max-w-2xl">
                {subtitle}
              </p>
            </div>

            {/* ACCIÓN */}
            <form
              onSubmit={handleSubmit}
              className="flex w-full md:w-auto items-start gap-6"
            >
              {/* BLOQUE INPUT + MENSAJE */}
              <div className="flex flex-col flex-1 min-w-[320px] md:min-w-[420px]">
                {withEmail && (
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu email"
                    className="
          bg-transparent text-white placeholder:text-white/40
          border-b border-white/20
          px-2 py-3
          outline-none
          focus:border-white/45
          transition-colors
        "
                  />
                )}

                {/* 👇 AHORA QUEDA DEBAJO DE LA LÍNEA */}
                <p
                  className={`
        mt-2 text-xs text-white/60 tracking-wide
        transition-all duration-500
        ${
          status === "ok"
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-1"
        }
      `}
                >
                  Gracias por suscribirte a 360 Construcciones.
                </p>
              </div>

              {/* BOTÓN (queda separado a la derecha) */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="group relative inline-flex items-center justify-center
      px-8 py-3
      text-sm font-heading font-black uppercase tracking-[0.18em]
      border border-white text-white overflow-hidden
      shadow-[0_10px_0_rgba(0,0,0,0.55)]
      transition-all duration-150
      hover:-translate-y-[1px]
      active:translate-y-[4px]
      active:shadow-[0_4px_0_rgba(0,0,0,0.55)]
      disabled:opacity-50
    "
              >
                <span
                  aria-hidden
                  className="absolute inset-0 bg-white translate-x-[-100%]
      transition-transform duration-700 ease-out
      group-hover:translate-x-0"
                />
                <span className="relative z-10 group-hover:text-black">
                  {status === "loading" ? "ENVIANDO..." : buttonText}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
