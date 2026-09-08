import type { Metadata } from "next"

import DownloadExperience from "../DownloadExperience"
import { createDownloadMetadata } from "../downloadMetadata"

export const metadata: Metadata = createDownloadMetadata("ios")

export default function IosDownloadPage() {
  return <DownloadExperience mode="ios" />
}
