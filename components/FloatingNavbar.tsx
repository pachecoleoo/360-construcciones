"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { NavItem, useNavPillTransform } from "./navbar/useNavPillTransform";

const NAV: NavItem[] = [
  { label: "Inicio", href: "/", match: (p) => p === "/" },
  {
    label: "Proyectos",
    href: "/proyectos",
    match: (p) => p === "/proyectos",
  },
  {
    label: "Infraestructura",
    href: "/infraestructura",
    match: (p) => p === "/infraestructura",
  },
  {
    label: "Nosotros",
    href: "/nosotros",
    match: (p) => p === "/nosotros",
  },
  {
    label: "Contacto",
    href: "/contacto",
    variant: "cta",
    match: (p) => p === "/contacto",
  },
];

/*
  Reemplazá 5492990000000 por el número real.

  Formato para Argentina:
  54 + 9 + código de área + número

  Ejemplo Neuquén:
  5492991234567
*/
const WHATSAPP_URL =
  "https://wa.me/5492990000000?text=Hola%20360%20Construcciones,%20quisiera%20hacer%20una%20consulta.";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12.04 2a9.84 9.84 0 0 0-8.43 14.91L2 22l5.22-1.55A9.98 9.98 0 1 0 12.04 2Zm0 17.96a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.1.92.96-3.02-.2-.31a8.03 8.03 0 1 1 6.77 3.72Zm4.45-6.02c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.53.06-.24-.12-1.03-.38-1.96-1.21a7.25 7.25 0 0 1-1.36-1.69c-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.31-.75-1.8-.2-.47-.4-.41-.55-.42h-.46c-.16 0-.42.06-.65.3-.22.24-.85.83-.85 2.03s.87 2.36.99 2.52c.12.16 1.72 2.62 4.16 3.68.58.25 1.03.4 1.39.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
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

        if (delta > THRESHOLD && !mobileOpen) {
          setShow(false);
        }

        if (delta < -THRESHOLD) {
          setShow(true);
        }

        lastYRef.current = y;
        tickingRef.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileOpen]);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
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
          "fixed inset-x-0 top-4 z-[9999] flex justify-center px-4 md:top-6",
          "transition-all duration-300 ease-out",
          show || mobileOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0",
        )}
      >
        <div
          className={cx(
            "w-full max-w-none transition-all duration-300 ease-out md:w-auto md:max-w-fit",
            mobileOpen
              ? [
                  "rounded-[15px] border backdrop-blur-2xl",
                  "border-white/12",
                  "bg-[linear-gradient(180deg,rgba(10,15,25,0.82)_0%,rgba(10,15,25,0.72)_100%)]",
                  "shadow-[0_24px_80px_rgba(0,0,0,0.50),inset_0_1px_0_rgba(255,255,255,0.10)]",
                ].join(" ")
              : [
                  "border-transparent bg-transparent shadow-none",
                  "md:rounded-full md:border md:backdrop-blur-2xl",
                  scrolled
                    ? "md:border-white/12 md:bg-slate-950/92 md:shadow-[0_18px_60px_rgba(0,0,0,0.65)]"
                    : "md:border-white/10 md:bg-slate-950/55 md:shadow-[0_14px_45px_rgba(0,0,0,0.45)]",
                ].join(" "),
          )}
        >
          {/* MOBILE TOP BAR */}
          <div
            className={cx(
              "flex w-full items-start md:hidden",
              mobileOpen
                ? "justify-between px-4 py-3"
                : "justify-end px-2 py-2",
            )}
          >
            {/* LOGO: SOLO CUANDO EL MENÚ ESTÁ ABIERTO */}
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

            <div className="flex items-center gap-1">
              {/* WHATSAPP MOBILE */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp"
                title="Contactar por WhatsApp"
                className={cx(
                  "group flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                  "border border-white/10 bg-slate-950/55 text-white/85",
                  "backdrop-blur-xl",
                  "shadow-[0_8px_24px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.10)]",
                  "transition-all duration-300 ease-out",
                  "hover:border-[#69df9b]/30 hover:bg-[#25D366]/15 hover:text-[#65e695]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/35",
                  "active:scale-95",
                )}
              >
                <WhatsAppIcon className="h-[19px] w-[19px] transition-transform duration-300 group-hover:scale-110" />
              </a>

              {/* HAMBURGUESA */}
              <button
                type="button"
                aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((prev) => !prev)}
                className={cx(
                  "  drop-shadow-[0_2px_4px_rgba(0,0,0,0.99)]",
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
          </div>

          {/* MENÚ MOBILE PERSONALIZADO */}
          <div
            className={cx(
              "overflow-hidden md:hidden",
              "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
              mobileOpen ? "max-h-[82vh] opacity-100" : "max-h-0 opacity-0",
            )}
          >
            <div className="px-3 pb-3 pt-1">
              <div
                className={cx(
                  "relative overflow-hidden rounded-[26px] border border-white/10",
                  "bg-[linear-gradient(145deg,rgba(255,255,255,0.07)_0%,rgba(255,255,255,0.025)_45%,rgba(1,12,24,0.20)_100%)]",
                  "shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_24px_60px_rgba(0,0,0,0.20)]",
                  "backdrop-blur-2xl",
                )}
              >
                {/* DETALLES DECORATIVOS */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full border border-white/[0.05]"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-7 -top-7 h-28 w-28 rounded-full border border-white/[0.06]"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                  }}
                />

                {/* ENCABEZADO DEL MENÚ */}
                <div className="relative flex items-end justify-between px-5 pb-4 pt-5">
                  <div>
                    <span className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.3em] text-[#9db8ce]/65">
                      Navegación
                    </span>

                    <p className="max-w-[210px] text-[13px] leading-relaxed text-white/45">
                      Construimos espacios pensados para transformar la forma de
                      vivir.
                    </p>
                  </div>

                  <span className="pb-0.5 text-[10px] font-medium tracking-[0.2em] text-white/25">
                    360°
                  </span>
                </div>

                {/* LÍNEA SUPERIOR */}
                <div className="relative mx-5 h-px overflow-hidden bg-white/[0.08]">
                  <span
                    className={cx(
                      "absolute inset-y-0 left-0 bg-[#9db8ce]/70",
                      "transition-all delay-200 duration-700 ease-out",
                      mobileOpen ? "w-16" : "w-0",
                    )}
                  />
                </div>

                {/* ENLACES */}
                <nav className="relative px-3 py-3">
                  {NAV.map((item, idx) => {
                    const active = idx === activeIndex;
                    const isCta = item.variant === "cta";
                    const number = String(idx + 1).padStart(2, "0");

                    if (isCta) {
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          style={{
                            transitionDelay: mobileOpen
                              ? `${220 + idx * 55}ms`
                              : "0ms",
                          }}
                          className={cx(
                            "group relative mt-3 flex min-h-[68px] items-center justify-between overflow-hidden rounded-[20px] border px-4",
                            "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                            mobileOpen
                              ? "translate-y-0 opacity-100"
                              : "translate-y-4 opacity-0",
                            active
                              ? [
                                  "border-[#bdd5e8]/45",
                                  "bg-[linear-gradient(135deg,rgba(159,190,215,0.25)_0%,rgba(80,110,138,0.20)_100%)]",
                                ].join(" ")
                              : [
                                  "border-[#aec5d8]/20",
                                  "bg-[linear-gradient(135deg,rgba(133,161,184,0.16)_0%,rgba(63,83,103,0.12)_100%)]",
                                  "active:border-[#bdd5e8]/40 active:bg-white/10",
                                ].join(" "),
                            "shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_12px_28px_rgba(0,0,0,0.14)]",
                          )}
                        >
                          {/* BRILLO CTA */}
                          <span
                            aria-hidden="true"
                            className="absolute -right-6 -top-12 h-28 w-28 rounded-full bg-[#a7c5de]/10 blur-2xl"
                          />

                          <div className="relative flex items-center gap-4">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-[9px] font-semibold tracking-[0.12em] text-white/45">
                              {number}
                            </span>

                            <div>
                              <span className="block text-[16px] font-medium tracking-[0.01em] text-white">
                                {item.label}
                              </span>

                              <span className="mt-0.5 block text-[10px] tracking-[0.04em] text-white/40">
                                Hablemos de tu próximo proyecto
                              </span>
                            </div>
                          </div>

                          <span
                            className={cx(
                              "relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full",
                              "border border-white/12 bg-white/[0.06] text-white/75",
                              "transition-all duration-300",
                              "group-active:translate-x-1 group-active:bg-white/10",
                            )}
                          >
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-[15px] w-[15px]"
                              aria-hidden="true"
                            >
                              <path
                                d="M5 19L19 5M19 5H8M19 5V16"
                                stroke="currentColor"
                                strokeWidth="1.7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </Link>
                      );
                    }

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        style={{
                          transitionDelay: mobileOpen
                            ? `${140 + idx * 55}ms`
                            : "0ms",
                        }}
                        className={cx(
                          "group relative flex min-h-[62px] items-center justify-between rounded-[16px] px-3",
                          "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                          mobileOpen
                            ? "translate-y-0 opacity-100"
                            : "translate-y-4 opacity-0",
                          active ? "bg-white/[0.07]" : "active:bg-white/[0.04]",
                        )}
                      >
                        {/* LÍNEA ACTIVA */}
                        <span
                          aria-hidden="true"
                          className={cx(
                            "absolute bottom-3 left-0 top-3 w-[2px] rounded-full",
                            "transition-all duration-300",
                            active
                              ? "scale-y-100 bg-[#a9c4d9]"
                              : "scale-y-0 bg-transparent",
                          )}
                        />

                        <div className="flex items-center gap-4">
                          <span
                            className={cx(
                              "w-7 text-[9px] font-semibold tracking-[0.16em]",
                              "transition-colors duration-300",
                              active ? "text-[#b7cede]" : "text-white/25",
                            )}
                          >
                            {number}
                          </span>

                          <span
                            className={cx(
                              "text-[18px] font-medium tracking-[-0.015em]",
                              "transition-all duration-300",
                              active
                                ? "translate-x-1 text-white"
                                : "text-white/62 group-active:translate-x-1 group-active:text-white",
                            )}
                          >
                            {item.label}
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          {active && (
                            <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#aac4d8]/60">
                              Actual
                            </span>
                          )}

                          <span
                            className={cx(
                              "flex h-8 w-8 items-center justify-center rounded-full border",
                              "transition-all duration-300",
                              active
                                ? "translate-x-0 border-white/12 bg-white/[0.07] text-white/80"
                                : "-translate-x-1 border-transparent text-white/20 group-active:translate-x-0 group-active:text-white/70",
                            )}
                          >
                            →
                          </span>
                        </div>

                        {/* SEPARADOR */}
                        {idx < NAV.length - 2 && (
                          <span className="absolute bottom-0 left-10 right-3 h-px bg-white/[0.055]" />
                        )}
                      </Link>
                    );
                  })}
                </nav>

                {/* PIE DEL MENÚ */}
              </div>
            </div>
          </div>

          {/* DESKTOP */}
          <div className="hidden md:block">
            <div className={cx(scrolled ? "px-3 py-2" : "px-4 py-3")}>
              <div className="flex items-center gap-3">
                {/* LINKS DEL NAVBAR */}
                <div
                  ref={navRef}
                  className="relative inline-flex items-center gap-1 px-1"
                >
                  {/* PASTILLA DEL LINK ACTIVO */}
                  <span
                    aria-hidden="true"
                    className={cx(
                      "absolute inset-y-0 left-0 rounded-full border transition-all duration-300 ease-out",
                      "border-white/10 bg-white/10",
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
                        ref={(element) => {
                          itemRefs.current[idx] = element;
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

                {/* SOLAPA DE WHATSAPP DESKTOP */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contactar por WhatsApp"
                  title="Contactar por WhatsApp"
                  className={cx(
                    "group relative inline-flex shrink-0 items-center justify-center rounded-full border",
                    "border-white/12 bg-white/[0.07] text-white/80 backdrop-blur-xl",
                    "shadow-[0_10px_28px_rgba(5,18,33,0.30),inset_0_1px_0_rgba(255,255,255,0.12)]",
                    "transition-all duration-300 ease-out",
                    "hover:-translate-y-0.5",
                    "hover:border-[#7ee2a8]/35 hover:bg-[#25D366]/15 hover:text-[#65e695]",
                    "hover:shadow-[0_14px_35px_rgba(37,211,102,0.14),inset_0_1px_0_rgba(255,255,255,0.18)]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/35",
                    "active:scale-95",
                    scrolled ? "h-9 w-9" : "h-10 w-10",
                  )}
                >
                  <WhatsAppIcon className="h-[18px] w-[18px] transition-transform duration-300 group-hover:scale-110" />

                  <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/[0.03]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FONDO OSCURO AL ABRIR EL MENÚ MOBILE */}
      <div
        className={cx(
          "fixed inset-0 z-[9998] bg-[radial-gradient(circle_at_top,rgba(8,16,28,0.25),rgba(0,0,0,0.72))] md:hidden",
          "transition-all duration-400 ease-out",
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        onClick={() => setMobileOpen(false)}
      />
    </>
  );
}
