import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cookies } from "next/headers";
import { Suspense } from "react";

import "./globals.css";

import FloatingNavbar from "@/components/FloatingNavbar";
import FloatingLogo from "@/components/FloatingLogo";
import SmoothScroll from "@/components/SmoothScroll";
import {
  LanguageProvider,
  type Language,
} from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "360 Construcciones",
  description: "Arquitectura e ingeniería para proyectos de alto impacto",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const savedLanguage = cookieStore.get("language")?.value;
  const initialLanguage: Language = savedLanguage === "en" ? "en" : "es";

  return (
    <html lang={initialLanguage}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden antialiased`}
      >
        <LanguageProvider initialLanguage={initialLanguage}>
          <Suspense fallback={null}>
            <FloatingNavbar />
          </Suspense>

          <SmoothScroll>{children}</SmoothScroll>

          <FloatingLogo />
        </LanguageProvider>
      </body>
    </html>
  );
}
