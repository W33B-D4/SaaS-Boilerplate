/**
 * Template Engine Core
 * Provides abstraction layer for template rendering with support for:
 * - Layout management
 * - Partial components
 * - Plugin slots
 * - Theme system
 */

'use client';

import React, { createContext, useContext, useMemo } from 'react';

import type {
  LayoutConfig,
  PluginConfig,
  TemplateContext,
  ThemeConfig,
} from './types';

/**
 * Template Context
 */
const TemplateEngineContext = createContext<TemplateContext | null>(null);

/**
 * Template Engine Provider Props
 */
type TemplateEngineProviderProps = {
  children: React.ReactNode;
  theme?: ThemeConfig;
  plugins?: PluginConfig[];
  locale?: string;
};

// Default values outside component to prevent unstable references
const DEFAULT_PLUGINS: PluginConfig[] = [];

/**
 * Template Engine Provider
 * Wraps the application with template engine context
 */
export function TemplateEngineProvider({
  children,
  theme,
  plugins = DEFAULT_PLUGINS,
  locale = 'en',
}: TemplateEngineProviderProps) {
  const contextValue = useMemo<TemplateContext>(
    () => ({
      theme,
      plugins,
      locale,
      metadata: {
        title: 'SaaS Boilerplate',
        description: 'Modern SaaS application with flexible templating',
        author: 'Your Team',
        version: '1.0.0',
      },
    }),
    [theme, plugins, locale],
  );

  return (
    <TemplateEngineContext.Provider value={contextValue}>
      {children}
    </TemplateEngineContext.Provider>
  );
}

/**
 * Hook to access template engine context
 */
export function useTemplateEngine(): TemplateContext {
  const context = useContext(TemplateEngineContext);

  if (!context) {
    throw new Error(
      'useTemplateEngine must be used within TemplateEngineProvider',
    );
  }

  return context;
}

/**
 * Hook to get layout configuration
 */
export function useLayout(layoutName: string): LayoutConfig | null {
  const { theme } = useTemplateEngine();

  if (!theme?.layouts[layoutName]) {
    console.warn(`Layout "${layoutName}" not found in theme`);
    return null;
  }

  return theme.layouts[layoutName];
}

/**
 * Hook to render slot content
 */
export function useSlot(slotName: string): React.ReactNode | null {
  const { plugins } = useTemplateEngine();

  // Find plugin that provides this slot
  for (const plugin of plugins) {
    if (plugin.slots[slotName]) {
      const SlotComponent = plugin.slots[slotName];
      return <SlotComponent />;
    }
  }

  return null;
}

/**
 * Slot Component
 * Renders content from plugins or fallback
 */
type SlotProps = {
  name: string;
  fallback?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
};

export function Slot({ name, fallback, children, className }: SlotProps) {
  const slotContent = useSlot(name);

  return (
    <div className={className} data-slot={name}>
      {slotContent || children || fallback || null}
    </div>
  );
}
