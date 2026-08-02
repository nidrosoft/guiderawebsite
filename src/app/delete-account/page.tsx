import type { Metadata } from "next"
import LegalPageLayout from "@/components/common/LegalPageLayout"

export const metadata: Metadata = {
   title: "Delete Your Account — Guidera",
   description: "How to delete your Guidera account and personal data, what is removed, what may be retained, and how subscriptions and third-party services are handled.",
   alternates: { canonical: "https://guidera.one/delete-account" },
}

const LINK = { color: "#3FC39E" } as const

const DeleteAccountPage = () => {
   return (
      <LegalPageLayout title="Delete Your Account" lastUpdated="August 1, 2026">
         <p>
            This page explains how to permanently delete your Guidera account and the personal data associated with it.
            It is intended to meet Apple App Store account-deletion requirements and to give you clear information about
            what happens to your data under applicable privacy laws.
         </p>
         <p>
            You can delete your account at any time, regardless of how you signed up. Guidera accounts may be created or
            accessed with <strong>Sign in with Apple</strong>, <strong>Google</strong>, <strong>Facebook</strong>, or a{" "}
            <strong>phone number</strong> (one-time code). You do not need to keep the Guidera app installed to request
            deletion. Account deletion is governed by this page together with our{" "}
            <a href="/privacy" style={LINK}>Privacy Policy</a> and{" "}
            <a href="/terms" style={LINK}>Terms of Service</a>.
         </p>

         <div style={{ background: "#F4FBF8", border: "1px solid #C9EFE2", borderRadius: "12px", padding: "20px 24px", margin: "24px 0" }}>
            <p style={{ margin: 0 }}>
               <strong>Important:</strong> Deleting your Guidera account does <strong>not</strong> cancel a Guidera Pro
               subscription billed through Apple. You must manage or cancel auto-renewal separately in your{" "}
               <strong>Apple ID Account Settings</strong> (see Section 7).
            </p>
         </div>

         <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "12px", marginTop: "32px", color: "#000" }}>1. How to Delete Your Account</h2>

         <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "8px", marginTop: "20px", color: "#222" }}>1.1 Delete in the App (Recommended)</h3>
         <p>The fastest way to delete your account is directly in the Guidera iOS app:</p>
         <ol style={{ paddingLeft: "20px", marginBottom: "16px" }}>
            <li>Open the Guidera app and sign in with the account you want to delete.</li>
            <li>Go to <strong>Settings</strong>.</li>
            <li>Tap <strong>Account</strong>, then <strong>Delete Account</strong>.</li>
            <li>Review the final warning, type <strong>DELETE</strong>, and confirm. Guidera then verifies your active session and starts the server-authoritative deletion process.</li>
            <li>The app shows completion only after Guidera confirms database, uploaded-file, subscription-attribution, and authentication-identity cleanup. If any required step fails, the app keeps you signed in and asks you to retry.</li>
         </ol>

         <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "8px", marginTop: "20px", color: "#222" }}>1.2 Request Deletion Without the App</h3>
         <p>
            If you cannot access the app or your account, email us at{" "}
            <a href="mailto:privacy@guidera.one?subject=Delete%20My%20Account" style={LINK}>privacy@guidera.one</a>{" "}
            with the subject line <strong>&quot;Delete My Account.&quot;</strong> Include enough information for us to
            locate your account, such as:
         </p>
         <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
            <li>The email address on your Guidera account (including an Apple Hide My Email relay address, if you used one)</li>
            <li>The phone number you used to sign in, if you registered with a phone number</li>
            <li>Which sign-in method you used (Apple, Google, Facebook, or phone number)</li>
         </ul>
         <p>
            To protect your account, we may ask you to verify your identity before processing the request (for example,
            by confirming account details, responding from a registered email, or verifying a phone number on file).
            We will confirm receipt and complete deletion within thirty (30) days of a verified request, or sooner where
            required by applicable law.
         </p>

         <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "8px", marginTop: "20px", color: "#222" }}>1.3 Who May Request Deletion</h3>
         <p>
            Only the account holder (or a person legally authorized to act on their behalf, such as a parent or guardian
            where required by law, or an authorized agent under applicable privacy law) may request deletion. We will not
            process deletion requests from unverified third parties.
         </p>

         <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "12px", marginTop: "32px", color: "#000" }}>2. What Gets Deleted</h2>
         <p>
            When your account is deleted, we permanently delete or irreversibly anonymize the personal data linked to
            that account, including:
         </p>
         <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
            <li>Your account and profile (name, email, phone number if provided, profile photo, preferences)</li>
            <li>Authentication identifiers we hold for Sign in with Apple, Google, Facebook, and phone-number sign-in</li>
            <li>Your trips, itineraries, AI Trip Snapshots, Journey Briefings, and Smart Trip plans</li>
            <li>Your AI chat history and other AI-generated content tied to your account</li>
            <li>Your travel journal entries and photos stored in Guidera</li>
            <li>Your expenses, scanned receipts, and related cost-splitting data</li>
            <li>Your reviews, community posts, messages, and Local Guide profile (if any)</li>
            <li>Your free-feature usage records and in-app preference settings</li>
            <li>Device and push-notification tokens associated with your account, where stored by Guidera</li>
         </ul>
         <p>
            After deletion, you will need to create a new account to use personalized features again. You can still browse
            travel deals and destinations on Guidera without an account.
         </p>

         <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "12px", marginTop: "32px", color: "#000" }}>3. What May Be Retained</h2>
         <p>
            We may retain a limited amount of information where required by law or for legitimate business purposes that
            cannot reasonably be fulfilled by deletion. Examples include:
         </p>
         <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
            <li>Records needed for tax, accounting, or financial reporting</li>
            <li>Information retained to prevent fraud, abuse, or security incidents, or to investigate violations of our Terms</li>
            <li>Information needed to resolve disputes, enforce our agreements, or respond to lawful requests from authorities</li>
            <li>Transaction or entitlement records related to App Store purchases that Apple or our subscription provider requires us to keep in anonymized or limited form</li>
            <li>Aggregated or de-identified analytics that can no longer reasonably identify you</li>
         </ul>
         <p>
            Any retained data is kept only as long as necessary for the purpose that requires retention, and is otherwise
            deleted or anonymized. For full details, see our{" "}
            <a href="/privacy" style={LINK}>Privacy Policy</a> (including the Data Retention section).
         </p>

         <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "12px", marginTop: "32px", color: "#000" }}>4. Deletion Timeline and Effect</h2>
         <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "8px", marginTop: "20px", color: "#222" }}>4.1 When Deletion Happens</h3>
         <p>
            In-app deletion normally completes during the confirmed request. If a provider is temporarily unavailable,
            Guidera records a resumable deletion state and does not tell the app that deletion succeeded. Verified email
            requests are completed within thirty (30) days, except where limited retention is required as described in
            Section 3.
         </p>
         <p>
            During processing, your account access is disabled. You should not expect to recover the account or its
            contents once deletion has been confirmed.
         </p>

         <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "8px", marginTop: "20px", color: "#222" }}>4.2 Deletion Is Permanent</h3>
         <p>
            Account deletion cannot be undone. Once completed, your personal data cannot be restored from Guidera&apos;s
            systems. If you only want to stop using Guidera temporarily, sign out or uninstall the app instead of deleting
            your account.
         </p>

         <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "8px", marginTop: "20px", color: "#222" }}>4.3 Backups and Residual Copies</h3>
         <p>
            Like most online services, Guidera may maintain encrypted backups for disaster recovery. Residual copies of
            deleted information in backups are isolated from active use and are overwritten or purged on our normal backup
            rotation schedule. They are not restored into production systems except as needed for system recovery, and
            are not used to continue providing your account.
         </p>

         <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "12px", marginTop: "32px", color: "#000" }}>5. Sign-In Methods (Apple, Google, Facebook, Phone)</h2>
         <p>
            Guidera accounts are created and accessed through our authentication provider, <strong>Clerk</strong>, using
            one of the following entry points. Deleting your Guidera account removes the Guidera account and the personal
            data we (and Clerk, on our behalf) hold for that account. It does <strong>not</strong> delete your underlying
            Apple, Google, or Facebook account, and it does not change your phone number with your mobile carrier.
         </p>

         <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "8px", marginTop: "20px", color: "#222" }}>5.1 Sign in with Apple</h3>
         <p>
            If you signed in with Apple, we may receive a unique Apple user identifier and the name and email address you
            authorize Apple to share (which may be a private &quot;Hide My Email&quot; relay address). When Guidera has a
            valid Apple token and the required server credentials, the deletion process requests token revocation from
            Apple. If programmatic revocation is unavailable, the app tells you to finish the Apple privacy step in
            <strong> Settings &gt; your name &gt; Sign in with Apple</strong>: select Guidera and choose to stop using
            Apple ID with the app. Your Guidera data is still deleted even if that manual Apple step is required.
         </p>

         <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "8px", marginTop: "20px", color: "#222" }}>5.2 Google</h3>
         <p>
            If you signed in with Google, we may receive a unique Google account identifier and the name and email address
            you authorize Google to share. Deleting Guidera does not delete your Google Account. To revoke Guidera&apos;s
            access in Google&apos;s systems as well, visit your Google Account&apos;s{" "}
            <a href="https://myaccount.google.com/permissions" style={LINK} target="_blank" rel="noopener noreferrer">
               Third-party access / Apps with access to your account
            </a>{" "}
            settings and remove Guidera.
         </p>

         <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "8px", marginTop: "20px", color: "#222" }}>5.3 Facebook</h3>
         <p>
            If you signed in with Facebook, we may receive a unique Facebook user identifier and the name, email, and
            basic profile information you authorize Facebook to share. Deleting Guidera does not delete your Facebook
            account. To also remove Guidera&apos;s access in Facebook&apos;s settings, open the Facebook app or{" "}
            <a href="https://www.facebook.com/settings?tab=applications" style={LINK} target="_blank" rel="noopener noreferrer">
               facebook.com/settings?tab=applications
            </a>
            , find Guidera under Apps and Websites, and remove it.
         </p>

         <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "8px", marginTop: "20px", color: "#222" }}>5.4 Phone Number</h3>
         <p>
            If you signed in with a phone number, we (via Clerk) store the phone number used for authentication and may
            send one-time verification codes by SMS to complete sign-in. When your Guidera account is deleted, we delete
            or anonymize that phone number from your Guidera account records and stop using it for Guidera authentication.
            We do not control SMS messages already delivered to your device, and your carrier may retain message metadata
            under its own policies. After deletion, that phone number can be used again only if you create a new Guidera
            account.
         </p>

         <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "12px", marginTop: "32px", color: "#000" }}>6. Other Third-Party Processors</h2>
         <p>
            In addition to Clerk and the sign-in providers above, Guidera uses trusted service providers to operate the
            Service. When we delete your account, we also delete or instruct deletion of personal data held by these
            processors where they process data on our behalf, subject to their technical capabilities and any legal
            retention obligations:
         </p>
         <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
            <li><strong>Clerk</strong> — authentication, sessions, and account identity for Apple, Google, Facebook, and phone-number sign-in</li>
            <li><strong>RevenueCat</strong> and the <strong>Apple App Store</strong> — subscription status and purchase entitlements (Apple may retain purchase records under its own policies)</li>
            <li><strong>Mixpanel</strong> — product analytics</li>
            <li><strong>Sentry</strong> — crash and performance diagnostics</li>
            <li><strong>Entrust / Onfido</strong> — identity verification for Local Guide applicants (ID documents are processed by the verification provider; we do not store copies of government ID images)</li>
         </ul>

         <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "12px", marginTop: "32px", color: "#000" }}>7. Subscriptions and Billing</h2>
         <p>
            Guidera Pro is an auto-renewable subscription purchased through the Apple App Store and billed to your Apple ID.
            <strong> Deleting your Guidera account does not cancel your subscription or stop Apple from charging renewals.</strong>
         </p>
         <p>To cancel or manage Guidera Pro:</p>
         <ol style={{ paddingLeft: "20px", marginBottom: "16px" }}>
            <li>Open the <strong>Settings</strong> app on your iOS device.</li>
            <li>Tap your name, then <strong>Subscriptions</strong>.</li>
            <li>Select <strong>Guidera Pro</strong> (or Guidera) and turn off auto-renewal or cancel the subscription.</li>
         </ol>
         <p>
            You can also manage subscriptions at{" "}
            <a href="https://apps.apple.com/account/subscriptions" style={LINK} target="_blank" rel="noopener noreferrer">
               apps.apple.com/account/subscriptions
            </a>
            . Refund requests for App Store purchases are handled by Apple under Apple&apos;s policies. See our{" "}
            <a href="/terms" style={LINK}>Terms of Service</a> and{" "}
            <a href="/pricing" style={LINK}>Pricing</a> page for subscription terms.
         </p>

         <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "12px", marginTop: "32px", color: "#000" }}>8. Shared Content and Other Users</h2>
         <p>
            If you collaborated on trips, posted reviews or community content, or interacted with Local Guides, deletion
            of your account removes or anonymizes content attributable to you where practicable. Content that was shared
            with other users may already have been viewed or copied by them; Guidera cannot delete copies stored on other
            users&apos; devices. Where another traveler still has access to a shared trip, your identity may appear as
            removed or anonymized rather than as your former profile.
         </p>

         <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "12px", marginTop: "32px", color: "#000" }}>9. Exporting Your Data Before Deletion</h2>
         <p>
            If you want a copy of your personal data before you delete your account, contact us at{" "}
            <a href="mailto:privacy@guidera.one" style={LINK}>privacy@guidera.one</a> with the subject line{" "}
            <strong>&quot;Data Export Request.&quot;</strong> We will respond to verifiable requests within thirty (30) days
            (or within the timeframe required by applicable law, including GDPR where it applies). Request your export
            <strong> before</strong> confirming account deletion, because deleted data generally cannot be recovered.
         </p>

         <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "12px", marginTop: "32px", color: "#000" }}>10. Your Privacy Rights</h2>
         <p>
            Depending on where you live, you may have additional rights to access, correct, delete, or obtain a copy of
            your personal information, or to object to or restrict certain processing. California residents and individuals
            in the EEA/UK have specific rights described in our{" "}
            <a href="/privacy" style={LINK}>Privacy Policy</a>. Exercising the right to deletion through this page or the
            in-app flow is one way to submit a deletion request.
         </p>
         <p>
            We will not discriminate against you for exercising privacy rights. We may decline a request only where
            permitted or required by law (for example, if we cannot verify your identity, or if retention is legally required).
         </p>

         <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "12px", marginTop: "32px", color: "#000" }}>11. Contact Us</h2>
         <p>If you have questions about account deletion, data retention, or this page, contact us at:</p>
         <p>
            <strong>Guidera, a product of Nitrosoft LLC</strong><br />
            Email: <a href="mailto:privacy@guidera.one" style={LINK}>privacy@guidera.one</a><br />
            Website: <a href="https://guidera.one/delete-account" style={LINK}>https://guidera.one/delete-account</a>
         </p>
         <p>
            For GDPR-related inquiries, you may also contact{" "}
            <a href="mailto:dpo@guidera.one" style={LINK}>dpo@guidera.one</a>.
         </p>
      </LegalPageLayout>
   )
}

export default DeleteAccountPage
