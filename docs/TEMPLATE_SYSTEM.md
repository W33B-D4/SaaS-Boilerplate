# Template System Documentation

## 📚 Overview

This documentation covers the implementation of the **Template Engine Abstraction** and **Layout & Partial System** for the SaaS-Boilerplate project.

## 🏗️ Architecture

### Directory Structure

```
src/
├── lib/
│   └── template-engine/       # Core template engine
│       ├── index.ts           # Main exports
│       ├── TemplateEngine.tsx # Template engine implementation
│       └── types.ts           # TypeScript types
├── layouts/                   # Layout components
│   ├── index.ts
│   ├── BaseLayout.tsx        # Base layout (foundation)
│   ├── DefaultLayout.tsx     # Standard layout
│   ├── LandingLayout.tsx     # Landing page layout
│   ├── DashboardLayout.tsx   # Dashboard/Admin layout
│   └── AuthLayout.tsx        # Authentication layout
├── partials/                  # Reusable partial components
│   ├── index.ts
│   ├── Header.tsx            # Header component
│   ├── Footer.tsx            # Footer component
│   ├── Navbar.tsx            # Navigation bar
│   └── Sidebar.tsx           # Sidebar component
└── views/                     # View components
    ├── index.ts
    ├── HomeView.tsx          # Home page view
    ├── DashboardView.tsx     # Dashboard view
    └── LoginView.tsx         # Login view
```

## 🎯 Core Concepts

### 1. Template Engine Abstraction

The template engine provides a flexible system for:
- **Layout Management**: Define and switch between different layouts
- **Slot System**: Inject content from plugins/themes into predefined areas
- **Theme Support**: Apply different themes to change appearance
- **Plugin Architecture**: Extend functionality through plugins

#### Key Components:

**TemplateEngineProvider**
```tsx
<TemplateEngineProvider
  theme={themeConfig}
  plugins={[plugin1, plugin2]}
  locale="en"
>
  {children}
</TemplateEngineProvider>
```

**Slot Component**
```tsx
<Slot name="header-logo" fallback={<DefaultLogo />}>
  {/* Content can be injected here by plugins */}
</Slot>
```

### 2. Layouts

Layouts define the overall page structure and are composed of partials.

#### Available Layouts:

1. **BaseLayout** - Foundation layout with basic regions
2. **DefaultLayout** - Standard layout with header and footer
3. **LandingLayout** - Landing page with hero section
4. **DashboardLayout** - Dashboard with sidebar
5. **AuthLayout** - Centered authentication layout

#### Usage Example:

```tsx
import { LandingLayout } from '@/layouts';

export function MyPage() {
  return (
    <LandingLayout>
      <h1>Page Content</h1>
    </LandingLayout>
  );
}
```

### 3. Partials

Partials are reusable components that can be composed into layouts.

#### Available Partials:

1. **Header** - Site header with navigation
2. **Footer** - Site footer with links
3. **Navbar** - Standalone navigation
4. **Sidebar** - Collapsible sidebar

#### Features:

- **Configurable**: Props to customize appearance
- **Slot-based**: Support plugin/theme injection
- **Responsive**: Mobile-friendly designs
- **Accessible**: ARIA labels and semantic HTML

#### Usage Example:

```tsx
import { Header } from '@/partials';

<Header
  sticky={true}
  transparent={false}
  showLogo={true}
  showNav={true}
/>
```

### 4. Views

Views combine layouts with specific page content.

```tsx
import { DashboardLayout } from '@/layouts';

export function DashboardView() {
  return (
    <DashboardLayout>
      {/* Page-specific content */}
    </DashboardLayout>
  );
}
```

## 🔌 Slot System

Slots are predefined areas where plugins or themes can inject content.

### Predefined Slots:

#### Header Slots:
- `header-logo` - Logo area
- `header-nav` - Main navigation
- `header-actions` - Action buttons (login, signup, etc.)
- `header-extended` - Below header (for banners)

#### Footer Slots:
- `footer-top` - Above footer columns
- `footer-column-1` through `footer-column-4` - Footer columns
- `footer-social` - Social media links
- `footer-copyright` - Copyright text
- `footer-legal` - Legal links
- `footer-bottom` - Below footer

#### Sidebar Slots:
- `sidebar-header` - Sidebar header
- `sidebar-nav` - Navigation menu
- `sidebar-footer` - Sidebar footer

#### Layout Slots:
- `pre-header` - Before header (announcements)
- `header` - Header region
- `main` - Main content
- `before-content` - Before main content
- `after-content` - After main content
- `footer` - Footer region
- `post-footer` - After footer (chat widgets)

### Using Slots:

```tsx
import { Slot } from '@/lib/template-engine';

<Slot name="header-logo" fallback={<DefaultLogo />}>
  {/* Fallback content if no plugin provides this slot */}
</Slot>
```

## 🎨 Theme System

Themes can customize the appearance and behavior of layouts.

### Theme Structure:

```typescript
interface ThemeConfig {
  id: string;
  name: string;
  version: string;
  layouts: Record<string, LayoutConfig>;
  components?: Record<string, React.ComponentType<any>>;
  styles?: string[];
}
```

### Example Theme:

```typescript
const myTheme: ThemeConfig = {
  id: 'my-theme',
  name: 'My Custom Theme',
  version: '1.0.0',
  layouts: {
    default: {
      name: 'Default Layout',
      type: 'default',
      slots: [
        { name: 'header-logo', region: 'header', required: true },
        { name: 'header-nav', region: 'header', required: false }
      ]
    }
  }
};
```

## 🔧 Plugin System

Plugins extend functionality by providing slot content and hooks.

### Plugin Structure:

```typescript
interface PluginConfig {
  id: string;
  name: string;
  version: string;
  slots: Record<string, React.ComponentType<any>>;
  hooks?: Record<string, Function>;
}
```

### Example Plugin:

```typescript
const analyticsPlugin: PluginConfig = {
  id: 'analytics-plugin',
  name: 'Analytics Plugin',
  version: '1.0.0',
  slots: {
    'post-footer': AnalyticsScript
  }
};
```

## 📝 Implementation Details

### TypeScript Types

All components are fully typed with TypeScript for better developer experience:

```typescript
interface LayoutConfig {
  name: string;
  type: 'default' | 'auth' | 'dashboard' | 'landing' | 'custom';
  metadata?: TemplateMetadata;
  slots: LayoutSlot[];
}

interface PartialProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  slot?: string;
  [key: string]: any;
}
```

### Hooks

**useTemplateEngine()**
```tsx
const { theme, plugins, locale, metadata } = useTemplateEngine();
```

**useLayout(name)**
```tsx
const layoutConfig = useLayout('dashboard');
```

**useSlot(name)**
```tsx
const slotContent = useSlot('header-logo');
```

## 🚀 Getting Started

### 1. Basic Setup

```tsx
import { TemplateEngineProvider } from '@/lib/template-engine';

export default function App({ children }) {
  return (
    <TemplateEngineProvider locale="en">
      {children}
    </TemplateEngineProvider>
  );
}
```

### 2. Create a Page with Layout

```tsx
import { DefaultLayout } from '@/layouts';

export default function MyPage() {
  return (
    <DefaultLayout>
      <h1>Hello World</h1>
    </DefaultLayout>
  );
}
```

### 3. Customize with Partials

```tsx
import { Header, Footer } from '@/partials';

export default function CustomPage() {
  return (
    <div>
      <Header sticky transparent />
      <main>{/* content */}</main>
      <Footer showNewsletter={false} />
    </div>
  );
}
```

## 🎯 Best Practices

1. **Use Layouts Consistently**: Choose appropriate layouts for different page types
2. **Leverage Slots**: Use slots to make components extensible
3. **Keep Partials Reusable**: Design partials to work in multiple contexts
4. **Type Everything**: Use TypeScript types for better DX
5. **Document Slots**: Clearly document available slots for each component
6. **Theme Compatibility**: Ensure themes work across all layouts

## 📊 Demo

Access the demo page at `/template-demo` to see all layouts in action.

The demo includes:
- Landing Layout with hero section
- Dashboard Layout with sidebar
- Auth Layout for login/register

## 🔄 Future Enhancements

1. **Dynamic Layout Switching**: Switch layouts without page reload
2. **Layout Composer**: Visual tool to compose custom layouts
3. **Theme Marketplace**: Share and download community themes
4. **Plugin Marketplace**: Extend functionality with community plugins
5. **Layout Presets**: Pre-configured layouts for common use cases
6. **A/B Testing**: Test different layouts for optimization

## 📚 References

- [Next.js Layouts Documentation](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts)
- [React Component Composition](https://react.dev/learn/passing-props-to-a-component)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

---

**Author**: Team Member 1
**Date**: October 2025
**Version**: 1.0.0
