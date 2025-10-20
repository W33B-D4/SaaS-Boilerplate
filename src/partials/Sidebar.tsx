/**
 * Sidebar Partial Component
 * Reusable sidebar component for dashboard and admin layouts
 */

'use client';

import React from 'react';

import { Slot } from '@/lib/template-engine/TemplateEngine';
import type { PartialProps } from '@/lib/template-engine/types';

export interface SidebarProps extends PartialProps {
  position?: 'left' | 'right';
  collapsible?: boolean;
  defaultCollapsed?: boolean;
  width?: string;
}

export function Sidebar({
  position = 'left',
  collapsible = true,
  defaultCollapsed = false,
  width = 'w-64',
  className = '',
  children,
}: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);

  const sidebarClasses = `
    ${width} 
    ${isCollapsed ? 'w-16' : ''}
    bg-muted border-r
    transition-all duration-300
    ${position === 'right' ? 'order-last border-r-0 border-l' : ''}
    ${className}
  `.trim();

  return (
    <aside className={sidebarClasses} data-partial="sidebar">
      <div className="h-full flex flex-col">
        {/* Sidebar Header */}
        <Slot name="sidebar-header" className="p-4 border-b">
          <div className="flex items-center justify-between">
            {!isCollapsed && (
              <div className="font-bold text-lg">Menu</div>
            )}
            {collapsible && (
              <button
                type="button"
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="p-2 rounded hover:bg-background"
                aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isCollapsed ? 'M9 5l7 7-7 7' : 'M15 19l-7-7 7-7'}
                  />
                </svg>
              </button>
            )}
          </div>
        </Slot>

        {/* Sidebar Navigation */}
        <Slot name="sidebar-nav" className="flex-1 overflow-y-auto p-4">
          <nav className="space-y-2">
            {!isCollapsed ? (
              <>
                <a href="#" className="block px-4 py-2 rounded hover:bg-background">
                  Dashboard
                </a>
                <a href="#" className="block px-4 py-2 rounded hover:bg-background">
                  Projects
                </a>
                <a href="#" className="block px-4 py-2 rounded hover:bg-background">
                  Settings
                </a>
              </>
            ) : (
              <>
                <a href="#" className="block p-2 rounded hover:bg-background" aria-label="Dashboard">
                  <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </a>
              </>
            )}
          </nav>
        </Slot>

        {/* Sidebar Footer */}
        <Slot name="sidebar-footer" className="p-4 border-t">
          {!isCollapsed && (
            <div className="text-sm text-muted-foreground">
              v1.0.0
            </div>
          )}
        </Slot>

        {children}
      </div>
    </aside>
  );
}
