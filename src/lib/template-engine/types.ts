/**
 * Template Engine Types
 * Defines the core types for the template system abstraction
 */

import type React from 'react';

/**
 * Template metadata interface
 */
export interface TemplateMetadata {
  title: string;
  description?: string;
  keywords?: string[];
  author?: string;
  version?: string;
}

/**
 * Layout configuration interface
 */
export interface LayoutConfig {
  name: string;
  type: 'default' | 'auth' | 'dashboard' | 'landing' | 'custom';
  metadata?: TemplateMetadata;
  slots: LayoutSlot[];
}

/**
 * Layout slot definition for plugin/theme injection
 */
export interface LayoutSlot {
  name: string;
  region: 'header' | 'sidebar' | 'content' | 'footer' | 'custom';
  required: boolean;
  fallback?: React.ReactNode;
  props?: Record<string, any>;
}

/**
 * Partial component props
 */
export interface PartialProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  slot?: string;
  [key: string]: any;
}

/**
 * View component props
 */
export interface ViewProps {
  layout?: string;
  metadata?: TemplateMetadata;
  slots?: Record<string, React.ReactNode>;
  children?: React.ReactNode;
}

/**
 * Theme configuration
 */
export interface ThemeConfig {
  id: string;
  name: string;
  version: string;
  layouts: Record<string, LayoutConfig>;
  components?: Record<string, React.ComponentType<any>>;
  styles?: string[];
}

/**
 * Plugin configuration
 */
export interface PluginConfig {
  id: string;
  name: string;
  version: string;
  slots: Record<string, React.ComponentType<any>>;
  hooks?: Record<string, Function>;
}

/**
 * Template engine context
 */
export interface TemplateContext {
  theme?: ThemeConfig;
  plugins: PluginConfig[];
  locale: string;
  metadata: TemplateMetadata;
}
