/**
 * Template Demos Index
 * Central page to access all template demos
 */

'use client';

import Link from 'next/link';

export default function TemplateDemosIndex() {
  const demos = [
    {
      title: 'Interactive Demo',
      description: 'Switch between layouts with floating control panel',
      url: '/en/template-demo',
      icon: '🎛️',
      color: 'bg-blue-500',
    },
    {
      title: 'Simple Demo',
      description: 'View all layouts at once in colored sections',
      url: '/en/template-demo/simple',
      icon: '📋',
      color: 'bg-green-500',
    },
    {
      title: 'Demo Login',
      description: 'AuthLayout example - Login form',
      url: '/en/demo-login',
      icon: '🔐',
      color: 'bg-purple-500',
    },
    {
      title: 'Demo Register',
      description: 'AuthLayout example - Registration form',
      url: '/en/demo-register',
      icon: '📝',
      color: 'bg-pink-500',
    },
    {
      title: 'Demo Dashboard',
      description: 'DashboardLayout with sidebar and stats',
      url: '/en/demo-dashboard',
      icon: '📊',
      color: 'bg-orange-500',
    },
  ];

  const layouts = [
    { name: 'BaseLayout', description: 'Foundation layout with basic regions', icon: '🏗️' },
    { name: 'DefaultLayout', description: 'Standard layout (Header + Content + Footer)', icon: '📄' },
    { name: 'LandingLayout', description: 'Landing page with hero section', icon: '🚀' },
    { name: 'DashboardLayout', description: 'Dashboard with collapsible sidebar', icon: '📊' },
    { name: 'AuthLayout', description: 'Centered layout for auth pages', icon: '🔐' },
  ];

  const partials = [
    { name: 'Header', description: 'Site header with navigation', icon: '📌' },
    { name: 'Footer', description: 'Footer with links and newsletter', icon: '👣' },
    { name: 'Sidebar', description: 'Collapsible sidebar menu', icon: '📑' },
    { name: 'Navbar', description: 'Standalone navigation bar', icon: '🧭' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Template System Demos
          </h1>
          <p className="text-xl text-muted-foreground mb-2">
            Week 8 - Struktur Template & Layout Utama
          </p>
          <p className="text-sm text-muted-foreground">
            Anggota 1 | October 2025
          </p>
        </div>

        {/* Demo Pages */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span>🎯</span>
            <span>Live Demos</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {demos.map((demo) => (
              <Link
                key={demo.url}
                href={demo.url}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <div className={`${demo.color} w-16 h-16 rounded-lg flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                  {demo.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{demo.title}</h3>
                <p className="text-muted-foreground text-sm">{demo.description}</p>
                <div className="mt-4 flex items-center text-primary font-semibold">
                  <span>View Demo</span>
                  <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Components Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Layouts */}
          <section>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <span>📐</span>
              <span>Layouts (5)</span>
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-lg space-y-4">
              {layouts.map((layout) => (
                <div key={layout.name} className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted transition-colors">
                  <div className="text-3xl">{layout.icon}</div>
                  <div>
                    <h3 className="font-bold">{layout.name}</h3>
                    <p className="text-sm text-muted-foreground">{layout.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Partials */}
          <section>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <span>🧩</span>
              <span>Partials (4)</span>
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-lg space-y-4">
              {partials.map((partial) => (
                <div key={partial.name} className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted transition-colors">
                  <div className="text-3xl">{partial.icon}</div>
                  <div>
                    <h3 className="font-bold">{partial.name}</h3>
                    <p className="text-sm text-muted-foreground">{partial.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span>✨</span>
            <span>Key Features</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Slot System', desc: '30+ injection points for plugins', icon: '🔌' },
              { title: 'TypeScript', desc: 'Full type safety & IntelliSense', icon: '📘' },
              { title: 'Responsive', desc: 'Mobile-first design approach', icon: '📱' },
              { title: 'Modular', desc: 'Reusable & composable components', icon: '🧱' },
              { title: 'Extensible', desc: 'Ready for themes & plugins', icon: '🎨' },
              { title: 'Documented', desc: 'Comprehensive documentation', icon: '📚' },
            ].map((feature) => (
              <div key={feature.title} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Documentation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span>📖</span>
            <span>Documentation</span>
          </h2>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Technical Documentation', file: 'docs/TEMPLATE_SYSTEM.md', desc: 'Complete API reference' },
                { title: 'Implementation Report', file: 'docs/LAPORAN_ANGGOTA_1.md', desc: 'Week 8 report (Indonesian)' },
                { title: 'Quick Start Guide', file: 'docs/README_TEMPLATE_SYSTEM.md', desc: 'Get started quickly' },
                { title: 'Troubleshooting', file: 'docs/TROUBLESHOOTING.md', desc: 'Common issues & fixes' },
              ].map((doc) => (
                <div key={doc.file} className="p-4 border rounded-lg hover:bg-muted transition-colors">
                  <h3 className="font-bold mb-1">{doc.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{doc.desc}</p>
                  <code className="text-xs bg-muted px-2 py-1 rounded">{doc.file}</code>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Status */}
        <section className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 text-center border-2 border-green-200">
          <h2 className="text-2xl font-bold mb-4">✅ Status: Complete & Working!</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div>
              <div className="text-3xl font-bold text-green-600">5</div>
              <div className="text-sm text-muted-foreground">Layouts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">4</div>
              <div className="text-sm text-muted-foreground">Partials</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">30+</div>
              <div className="text-sm text-muted-foreground">Slots</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">5</div>
              <div className="text-sm text-muted-foreground">Demo Pages</div>
            </div>
          </div>
          <p className="text-muted-foreground">
            All Week 8 deliverables completed • Ready for team integration • Documentation complete
          </p>
        </section>
      </div>
    </div>
  );
}
