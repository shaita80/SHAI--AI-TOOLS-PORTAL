'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations, resourceLinks, resourcePricing } from '@/content/translations';
import { Search, FileSearch, FileText, CheckCircle, Rabbit, Network, GraduationCap, Zap, ExternalLink } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ResourceTool {
  icon: LucideIcon;
  name: string;
  category: string;
  description: string;
  features: string[];
  link: string;
  pricing: string;
}

export default function ResourceTools() {
  const { language } = useLanguage();
  const t = translations[language].resources;

  const tools: ResourceTool[] = [
    {
      icon: Search,
      name: t.tool1.name,
      category: t.tool1.category,
      description: t.tool1.description,
      features: t.tool1.features,
      link: resourceLinks[0],
      pricing: resourcePricing[0],
    },
    {
      icon: FileSearch,
      name: t.tool2.name,
      category: t.tool2.category,
      description: t.tool2.description,
      features: t.tool2.features,
      link: resourceLinks[1],
      pricing: resourcePricing[1],
    },
    {
      icon: FileText,
      name: t.tool3.name,
      category: t.tool3.category,
      description: t.tool3.description,
      features: t.tool3.features,
      link: resourceLinks[2],
      pricing: resourcePricing[2],
    },
    {
      icon: CheckCircle,
      name: t.tool4.name,
      category: t.tool4.category,
      description: t.tool4.description,
      features: t.tool4.features,
      link: resourceLinks[3],
      pricing: resourcePricing[3],
    },
    {
      icon: Rabbit,
      name: t.tool5.name,
      category: t.tool5.category,
      description: t.tool5.description,
      features: t.tool5.features,
      link: resourceLinks[4],
      pricing: resourcePricing[4],
    },
    {
      icon: Network,
      name: t.tool6.name,
      category: t.tool6.category,
      description: t.tool6.description,
      features: t.tool6.features,
      link: resourceLinks[5],
      pricing: resourcePricing[5],
    },
    {
      icon: GraduationCap,
      name: t.tool7.name,
      category: t.tool7.category,
      description: t.tool7.description,
      features: t.tool7.features,
      link: resourceLinks[6],
      pricing: resourcePricing[6],
    },
    {
      icon: Zap,
      name: t.tool8.name,
      category: t.tool8.category,
      description: t.tool8.description,
      features: t.tool8.features,
      link: resourceLinks[7],
      pricing: resourcePricing[7],
    },
  ];

  const getPricingBadgeStyle = (pricing: string) => {
    switch (pricing) {
      case 'free':
        return 'bg-success text-white';
      case 'freemium':
        return 'bg-primary-turquoise text-white';
      case 'paid':
        return 'bg-text-medium text-white';
      default:
        return 'bg-text-medium text-white';
    }
  };

  const getPricingLabel = (pricing: string) => {
    switch (pricing) {
      case 'free':
        return t.pricing.free;
      case 'freemium':
        return t.pricing.freemium;
      case 'paid':
        return t.pricing.paid;
      default:
        return pricing;
    }
  };

  return (
    <section className="py-20 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-gray-100 flex flex-col"
            >
              {/* Header with icon and pricing */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-primary-blue to-primary-turquoise rounded-xl">
                  <tool.icon className="w-6 h-6 text-white" />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getPricingBadgeStyle(tool.pricing)}`}>
                  {getPricingLabel(tool.pricing)}
                </span>
              </div>

              {/* Tool name */}
              <h3 className="text-xl font-bold text-text-dark mb-2">
                {tool.name}
              </h3>

              {/* Category badge */}
              <span className="inline-block px-3 py-1 bg-bg-secondary text-primary-blue text-sm font-medium rounded-lg mb-4 w-fit">
                {tool.category}
              </span>

              {/* Description */}
              <p className="text-text-medium text-sm leading-relaxed mb-4">
                {tool.description}
              </p>

              {/* Key Features */}
              <div className="mb-6 flex-grow">
                <ul className="space-y-2">
                  {tool.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm text-text-dark">
                      <span className="text-primary-turquoise mt-1 flex-shrink-0">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visit button */}
              <a
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-blue to-primary-turquoise text-white px-5 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300 w-full"
                aria-label={`${t.visitButton} - ${tool.name}`}
              >
                {t.visitButton}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
