'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/content/translations';
import { Languages } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].nav;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
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
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`text-xl font-bold transition-colors ${
                isScrolled ? 'text-primary-blue' : 'text-white'
              }`}
              aria-label="Home"
            >
              Shai Tamam
            </button>

            <div className="hidden md:flex items-center gap-6">
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
            </div>
          </div>

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
        </div>
      </div>
    </nav>
  );
}
