/**
 * Header Partial Component
 * Reusable header component that can be used across different layouts
 */

'use client';

import React from 'react';

import { Slot } from '@/lib/template-engine/TemplateEngine';
import type { PartialProps } from '@/lib/template-engine/types';

export interface HeaderProps extends PartialProps {
  showLogo?: boolean;
  showNav?: boolean;
  transparent?: boolean;
  sticky?: boolean;
}

export function Header({
  showLogo = true,
  showNav = true,
  transparent = false,
  sticky = true,
  className = '',
  children,
}: HeaderProps) {
  const headerClasses = `
    ${sticky ? 'sticky top-0 z-50' : ''}
    ${transparent ? 'bg-transparent' : 'bg-background border-b'}
    transition-all duration-300
    ${className}
  `.trim();

  return (
    <header className={headerClasses} data-partial="header">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo Slot */}
          {showLogo && (
            <Slot name="header-logo" className="flex-shrink-0">
              <div className="text-xl font-bold">Logo</div>
            </Slot>
          )}

          {/* Navigation Slot */}
          {showNav && (
            <Slot name="header-nav" className="hidden md:flex flex-1 justify-center">
              <nav className="flex gap-6">
                <a href="#" className="hover:text-primary">Home</a>
                <a href="#" className="hover:text-primary">Features</a>
                <a href="#" className="hover:text-primary">Pricing</a>
                <a href="#" className="hover:text-primary">About</a>
              </nav>
            </Slot>
          )}

          {/* Actions Slot */}
          <Slot name="header-actions" className="flex items-center gap-4">
            {children}
          </Slot>
        </div>
      </div>

      {/* Extended Header Slot (for banners, announcements, etc.) */}
      <Slot name="header-extended" />
    </header>
  );
}
