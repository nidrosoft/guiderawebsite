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

   return sanitizeIubendaHtml(data.content)
}
