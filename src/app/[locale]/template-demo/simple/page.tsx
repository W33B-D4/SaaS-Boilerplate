/**
 * Simple Template Demo
 * A simplified demo page showing individual layouts
 */

'use client';

import React from 'react';

import { AuthLayout } from '@/layouts/AuthLayout';
import { DashboardLayout } from '@/layouts/DashboardLayout';
import { DefaultLayout } from '@/layouts/DefaultLayout';
import { LandingLayout } from '@/layouts/LandingLayout';

export default function SimpleDemo() {
  return (
    <div className="p-8 space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Template System Demo</h1>
        <p className="text-muted-foreground">
          Scroll down to see all available layouts
        </p>
      </div>

      {/* Landing Layout Demo */}
      <section className="border-4 border-blue-500 rounded-lg overflow-hidden">
        <div className="bg-blue-500 text-white p-4 text-center font-bold">
          1. Landing Layout
        </div>
        <div className="h-96 overflow-auto">
          <LandingLayout showHero>
            <div className="container mx-auto px-4 py-8 text-center">
              <h2 className="text-2xl font-bold">Landing Page Content</h2>
              <p>This is where your landing page content goes</p>
            </div>
          </LandingLayout>
        </div>
      </section>

      {/* Dashboard Layout Demo */}
      <section className="border-4 border-green-500 rounded-lg overflow-hidden">
        <div className="bg-green-500 text-white p-4 text-center font-bold">
          2. Dashboard Layout
        </div>
        <div className="h-96 overflow-auto">
          <DashboardLayout>
            <h2 className="text-2xl font-bold mb-4">Dashboard Content</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-card p-4 rounded border">Stat 1</div>
              <div className="bg-card p-4 rounded border">Stat 2</div>
              <div className="bg-card p-4 rounded border">Stat 3</div>
            </div>
          </DashboardLayout>
        </div>
      </section>

      {/* Auth Layout Demo */}
      <section className="border-4 border-purple-500 rounded-lg overflow-hidden">
        <div className="bg-purple-500 text-white p-4 text-center font-bold">
          3. Auth Layout
        </div>
        <div className="h-96 overflow-auto">
          <AuthLayout showLogo>
            <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border rounded"
              />
              <button
                type="button"
                className="w-full bg-primary text-primary-foreground p-2 rounded"
              >
                Sign In
              </button>
            </div>
          </AuthLayout>
        </div>
      </section>

      {/* Default Layout Demo */}
      <section className="border-4 border-orange-500 rounded-lg overflow-hidden">
        <div className="bg-orange-500 text-white p-4 text-center font-bold">
          4. Default Layout
        </div>
        <div className="h-96 overflow-auto">
          <DefaultLayout>
            <div className="container mx-auto px-4 py-8">
              <h2 className="text-2xl font-bold mb-4">Standard Page</h2>
              <p className="mb-4">
                This is a default layout for regular content pages.
              </p>
              <div className="prose max-w-none">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </DefaultLayout>
        </div>
      </section>

      {/* Instructions */}
      <div className="text-center p-8 bg-muted rounded-lg">
        <h3 className="text-xl font-bold mb-4">How to Use</h3>
        <div className="text-left max-w-2xl mx-auto space-y-2">
          <p>✅ Each colored section shows a different layout</p>
          <p>✅ Scroll within each section to see the full layout</p>
          <p>✅ All layouts are fully functional and ready to use</p>
          <p>✅ Copy the layout import and use it in your pages</p>
        </div>
      </div>
    </div>
  );
}
