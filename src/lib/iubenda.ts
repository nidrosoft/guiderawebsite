const IUBENDA_ID = "49463084"

export const IUBENDA = {
   id: IUBENDA_ID,
   privacyUrl: `https://www.iubenda.com/privacy-policy/${IUBENDA_ID}`,
   termsUrl: `https://www.iubenda.com/terms-and-conditions/${IUBENDA_ID}`,
   cookiePolicyUrl: `https://www.iubenda.com/privacy-policy/${IUBENDA_ID}/cookie-policy`,
   cookieBannerScript: "https://embeds.iubenda.com/widgets/adedaf1c-c36a-402f-a66d-df6ddb181984.js",
} as const

type IubendaDocType = "privacy" | "terms" | "cookies"

const API_PATH: Record<IubendaDocType, string> = {
   privacy: `https://www.iubenda.com/api/privacy-policy/${IUBENDA_ID}`,
   terms: `https://www.iubenda.com/api/terms-and-conditions/${IUBENDA_ID}`,
   cookies: `https://www.iubenda.com/api/privacy-policy/${IUBENDA_ID}/cookie-policy`,
}

type IubendaApiResponse = {
   success?: boolean
   content?: string
}

/** Strip scripts/handlers from trusted iubenda HTML before rendering. */
function sanitizeIubendaHtml(html: string): string {
   return html
      .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
      .replace(/\son\w+\s*=\s*(['"])[\s\S]*?\1/gi, "")
      .replace(/\son\w+\s*=\s*[^\s>]+/gi, "")
}

/**
 * Iubenda's generic UGC clause says the owner does not filter or moderate
 * content. That boilerplate is inaccurate for Guidera, whose community writes
 * are screened before publication and remain reportable after publication.
 * Keep this narrow amendment until the same clause is disabled in Iubenda.
 */
function applyGuideraTermsAmendments(html: string): string {
   return html.replace(
      "<p>Users are solely liable for any content they upload, post, share, or provide through this Application. Users acknowledge and accept that <strong>the Owner does not filter or moderate such content</strong>.</p>",
      "<p>Users remain responsible for content they upload, post, share, or provide through this Application. Guidera uses automated pre-publication safety filters and human review of user reports to enforce these Terms and the Community Guidelines. These controls reduce risk but cannot guarantee that every violation will be detected before publication.</p>",
   )
}

function applyGuideraEntityName(html: string): string {
   return html.replaceAll("Nidrosoft LLC", "Nitrosoft LLC")
}

export async function fetchIubendaDocument(type: IubendaDocType): Promise<string> {
   const res = await fetch(API_PATH[type], {
      next: { revalidate: 3600 },
      headers: { Accept: "application/json" },
   })

   if (!res.ok) {
      throw new Error(`Failed to load iubenda ${type} document (${res.status})`)
   }

   const data = (await res.json()) as IubendaApiResponse
   if (!data.success || !data.content) {
      throw new Error(`iubenda ${type} document response was empty`)
   }

   const entityCorrected = applyGuideraEntityName(data.content)
   const content = type === "terms" ? applyGuideraTermsAmendments(entityCorrected) : entityCorrected
   return sanitizeIubendaHtml(content)
}
