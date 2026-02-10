"use client";

import Image from "next/image";

export default function FloatingLogo() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollTop}
      aria-label="Volver arriba"
      className="
        fixed bottom-8 right-8 z-50
        hover:scale-110
        transition-all duration-300
drop-shadow-[0_0_12px_rgba(0,0,0,0.25)]
animate-[fadeIn_.5s_ease]
        
      "
    >
      <Image
        src="/brand/360blanco2.png"
        alt="360 Construcciones"
        width={70}
        height={70}
        className="
          w-14 md:w-20 h-auto
          opacity-90 hover:opacity-100
        "
        priority
      />
    </button>
  );
}
