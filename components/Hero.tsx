'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/content/translations';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  const scrollToTools = () => {
    const toolsSection = document.getElementById('tools');
    toolsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-blue via-primary-blue to-primary-turquoise overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.2),transparent_50%)]"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {t.title}
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          {t.subtitle}
        </p>

        <button
          onClick={scrollToTools}
          className="inline-flex items-center gap-2 bg-white text-primary-blue px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          aria-label={t.scrollDown}
        >
          {t.scrollDown}
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/50" />
      </div>
    </section>
  );
}
