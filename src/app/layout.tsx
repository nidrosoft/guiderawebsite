import "../styles/index.scss";
import "../../public/assets/css/responsive.css";
import "../../public/assets/css/responsive-custom.css";

import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://guidera.one"),
  title: {
    default: "Guidera — Your Entire Trip, Before You Even Plan It",
    template: "%s | Guidera",
  },
  description: "Guidera is the all-in-one AI travel app that plans your entire trip — personalized itineraries, real-time safety alerts, cultural insights, smart packing lists, and a global traveler community. Join 10,000+ on the waitlist.",
  keywords: [
    "AI travel app",
    "all-in-one trip planner",
    "AI trip planner",
    "travel itinerary generator",
    "smart travel app",
    "personalized travel",
    "travel safety alerts",
    "cultural travel guide",
    "packing list app",
    "travel community",
    "AI travel assistant",
    "trip planning app",
    "best travel app 2026",
    "travel app with AI",
    "Guidera",
  ],
  authors: [{ name: "Guidera Inc." }],
  creator: "Guidera Inc.",
  publisher: "Guidera Inc.",
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
    title: "Guidera — Your Entire Trip, Before You Even Plan It",
    description: "The AI-powered travel app that plans your entire trip — from personalized itineraries to safety alerts, packing lists, and a global traveler community.",
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
    title: "Guidera — Your Entire Trip, Before You Even Plan It",
    description: "The AI-powered travel app that plans your entire trip. Join 10,000+ travelers on the waitlist.",
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
      </body>
    </html>
  )
}
