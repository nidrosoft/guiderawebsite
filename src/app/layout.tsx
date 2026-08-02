import "../styles/index.scss";
import "../../public/assets/css/responsive.css";
import "../../public/assets/css/responsive-custom.css";

import type { Metadata } from "next"
import Script from "next/script"
import { IUBENDA } from "@/lib/iubenda"

export const metadata: Metadata = {
  metadataBase: new URL("https://guidera.one"),
  title: {
    default: "Guidera — AI-Assisted Travel Planning for iOS",
    template: "%s | Guidera",
  },
  description: "Guidera is an AI-assisted iOS travel app for trip planning, travel search and comparison, destination context, packing, expenses, and traveler community features.",
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
    title: "Guidera — AI-Assisted Travel Planning for iOS",
    description: "An AI-assisted iOS travel app for itineraries, travel comparison, destination context, packing, expenses, and traveler community features.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Guidera — AI Travel App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guidera — AI-Assisted Travel Planning for iOS",
    description: "An AI-assisted iOS travel app for planning, comparison, and destination context.",
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
