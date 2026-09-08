import type { Metadata } from "next"

import DownloadExperience from "./DownloadExperience"
import { createDownloadMetadata } from "./downloadMetadata"

export const metadata: Metadata = createDownloadMetadata("all")

export default function DownloadPage() {
  return <DownloadExperience mode="all" />
}
