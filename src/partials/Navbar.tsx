/**
 * Navbar Partial Component
 * Standalone navigation bar component
 */

'use client';

import React from 'react';

import { Slot } from '@/lib/template-engine/TemplateEngine';
import type { PartialProps } from '@/lib/template-engine/types';

export interface NavbarProps extends PartialProps {
  variant?: 'horizontal' | 'vertical';
  sticky?: boolean;
}

export function Navbar({
  variant = 'horizontal',
  sticky = false,
  className = '',
  children,
}: NavbarProps) {
  const navbarClasses = `
    ${sticky ? 'sticky top-0 z-40' : ''}
    ${variant === 'horizontal' ? 'flex items-center gap-6' : 'flex flex-col gap-2'}
    ${className}
  `.trim();

  return (
    <nav className={navbarClasses} data-partial="navbar">
      <Slot name="navbar-main" className={variant === 'horizontal' ? 'flex gap-6' : 'flex flex-col gap-2'}>
        {children}
      </Slot>
    </nav>
  );
}
