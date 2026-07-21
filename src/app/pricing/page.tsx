import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/layouts/headers/Header"
import Footer from "@/layouts/footers/Footer"

export const metadata: Metadata = {
   title: "Guidera Pro — Pricing & Subscription",
   description: "Guidera Pro unlocks unlimited AI trip planning, journey briefings, Smart Trip generation, collaboration, expenses, journal, and AI Vision. Start free, upgrade when you're ready.",
   alternates: { canonical: "https://guidera.one/pricing" },
}

const BRAND = "#3FC39E"

const freeFeatures = [
   "Browse travel deals & destinations — no account needed",
   "1 active trip",
   "1 free AI Trip Snapshot (lifetime)",
   "1 free AI Journey Briefing (lifetime)",
   "5 free AI Chat messages (lifetime)",
   "Save trips & deals to your account",
]

const proFeatures = [
   "Everything in Free, unlocked & unlimited",
   "Unlimited AI Trip Snapshots with live prices & cost estimates",
   "Unlimited personalized Journey Briefings",
   "Smart Trip — one-tap complete AI travel plans",
   "Unlimited AI Chat grounded in your trip",
   "AI Vision — real-time translation of menus, signs & scenes",
   "Trip collaboration with fellow travelers",
   "Expense tracking, receipt scanning & cost splitting",
   "Synced photo travel journal",
   "Unlimited active trips",
]

const plans = [
   { period: "Monthly", price: "$19.99", per: "billed every month", perMonth: "$19.99/mo", savings: null, featured: false },
   { period: "3 Months", price: "$49.99", per: "billed every 3 months", perMonth: "$16.66/mo", savings: "Save 17%", featured: false },
   { period: "12 Months", price: "$149.99", per: "billed yearly — best value", perMonth: "$12.50/mo", savings: "Save 37%", featured: true },
   { period: "6 Months", price: "$84.99", per: "billed every 6 months", perMonth: "$14.17/mo", savings: "Save 29%", featured: false },
]

const PricingPage = () => {
   return (
      <div className="main-page-wrapper">
         <Header />

         <div className="container" style={{ paddingTop: "160px", paddingBottom: "40px", maxWidth: "1080px" }}>
            {/* Hero */}
            <div style={{ textAlign: "center", marginBottom: "16px" }}>
               <span style={{ display: "inline-block", background: "#F4FBF8", border: `1px solid #C9EFE2`, color: BRAND, fontWeight: 700, fontSize: "13px", letterSpacing: "1px", textTransform: "uppercase", padding: "6px 16px", borderRadius: "100px", marginBottom: "20px" }}>
                  Guidera Pro
               </span>
               <h1 style={{ fontSize: "46px", fontWeight: 700, marginBottom: "16px", lineHeight: 1.15 }}>
                  Your AI travel co-pilot,<br />unlocked.
               </h1>
               <p style={{ fontSize: "18px", color: "#555", maxWidth: "640px", margin: "0 auto", lineHeight: 1.7 }}>
                  Start free with one trip, one AI Trip Snapshot, one Journey Briefing, and 5 AI chat messages.
                  Upgrade to <strong>Guidera Pro</strong> for unlimited AI planning and every premium travel tool.
               </p>
            </div>

            {/* Who Pro is for */}
            <div style={{ background: "#FAFAFA", borderRadius: "16px", padding: "32px", margin: "48px 0", textAlign: "center" }}>
               <h2 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "12px" }}>Who is Guidera Pro for?</h2>
               <p style={{ fontSize: "16px", color: "#555", maxWidth: "760px", margin: "0 auto", lineHeight: 1.8 }}>
                  Pro is for travelers who want their whole trip handled — unlimited custom journey briefings tailored to
                  your passport and plans, an always-on AI travel concierge, verified Local Guides, and the premium tools
                  to plan, collaborate, and navigate every journey with confidence.
               </p>
            </div>

            {/* Free vs Pro comparison */}
            <div className="row" style={{ marginBottom: "24px" }}>
               <div className="col-lg-6 mb-4">
                  <div style={{ border: "1px solid #eee", borderRadius: "16px", padding: "32px", height: "100%" }}>
                     <div style={{ fontSize: "14px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", color: "#999" }}>Free</div>
                     <div style={{ fontSize: "34px", fontWeight: 700, margin: "8px 0 4px" }}>$0</div>
                     <p style={{ color: "#777", fontSize: "15px", marginBottom: "24px" }}>Explore Guidera and try core AI features.</p>
                     <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        {freeFeatures.map((f, i) => (
                           <li key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "9px 0", fontSize: "15px", color: "#444", lineHeight: 1.5 }}>
                              <span style={{ color: BRAND, fontWeight: 700, flexShrink: 0 }}>✓</span>{f}
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
               <div className="col-lg-6 mb-4">
                  <div style={{ border: `2px solid ${BRAND}`, borderRadius: "16px", padding: "32px", height: "100%", position: "relative", boxShadow: "0 20px 60px rgba(63,195,158,0.12)" }}>
                     <div style={{ fontSize: "14px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", color: BRAND }}>Guidera Pro</div>
                     <div style={{ fontSize: "34px", fontWeight: 700, margin: "8px 0 4px" }}>From $149.99<span style={{ fontSize: "16px", fontWeight: 500, color: "#888" }}> / year</span></div>
                     <p style={{ color: "#777", fontSize: "15px", marginBottom: "24px" }}>Unlimited AI planning and every premium tool.</p>
                     <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        {proFeatures.map((f, i) => (
                           <li key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "9px 0", fontSize: "15px", color: "#333", lineHeight: 1.5 }}>
                              <span style={{ color: BRAND, fontWeight: 700, flexShrink: 0 }}>✓</span>{f}
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>

            {/* Plans */}
            <h2 style={{ fontSize: "28px", fontWeight: 700, textAlign: "center", marginTop: "64px", marginBottom: "8px" }}>Choose your billing period</h2>
            <p style={{ textAlign: "center", color: "#777", marginBottom: "8px" }}>One Guidera Pro membership. Pick the period that suits you. Subscribe in the app.</p>
            <p style={{ textAlign: "center", color: BRAND, fontWeight: 600, fontSize: "15px", marginBottom: "40px" }}>Includes a 7-day free trial for new subscribers.</p>
            <div className="row justify-content-center">
               {plans.map((plan, i) => (
                  <div key={i} className="col-lg-3 col-md-6 mb-4 d-flex">
                     <div style={{ border: plan.featured ? `2px solid ${BRAND}` : "1px solid #eee", borderRadius: "16px", padding: "32px 24px", width: "100%", textAlign: "center", position: "relative", background: plan.featured ? "#F4FBF8" : "#fff" }}>
                        {plan.featured && (
                           <span style={{ position: "absolute", top: "-13px", left: "50%", transform: "translateX(-50%)", background: BRAND, color: "#fff", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", padding: "5px 16px", borderRadius: "100px", whiteSpace: "nowrap" }}>Best Value</span>
                        )}
                        <div style={{ fontSize: "16px", fontWeight: 700, color: "#333", marginBottom: "10px" }}>{plan.period}</div>
                        <div style={{ fontSize: "36px", fontWeight: 700, color: plan.featured ? BRAND : "#111" }}>{plan.price}</div>
                        <p style={{ fontSize: "14px", color: "#555", marginTop: "6px", marginBottom: "4px", fontWeight: 600 }}>{plan.perMonth}</p>
                        <p style={{ fontSize: "13px", color: "#888", marginBottom: plan.savings ? "8px" : 0 }}>{plan.per}</p>
                        {plan.savings && (
                           <p style={{ fontSize: "13px", fontWeight: 700, color: BRAND, marginBottom: 0 }}>{plan.savings}</p>
                        )}
                     </div>
                  </div>
               ))}
            </div>

            {/* Apple auto-renewable subscription disclosure */}
            <div style={{ background: "#FAFAFA", border: "1px solid #eee", borderRadius: "16px", padding: "32px", marginTop: "48px" }}>
               <h2 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "16px" }}>Subscription terms</h2>
               <div style={{ fontSize: "14px", color: "#555", lineHeight: 1.8 }}>
                  <p>
                     Guidera Pro is an auto-renewable subscription, available in monthly ($19.99), 3-month ($49.99), 6-month ($84.99), and 12-month ($149.99) periods. Each plan includes a 7-day free trial for eligible first-time subscribers. Subscriptions are purchased in the Guidera iOS app.
                  </p>
                  <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
                     <li>Payment is charged to your <strong>Apple ID</strong> at confirmation of purchase.</li>
                     <li>Your subscription <strong>automatically renews</strong> for the same period at the same price unless auto-renew is turned off at least 24 hours before the end of the current period.</li>
                     <li>Your account is charged for renewal within 24 hours prior to the end of the current period.</li>
                     <li>You can manage your subscription and turn off auto-renewal in your <strong>Apple ID Account Settings</strong> (Settings &gt; your name &gt; Subscriptions) at any time after purchase.</li>
                     <li><strong>Restore Purchases</strong> is available on the membership screen in the app.</li>
                     <li>Any unused portion of a free trial, where offered, is forfeited when you purchase a subscription.</li>
                  </ul>
                  <p style={{ marginBottom: 0 }}>
                     By subscribing, you agree to our{" "}
                     <Link href="/terms" style={{ color: BRAND, fontWeight: 600 }}>Terms of Service</Link> and{" "}
                     <Link href="/privacy" style={{ color: BRAND, fontWeight: 600 }}>Privacy Policy</Link>.
                  </p>
               </div>
            </div>

            <p style={{ textAlign: "center", color: "#999", fontSize: "14px", marginTop: "32px" }}>
               Guidera Pro is purchased and managed in the Guidera mobile app. Prices shown are in USD and may vary by region.
            </p>
         </div>

         <Footer />
      </div>
   )
}

export default PricingPage
