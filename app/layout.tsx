import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import SessionProvider from "@/components/SessionProvider";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Shai Tamam - AI-Powered Medical Research Tools",
  description: "Professional suite of Google Gemini-based tools for systematic literature reviews and clinical research analysis. Expert tools for evidence-based medical research.",
  keywords: [
    "medical research",
    "AI tools",
    "systematic review",
    "PubMed",
    "clinical research",
    "medical information",
    "evidence-based medicine",
    "Google Gemini",
  ],
  authors: [{ name: "Shai Tamam" }],
  openGraph: {
    title: "Shai Tamam - AI-Powered Medical Research Tools",
    description: "Professional suite of Google Gemini-based tools for systematic literature reviews and clinical research analysis.",
    type: "website",
    locale: "en_US",
    alternateLocale: "he_IL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shai Tamam - AI-Powered Medical Research Tools",
    description: "Professional suite of Google Gemini-based tools for systematic literature reviews and clinical research analysis.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <SessionProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
