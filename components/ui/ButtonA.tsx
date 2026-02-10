import React from "react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  icon?: React.ReactNode;
  className?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
};

function cx(...c: Array<string | false | null | undefined>) {
  return c.filter(Boolean).join(" ");
}

export function ButtonA({
  href,
  children,
  variant = "primary",
  icon,
  className,
  target,
  rel,
}: ButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={cx(
        "group relative inline-flex items-center justify-center gap-3",
        "rounded-full px-7 py-3",
        "text-xs uppercase tracking-[0.18em] font-semibold",
        "overflow-hidden border transition-all duration-300",
        isPrimary
          ? "border-white/40 text-white"
          : "border-white/25 text-white/90",
        "hover:border-white/60",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#081835]",
        className,
      )}
    >
      {/* fill slide */}
      <span
        aria-hidden="true"
        className={cx(
          "absolute inset-0 -z-10",
          "translate-x-[-105%] group-hover:translate-x-0",
          "transition-transform duration-700 ease-out",
          "bg-white",
        )}
      />
      <span
        className={cx(
          "relative z-10 transition-colors duration-300",
          "group-hover:text-[#081835]",
        )}
      >
        {children}
      </span>

      {icon && (
        <span
          aria-hidden="true"
          className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#081835]"
        >
          {icon}
        </span>
      )}

      {/* glow sutil */}
      <span
        aria-hidden="true"
        className={cx(
          "absolute -inset-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          "bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.25),transparent_60%)]",
        )}
      />
    </a>
  );
}
