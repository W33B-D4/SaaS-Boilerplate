/**
 * Base Layout
 * The fundamental layout component that all other layouts extend
 */

'use client';

import React from 'react';

import { Slot } from '@/lib/template-engine/TemplateEngine';

export interface BaseLayoutProps {
  children: React.ReactNode;
  className?: string;
  showHeader?: boolean;
  showFooter?: boolean;
}

export function BaseLayout({
  children,
  className = '',
  showHeader = true,
  showFooter = true,
}: BaseLayoutProps) {
  return (
    <div className={`min-h-screen flex flex-col ${className}`} data-layout="base">
      {/* Pre-Header Slot (for banners, announcements) */}
      <Slot name="pre-header" />

      {/* Header Region */}
      {showHeader && (
        <Slot name="header" className="flex-shrink-0">
          <header className="bg-background border-b">
            <div className="container mx-auto px-4 py-4">
              <div className="text-center">Header Placeholder</div>
            </div>
          </header>
        </Slot>
      )}

      {/* Main Content Region */}
      <Slot name="main" className="flex-1">
        <main className="flex-1">
          {/* Before Content Slot */}
          <Slot name="before-content" />

          {/* Main Content Area */}
          <div className="container mx-auto px-4 py-8">
            {children}
          </div>

          {/* After Content Slot */}
          <Slot name="after-content" />
        </main>
      </Slot>

      {/* Footer Region */}
      {showFooter && (
        <Slot name="footer" className="flex-shrink-0">
          <footer className="bg-muted border-t">
            <div className="container mx-auto px-4 py-4">
              <div className="text-center text-sm text-muted-foreground">
                Footer Placeholder
              </div>
            </div>
          </footer>
        </Slot>
      )}

      {/* Post-Footer Slot (for chat widgets, etc.) */}
      <Slot name="post-footer" />
    </div>
  );
}
