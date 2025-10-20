/**
 * Demo Dashboard Page
 * Example of using DashboardLayout from our template system
 */

'use client';

import { DashboardLayout } from '@/layouts';

export default function DemoDashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold">Demo Dashboard</h1>
            <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
              Using DashboardLayout
            </div>
          </div>
          <p className="text-muted-foreground">
            Welcome to your dashboard - This demonstrates the DashboardLayout template
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-muted-foreground">Total Users</div>
              <div className="text-2xl">👥</div>
            </div>
            <div className="text-3xl font-bold">1,234</div>
            <div className="text-sm text-green-600 mt-2 flex items-center gap-1">
              <span>↑</span>
              <span>12% from last month</span>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-muted-foreground">Revenue</div>
              <div className="text-2xl">💰</div>
            </div>
            <div className="text-3xl font-bold">$45.2K</div>
            <div className="text-sm text-green-600 mt-2 flex items-center gap-1">
              <span>↑</span>
              <span>8% from last month</span>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-muted-foreground">Active Sessions</div>
              <div className="text-2xl">⚡</div>
            </div>
            <div className="text-3xl font-bold">892</div>
            <div className="text-sm text-red-600 mt-2 flex items-center gap-1">
              <span>↓</span>
              <span>3% from last month</span>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-muted-foreground">Conversion Rate</div>
              <div className="text-2xl">📊</div>
            </div>
            <div className="text-3xl font-bold">3.24%</div>
            <div className="text-sm text-green-600 mt-2 flex items-center gap-1">
              <span>↑</span>
              <span>0.5% from last month</span>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <div className="bg-card border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {[
                { icon: '👤', text: 'New user registered', time: '2 minutes ago', color: 'bg-blue-100' },
                { icon: '💳', text: 'Payment received', time: '1 hour ago', color: 'bg-green-100' },
                { icon: '📧', text: 'Email campaign sent', time: '2 hours ago', color: 'bg-purple-100' },
                { icon: '⚙️', text: 'Settings updated', time: '3 hours ago', color: 'bg-orange-100' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 pb-4 border-b last:border-b-0">
                  <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center text-lg`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{item.text}</div>
                    <div className="text-sm text-muted-foreground">{item.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-card border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '➕', text: 'New Project', color: 'bg-blue-500' },
                { icon: '👥', text: 'Add User', color: 'bg-green-500' },
                { icon: '📊', text: 'View Reports', color: 'bg-purple-500' },
                { icon: '⚙️', text: 'Settings', color: 'bg-orange-500' },
              ].map((action, i) => (
                <button
                  type="button"
                  key={i}
                  className={`${action.color} text-white p-4 rounded-lg hover:opacity-90 transition-opacity`}
                >
                  <div className="text-2xl mb-2">{action.icon}</div>
                  <div className="text-sm font-semibold">{action.text}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-card border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Order ID</th>
                  <th className="text-left p-3">Customer</th>
                  <th className="text-left p-3">Status</th>
                  <th className="text-left p-3">Amount</th>
                  <th className="text-left p-3">Date</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: '#1234', customer: 'John Doe', status: 'Completed', amount: '$129.99', date: 'Oct 20, 2025' },
                  { id: '#1233', customer: 'Jane Smith', status: 'Processing', amount: '$89.50', date: 'Oct 20, 2025' },
                  { id: '#1232', customer: 'Bob Johnson', status: 'Completed', amount: '$199.99', date: 'Oct 19, 2025' },
                  { id: '#1231', customer: 'Alice Brown', status: 'Pending', amount: '$45.00', date: 'Oct 19, 2025' },
                ].map((order, i) => (
                  <tr key={i} className="border-b hover:bg-muted/50">
                    <td className="p-3 font-mono text-sm">{order.id}</td>
                    <td className="p-3">{order.customer}</td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded text-xs ${
                        order.status === 'Completed' ? 'bg-green-100 text-green-700' :
                        order.status === 'Processing' ? 'bg-blue-100 text-blue-700' :
                        'bg-orange-100 text-orange-700'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="p-3 font-semibold">{order.amount}</td>
                    <td className="p-3 text-muted-foreground text-sm">{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="font-semibold text-blue-900 mb-2">💡 About This Demo:</p>
          <ul className="space-y-1 text-blue-800 text-sm">
            <li>✅ Uses DashboardLayout with collapsible sidebar</li>
            <li>✅ Responsive grid system</li>
            <li>✅ Interactive components</li>
            <li>✅ Ready for real data integration</li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
}
