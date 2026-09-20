import type { MetadataRoute } from "next"

const SITE_URL = "https://guidera.one"
const LAST_UPDATED = new Date("2026-09-20")

const routes = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/download", priority: 0.9, changeFrequency: "monthly" },
  { path: "/download/ios", priority: 0.9, changeFrequency: "monthly" },
  { path: "/download/android", priority: 0.7, changeFrequency: "monthly" },
  { path: "/feature-breakdown", priority: 0.8, changeFrequency: "monthly" },
  { path: "/pricing", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.6, changeFrequency: "yearly" },
  { path: "/our-story", priority: 0.6, changeFrequency: "yearly" },
  { path: "/support", priority: 0.5, changeFrequency: "monthly" },
  { path: "/community-guidelines", priority: 0.3, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  { path: "/cookies", priority: 0.2, changeFrequency: "yearly" },
  { path: "/gdpr", priority: 0.2, changeFrequency: "yearly" },
  { path: "/delete-account", priority: 0.2, changeFrequency: "yearly" },
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: LAST_UPDATED,
    changeFrequency,
    priority,
  }))
}
