import React from "react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "light";
  icon?: React.ReactNode;
  className?: string;

  // ✅ agregá estas:
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
};

export default function Button({
  href,
  children,
  variant = "dark",
  icon,
  className = "",
  target,
  rel,
}: ButtonProps) {
  const isDark = variant === "dark";

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`
        group relative inline-flex items-center gap-3
        border px-6 py-3
        text-sm uppercase tracking-[0.18em]
        overflow-hidden
        transition-colors duration-300
        ${isDark ? "border-[#002849] text-[#002849]" : "border-white text-white"}
        ${className}
      `}
    >
      <span
        aria-hidden="true"
        className={`
          absolute inset-0
          translate-x-[-100%]
          transition-transform duration-900 ease-out
          ${isDark ? "bg-[#002849]" : "bg-white"}
          group-hover:translate-x-0
        `}
      />

      <span
        className={`
          relative z-10 transition-colors duration-300
          ${isDark ? "group-hover:text-white" : "group-hover:text-[#081835]"}
        `}
      >
        {children}
      </span>

      {icon && (
        <span
          aria-hidden="true"
          className={`
            relative z-10 flex items-center
            transition-transform duration-300
            group-hover:translate-x-1
            ${isDark ? "group-hover:text-white" : "group-hover:text-[#081835]"}
          `}
        >
          {icon}
        </span>
      )}
    </a>
  );
}
