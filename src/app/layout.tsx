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
  title: "Hash Haven | Empowering Mothers Through Resilience & Wellness",
  description: "Personal brand website of Hash Haven - sharing stories of motherhood, property management, wellness, and resilience. Digital products and resources for empowered living.",
  keywords: "motherhood, wellness, resilience, property management, digital products, personal brand",
  authors: [{ name: "Hash Haven" }],
  openGraph: {
    title: "Hash Haven | Empowering Mothers Through Resilience & Wellness",
    description: "Personal brand website sharing stories of motherhood, wellness, and resilience.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hash Haven | Empowering Mothers Through Resilience & Wellness",
    description: "Personal brand website sharing stories of motherhood, wellness, and resilience.",
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
