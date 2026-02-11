"use client";

import { useState, type ReactNode } from "react";

export default function NewsletterCTA({
  title = (
    <>
      Suscribite a nuestro <span className="text-brand-blue">newsletter</span>
    </>
  ),
  subtitle = "Novedades, avances de obra y lanzamientos. Sin spam.",
  buttonText = "SUSCRIBIRSE",
  onSubmit,
  withEmail = true,
}: {
  title?: ReactNode; // ✅ antes string
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
        {/* blueprint grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.16) 1px, transparent 1px)",
            backgroundSize: "96px 96px",
          }}
        />

        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10" />

        <div className="relative mx-auto max-w-7xl px-5 md:px-12 lg:px-20 py-12 md:py-14">
          {/* MOBILE FIRST STACK */}
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            {/* TEXT */}
            <div className="text-center md:text-left">
              <h3 className="font-ultra text-white text-2xl sm:text-3xl md:text-5xl leading-tight">
                {title}
              </h3>

              <p className="mt-3 text-white/70 text-sm md:text-base max-w-xl mx-auto md:mx-0">
                {subtitle}
              </p>
            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="
              w-full
              flex flex-col gap-4
              md:flex-row md:items-end md:gap-6 md:w-auto
            "
            >
              {withEmail && (
                <div className="flex flex-col w-full md:w-[380px]">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu email"
                    className="
                    w-full
                    bg-transparent text-white placeholder:text-white/40
                    border-b border-white/20
                    px-2 py-4
                    outline-none
                    focus:border-white/45
                    transition-colors
                  "
                  />

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
              )}

              {/* BUTTON */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="
                w-full md:w-auto
                h-[52px]
                group relative inline-flex items-center justify-center
                px-8
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
