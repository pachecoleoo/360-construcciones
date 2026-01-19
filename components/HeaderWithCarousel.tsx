"use client";

import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type NavItem = {
  label: string;
  href: string;
  estado?: string;
  slide: number;
  image: string;
  variant?: "link" | "cta";
};

const NAV: NavItem[] = [
  {
    label: "Nosotros",
    href: "/nosotros",
    slide: 0,
    image: "/slides/nosotros.jpg",
  },
  {
    label: "Proyectos desarrollados",
    href: "/proyectos?estado=desarrollados",
    estado: "desarrollados",
    slide: 1,
    image: "/slides/desarrollados.jpg",
  },
  {
    label: "Proyectos en desarrollo",
    href: "/proyectos?estado=en-desarrollo",
    estado: "en-desarrollo",
    slide: 2,
    image: "/slides/en-desarrollo.jpg",
  },
  {
    label: "Contacto",
    href: "/contacto",
    slide: 3,
    image: "/slides/contacto.jpg",
    variant: "cta",
  },
];

function cx(...c: Array<string | false | null | undefined>) {
  return c.filter(Boolean).join(" ");
}

export default function HeaderWithCarousel() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const estado = searchParams.get("estado");

  /** 🧠 índice activo basado en URL */
  const activeIndex = useMemo(() => {
    const idx = NAV.findIndex(
      (i) =>
        i.href.split("?")[0] === pathname &&
        (!i.estado || i.estado === estado)
    );
    return idx >= 0 ? idx : 0;
  }, [pathname, estado]);

  const [current, setCurrent] = useState(activeIndex);

  /** 🔄 URL → Carrusel */
  useEffect(() => {
    setCurrent(activeIndex);
  }, [activeIndex]);

  /** 🎯 Click en nav → URL + slide */
  const goTo = (item: NavItem) => {
    setCurrent(item.slide);
    router.push(item.href);
  };

  return (
    <header className="relative h-[80vh] overflow-hidden">
      {/* 🖼️ CARROUSEL */}
      <div className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {NAV.map((item) => (
          <div
            key={item.slide}
            className="min-w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="h-full w-full bg-black/40" />
          </div>
        ))}
      </div>

      {/* 🧭 NAVBAR */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 py-6">
        <div className="flex items-center gap-6">
          {/* LOGO */}
          <Link
            href="/"
            className="h-14 w-14 bg-black/80 text-white flex items-center justify-center"
          >
            LOGO
          </Link>

          {/* NAV */}
          <div className="flex-1 flex justify-center">
            <div className="bg-white/95 backdrop-blur rounded-full px-2 py-2 shadow">
              <div className="flex gap-1">
                {NAV.map((item, idx) => {
                  const active = idx === current;
                  return (
                    <button
                      key={item.href}
                      onClick={() => goTo(item)}
                      className={cx(
                        "px-4 py-2 rounded-full text-sm transition",
                        active
                          ? "bg-slate-900 text-white"
                          : "text-slate-800 hover:bg-slate-100",
                        item.variant === "cta" &&
                          !active &&
                          "border border-slate-300 font-semibold"
                      )}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
