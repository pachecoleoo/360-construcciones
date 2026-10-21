"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function FloatingLogo() {
  const pathname = usePathname();
  const [isHeroVisible, setIsHeroVisible] = useState(pathname === "/");

  useEffect(() => {
    if (pathname !== "/") {
      setIsHeroVisible(false);
      return;
    }

    const hero = document.getElementById("home-hero");

    if (!hero) {
      setIsHeroVisible(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsHeroVisible(entry.isIntersecting),
      { threshold: 0 },
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, [pathname]);

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
      aria-hidden={isHeroVisible}
      tabIndex={isHeroVisible ? -1 : 0}
      className={`
        fixed bottom-8 right-8 z-50
        hover:scale-110
        transition-all duration-300
        drop-shadow-[0_0_12px_rgba(0,0,0,0.25)]
        ${isHeroVisible
          ? "pointer-events-none translate-y-3 opacity-0"
          : "pointer-events-auto translate-y-0 opacity-100"}
      `}
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
