import type { Metadata } from "next"
import FeatureBreakdownPage from "@/components/feature-breakdown/FeatureBreakdownPage"

export const metadata: Metadata = {
  title: "Full Feature Breakdown",
  description:
    "See everything included with Guidera, from free travel discovery and community tools to Guidera Plus planning, AI, safety, expense, and flight protection features.",
  alternates: {
    canonical: "https://guidera.one/feature-breakdown",
  },
  openGraph: {
    type: "website",
    url: "https://guidera.one/feature-breakdown",
    title: "Everything you can do with Guidera",
    description:
      "Explore Guidera's complete feature set for planning, understanding, protecting, and remembering every trip.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Guidera full feature breakdown",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Everything you can do with Guidera",
    description:
      "Explore Guidera's complete feature set for planning, understanding, protecting, and remembering every trip.",
    images: ["/og-image.png"],
  },
}

export default function FeatureBreakdown() {
  return <FeatureBreakdownPage />
}
