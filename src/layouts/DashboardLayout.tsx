/**
 * Dashboard Layout
 * Layout with sidebar for dashboard/admin interfaces
 */

'use client';

import React from 'react';

import { Header } from '@/partials/Header';
import { Sidebar } from '@/partials/Sidebar';

export interface DashboardLayoutProps {
  children: React.ReactNode;
  className?: string;
  sidebarPosition?: 'left' | 'right';
  sidebarCollapsible?: boolean;
}

export function DashboardLayout({
  children,
  className = '',
  sidebarPosition = 'left',
  sidebarCollapsible = true,
}: DashboardLayoutProps) {
  return (
    <div className={`min-h-screen flex flex-col ${className}`} data-layout="dashboard">
      {/* Header */}
      <Header sticky />

      {/* Main Layout with Sidebar */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar
          position={sidebarPosition}
          collapsible={sidebarCollapsible}
        />

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto px-4 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
