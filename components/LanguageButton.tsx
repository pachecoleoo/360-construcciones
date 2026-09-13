"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageButton() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center rounded-full border border-white/20 bg-black/20 p-1 text-[11px] font-semibold tracking-[0.12em] text-white backdrop-blur-md">
      <button
        type="button"
        onClick={() => setLanguage("es")}
        className={`rounded-full px-3 py-2 transition-all duration-300 ${
          language === "es"
            ? "bg-white text-[#062a47] shadow-md"
            : "text-white/60 hover:text-white"
        }`}
      >
        ES
      </button>

      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`rounded-full px-3 py-2 transition-all duration-300 ${
          language === "en"
            ? "bg-white text-[#062a47] shadow-md"
            : "text-white/60 hover:text-white"
        }`}
      >
        EN
      </button>
    </div>
  );
}
