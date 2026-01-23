"use client";

import { motion } from "framer-motion";
import React from "react";

export type TabKey = "terminados" | "futuros";

export function ProjectsTabs({
  tab,
  onChange,
}: {
  tab: TabKey;
  onChange: (t: TabKey) => void;
}) {
  return (
    <div className="relative inline-flex w-fit items-center rounded-full border border-slate-200 bg-white p-1 shadow-sm">
      <TabButton
        active={tab === "terminados"}
        onClick={() => onChange("terminados")}
      >
        Terminados
      </TabButton>

      <TabButton active={tab === "futuros"} onClick={() => onChange("futuros")}>
        Futuros / En desarrollo
      </TabButton>
    </div>
  );
}

/* ---------- UI: Tab button con pill animada ---------- */
function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative isolate rounded-full px-4 py-2 text-[12px] sm:text-[13px] font-semibold transition"
    >
      {active && (
        <motion.span
          layoutId="projectsPill"
          className="absolute inset-0 -z-10 rounded-full bg-slate-900/6"
          transition={{ type: "spring", stiffness: 320, damping: 30 }}
        />
      )}
      <span
        className={
          active ? "text-slate-900" : "text-slate-600 hover:text-slate-900"
        }
      >
        {children}
      </span>
    </button>
  );
}
