import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import ResourcesHero from '@/components/ResourcesHero';
import ResourceTools from '@/components/ResourceTools';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Resources - AI Tools for Medical Research | Shai Tamam',
  description: 'Curated collection of commercial AI platforms for evidence-based medical research. Discover the best tools for literature reviews, citation analysis, and academic search.',
  keywords: [
    'AI medical research tools',
    'Evidence Hunt',
    'Consensus',
    'Elicit',
    'Scite',
    'Research Rabbit',
    'Connected Papers',
    'Semantic Scholar',
    'Perplexity Academic',
    'literature review tools',
    'academic search engines',
  ],
  openGraph: {
    title: 'Resources - AI Tools for Medical Research',
    description: 'Curated collection of commercial AI platforms for evidence-based medical research.',
    type: 'website',
  },
};

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ResourcesHero />
      <ResourceTools />
      <Footer />
    </main>
  );
}
