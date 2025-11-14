'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/content/translations';
import { Languages, User, LogOut, Shield, UserCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';

export default function Navigation() {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].nav;
  const [isScrolled, setIsScrolled] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const { data: session, status } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (isHomePage) {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className={`text-xl font-bold transition-colors ${
                isScrolled ? 'text-primary-blue' : 'text-white'
              }`}
              aria-label="Home"
            >
              Shai Tamam
            </Link>

            <div className="hidden md:flex items-center gap-6">
              {isHomePage ? (
                <>
                  <button
                    onClick={() => scrollToSection('about')}
                    className={`font-medium transition-colors hover:text-primary-turquoise ${
                      isScrolled ? 'text-text-dark' : 'text-white'
                    }`}
                  >
                    {t.about}
                  </button>
                  <button
                    onClick={() => scrollToSection('tools')}
                    className={`font-medium transition-colors hover:text-primary-turquoise ${
                      isScrolled ? 'text-text-dark' : 'text-white'
                    }`}
                  >
                    {t.tools}
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/#about"
                    className={`font-medium transition-colors hover:text-primary-turquoise ${
                      isScrolled ? 'text-text-dark' : 'text-white'
                    }`}
                  >
                    {t.about}
                  </Link>
                  <Link
                    href="/#tools"
                    className={`font-medium transition-colors hover:text-primary-turquoise ${
                      isScrolled ? 'text-text-dark' : 'text-white'
                    }`}
                  >
                    {t.tools}
                  </Link>
                </>
              )}
              <Link
                href="/resources"
                className={`font-medium transition-colors hover:text-primary-turquoise ${
                  isScrolled ? 'text-text-dark' : 'text-white'
                }`}
              >
                {t.resources}
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all hover:scale-105 ${
                isScrolled
                  ? 'bg-primary-blue text-white hover:bg-primary-turquoise'
                  : 'bg-white text-primary-blue hover:bg-white/90'
              }`}
              aria-label={`Switch to ${language === 'en' ? 'Hebrew' : 'English'}`}
            >
              <Languages className="w-5 h-5" />
              <span>{language === 'en' ? 'עברית' : 'English'}</span>
            </button>

            {/* User Menu */}
            {status === 'loading' ? (
              <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
            ) : session ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all hover:scale-105 ${
                    isScrolled
                      ? 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  <UserCircle className="w-5 h-5" />
                  <span className="hidden md:inline">{session.user.name || session.user.email}</span>
                </button>

                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-xl py-2 z-50">
                    <div className="px-4 py-2 border-b dark:border-gray-700">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        {session.user.name || 'User'}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{session.user.email}</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                        {session.user.role === 'ADMIN' ? '👑 Administrator' : session.user.role === 'PREMIUM' ? '⭐ Premium' : '👤 User'}
                      </p>
                    </div>

                    <Link
                      href="/profile"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <User className="w-4 h-4" />
                      {t.profile}
                    </Link>

                    {session.user.role === 'ADMIN' && (
                      <Link
                        href="/admin"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => setShowUserMenu(false)}
                      >
                        <Shield className="w-4 h-4" />
                        {t.admin}
                      </Link>
                    )}

                    <button
                      onClick={() => {
                        setShowUserMenu(false)
                        signOut({ callbackUrl: '/' })
                      }}
                      className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <LogOut className="w-4 h-4" />
                      {t.logout}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/auth/login"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all hover:scale-105 ${
                  isScrolled
                    ? 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <User className="w-5 h-5" />
                <span className="hidden md:inline">{t.login}</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
