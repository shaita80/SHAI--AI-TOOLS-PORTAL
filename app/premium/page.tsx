import { requirePremium } from '@/lib/auth-helpers'
import { Crown, Sparkles } from 'lucide-react'

export default async function PremiumPage() {
  const user = await requirePremium()

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-yellow-500 to-purple-600 px-6 py-8">
            <div className="flex items-center justify-center space-x-4 text-white">
              <Crown className="w-16 h-16" />
              <div>
                <h1 className="text-4xl font-bold">Premium Content</h1>
                <p className="text-yellow-100">Exclusive access for Premium & Admin users</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-8 space-y-6">
            <div className="bg-gradient-to-r from-yellow-100 to-purple-100 dark:from-yellow-900/20 dark:to-purple-900/20 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <Sparkles className="w-8 h-8 text-yellow-600 dark:text-yellow-400 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Welcome, {user.name || 'Premium User'}!
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    You have premium access to this section. This is an example of a protected page
                    that only PREMIUM and ADMIN users can access.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Premium Features
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="text-yellow-500">⭐</span>
                    Advanced AI-powered research tools
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-yellow-500">⭐</span>
                    Priority support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-yellow-500">⭐</span>
                    Unlimited searches
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-yellow-500">⭐</span>
                    Export to multiple formats
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Your Premium Benefits
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Access to premium research tools
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Advanced filtering options
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Saved searches and preferences
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Early access to new features
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-2">
                💡 Example Implementation
              </h3>
              <p className="text-blue-800 dark:text-blue-200 text-sm">
                This page demonstrates role-based access control. Only users with PREMIUM or ADMIN
                roles can view this content. The access control is enforced both at the middleware
                level and through server-side authentication checks using <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">requirePremium()</code>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
