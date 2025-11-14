# AI-Powered Medical Research Tools Portfolio

A modern, bilingual (Hebrew/English) portfolio website showcasing AI-powered medical research tools built with Google Gemini.

## Features

- **Bilingual Support**: Full Hebrew (RTL) and English (LTR) support
- **User Authentication**: Complete user management system with role-based access control
- **Responsive Design**: Mobile-first approach with smooth transitions
- **Modern UI**: Clean design with gradient accents and smooth animations
- **SEO Optimized**: Comprehensive meta tags and semantic HTML
- **Accessible**: WCAG compliant with keyboard navigation support
- **5 AI Research Tools**:
  - Medical Research Question Builder
  - PubMed Query Architect
  - PubMed Abstract Screening Tool
  - Clinical Article Appraisal
  - Find My Journal

### 🔐 Authentication Features

- **Three-Tier Access Control**: USER, PREMIUM, ADMIN roles
- **Secure Authentication**: NextAuth.js with bcrypt password hashing
- **Admin Dashboard**: User management interface for administrators
- **Protected Routes**: Middleware-level route protection
- **User Profiles**: Personalized user profile pages
- **Bilingual Auth UI**: Login/Register forms in Hebrew & English

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Authentication**: NextAuth.js
- **Database**: PostgreSQL (Vercel Postgres)
- **ORM**: Prisma
- **Password Hashing**: bcryptjs
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- PostgreSQL database (Vercel Postgres recommended)

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Configure your .env.local with:
# - Database URLs (from Vercel Postgres)
# - NEXTAUTH_SECRET (generate with: openssl rand -base64 32)
# - Your admin email

# Generate Prisma Client
npx prisma generate

# Push database schema
npx prisma db push

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### 🔐 Setting Up Authentication

For detailed authentication setup instructions, see **[AUTHENTICATION_SETUP.md](./AUTHENTICATION_SETUP.md)**

Quick steps:
1. Create a Vercel Postgres database
2. Configure environment variables in `.env.local`
3. Run `npx prisma db push`
4. Register with your admin email to get ADMIN access

## Project Structure

```
├── app/
│   ├── admin/              # Admin dashboard (ADMIN only)
│   ├── api/
│   │   ├── auth/           # Authentication API routes
│   │   └── admin/          # Admin API routes
│   ├── auth/
│   │   ├── login/          # Login page
│   │   └── register/       # Registration page
│   ├── premium/            # Premium content (PREMIUM & ADMIN)
│   ├── profile/            # User profile page
│   ├── resources/          # Resources page
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Tools.tsx           # Tools showcase
│   ├── Navigation.tsx      # Nav bar with user menu
│   ├── Footer.tsx          # Footer
│   └── SessionProvider.tsx # NextAuth session wrapper
├── contexts/
│   └── LanguageContext.tsx # Language state management
├── content/
│   └── translations.ts     # Bilingual content (incl. auth)
├── lib/
│   ├── auth.ts             # NextAuth configuration
│   ├── auth-helpers.ts     # Auth utility functions
│   └── prisma.ts           # Prisma client
├── prisma/
│   └── schema.prisma       # Database schema
├── types/
│   └── next-auth.d.ts      # NextAuth type extensions
├── middleware.ts           # Route protection middleware
└── public/                 # Static assets
```

## Deployment

### Deploy to Vercel

#### 1. Set Up Database

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Navigate to **Storage** → **Create Database**
3. Select **Postgres**
4. Copy the connection strings

#### 2. Configure Environment Variables

In your Vercel project settings:
- Add all variables from `.env.example`
- Use the database URLs from your Vercel Postgres
- Generate and add `NEXTAUTH_SECRET`
- Set `NEXTAUTH_URL` to your production domain
- Add your `ADMIN_EMAIL`

#### 3. Deploy

Push your code to GitHub and import in [Vercel](https://vercel.com):

```bash
git push origin main
```

Vercel will automatically:
- Detect Next.js
- Install dependencies
- Generate Prisma Client
- Build and deploy

Alternatively, use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

#### 4. Initialize Database

After first deployment, run:

```bash
npx prisma db push --skip-generate
```

Or use Vercel's terminal in the dashboard.

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
