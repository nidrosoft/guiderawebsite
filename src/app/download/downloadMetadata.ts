import type { Metadata } from "next"

import { APP_STORE_URL } from "@/lib/storeLinks"

type DownloadPlatform = "all" | "ios" | "android"

const SITE_URL = "https://guidera.one"

const platformCopy: Record<
  DownloadPlatform,
  {
    path: string
    title: string
    description: string
    image: string
    imageAlt: string
  }
> = {
  all: {
    path: "/download",
    title: "Download Guidera — Plan Smarter. Travel Safer.",
    description:
      "Get Guidera, the intelligent travel companion, for iPhone, iPad, or Android.",
    image: "/og-image.png",
    imageAlt: "Guidera — Plan smarter. Travel safer.",
  },
  ios: {
    path: "/download/ios",
    title: "Guidera for iPhone and iPad — Plan Smarter. Travel Safer.",
    description:
      "Download Guidera from the App Store and bring planning, packing, destination context, and travel tools together.",
    image: "/og-image.png",
    imageAlt: "Download Guidera on the App Store — Plan smarter. Travel safer.",
  },
  android: {
    path: "/download/android",
    title: "Guidera for Android — Plan Smarter. Travel Safer.",
    description:
      "Join Guidera for Android on Google Play while the app is in closed testing.",
    image: "/og-image-android.png",
    imageAlt: "Get Guidera on Google Play — Plan smarter. Travel safer.",
  },
}

export const createDownloadMetadata = (platform: DownloadPlatform): Metadata => {
  const copy = platformCopy[platform]
  const canonical = `${SITE_URL}${copy.path}`

  return {
    title: copy.title,
    description: copy.description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonical,
      siteName: "Guidera",
      title: copy.title,
      description: copy.description,
      images: [
        {
          url: copy.image,
          width: 1200,
          height: 630,
          alt: copy.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
      images: [copy.image],
      creator: "@guideraapp",
    },
    ...(platform !== "android"
      ? {
          itunes: {
            appId: "6760977450",
            appArgument: APP_STORE_URL,
          },
        }
      : {}),
  }
}
