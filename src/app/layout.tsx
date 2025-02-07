import type { Metadata } from "next";
import { Inter, Roboto_Mono } from 'next/font/google';
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: "Copa UNSTA",
  description: "Sitio oficial de la Copa UNSTA - Torneo de fútbol universitario organizado por la Universidad del Norte Santo Tomás de Aquino",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
