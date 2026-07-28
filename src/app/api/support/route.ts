import { NextResponse } from "next/server"
import { Resend } from "resend"

export const runtime = "nodejs"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type SupportBody = {
   name?: unknown
   email?: unknown
   message?: unknown
}

function clean(value: unknown, max: number): string {
   if (typeof value !== "string") return ""
   return value.trim().slice(0, max)
}

export async function POST(request: Request) {
   try {
      const body = (await request.json()) as SupportBody
      const name = clean(body.name, 120)
      const email = clean(body.email, 200)
      const message = clean(body.message, 4000)

      if (!name || !email || !message) {
         return NextResponse.json(
            { error: "Please fill in your name, email, and message." },
            { status: 400 },
         )
      }

      if (!EMAIL_RE.test(email)) {
         return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 })
      }

      const apiKey = process.env.RESEND_API_KEY
      if (!apiKey) {
         console.error("RESEND_API_KEY is not configured")
         return NextResponse.json(
            { error: "Support form is temporarily unavailable. Please email hello@guidera.one." },
            { status: 503 },
         )
      }

      const to = process.env.SUPPORT_TO_EMAIL || "nidrosoft@outlook.com"
      const from =
         process.env.SUPPORT_FROM_EMAIL || "Cyriac from Guidera <onboarding@resend.dev>"

      const resend = new Resend(apiKey)
      const { error } = await resend.emails.send({
         from,
         to: [to],
         replyTo: email,
         subject: `[Guidera Support] Message from ${name}`,
         text: [
            "New message from the Guidera Support page",
            "",
            `Name: ${name}`,
            `Email: ${email}`,
            `Reply publicly as: Cyriac from Guidera <hello@guidera.one>`,
            "",
            "Message:",
            message,
         ].join("\n"),
         html: `
            <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;line-height:1.6;color:#222">
              <p><strong>New message from the Guidera Support page</strong></p>
              <p><strong>Name:</strong> ${escapeHtml(name)}<br/>
              <strong>Email:</strong> ${escapeHtml(email)}<br/>
              <strong>Reply as:</strong> Cyriac from Guidera &lt;hello@guidera.one&gt;</p>
              <p style="white-space:pre-wrap;border-left:3px solid #3FC39E;padding-left:12px">${escapeHtml(message)}</p>
            </div>
         `,
      })

      if (error) {
         console.error("Resend error:", error)
         return NextResponse.json(
            { error: "Could not send your message. Please email hello@guidera.one." },
            { status: 502 },
         )
      }

      return NextResponse.json({ ok: true })
   } catch (err) {
      console.error("Support API error:", err)
      return NextResponse.json(
         { error: "Could not send your message. Please email hello@guidera.one." },
         { status: 500 },
      )
   }
}

function escapeHtml(value: string): string {
   return value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;")
}
