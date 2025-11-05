'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/content/translations';
import { User } from 'lucide-react';

export default function About() {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="about" className="py-20 bg-bg-primary">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-8 justify-center">
          <User className="w-8 h-8 text-primary-blue" />
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark">
            {t.title}
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
          <p className="text-lg text-text-dark leading-relaxed">
            {t.bio}
          </p>
        </div>
      </div>
    </section>
  );
}
