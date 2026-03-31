"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { NavItem, useNavPillTransform } from "./navbar/useNavPillTransform";

const NAV: NavItem[] = [
  { label: "Inicio", href: "/", match: (p) => p === "/" },
  { label: "Proyectos", href: "/proyectos", match: (p) => p === "/proyectos" },
  {
    label: "Infraestructura",
    href: "/infraestructura",
    match: (p) => p === "/infraestructura",
  },
  { label: "Nosotros", href: "/nosotros", match: (p) => p === "/nosotros" },
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
  const [show, setShow] = useState(true);

  // refs para no re-renderizar por cada pixel
  const lastYRef = useRef(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    lastYRef.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;

      if (tickingRef.current) return;
      tickingRef.current = true;

      requestAnimationFrame(() => {
        const lastY = lastYRef.current;

        setScrolled(y > 16);

        const delta = y - lastY;

        // Zona superior: normalmente visible
        if (y < 80) {
          setShow(true);

          // Si querés que en el top NO se vea, usá esto en vez de lo de arriba:
          // setShow(false);

          lastYRef.current = y;
          tickingRef.current = false;
          return;
        }

        // Pequeño umbral para evitar flicker
        const THRESHOLD = 6;

        // Bajando => ocultar
        if (delta > THRESHOLD) setShow(false);

        // Subiendo => mostrar
        if (delta < -THRESHOLD) setShow(true);

        lastYRef.current = y;
        tickingRef.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const baseItem = cx(
    "relative z-10 inline-flex items-center justify-center whitespace-nowrap rounded-full transition",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25",
    scrolled ? "h-9 px-4 text-[13px]" : "h-10 px-4 text-[13px]",
    "border border-transparent font-medium",
  );

  return (
    <div
      className={cx(
        "fixed top-6 inset-x-0 z-9999 flex justify-center px-4",
        "transition-all duration-300 ease-out",
        show
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-4 pointer-events-none",
      )}
    >
      <div
        className={cx(
          "rounded-full border transition-all duration-300 ease-out",
          "backdrop-blur-xxl",
          scrolled
            ? cx(
                "bg-slate-950/92 border-white/12",
                "shadow-[0_18px_60px_rgba(0,0,0,0.65)]",
                "px-3 py-2",
              )
            : cx(
                "bg-slate-950/55 border-white/10",
                "shadow-[0_14px_45px_rgba(0,0,0,0.45)]",
                "px-4 py-3",
              ),
        )}
      >
        <div className="flex items-center gap-3">
          <div
            ref={navRef}
            className="relative inline-flex items-center gap-1 px-1"
          >
            <span
              aria-hidden="true"
              className={cx(
                "absolute inset-y-0 left-0 rounded-full border transition-all duration-300 ease-out",
                "bg-white/10 border-white/10",
                "shadow-[0_10px_25px_rgba(255,255,255,0.10)]",
              )}
              style={{
                ...pillStyle,
                opacity:
                  activeIndex === -1 || NAV[activeIndex]?.variant === "cta"
                    ? 0
                    : 1,
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
                    !isCta &&
                      (active
                        ? "text-white"
                        : "text-white/70 hover:text-white"),
                    isCta &&
                      cx(
                        "ml-2",
                        "border",
                        "backdrop-blur-xl",
                        active
                          ? [
                              "text-white",
                              "border-[#b9d2e6]/45",
                              "bg-[linear-gradient(180deg,rgba(167,197,222,0.22)_0%,rgba(103,132,160,0.18)_100%)]",
                              "shadow-[0_14px_40px_rgba(5,18,33,0.45),0_0_0_1px_rgba(185,210,230,0.10),inset_0_1px_0_rgba(255,255,255,0.22)]",
                              "hover:border-[#c9deee]/55",
                              "hover:bg-[linear-gradient(180deg,rgba(177,205,228,0.26)_0%,rgba(108,139,170,0.22)_100%)]",
                            ].join(" ")
                          : [
                              "text-white/92",
                              "border-[#b5cade]/28",
                              "bg-[linear-gradient(180deg,rgba(120,145,170,0.14)_0%,rgba(70,90,112,0.10)_100%)]",
                              "shadow-[0_10px_28px_rgba(5,18,33,0.30),inset_0_1px_0_rgba(255,255,255,0.14)]",
                              "hover:text-white",
                              "hover:border-[#c7dbeb]/38",
                              "hover:bg-[linear-gradient(180deg,rgba(140,170,194,0.18)_0%,rgba(80,102,125,0.14)_100%)]",
                              "hover:shadow-[0_14px_34px_rgba(5,18,33,0.36),inset_0_1px_0_rgba(255,255,255,0.18)]",
                            ].join(" "),
                        "active:scale-[0.985]",
                        "transition-all duration-300 ease-out",
                      ),
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
