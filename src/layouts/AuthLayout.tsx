/**
 * Auth Layout
 * Centered layout for authentication pages (login, register, etc.)
 */

'use client';

import React from 'react';

import { Slot } from '@/lib/template-engine/TemplateEngine';

export interface AuthLayoutProps {
  children: React.ReactNode;
  className?: string;
  showLogo?: boolean;
  backgroundImage?: string;
}

export function AuthLayout({
  children,
  className = '',
  showLogo = true,
  backgroundImage,
}: AuthLayoutProps) {
  return (
    <div
      className={`min-h-screen flex items-center justify-center ${className}`}
      data-layout="auth"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-md px-4">
        {/* Logo Slot */}
        {showLogo && (
          <Slot name="auth-logo" className="flex justify-center mb-8">
            <div className="text-3xl font-bold">Logo</div>
          </Slot>
        )}

        {/* Auth Card */}
        <div className="bg-card border rounded-lg shadow-lg p-8">
          {/* Before Form Slot */}
          <Slot name="auth-before-form" />

          {/* Main Content */}
          {children}

          {/* After Form Slot */}
          <Slot name="auth-after-form" />
        </div>

        {/* Footer Links Slot */}
        <Slot name="auth-footer" className="mt-8 text-center text-sm text-muted-foreground">
          <div className="flex justify-center gap-4">
            <a href="#" className="hover:text-primary">Privacy</a>
            <span>·</span>
            <a href="#" className="hover:text-primary">Terms</a>
            <span>·</span>
            <a href="#" className="hover:text-primary">Help</a>
          </div>
        </Slot>
      </div>
    </div>
  );
}
