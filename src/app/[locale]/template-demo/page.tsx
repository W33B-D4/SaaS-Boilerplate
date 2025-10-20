/**
 * Template Demo Page
 * Showcases all available layouts and template features
 */

'use client';

import React, { useState } from 'react';

import { TemplateEngineProvider } from '@/lib/template-engine';
import { DashboardView, HomeView, LoginView } from '@/views';

type ViewType = 'home' | 'dashboard' | 'login';

export default function TemplateDemoPage() {
  const [activeView, setActiveView] = useState<ViewType>('home');

  const renderView = () => {
    switch (activeView) {
      case 'home':
        return <HomeView />;
      case 'dashboard':
        return <DashboardView />;
      case 'login':
        return <LoginView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <TemplateEngineProvider locale="en">
      <div className="relative">
        {/* View Switcher */}
        <div className="fixed top-4 right-4 z-50 bg-card border rounded-lg shadow-lg p-4">
          <div className="text-sm font-semibold mb-2">Template Demo</div>
          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={() => setActiveView('home')}
              className={`px-4 py-2 rounded text-sm ${
                activeView === 'home'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background hover:bg-muted'
              }`}
            >
              Landing Layout
            </button>
            <button
              type="button"
              onClick={() => setActiveView('dashboard')}
              className={`px-4 py-2 rounded text-sm ${
                activeView === 'dashboard'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background hover:bg-muted'
              }`}
            >
              Dashboard Layout
            </button>
            <button
              type="button"
              onClick={() => setActiveView('login')}
              className={`px-4 py-2 rounded text-sm ${
                activeView === 'login'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background hover:bg-muted'
              }`}
            >
              Auth Layout
            </button>
          </div>
        </div>

        {/* Active View */}
        {renderView()}
      </div>
    </TemplateEngineProvider>
  );
}
