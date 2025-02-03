import React from 'react';
import Navbar from '@/components/layout/navigation/navbarFemenino';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <main className="pt-24 sm:pt-32 lg:pt-40">{children}</main>
    </div>
  );
}