"use client";

import ProyectoCard from "@/components/proyectos/ProyectoCard";
import type { ProyectoUnified } from "@/components/proyectos/types";
import { useEffect, useRef, useState } from "react";

function ProjectCardReveal({
  project,
  index,
}: {
  project: ProyectoUnified;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // Visible by default: if JS/IntersectionObserver is unavailable, cards never disappear.
  const [stage, setStage] = useState<"initial" | "waiting" | "visible">(
    "initial",
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      setStage("visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStage("visible");
          observer.disconnect();
        } else {
          setStage((current) =>
            current === "visible" ? "visible" : "waiting",
          );
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -24px 0px",
      },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`motion-safe:transition-[opacity,transform] motion-safe:duration-700 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:!transform-none motion-reduce:!opacity-100 ${
        stage === "waiting"
          ? "opacity-0 translate-y-8"
          : "opacity-100 translate-y-0"
      }`}
      style={{
        transitionDelay:
          stage === "visible" ? `${(index % 3) * 90}ms` : "0ms",
      }}
    >
      <ProyectoCard p={project} />
    </div>
  );
}

export default function ProjectsGridSection({
  projects,
}: {
  projects: ProyectoUnified[];
}) {
  return (
    <section className="bg-white py-16 md:py-10">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCardReveal
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
