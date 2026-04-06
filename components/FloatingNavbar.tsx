"use client";

import Image from "next/image";
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
  const [mobileOpen, setMobileOpen] = useState(false);

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

        if (y < 80) {
          setShow(true);
          lastYRef.current = y;
          tickingRef.current = false;
          return;
        }

        const THRESHOLD = 6;

        if (delta > THRESHOLD && !mobileOpen) setShow(false);
        if (delta < -THRESHOLD) setShow(true);

        lastYRef.current = y;
        tickingRef.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileOpen]);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const baseItem = cx(
    "relative z-10 inline-flex items-center justify-center whitespace-nowrap rounded-full transition",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25",
    scrolled ? "h-9 px-4 text-[13px]" : "h-10 px-4 text-[13px]",
    "border border-transparent font-medium",
  );

  return (
    <>
      <div
        className={cx(
          "fixed top-4 md:top-6 inset-x-0 z-[9999] flex justify-center px-4",
          "transition-all duration-300 ease-out",
          show || mobileOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none",
        )}
      >
        <div
          className={cx(
            "transition-all duration-300 ease-out",
            "w-full md:w-auto",
            "max-w-none md:max-w-fit",
            mobileOpen
              ? [
                  "backdrop-blur-2xl border rounded-[15px]",
                  "bg-[linear-gradient(180deg,rgba(10,15,25,0.82)_0%,rgba(10,15,25,0.72)_100%)]",
                  "border-white/12",
                  "shadow-[0_24px_80px_rgba(0,0,0,0.50),inset_0_1px_0_rgba(255,255,255,0.10)]",
                ].join(" ")
              : [
                  "bg-transparent border-transparent shadow-none",
                  "md:backdrop-blur-2xl md:border md:rounded-full",
                  scrolled
                    ? "md:bg-slate-950/92 md:border-white/12 md:shadow-[0_18px_60px_rgba(0,0,0,0.65)]"
                    : "md:bg-slate-950/55 md:border-white/10 md:shadow-[0_14px_45px_rgba(0,0,0,0.45)]",
                ].join(" "),
          )}
        >
          {/* MOBILE TOP BAR */}
          <div
            className={cx(
              "flex md:hidden items-start w-full",
              mobileOpen
                ? "justify-between px-4 py-3"
                : "justify-end px-2 py-2",
            )}
          >
            {/* LOGO SOLO CUANDO ESTÁ ABIERTO */}
            {mobileOpen && (
              <Link
                href="/"
                className="flex items-center"
                onClick={() => setMobileOpen(false)}
              >
                <Image
                  src="/brand/logoBlanco.png"
                  alt="360 Construcciones"
                  width={140}
                  height={26}
                  className="h-auto w-[140px] object-contain"
                  priority
                />
              </Link>
            )}

            {/* HAMBURGUESA */}
            <button
              type="button"
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
              className={cx(
                "relative flex h-10 w-10 items-center justify-center",
                "transition-all duration-300 ease-out",
                "active:scale-[0.95]",
              )}
            >
              <span className="relative block h-4 w-5">
                <span
                  className={cx(
                    "absolute left-0 top-0 block h-[1px] w-5 bg-white transition-all duration-300",
                    mobileOpen ? "top-[7px] rotate-45" : "",
                  )}
                />
                <span
                  className={cx(
                    "absolute left-0 top-[7px] block h-[1px] w-5 bg-white transition-all duration-300",
                    mobileOpen ? "opacity-0" : "opacity-100",
                  )}
                />
                <span
                  className={cx(
                    "absolute left-0 top-[14px] block h-[1px] w-5 bg-white transition-all duration-300",
                    mobileOpen ? "top-[7px] -rotate-45" : "",
                  )}
                />
              </span>
            </button>
          </div>

          {/* GLASS SHEET MOBILE */}
          <div
            className={cx(
              "md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
              mobileOpen ? "max-h-[75vh] opacity-100" : "max-h-0 opacity-0",
            )}
          >
            <div className="px-4 pb-4 pt-1">
              <div className="mb-3 h-px w-full bg-white/10" />

              <div
                className={cx(
                  "rounded-[24px] border border-white/10",
                  "bg-white/[0.04] backdrop-blur-xl",
                  "shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]",
                  "p-2",
                )}
              >
                <div className="flex flex-col">
                  {NAV.map((item, idx) => {
                    const active = idx === activeIndex;
                    const isCta = item.variant === "cta";

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={cx(
                          "group relative flex min-h-[58px] items-center justify-between rounded-[18px] px-4",
                          "transition-all duration-300 ease-out",
                          isCta
                            ? [
                                "mt-2 border",
                                active
                                  ? "border-[#b9d2e6]/45 text-white bg-[linear-gradient(180deg,rgba(167,197,222,0.22)_0%,rgba(103,132,160,0.18)_100%)]"
                                  : "border-[#b5cade]/28 text-white/95 bg-[linear-gradient(180deg,rgba(120,145,170,0.14)_0%,rgba(70,90,112,0.10)_100%)] hover:border-[#c7dbeb]/40 hover:bg-[linear-gradient(180deg,rgba(140,170,194,0.18)_0%,rgba(80,102,125,0.14)_100%)]",
                              ].join(" ")
                            : active
                              ? "bg-white/10 text-white"
                              : "text-white/72 hover:bg-white/[0.06] hover:text-white",
                        )}
                      >
                        <span
                          className={cx(
                            "text-[15px] font-medium tracking-[0.01em]",
                            active && !isCta ? "text-white" : "",
                          )}
                        >
                          {item.label}
                        </span>

                        <span
                          className={cx(
                            "text-sm transition-all duration-300",
                            active
                              ? "translate-x-0 text-white/90"
                              : "translate-x-0 text-white/28 group-hover:translate-x-1 group-hover:text-white/70",
                          )}
                        >
                          →
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* DESKTOP */}
          <div className="hidden md:block">
            <div className={cx(scrolled ? "px-3 py-2" : "px-4 py-3")}>
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
                        activeIndex === -1 ||
                        NAV[activeIndex]?.variant === "cta"
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
                              "ml-2 border backdrop-blur-xl",
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
                              "active:scale-[0.985] transition-all duration-300 ease-out",
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
        </div>
      </div>

      <div
        className={cx(
          "fixed inset-0 z-[9998] bg-[radial-gradient(circle_at_top,rgba(8,16,28,0.25),rgba(0,0,0,0.72))] md:hidden",
          "transition-all duration-400 ease-out",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
        onClick={() => setMobileOpen(false)}
      />
    </>
  );
}
