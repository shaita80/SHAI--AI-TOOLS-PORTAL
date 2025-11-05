# AI-Powered Medical Research Tools Portfolio

A modern, bilingual (Hebrew/English) portfolio website showcasing AI-powered medical research tools built with Google Gemini.

## Features

- **Bilingual Support**: Full Hebrew (RTL) and English (LTR) support
- **Responsive Design**: Mobile-first approach with smooth transitions
- **Modern UI**: Clean design with gradient accents and smooth animations
- **SEO Optimized**: Comprehensive meta tags and semantic HTML
- **Accessible**: WCAG compliant with keyboard navigation support
- **4 AI Research Tools**:
  - Medical Research Question Builder
  - PubMed Query Architect
  - PubMed Abstract Screening Tool
  - Clinical Article Appraisal

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Tools.tsx           # Tools showcase
│   ├── Navigation.tsx      # Nav bar with language toggle
│   └── Footer.tsx          # Footer
├── contexts/
│   └── LanguageContext.tsx # Language state management
├── content/
│   └── translations.ts     # Bilingual content
└── public/                 # Static assets
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

Alternatively, use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

## Customization

### Updating Content

Edit translations in `content/translations.ts` to update text content in both languages.

### Changing Colors

Modify the color palette in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    blue: "#2563eb",
    turquoise: "#06b6d4",
  },
  // ... other colors
}
```

### Adding Tools

Add new tools in `content/translations.ts` and update the `Tools.tsx` component.

## License

© 2025 Shai Tamam. All rights reserved.

## Author

**Shai Tamam**
- Medical Information Specialist at MDI Health Technologies
- AI Analyst at Rabin Medical Center (Beilinson)

---

Built with Next.js and Google Gemini
