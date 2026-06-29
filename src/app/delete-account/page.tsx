import type { Metadata } from "next"
import LegalPageLayout from "@/components/common/LegalPageLayout"

export const metadata: Metadata = {
   title: "Delete Your Account — Guidera",
   description: "How to delete your Guidera account and personal data, either in the app or by request.",
   alternates: { canonical: "https://guidera.one/delete-account" },
}

const BRAND = "#3FC39E"

const DeleteAccountPage = () => {
   return (
      <LegalPageLayout title="Delete Your Account" lastUpdated="June 28, 2026">
         <p>
            You can permanently delete your Guidera account and the personal data associated with it at any time.
            We offer two ways to do this. You do not need to keep the app installed to request deletion.
         </p>

         <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "12px", marginTop: "32px", color: "#000" }}>Option 1 — Delete in the app (fastest)</h2>
         <ol style={{ paddingLeft: "20px", marginBottom: "16px" }}>
            <li>Open the Guidera app and sign in.</li>
            <li>Go to <strong>Settings</strong>.</li>
            <li>Tap <strong>Account</strong>, then <strong>Delete Account</strong>.</li>
            <li>Confirm when prompted. Your account and data are scheduled for permanent deletion immediately.</li>
         </ol>

         <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "12px", marginTop: "32px", color: "#000" }}>Option 2 — Request deletion by email</h2>
         <p>
            If you can&apos;t access the app, email us at{" "}
            <a href="mailto:privacy@guidera.one?subject=Delete%20My%20Account" style={{ color: BRAND }}>privacy@guidera.one</a>{" "}
            from the email address associated with your account, using the subject line <strong>&quot;Delete My Account.&quot;</strong>{" "}
            We may ask you to verify your identity before processing the request. We will confirm and complete deletion
            within 30 days.
         </p>

         <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "12px", marginTop: "32px", color: "#000" }}>What gets deleted</h2>
         <p>When your account is deleted, we permanently remove the personal data linked to it, including:</p>
         <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
            <li>Your account and profile (name, email, profile photo, preferences)</li>
            <li>Your trips, itineraries, AI Trip Snapshots, and Journey Briefings</li>
            <li>Your AI chat history and saved content</li>
            <li>Your travel journal entries and photos</li>
            <li>Your expenses and scanned receipts</li>
            <li>Your reviews, community posts, and Local Guide profile (if any)</li>
            <li>Your free-feature usage records</li>
         </ul>

         <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "12px", marginTop: "32px", color: "#000" }}>What may be retained</h2>
         <p>
            We may retain a limited amount of information where required by law or for legitimate business purposes —
            for example, records needed for tax, accounting, fraud-prevention, or dispute-resolution purposes. Any retained
            data is kept only as long as necessary and is otherwise deleted or anonymized. For full details, see our{" "}
            <a href="/privacy" style={{ color: BRAND }}>Privacy Policy</a>.
         </p>

         <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "12px", marginTop: "32px", color: "#000" }}>Cancel your subscription separately</h2>
         <p>
            Deleting your account does <strong>not</strong> automatically cancel a Guidera Pro subscription. Because subscriptions
            are billed through your Apple ID, you must turn off auto-renewal yourself in{" "}
            <strong>Settings &gt; your name &gt; Subscriptions</strong> on your iOS device. See our{" "}
            <a href="/terms" style={{ color: BRAND }}>Terms of Service</a> for full subscription terms.
         </p>

         <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "12px", marginTop: "32px", color: "#000" }}>Account deletion is permanent</h2>
         <p>
            Deletion cannot be undone. Once your account is deleted, your data cannot be recovered, and you will need to
            create a new account to use personalized features again. You can still browse travel deals and destinations
            without an account.
         </p>

         <p style={{ marginTop: "32px" }}>
            Questions? Contact us at <a href="mailto:privacy@guidera.one" style={{ color: BRAND }}>privacy@guidera.one</a>.
         </p>
      </LegalPageLayout>
   )
}

export default DeleteAccountPage
