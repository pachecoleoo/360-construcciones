"use client";

import { useEffect, useRef, useState } from "react";

export default function Contador({
  to,
  suffix = "",
  duration = 1500,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();

        const animate = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          setValue(Math.floor(progress * to));
          if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
      }
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [to, duration]);

  return (
    <span
      ref={ref}
      className="text-3xl md:text-4xl font-semibold text-white drop-shadow-[0_10px_25px_rgba(255,255,255,0.12)]"
    >
      +{value}
      {suffix}
    </span>
  );
}
