import "./globals.css";
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import site from "@/content/site.json";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { Announcement } from "@/components/site/announcement";
import { Inter, Outfit } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  metadataBase: new URL("https://psa-osu.vercel.app"),
  title: {
    default: `${site.name} — ${site.campus}`,
    template: `%s — ${site.name}`,
  },
  description: site.purpose,
  openGraph: {
    title: site.name,
    description: site.purpose,
    url: "https://psa-osu.vercel.app",
    siteName: site.name,
    images: [
      { url: "/og.png", width: 1200, height: 630, alt: site.name }
    ],
    locale: "en_US",
    type: "website",
  },
  keywords: ["Punjabi", "OSU", "Student Organization", "Culture", "Ohio State"],
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#8B1C1C",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable}`}>
      <body className="min-h-screen bg-gradient-to-b from-offwhite to-white dark:from-[#0b0b0c] dark:to-[#101012] text-charcoal dark:text-offwhite font-[var(--font-inter)]">
        <ThemeProvider attribute="class" forcedTheme="light" enableSystem={false}>
          <Announcement />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}


