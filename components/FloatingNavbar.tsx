"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NavItem, useNavPillTransform } from "./navbar/useNavPillTransform";

const NAV: NavItem[] = [
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
  { label: "Contacto", href: "/contacto", variant: "cta", match: (p) => p === "/contacto" },
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

  return (
    <div className="fixed top-6 inset-x-0 z-9999 flex justify-center px-4">
      <div
        className={cx(
          "rounded-full border transition-all duration-300 ease-out",
          "backdrop-blur-xl",
          scrolled
            ? cx(
                // SOLID
                "bg-slate-950/92 border-white/12",
                "shadow-[0_18px_60px_rgba(0,0,0,0.65)]",
                "px-3 py-2"
              )
            : cx(
                // GLASS (sobre el hero)
                "bg-slate-950/55 border-white/10",
                "shadow-[0_14px_45px_rgba(0,0,0,0.45)]",
                "px-4 py-3"
              )
        )}
      >
        <div className="flex items-center gap-3">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Ir al inicio"
            className={cx(
              "grid place-items-center text-white text-[10px] font-semibold tracking-wide transition",
              "border border-white/10 bg-white/10 hover:bg-white/15",
              scrolled ? "h-9 w-9 rounded-2xl" : "h-10 w-10 rounded-2xl"
            )}
          >
            360
          </Link>

          {/* Nav */}
          <div ref={navRef} className="relative inline-flex items-center gap-1 px-1">
            {/* Pill */}
            <span
              aria-hidden="true"
              className={cx(
                "absolute top-1 bottom-1 left-0 rounded-full border transition-all duration-300 ease-out",
                "bg-white/10 border-white/10",
                "shadow-[0_10px_25px_rgba(255,255,255,0.10)]"
              )}
              style={pillStyle}
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
                    }} className={cx(
                    "relative z-10 whitespace-nowrap rounded-full transition",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25",
                    scrolled ? "px-4 py-2 text-[13px]" : "px-4 py-2.5 text-[13px]",
                    active ? "text-white" : "text-white/70 hover:text-white",
                    isCta &&
                      cx(
                        "ml-1",
                        active ? "text-white" : "bg-white/5 border border-white/15 hover:bg-white/10"
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
