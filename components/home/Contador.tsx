"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({
  to,
  suffix = "",
  prefix = "",
  duration = 3000,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();

          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 3);
            setValue(Math.floor(progress * to));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [to, duration]);

  return (
    <span
      ref={ref}
      className="
        text-3xl md:text-4xl
        font-black
        tracking-tight
        text-white
        tabular-nums
      "
    >
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
