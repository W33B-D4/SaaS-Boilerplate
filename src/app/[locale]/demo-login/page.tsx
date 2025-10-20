/**
 * Demo Login Page
 * Example of using AuthLayout from our template system
 * This is different from /sign-in which uses Clerk
 */

'use client';

import { useState } from 'react';

import { AuthLayout } from '@/layouts';

export default function DemoLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
      
      // Redirect without popup
      setTimeout(() => {
        window.location.href = '/en/demo-dashboard';
      }, 800);
    }, 1000);
  };

  return (
    <AuthLayout showLogo>
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Demo Login</h1>
          <p className="text-sm text-muted-foreground">
            This uses our custom AuthLayout template
          </p>
          <div className="mt-2 text-xs bg-blue-50 text-blue-700 p-2 rounded">
            💡 This is a DEMO showing the AuthLayout component
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Error Message */}
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm">
              ✅ Login successful! Redirecting...
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg bg-background focus:ring-2 focus:ring-primary"
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-lg bg-background focus:ring-2 focus:ring-primary"
              required
              disabled={isLoading}
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" disabled={isLoading} />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-primary hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Signing in...
              </span>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-card text-muted-foreground">Or continue with</span>
          </div>
        </div>

        {/* Social Login Demo */}
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            className="py-2 border rounded-lg hover:bg-muted transition-colors"
          >
            Google
          </button>
          <button
            type="button"
            className="py-2 border rounded-lg hover:bg-muted transition-colors"
          >
            GitHub
          </button>
        </div>

        {/* Sign Up Link */}
        <div className="text-center text-sm">
          <span className="text-muted-foreground">Don't have an account? </span>
          <a href="/en/demo-register" className="text-primary hover:underline font-semibold">
            Sign up
          </a>
        </div>

        {/* Info Box */}
        <div className="mt-6 p-4 bg-muted rounded-lg text-sm">
          <p className="font-semibold mb-2">ℹ️ About This Demo:</p>
          <ul className="space-y-1 text-muted-foreground">
            <li>✅ Uses AuthLayout from our template system</li>
            <li>✅ Fully functional form (demo mode)</li>
            <li>✅ Responsive and accessible</li>
            <li>✅ Ready to integrate with real auth</li>
          </ul>
        </div>
      </div>
    </AuthLayout>
  );
}
