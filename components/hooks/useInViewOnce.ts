"use client";

import { useEffect, useRef, useState } from "react";

type Options = IntersectionObserverInit & { once?: boolean };

export function useInViewOnce(options: Options = {}) {
  const {
    threshold = 0.2,
    root = null,
    rootMargin = "0px",
    once = true,
  } = options;

  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          setIsVisible(true);
          if (once) io.unobserve(e.target);
        });
      },
      { threshold, root, rootMargin },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold, root, rootMargin, once]);

  return { ref, isVisible };
}
