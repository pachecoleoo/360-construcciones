import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";

import "./globals.css";

import FloatingNavbar from "@/components/FloatingNavbar";
import FloatingLogo from "@/components/FloatingLogo";
import SmoothScroll from "@/components/SmoothScroll";
import { LanguageProvider } from "@/context/LanguageContext";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden antialiased`}
      >
        <LanguageProvider>
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
