import "../styles/index.scss";
import "../../public/assets/css/responsive.css";
import "../../public/assets/css/responsive-custom.css";

import type { Metadata } from "next"
import Script from "next/script"
import { IUBENDA } from "@/lib/iubenda"

export const metadata: Metadata = {
  metadataBase: new URL("https://guidera.one"),
  title: {
    default: "Guidera — Your AI Travel Companion",
    template: "%s | Guidera",
  },
  description: "Plan smarter and travel with more context. Build personalized itineraries, organize bookings, get safety and cultural guidance, and connect with travelers in one iOS app.",
  keywords: [
    "AI travel app",
    "AI trip planner",
    "AI trip planner",
    "travel itinerary generator",
    "smart travel app",
    "personalized travel",
    "travel safety information",
    "cultural travel guide",
    "packing list app",
    "travel community",
    "AI travel assistant",
    "trip planning app",
    "travel app with AI",
    "Guidera",
  ],
  authors: [{ name: "Nitrosoft LLC" }],
  creator: "Nitrosoft LLC",
  publisher: "Nitrosoft LLC",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://guidera.one",
    siteName: "Guidera",
    title: "Guidera — Your AI Travel Companion",
    description: "Personalized trip planning, organized bookings, safety and cultural guidance, and traveler community in one iOS app.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Guidera, your AI travel companion for planning, organizing, and exploring",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guidera — Your AI Travel Companion",
    description: "Plan smarter with personalized itineraries, organized bookings, safety and cultural guidance, and traveler community.",
    images: ["/og-image.png"],
    creator: "@guideraapp",
  },
  alternates: {
    canonical: "https://guidera.one",
  },
  category: "Travel",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const isDev = process.env.NODE_ENV === 'development'

  return (
    <html lang="en" suppressHydrationWarning={isDev}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-navbutton-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Guidera" />
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Montserrat:ital,wght@0,900;1,900&family=Pacifico&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" />
      </head>
      <body suppressHydrationWarning={true}>
        {children}
        <Script
          src={IUBENDA.cookieBannerScript}
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
