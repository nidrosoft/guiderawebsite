import type { Metadata } from "next"
import Link from "next/link"
import LegalPageLayout from "@/components/common/LegalPageLayout"
import SupportContactForm from "@/components/support/SupportContactForm"

export const metadata: Metadata = {
   title: "Guidera Support",
   description:
      "Get help with Guidera — contact Cyriac from Guidera at hello@guidera.one, browse FAQs, and find links to privacy, terms, and account deletion.",
   alternates: { canonical: "https://guidera.one/support" },
   robots: { index: true, follow: true },
}

const BRAND = "#3FC39E"
const LINK = { color: BRAND, fontWeight: 600 } as const

const faqs = [
   {
      q: "Getting started / creating an account",
      a: (
         <>
            Download Guidera from the App Store and create an account with{" "}
            <strong>Sign in with Apple</strong>, <strong>Google</strong>,{" "}
            <strong>Facebook</strong>, or your <strong>phone number</strong>{" "}
            (one-time SMS code). You can browse travel deals and destinations without an
            account; signing in unlocks saved trips, AI planning, and other personalized
            features.
         </>
      ),
   },
   {
      q: "Password reset / sign-in trouble",
      a: (
         <>
            Guidera uses passwordless and social sign-in (Apple, Google, Facebook, or phone).
            If you can&apos;t get into your account, try the same sign-in method you used
            originally. For phone sign-in, request a new one-time code from the login screen.
            Still stuck? Email{" "}
            <a href="mailto:hello@guidera.one" style={LINK}>
               hello@guidera.one
            </a>{" "}
            from the email or phone associated with your account.
         </>
      ),
   },
   {
      q: "Guidera Pro subscription",
      a: (
         <>
            Guidera Pro unlocks unlimited AI trip tools, AI Vision, expenses, collaboration,
            and more. Billing is handled by Apple through your Apple ID (via RevenueCat). To
            manage, cancel, or turn off auto-renewal: open iPhone{" "}
            <strong>Settings → your name → Subscriptions → Guidera</strong>. Use{" "}
            <strong>Restore Purchases</strong> on the membership screen in the app if Pro
            doesn&apos;t appear after purchase. Refund requests for App Store purchases are
            handled by Apple.
         </>
      ),
   },
   {
      q: "Trips — free vs Pro",
      a: (
         <>
            On the free plan you can keep <strong>1 active trip</strong>, plus limited AI
            Trip Snapshots, Journey Briefings, and chat messages. Upgrade to Guidera Pro for
            unlimited active trips and full AI planning. Create or import a trip from the
            Trips tab in the app.
         </>
      ),
   },
   {
      q: "AI Vision & Expenses",
      a: (
         <>
            <strong>AI Vision</strong> (scan and translate menus, signs, and scenes) and{" "}
            <strong>Expenses</strong> (receipt scanning, tracking, and splitting) are Guidera
            Pro features. Free users can explore the rest of the app; upgrade in Membership
            when you&apos;re ready.
         </>
      ),
   },
   {
      q: "Safety / SOS",
      a: (
         <>
            Guidera&apos;s safety tools (including SOS and safety reports/zones) help you stay
            informed and reach help contacts quickly.{" "}
            <strong>
               They are not a replacement for emergency services.
            </strong>{" "}
            In a real emergency, always call your local emergency number first (for example
            911 in the US).
         </>
      ),
   },
   {
      q: "Data & privacy / delete my account",
      a: (
         <>
            You can delete your account in the app:{" "}
            <strong>Settings → Account → Delete Account</strong>. Or follow the steps on our{" "}
            <Link href="/delete-account" style={LINK}>
               Account Deletion
            </Link>{" "}
            page, or email{" "}
            <a href="mailto:hello@guidera.one?subject=Delete%20My%20Account" style={LINK}>
               hello@guidera.one
            </a>
            . See our{" "}
            <Link href="/privacy" style={LINK}>
               Privacy Policy
            </Link>{" "}
            for full details. Deleting your account does not cancel a Guidera Pro
            subscription — cancel that in Apple ID Subscriptions.
         </>
      ),
   },
   {
      q: "App won't load / stuck on launch",
      a: (
         <>
            Update Guidera to the latest version in the App Store, check your internet
            connection, force-quit and reopen the app, or reinstall if needed. If it still
            fails, email us with your device model and iOS version so we can help.
         </>
      ),
   },
]

const SupportPage = () => {
   return (
      <LegalPageLayout title="Guidera Support">
         <p style={{ fontSize: "18px", color: "#555", marginBottom: "28px" }}>
            Need help with Guidera? Reach the team directly — we&apos;re here for account,
            billing, trips, and app questions.
         </p>

         <section
            id="contact"
            aria-labelledby="contact-heading"
            style={{
               background: "#F4FBF8",
               border: "1px solid #C9EFE2",
               borderRadius: "16px",
               padding: "28px 24px",
               marginBottom: "40px",
            }}
         >
            <h2
               id="contact-heading"
               style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#000",
                  marginTop: 0,
                  marginBottom: "12px",
               }}
            >
               Contact us
            </h2>
            <p style={{ marginBottom: "8px" }}>
               Email{" "}
               <a href="mailto:hello@guidera.one" style={{ ...LINK, fontSize: "17px" }}>
                  hello@guidera.one
               </a>
            </p>
            <p style={{ marginBottom: "8px", color: "#555" }}>
               Messages are handled by <strong>Cyriac from Guidera</strong> (Nidrosoft LLC).
               We typically reply within <strong>1–2 business days</strong>.
            </p>
            <p style={{ marginBottom: "24px", color: "#555", fontSize: "15px" }}>
               Prefer a form? Send a message below — it goes straight to the Guidera team.
            </p>
            <SupportContactForm />
         </section>

         <section aria-labelledby="faq-heading">
            <h2
               id="faq-heading"
               style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#000",
                  marginBottom: "8px",
               }}
            >
               Help topics
            </h2>
            <p style={{ color: "#777", marginBottom: "24px" }}>
               Quick answers to the questions we hear most often.
            </p>

            {faqs.map((item) => (
               <div key={item.q} style={{ marginBottom: "28px" }}>
                  <h3
                     style={{
                        fontSize: "17px",
                        fontWeight: 700,
                        color: "#111",
                        marginBottom: "8px",
                        marginTop: 0,
                     }}
                  >
                     {item.q}
                  </h3>
                  <p style={{ margin: 0, color: "#444", lineHeight: 1.75 }}>{item.a}</p>
               </div>
            ))}
         </section>

         <section
            aria-labelledby="developer-heading"
            style={{
               marginTop: "40px",
               paddingTop: "28px",
               borderTop: "1px solid #eee",
            }}
         >
            <h2
               id="developer-heading"
               style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#000",
                  marginBottom: "12px",
               }}
            >
               Developer information
            </h2>
            <p style={{ marginBottom: "8px" }}>
               <strong>Nidrosoft LLC</strong>
               <br />
               Guidera is developed by Nidrosoft LLC.
               <br />
               Founder: Cyriac Zeh
            </p>
            <p style={{ marginBottom: "16px" }}>
               Support:{" "}
               <a href="mailto:hello@guidera.one" style={LINK}>
                  hello@guidera.one
               </a>
            </p>
            <p style={{ marginBottom: 0 }}>
               <Link href="/privacy" style={LINK}>
                  Privacy Policy
               </Link>
               {" · "}
               <Link href="/terms" style={LINK}>
                  Terms of Service
               </Link>
               {" · "}
               <Link href="/delete-account" style={LINK}>
                  Delete Account
               </Link>
               {" · "}
               <a
                  href="https://apps.apple.com/us/search?term=Guidera"
                  style={LINK}
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  App Store
               </a>
            </p>
            <p style={{ marginTop: "20px", fontSize: "14px", color: "#888" }}>
               © {new Date().getFullYear()} Nidrosoft LLC. All rights reserved.
            </p>
         </section>
      </LegalPageLayout>
   )
}

export default SupportPage
