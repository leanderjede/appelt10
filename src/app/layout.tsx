import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import ContactUs from "./component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Appelt Bauservice – Professionelle Bau- und Sanierungsdienstleistungen",
  description: "SAppelt Bauservice bietet hochwertige Bau-, Renovierungs- und Sanierungsdienstleistungen. Vertrauen Sie auf unsere Erfahrung und Fachkompetenz für nachhaltige und präzise Bauprojekte.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Navbar/>
        {children}
        <ContactUs/>
      </body>
    </html>
  );
}
