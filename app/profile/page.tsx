import { requireAuth } from '@/lib/auth-helpers'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/content/translations'
import { User } from 'lucide-react'

export default async function ProfilePage() {
  const user = await requireAuth()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-8">
            <div className="flex items-center space-x-4">
              <div className="bg-white dark:bg-gray-700 rounded-full p-4">
                <User className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="text-white">
                <h1 className="text-3xl font-bold">{user.name || 'User'}</h1>
                <p className="text-indigo-100">{user.email}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Email</h3>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">{user.email}</p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Name</h3>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">{user.name || 'Not set'}</p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Role</h3>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                  user.role === 'ADMIN'
                    ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                    : user.role === 'PREMIUM'
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    : 'bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200'
                }`}>
                  {user.role === 'ADMIN' ? 'Administrator' : user.role === 'PREMIUM' ? 'Premium User' : 'User'}
                </span>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">User ID</h3>
                <p className="text-sm font-mono text-gray-900 dark:text-white truncate">{user.id}</p>
              </div>
            </div>

            {user.role === 'ADMIN' && (
              <div className="border-t dark:border-gray-700 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Admin Access</h3>
                <a
                  href="/admin"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                >
                  Go to Admin Dashboard
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
