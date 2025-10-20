/**
 * Home View
 * Example view component using the landing layout
 */

'use client';

import React from 'react';

import { LandingLayout } from '@/layouts/LandingLayout';

export function HomeView() {
  return (
    <LandingLayout>
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 border rounded-lg">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
            <p className="text-muted-foreground">
              Lightning-fast load times and optimal performance
            </p>
          </div>
          <div className="text-center p-6 border rounded-lg">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-2">Secure</h3>
            <p className="text-muted-foreground">
              Enterprise-grade security for your data
            </p>
          </div>
          <div className="text-center p-6 border rounded-lg">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Scalable</h3>
            <p className="text-muted-foreground">
              Grows with your business needs
            </p>
          </div>
        </div>
      </section>
    </LandingLayout>
  );
}
