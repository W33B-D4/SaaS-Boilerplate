# Template System - Quick Start Guide

## 🚀 Quick Start

### View the Demo

1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to:
```
http://localhost:3000/en/template-demo
```

3. Use the floating buttons to switch between different layouts

## 📁 Project Structure

```
src/
├── lib/template-engine/    # Core template engine
├── layouts/                 # Page layouts
├── partials/                # Reusable components
└── views/                   # View components
```

## 🎯 Usage Examples

### Using a Layout

```tsx
import { DashboardLayout } from '@/layouts';

export default function MyPage() {
  return (
    <DashboardLayout>
      <h1>My Content</h1>
    </DashboardLayout>
  );
}
```

### Using Partials

```tsx
import { Header, Footer } from '@/partials';

export default function CustomPage() {
  return (
    <>
      <Header sticky transparent />
      <main>{/* Your content */}</main>
      <Footer showNewsletter />
    </>
  );
}
```

### Using Slots

```tsx
import { Slot } from '@/lib/template-engine';

<Slot name="header-logo" fallback={<DefaultLogo />}>
  <img src="/logo.png" alt="My Logo" />
</Slot>
```

## 📚 Available Layouts

1. **BaseLayout** - Foundation layout
2. **DefaultLayout** - Standard pages
3. **LandingLayout** - Landing pages with hero
4. **DashboardLayout** - Admin/dashboard with sidebar
5. **AuthLayout** - Login/register pages

## 🧩 Available Partials

1. **Header** - Site header with navigation
2. **Footer** - Site footer with links
3. **Navbar** - Standalone navigation
4. **Sidebar** - Collapsible sidebar menu

## 🔌 Slot System

20+ predefined slots for extensibility:
- `header-logo`, `header-nav`, `header-actions`
- `footer-column-1` through `footer-column-4`
- `sidebar-header`, `sidebar-nav`, `sidebar-footer`
- And many more...

## 📖 Full Documentation

See [`docs/TEMPLATE_SYSTEM.md`](./TEMPLATE_SYSTEM.md) for complete documentation.

## 📝 Report

See [`docs/LAPORAN_ANGGOTA_1.md`](./LAPORAN_ANGGOTA_1.md) for the implementation report (Indonesian).

## 🤝 Integration

### For Team Member 2 (Theming)
- Use `ThemeConfig` interface
- Inject themes via `TemplateEngineProvider`
- Customize slot content with theme components

### For Team Member 3 (Plugins)
- Use `PluginConfig` interface
- Register plugins in `TemplateEngineProvider`
- Inject functionality via slots

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Type check
npm run check-types
```

## ✅ Checklist

- [x] Template engine core
- [x] 5 layouts implemented
- [x] 4 partials implemented
- [x] 3 example views
- [x] Slot system
- [x] TypeScript types
- [x] Demo page
- [x] Documentation
- [ ] Unit tests (future)
- [ ] Storybook stories (future)

## 📞 Support

For questions or issues, contact Team Member 1.
