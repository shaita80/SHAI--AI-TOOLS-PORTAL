'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/content/translations';
import { Mail, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="bg-text-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold mb-2">Shai Tamam</p>
            <p className="text-white/70 text-sm">{t.copyright}</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:shai.tamam@example.com"
              className="flex items-center gap-2 text-white/80 hover:text-primary-turquoise transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/shai-tamam"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-primary-turquoise transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm flex items-center justify-center gap-2">
            {t.builtWith}
            <Heart className="w-4 h-4 text-red-400 fill-red-400 animate-pulse" />
          </p>
        </div>
      </div>
    </footer>
  );
}
