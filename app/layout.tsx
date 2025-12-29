import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tinzwave | Empowering Africa with Technology & Talent",
  description:
    "Transform your business with AI-powered software solutions, digital services, and world-class tech training. Tinzwave: Leading African tech education and innovation company.",
  keywords:
    "AI software development, tech training, digital marketing, web development, mobile app, Nigeria, Lagos",
  authors: [{ name: "Tinzwave Team" }],
  creator: "Tinzwave",
  publisher: "Tinzwave",
  robots: "index, follow",
  canonical: "https://tinzwave.com",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://tinzwave.com",
    siteName: "Tinzwave",
    title: "Tinzwave | Empowering Africa with Technology & Talent",
    description:
      "AI-powered software solutions, digital services, and tech training for African businesses and individuals.",
    images: [
      {
        url: "https://tinzwave.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tinzwave - Tech Education & Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tinzwave | Empowering Africa with Technology & Talent",
    description:
      "AI-powered software solutions, digital services, and tech training for African businesses and individuals.",
    images: ["https://tinzwave.com/og-image.jpg"],
    creator: "@tinzwave",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  icons: {
    icon: [
      {
        url: "/tinzwave-icon.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/tinzwave-icon.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/tinzwave-icon.png",
  },
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Tinzwave",
              url: "https://tinzwave.com",
              logo: "https://tinzwave.com/tinzwave-logo.png",
              description:
                "AI-powered software solutions, digital services, and tech training company in Nigeria",
              sameAs: [
                "https://facebook.com/tinzwave",
                "https://twitter.com/tinzwave",
                "https://instagram.com/tinzwave",
                "https://linkedin.com/company/tinzwave",
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "E10 Adeniran Ogunsanya St, Surulere",
                addressLocality: "Lagos",
                addressCountry: "NG",
                postalCode: "100001",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                telephone: "+234-916-105-2706",
                email: "info@tinzwave.com",
              },
            }),
          }}
        />
        <meta name="theme-color" content="#020617" />
        <meta name="msapplication-TileColor" content="#020617" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
