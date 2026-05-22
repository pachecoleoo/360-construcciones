"use client";

import Image from "next/image";
import { BrandButtonC } from "../ui/BrandButtonC";
import { button } from "motion/react-client";
import { useEffect, useRef } from "react";
export default function HeroVideo() {
  const scrollNext = () => {
    document
      .getElementById("primera-seccion")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.onloadedmetadata = () => {
        // video.currentTime = 3; // empieza en segundo 3
        video.playbackRate = 1.3; // 👈 velocidad 1.2x
        video.play().catch((error) => {
          if (error.name !== "AbortError") {
            console.warn("Video play error:", error);
          }
        });
      };
    }
  }, []);
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        className="
          absolute inset-0 h-full w-full
          object-cover
          object-[center_25%]
          md:object-center
        "
        ref={videoRef}
        src="/images/home.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="text-center">
          {/* LOGO + BOTONES COMPARTEN ANCHO */}
          <div className="mx-auto w-[320px] md:w-[320px]">
            {/* LOGO */}
            <div className="logo-reveal">
              <Image
                src="/brand/logoBlanco.png"
                alt="360 Construcciones"
                width={900}
                height={220}
                priority
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={scrollNext}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/70 hover:text-white transition animate-bounce z-20"
      >
        <svg
          width="56"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
    </section>
  );
}
