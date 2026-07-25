import type { Metadata } from "next"
import LegalPageLayout from "@/components/common/LegalPageLayout"
import IubendaDocument from "@/components/common/IubendaDocument"
import { fetchIubendaDocument, IUBENDA } from "@/lib/iubenda"

export const metadata: Metadata = {
   title: "Cookie Policy — Guidera",
   description: "Learn how Guidera uses cookies and similar technologies.",
   alternates: { canonical: "https://guidera.one/cookies" },
}

const CookiesPage = async () => {
   const html = await fetchIubendaDocument("cookies")

   return (
      <LegalPageLayout title="Cookie Policy" embed>
         <IubendaDocument
            html={html}
            sourceUrl={IUBENDA.cookiePolicyUrl}
            label="Cookie Policy"
         />
      </LegalPageLayout>
   )
}

export default CookiesPage
