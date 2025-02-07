import React from 'react';
import Navbar from '@/components/layout/navigation/navbarFemenino';
import { Analytics } from "@vercel/analytics/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <main className="pt-24 sm:pt-32 lg:pt-40">{children}</main>
      <Analytics />
    </div>
  );
}