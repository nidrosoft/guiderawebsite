"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useMemo, useState } from "react"

import appleIcon from "@/assets/images/icon/apple.svg"
import playstoreIcon from "@/assets/images/icon/playstore.svg"
import {
  ANDROID_DOWNLOAD_URL,
  APP_STORE_URL,
  PLAY_STORE_URL,
} from "@/lib/storeLinks"

import styles from "./download.module.scss"

type DownloadMode = "all" | "ios" | "android"

type DownloadExperienceProps = {
  mode: DownloadMode
}

const copyByMode: Record<
  DownloadMode,
  {
    eyebrow: string
    description: string
    image: string
    imageAlt: string
  }
> = {
  all: {
    eyebrow: "Your intelligent travel companion",
    description:
      "Bring planning, packing, destination context, expenses, and travel tools together in one place.",
    image: "/og-image.png",
    imageAlt: "Guidera — Plan smarter. Travel safer.",
  },
  ios: {
    eyebrow: "Guidera for iPhone and iPad",
    description:
      "Guidera is ready on the App Store. We’ll take you there automatically, or you can use the button below.",
    image: "/og-image.png",
    imageAlt: "Download Guidera on the App Store — Plan smarter. Travel safer.",
  },
  android: {
    eyebrow: "Guidera for Android",
    description: PLAY_STORE_URL
      ? "Guidera is ready on Google Play. We’ll take you there automatically, or you can use the button below."
      : "Guidera for Android is currently in closed testing. We’ll take eligible testers to Google Play automatically.",
    image: "/og-image-android.png",
    imageAlt: "Get Guidera on Google Play — Plan smarter. Travel safer.",
  },
}

const detectMobilePlatform = (): "ios" | "android" | null => {
  const userAgent = navigator.userAgent

  if (/android/i.test(userAgent)) return "android"

  if (
    /iPad|iPhone|iPod/i.test(userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  ) {
    return "ios"
  }

  return null
}

const StoreIcon = ({ platform }: { platform: "ios" | "android" }) => (
  <Image
    src={platform === "ios" ? appleIcon : playstoreIcon}
    alt=""
    className={styles.storeIcon}
  />
)

export default function DownloadExperience({ mode }: DownloadExperienceProps) {
  const copy = copyByMode[mode]
  const initialStatus =
    mode === "all"
      ? "Choose your platform"
      : `Preparing ${mode === "ios" ? "the App Store" : "Google Play"}…`
  const [status, setStatus] = useState(initialStatus)

  const automaticDestination = useMemo(() => {
    if (mode === "ios") return APP_STORE_URL
    if (mode === "android") return ANDROID_DOWNLOAD_URL
    return null
  }, [mode])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)

    // Useful for visual and metadata QA without being sent to a store.
    if (params.get("stay") === "1") {
      setStatus("Automatic store opening is paused for preview")
      return
    }

    let destination = automaticDestination
    let destinationLabel = mode === "ios" ? "the App Store" : "Google Play"

    if (mode === "all") {
      const platform = detectMobilePlatform()

      if (platform === "ios") {
        destination = APP_STORE_URL
        destinationLabel = "the App Store"
      } else if (platform === "android") {
        destination = ANDROID_DOWNLOAD_URL
        destinationLabel = "Google Play"
      } else {
        setStatus("Choose your platform")
        return
      }
    }

    if (!destination) return

    setStatus(`Opening ${destinationLabel}…`)
    const redirectTimer = window.setTimeout(() => {
      window.location.replace(destination)
    }, 700)

    return () => window.clearTimeout(redirectTimer)
  }, [automaticDestination, mode])

  const androidLabel = PLAY_STORE_URL ? "Get it on Google Play" : "Join Android testing"

  return (
    <main className={styles.page}>
      <div className={styles.ambientOne} />
      <div className={styles.ambientTwo} />

      <section className={styles.shell}>
        <div className={styles.content}>
          <Link href="/" className={styles.brand} aria-label="Visit the Guidera homepage">
            <Image src="/favicon.png" alt="" width={52} height={52} className={styles.logo} />
            <span>
              <strong>Guidera</strong>
              <small>Intelligent Travel Companion</small>
            </span>
          </Link>

          <p className={styles.eyebrow}>{copy.eyebrow}</p>
          <h1>
            Plan smarter.
            <br />
            Travel safer.
          </h1>
          <p className={styles.description}>{copy.description}</p>

          <div className={styles.actions}>
            {(mode === "all" || mode === "ios") && (
              <a className={`${styles.storeButton} ${styles.appleButton}`} href={APP_STORE_URL}>
                <StoreIcon platform="ios" />
                <span>
                  <small>Download on the</small>
                  <strong>App Store</strong>
                </span>
              </a>
            )}

            {(mode === "all" || mode === "android") && (
              <a
                className={`${styles.storeButton} ${styles.androidButton}`}
                href={ANDROID_DOWNLOAD_URL}
              >
                <StoreIcon platform="android" />
                <span>
                  <small>{PLAY_STORE_URL ? "Get it on" : "Available through"}</small>
                  <strong>{androidLabel}</strong>
                </span>
              </a>
            )}
          </div>

          <p className={styles.status} role="status" aria-live="polite">
            <span aria-hidden="true" />
            {status}
          </p>

          {mode !== "all" && (
            <Link href="/download?stay=1" className={styles.otherPlatforms}>
              View all download options
            </Link>
          )}
        </div>

        <div className={styles.visual}>
          <Image
            src={copy.image}
            alt={copy.imageAlt}
            width={1200}
            height={630}
            priority
            sizes="(max-width: 900px) 100vw, 58vw"
          />
        </div>
      </section>
    </main>
  )
}
