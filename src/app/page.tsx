import type { Metadata } from "next"

import Home from "@/components/landing"
import Wrapper from "@/layouts/Wrapper"

const APP_STORE_URL = "https://apps.apple.com/us/app/guidera/id6760977450"

export const metadata: Metadata = {
  title: "Guidera: AI Trip Planner & Travel Safety App",
  description:
    "Build personalized itineraries, import bookings, compare travel options, organize packing lists and expenses, and access flight guidance, travel safety, and language tools.",
  alternates: { canonical: "https://guidera.one" },
  itunes: {
    appId: "6760977450",
    appArgument: APP_STORE_URL,
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://guidera.one/#organization",
      name: "Nitrosoft LLC",
      url: "https://guidera.one",
      logo: "https://guidera.one/favicon.png",
    },
    {
      "@type": "WebSite",
      "@id": "https://guidera.one/#website",
      name: "Guidera",
      url: "https://guidera.one",
      publisher: { "@id": "https://guidera.one/#organization" },
    },
    {
      "@type": ["SoftwareApplication", "MobileApplication"],
      "@id": "https://guidera.one/#app",
      name: "Guidera",
      alternateName: "Guidera AI Trip Planner",
      applicationCategory: "TravelApplication",
      operatingSystem: "iOS; iPadOS",
      description:
        "AI trip planner for personalized itineraries, booking imports, flight guidance, packing lists, expense tracking, travel safety, language tools, and traveler communities.",
      url: "https://guidera.one",
      downloadUrl: APP_STORE_URL,
      installUrl: APP_STORE_URL,
      image: "https://guidera.one/og-image.png",
      publisher: { "@id": "https://guidera.one/#organization" },
      featureList: [
        "Personalized AI itineraries",
        "Booking and travel-document imports",
        "Flight guidance and travel safety information",
        "Packing lists and expense tracking",
        "Language and cultural guidance",
        "Traveler communities",
      ],
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: APP_STORE_URL,
      },
    },
  ],
}

const Page = () => {
  return (
    <Wrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Home />
    </Wrapper>
  )
}

export default Page
