import type { Metadata } from "next"
import LegalPageLayout from "@/components/common/LegalPageLayout"
import IubendaDocument from "@/components/common/IubendaDocument"
import { fetchIubendaDocument, IUBENDA } from "@/lib/iubenda"

export const metadata: Metadata = {
   title: "Privacy Policy — Guidera",
   description: "Learn how Guidera collects, uses, shares, and protects your personal information.",
   alternates: { canonical: "https://guidera.one/privacy" },
}

const PrivacyPage = async () => {
   const html = await fetchIubendaDocument("privacy")

   return (
      <LegalPageLayout title="Privacy Policy" embed>
         <IubendaDocument
            html={html}
            sourceUrl={IUBENDA.privacyUrl}
            label="Privacy Policy"
         />
      </LegalPageLayout>
   )
}

export default PrivacyPage
