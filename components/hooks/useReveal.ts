"use client";

import { useEffect, useRef, useState } from "react";

export function useReveal({
  threshold = 0.2,
  duration = 1000,
  once = true,
} = {}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        if (once) io.unobserve(entry.target);
      },
      { threshold },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold, once]);

  return {
    ref,
    visible,
    fadeClass: visible ? "opacity-100" : "opacity-0",
    fadeStyle: { transitionDuration: `${duration}ms` } as React.CSSProperties,
  };
}
