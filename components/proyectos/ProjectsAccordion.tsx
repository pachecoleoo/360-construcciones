"use client";

import { useState } from "react";
import type { ProyectoUnified } from "./types";
import ProyectoAccordionCard from "./ProyectoAccordionCard";

type ProjectsAccordionProps = {
  projects: ProyectoUnified[];
};

export default function ProjectsAccordion({
  projects,
}: ProjectsAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full px-60 py-20">
      <div className="flex h-[520px] w-full overflow-hidden border border-slate-300 bg-[#f4f5f6]">
        {projects.map((project, index) => (
          <ProyectoAccordionCard
            key={project.slug ?? project.title}
            p={project}
            isActive={index === activeIndex}
            onHover={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}
