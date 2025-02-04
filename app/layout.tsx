import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/smart-home/header";
import { Footer } from "@/components/smart-home/footer";
import { ScrollToTopButton } from "@/components/smart-home/scroll-to-top-button";
import { NewsletterSection } from "@/components/smart-home/newsletter-section";
import { Toaster } from 'sonner'

// Load Outfit for headings
const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

// Load Plus Jakarta Sans for body text
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: "Safirox - Energy Efficiency Solutions",
  description: "Smart solutions for energy management and cost savings in Nigerian homes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${jakarta.variable}`}>
        <Header />
        {children}
        <NewsletterSection />
        <Footer />
        <ScrollToTopButton />
        <Toaster />
      </body>
    </html>
  );
}
