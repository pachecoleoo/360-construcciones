"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    let frameId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };
    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    // Preserve deliberate links to a section (e.g. /proyectos/salta-256#galeria).
    if (window.location.hash) return;

    // Next.js can retain the old scroll offset during animated route transitions.
    // Reset Lenis itself, rather than relying only on window.scrollTo.
    const frameId = requestAnimationFrame(() => {
      lenisRef.current?.scrollTo(0, { immediate: true, force: true });
    });

    return () => cancelAnimationFrame(frameId);
  }, [pathname]);

  return <>{children}</>;
}
