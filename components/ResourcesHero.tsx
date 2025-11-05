'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/content/translations';

export default function ResourcesHero() {
  const { language } = useLanguage();
  const t = translations[language].resources;

  return (
    <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary-blue via-primary-blue to-primary-turquoise overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.2),transparent_50%)]"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          {t.title}
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
          {t.subtitle}
        </p>
      </div>
    </section>
  );
}
