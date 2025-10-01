import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hash Haven | Lifestyle, Wellness, Beauty & Home Living Blog",
  description: "Discover trending lifestyle tips, wellness routines, beauty secrets, home organization, healthy recipes, and modern living inspiration at Hash Haven.",
  keywords: "lifestyle blog, wellness tips, beauty secrets, home organization, healthy recipes, skincare routine, home decor, baby care, fitness tips, meal prep, modern living",
  authors: [{ name: "Hash Haven" }],
  openGraph: {
    title: "Hash Haven | Lifestyle, Wellness, Beauty & Home Living Blog",
    description: "Your go-to source for trending lifestyle content including wellness, beauty, home living, and modern family life.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hash Haven | Lifestyle, Wellness, Beauty & Home Living Blog",
    description: "Trending lifestyle tips, wellness routines, beauty secrets, and home living inspiration.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Providers>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
