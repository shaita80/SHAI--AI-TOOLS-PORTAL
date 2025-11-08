'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations, toolLinks } from '@/content/translations';
import { FileSearch, Search, Filter, FileText, Newspaper, ExternalLink } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface Tool {
  icon: LucideIcon;
  name: string;
  description: string;
  link: string;
}

export default function Tools() {
  const { language } = useLanguage();
  const t = translations[language].tools;

  const tools: Tool[] = [
    {
      icon: FileSearch,
      name: t.tool1.name,
      description: t.tool1.description,
      link: toolLinks[0],
    },
    {
      icon: Search,
      name: t.tool2.name,
      description: t.tool2.description,
      link: toolLinks[1],
    },
    {
      icon: Filter,
      name: t.tool3.name,
      description: t.tool3.description,
      link: toolLinks[2],
    },
    {
      icon: FileText,
      name: t.tool4.name,
      description: t.tool4.description,
      link: toolLinks[3],
    },
    {
      icon: Newspaper,
      name: t.tool5.name,
      description: t.tool5.description,
      link: toolLinks[4],
    },
  ];

  return (
    <section id="tools" className="py-20 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4 text-center">
          {t.title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-blue to-primary-turquoise mx-auto mb-16 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-gray-100 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-primary-blue to-primary-turquoise rounded-xl">
                  <tool.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-text-dark flex-1">
                  {tool.name}
                </h3>
              </div>

              <p className="text-text-medium leading-relaxed mb-8 flex-grow">
                {tool.description}
              </p>

              <a
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-blue to-primary-turquoise text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300 w-full"
                aria-label={`${t.launchButton} - ${tool.name}`}
              >
                {t.launchButton}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
