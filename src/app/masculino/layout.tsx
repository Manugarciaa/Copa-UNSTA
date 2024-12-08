import React from 'react';
import Navbar from '@/components/layout/navigation/navbarMasculino';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}