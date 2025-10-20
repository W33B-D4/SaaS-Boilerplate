/**
 * Footer Partial Component
 * Reusable footer component that can be used across different layouts
 */

'use client';

import React from 'react';

import { Slot } from '@/lib/template-engine/TemplateEngine';
import type { PartialProps } from '@/lib/template-engine/types';

export interface FooterProps extends PartialProps {
  showSocialLinks?: boolean;
  showNewsletter?: boolean;
  copyright?: string;
}

export function Footer({
  showSocialLinks = true,
  showNewsletter = true,
  copyright,
  className = '',
  children,
}: FooterProps) {
  const currentYear = new Date().getFullYear();
  const copyrightText = copyright || `© ${currentYear} SaaS Boilerplate. All rights reserved.`;

  return (
    <footer className={`bg-muted border-t ${className}`} data-partial="footer">
      <div className="container mx-auto px-4 py-12">
        {/* Pre-Footer Slot */}
        <Slot name="footer-top" className="mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Footer Column 1 - Company Info */}
          <Slot name="footer-column-1" className="space-y-4">
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-primary">About Us</a></li>
                <li><a href="#" className="hover:text-primary">Careers</a></li>
                <li><a href="#" className="hover:text-primary">Blog</a></li>
                <li><a href="#" className="hover:text-primary">Press</a></li>
              </ul>
            </div>
          </Slot>

          {/* Footer Column 2 - Product */}
          <Slot name="footer-column-2" className="space-y-4">
            <div>
              <h3 className="font-bold text-lg mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-primary">Features</a></li>
                <li><a href="#" className="hover:text-primary">Pricing</a></li>
                <li><a href="#" className="hover:text-primary">Security</a></li>
                <li><a href="#" className="hover:text-primary">Roadmap</a></li>
              </ul>
            </div>
          </Slot>

          {/* Footer Column 3 - Resources */}
          <Slot name="footer-column-3" className="space-y-4">
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-primary">Documentation</a></li>
                <li><a href="#" className="hover:text-primary">API Reference</a></li>
                <li><a href="#" className="hover:text-primary">Community</a></li>
                <li><a href="#" className="hover:text-primary">Support</a></li>
              </ul>
            </div>
          </Slot>

          {/* Footer Column 4 - Newsletter */}
          {showNewsletter && (
            <Slot name="footer-column-4" className="space-y-4">
              <div>
                <h3 className="font-bold text-lg mb-4">Newsletter</h3>
                <p className="text-sm mb-4">Stay updated with our latest news</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 rounded border bg-background"
                  />
                  <button type="submit" className="px-4 py-2 bg-primary text-primary-foreground rounded">
                    Subscribe
                  </button>
                </div>
              </div>
            </Slot>
          )}
        </div>

        {/* Social Links */}
        {showSocialLinks && (
          <Slot name="footer-social" className="flex justify-center gap-6 mb-8">
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary" aria-label="Twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="#" className="hover:text-primary" aria-label="GitHub">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.840 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="#" className="hover:text-primary" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </Slot>
        )}

        {/* Bottom Bar */}
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Slot name="footer-copyright">
              <p className="text-sm text-muted-foreground">{copyrightText}</p>
            </Slot>

            <Slot name="footer-legal" className="flex gap-6 text-sm">
              <a href="#" className="hover:text-primary">Privacy Policy</a>
              <a href="#" className="hover:text-primary">Terms of Service</a>
              <a href="#" className="hover:text-primary">Cookie Policy</a>
            </Slot>
          </div>
        </div>

        {/* Custom Footer Content */}
        <Slot name="footer-bottom" className="mt-8" />
      </div>

      {children}
    </footer>
  );
}
