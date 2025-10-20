/**
 * Dashboard View
 * Example view component using the dashboard layout
 */

'use client';

import React from 'react';

import { DashboardLayout } from '@/layouts/DashboardLayout';

export function DashboardView() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome to your dashboard
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-card border rounded-lg p-6">
            <div className="text-sm text-muted-foreground mb-2">Total Users</div>
            <div className="text-3xl font-bold">1,234</div>
            <div className="text-sm text-green-600 mt-2">↑ 12% from last month</div>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <div className="text-sm text-muted-foreground mb-2">Revenue</div>
            <div className="text-3xl font-bold">$45.2K</div>
            <div className="text-sm text-green-600 mt-2">↑ 8% from last month</div>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <div className="text-sm text-muted-foreground mb-2">Active Sessions</div>
            <div className="text-3xl font-bold">892</div>
            <div className="text-sm text-red-600 mt-2">↓ 3% from last month</div>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <div className="text-sm text-muted-foreground mb-2">Conversion Rate</div>
            <div className="text-3xl font-bold">3.24%</div>
            <div className="text-sm text-green-600 mt-2">↑ 0.5% from last month</div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-card border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 pb-4 border-b">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                👤
              </div>
              <div className="flex-1">
                <div className="font-medium">New user registered</div>
                <div className="text-sm text-muted-foreground">2 minutes ago</div>
              </div>
            </div>
            <div className="flex items-center gap-4 pb-4 border-b">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                💰
              </div>
              <div className="flex-1">
                <div className="font-medium">Payment received</div>
                <div className="text-sm text-muted-foreground">1 hour ago</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                📊
              </div>
              <div className="flex-1">
                <div className="font-medium">Report generated</div>
                <div className="text-sm text-muted-foreground">3 hours ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
