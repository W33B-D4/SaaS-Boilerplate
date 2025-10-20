/**
 * Default Layout
 * Standard layout with header, main content area, and footer
 */

'use client';

import React from 'react';

import { Footer } from '@/partials/Footer';
import { Header } from '@/partials/Header';

export interface DefaultLayoutProps {
  children: React.ReactNode;
  className?: string;
  headerTransparent?: boolean;
  headerSticky?: boolean;
}

export function DefaultLayout({
  children,
  className = '',
  headerTransparent = false,
  headerSticky = true,
}: DefaultLayoutProps) {
  return (
    <div className={`min-h-screen flex flex-col ${className}`} data-layout="default">
      {/* Header */}
      <Header
        transparent={headerTransparent}
        sticky={headerSticky}
      />

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
