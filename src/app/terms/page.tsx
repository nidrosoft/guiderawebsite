import type { Metadata } from "next"
import LegalPageLayout from "@/components/common/LegalPageLayout"
import IubendaDocument from "@/components/common/IubendaDocument"
import { fetchIubendaDocument, IUBENDA } from "@/lib/iubenda"

export const metadata: Metadata = {
   title: "Terms of Service — Guidera",
   description: "Read the terms and conditions governing the use of Guidera, your AI-powered travel companion.",
   alternates: { canonical: "https://guidera.one/terms" },
}

const TermsPage = async () => {
   const html = await fetchIubendaDocument("terms")

   return (
      <LegalPageLayout title="Terms of Service" embed>
         <IubendaDocument
            html={html}
            sourceUrl={IUBENDA.termsUrl}
            label="Terms and Conditions"
         />
      </LegalPageLayout>
   )
}

export default TermsPage
