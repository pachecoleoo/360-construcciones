import Image from "next/image";
import Link from "next/link";

type Props = {
  kicker: string;
  title: string;
  text: string;
  bullets?: string[];
  imageSrc?: string;
  reverse?: boolean;
  cta?: { href: string; label: string };
  variant?: "dark" | "light";
};

export default function NosotrosBand({
  kicker,
  title,
  text,
  bullets = [],
  imageSrc,
  reverse = false,
  cta,
  variant = "dark",
}: Props) {
  const isDark = variant === "dark";

  return (
    <section
      className={isDark ? "bg-[#062a47] text-white" : "bg-white text-slate-900"}
    >
      <div className="relative overflow-hidden">
        {/* blueprint grid / lines sutiles */}
        {isDark && (
          <>
            <div className="pointer-events-none absolute inset-0 opacity-[0.10]">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] bg-[size:72px_72px]" />
            </div>
            <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-white/15" />
            <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-px bg-white/15" />
          </>
        )}

        <div
          className={[
            "mx-auto max-w-7xl px-6 py-16 md:py-20",
            "grid gap-12 items-center",
            "lg:grid-cols-2",
            reverse ? "lg:[&>*:first-child]:order-2" : "",
          ].join(" ")}
        >
          {/* TEXTO */}
          <div>
            <p
              className={
                isDark
                  ? "text-xs font-semibold tracking-[0.32em] uppercase text-white/70"
                  : "text-xs font-semibold tracking-[0.32em] uppercase text-slate-500"
              }
            >
              {kicker}
            </p>

            <h2
              className={[
                "mt-4 leading-[0.95] uppercase",
                'font-["Helvetica LT Std Ultra"]',
                "text-4xl md:text-6xl lg:text-7xl",
                isDark ? "text-white" : "text-slate-900",
              ].join(" ")}
            >
              {title}
            </h2>

            <p
              className={
                isDark
                  ? "mt-5 text-white/80 leading-relaxed max-w-2xl"
                  : "mt-5 text-slate-600 leading-relaxed max-w-2xl"
              }
            >
              {text}
            </p>

            {bullets.length > 0 && (
              <div className="mt-8 grid gap-3">
                {bullets.map((b) => (
                  <div key={b} className="flex gap-3">
                    <span
                      className={
                        isDark
                          ? "mt-2 h-2 w-2 rounded-full bg-white/80"
                          : "mt-2 h-2 w-2 rounded-full bg-[#062a47]"
                      }
                    />
                    <p className={isDark ? "text-white/85" : "text-slate-700"}>
                      {b}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {cta && (
              <div className="mt-10">
                <Link
                  href={cta.href}
                  className={[
                    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition",
                    isDark
                      ? "bg-white text-[#062a47] hover:bg-white/90"
                      : "bg-[#062a47] text-white hover:bg-[#05233b]",
                  ].join(" ")}
                >
                  {cta.label}
                </Link>
              </div>
            )}
          </div>

          {/* VISUAL */}
          <div className="relative">
            {imageSrc ? (
              <div
                className={[
                  "relative overflow-hidden rounded-[28px]",
                  isDark
                    ? "border border-white/15 bg-white/5"
                    : "border border-slate-200 bg-slate-50",
                ].join(" ")}
              >
                <div className="relative h-[320px] md:h-[420px] w-full">
                  <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover"
                    priority={false}
                  />
                </div>

                {/* overlay tipo hero */}
                <div
                  className={
                    isDark
                      ? "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"
                      : "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"
                  }
                />
              </div>
            ) : (
              <div
                className={[
                  "rounded-[28px] p-10",
                  isDark
                    ? "border border-white/15 bg-white/5"
                    : "border border-slate-200 bg-slate-50",
                ].join(" ")}
              >
                <p className={isDark ? "text-white/70" : "text-slate-600"}>
                  Acá podés poner una imagen cuando la tengas
                  (public/images/...).
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
