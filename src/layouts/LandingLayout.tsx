/**
 * Landing Layout
 * Specialized layout for landing pages with hero sections
 */

'use client';

import React from 'react';

import { Slot } from '@/lib/template-engine/TemplateEngine';
import { Footer } from '@/partials/Footer';
import { Header } from '@/partials/Header';

export interface LandingLayoutProps {
  children: React.ReactNode;
  className?: string;
  showHero?: boolean;
}

export function LandingLayout({
  children,
  className = '',
  showHero = true,
}: LandingLayoutProps) {
  return (
    <div className={`min-h-screen flex flex-col ${className}`} data-layout="landing">
      {/* Header with transparent background over hero */}
      <Header transparent sticky />

      {/* Hero Section */}
      {showHero && (
        <Slot name="hero" className="flex-shrink-0">
          <section className="relative bg-gradient-to-b from-primary/10 to-background py-20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-5xl font-bold mb-4">Welcome to Our SaaS</h1>
              <p className="text-xl text-muted-foreground mb-8">
                The best solution for your business
              </p>
              <button
                type="button"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg text-lg font-semibold"
              >
                Get Started
              </button>
            </div>
          </section>
        </Slot>
      )}

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Features Section Slot */}
        <Slot name="features" />

        {/* Content */}
        {children}

        {/* Pricing Section Slot */}
        <Slot name="pricing" />

        {/* Testimonials Section Slot */}
        <Slot name="testimonials" />

        {/* CTA Section Slot */}
        <Slot name="cta" />
      </main>

      {/* Footer */}
      <Footer showNewsletter showSocialLinks />
    </div>
  );
}
