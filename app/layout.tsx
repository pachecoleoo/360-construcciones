import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingNavbar from "@/components/FloatingNavbar";
import FloatingLogo from "@/components/FloatingLogo";
import { Suspense } from "react";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={null}>
          <FloatingNavbar />
        </Suspense>

        <main>{children}</main>
        <FloatingLogo />
      </body>
    </html>
  );
}
