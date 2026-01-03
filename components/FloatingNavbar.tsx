"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NavItem, useNavPillTransform } from "./navbar/useNavPillTransform";

const NAV: NavItem[] = [
  { label: "Home", href: "/", match: (p) => p === "/" },
  { label: "Nosotros", href: "/nosotros", match: (p) => p === "/nosotros" },
  {
    label: "Proyectos desarrollados",
    href: "/proyectos?estado=desarrollados",
    match: (p, e) => p === "/proyectos" && e === "desarrollados",
  },
  {
    label: "Proyectos en desarrollo",
    href: "/proyectos?estado=en-desarrollo",
    match: (p, e) => p === "/proyectos" && e === "en-desarrollo",
  },
  {
    label: "Contacto",
    href: "/contacto",
    variant: "cta",
    match: (p) => p === "/contacto",
  },
];

function cx(...c: Array<string | false | null | undefined>) {
  return c.filter(Boolean).join(" ");
}

export default function FloatingNavbar() {
  const { activeIndex, navRef, itemRefs, pillStyle } = useNavPillTransform(NAV);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const baseItem = cx(
    "relative z-10 inline-flex items-center justify-center whitespace-nowrap rounded-full transition",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25",
    scrolled ? "h-9 px-4 text-[13px]" : "h-10 px-4 text-[13px]",
    "border border-transparent"
  );

  return (
    <div className="fixed top-6 inset-x-0 z-9999 flex justify-center px-4">
      <div
        className={cx(
          "rounded-full border transition-all duration-300 ease-out",
          "backdrop-blur-xl",
          scrolled
            ? cx(
                "bg-slate-950/92 border-white/12",
                "shadow-[0_18px_60px_rgba(0,0,0,0.65)]",
                "px-3 py-2"
              )
            : cx(
                "bg-slate-950/55 border-white/10",
                "shadow-[0_14px_45px_rgba(0,0,0,0.45)]",
                "px-4 py-3"
              )
        )}
      >
        <div className="flex items-center gap-3">
          {/* HOME (no usa active/isCta) */}
          {/* <Link
            href="/"
            aria-label="Ir al inicio"
            className={cx(baseItem, "text-white/70 hover:text-white")}
          >
            Home
          </Link> */}

          {/* Nav */}
          <div
            ref={navRef}
            className="relative inline-flex items-center gap-1 px-1"
          >
            {/* Pill (solo aparece si hay item activo) */}
            <span
              aria-hidden="true"
              className={cx(
                "absolute inset-y-0 left-0 rounded-full border transition-all duration-300 ease-out",
                "bg-white/10 border-white/10",
                "shadow-[0_10px_25px_rgba(255,255,255,0.10)]"
              )}
              style={{
                ...pillStyle,
                opacity: activeIndex === -1 ? 0 : 1, // ✅ en HOME no se marca nada
              }}
            />

            {NAV.map((item, idx) => {
              const active = idx === activeIndex;
              const isCta = item.variant === "cta";

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  ref={(el) => {
                    itemRefs.current[idx] = el;
                  }}
                  className={cx(
                    baseItem,
                    active ? "text-white" : "text-white/70 hover:text-white",
                    // ✅ Contacto con “ondita” siempre (CTA)
                    isCta &&
                      cx(
                        "ml-1 border border-white/15 bg-white/5",
                        "hover:bg-white/10 hover:border-white/25",
                        "hover:shadow-[0_12px_35px_rgba(255,255,255,0.18)]",
                        "active:scale-[0.98] active:bg-white/15",
                        "transition-all duration-200 ease-out"
                      )
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
