"use client";

import ProyectoCard from "@/components/proyectos/ProyectoCard";
import type { ProyectoUnified } from "@/components/proyectos/types";
import { useEffect, useRef, useState } from "react";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function useInViewOnce<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

export default function ProjectsGridSection({
  projects,
}: {
  projects: ProyectoUnified[];
}) {
  const { ref, visible } = useInViewOnce<HTMLElement>();

  return (
    <section ref={ref} className="bg-white py-16 md:py-10">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((p, index) => (
            <div
              key={p.id}
              className={cx(
                "transition-all duration-[900ms] ease-out",
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0",
              )}
              style={{
                transitionDelay: `${index * 120}ms`,
              }}
            >
              <ProyectoCard p={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
