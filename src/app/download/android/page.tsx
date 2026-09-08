import type { Metadata } from "next"

import DownloadExperience from "../DownloadExperience"
import { createDownloadMetadata } from "../downloadMetadata"

export const metadata: Metadata = createDownloadMetadata("android")

export default function AndroidDownloadPage() {
  return <DownloadExperience mode="android" />
}
