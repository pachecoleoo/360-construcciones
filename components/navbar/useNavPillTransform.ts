"use client";

import { useLayoutEffect, useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export type NavItem = {
  label: string;
  href: string;
  match?: (pathname: string, estado: string | null) => boolean;
  variant?: "link" | "cta";
};

export function useNavPillTransform(items: NavItem[]) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const estado = searchParams.get("estado");

  const activeIndex = useMemo(() => {
    // ✅ En Home, marcá el primer item del NAV (Nosotros)
    if (pathname === "/") return 0;

    const idx = items.findIndex((item) => {
      if (item.match) return item.match(pathname, estado);

      const base = item.href.split("?")[0];
      if (base !== pathname) return false;

      const qs = item.href.split("?")[1] ?? "";
      const hrefEstado = new URLSearchParams(qs).get("estado");
      if (hrefEstado) return hrefEstado === estado;

      return true;
    });

    // ✅ Si no matchea nada, no marques ninguno
    return idx >= 0 ? idx : -1;
  }, [items, pathname, estado]);

  const navRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  const [pill, setPill] = useState({ x: 0, w: 0, opacity: 0 });

  const measure = () => {
    // ✅ Si no hay activo, ocultar pill y listo
    if (activeIndex < 0) {
      setPill((p) => (p.opacity === 0 ? p : { ...p, opacity: 0 }));
      return;
    }

    const nav = navRef.current;
    const active = itemRefs.current[activeIndex];
    if (!nav || !active) return;

    const navRect = nav.getBoundingClientRect();
    const aRect = active.getBoundingClientRect();

    setPill({
      x: aRect.left - navRect.left,
      w: aRect.width,
      opacity: 1,
    });
  };

  useLayoutEffect(() => {
    measure();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  useEffect(() => {
    const rafMeasure = () => requestAnimationFrame(measure);
    window.addEventListener("resize", rafMeasure);

    const ro = new ResizeObserver(rafMeasure);
    if (navRef.current) ro.observe(navRef.current);
    itemRefs.current.forEach((el) => el && ro.observe(el));

    const t = setTimeout(measure, 0);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", rafMeasure);
      ro.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  return {
    activeIndex,
    navRef,
    itemRefs,
    pillStyle: {
      width: pill.w,
      opacity: pill.opacity,
      transform: `translateX(${pill.x}px)`,
    } as const,
  };
}
