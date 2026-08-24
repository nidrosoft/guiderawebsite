import type { Metadata } from "next"
import Link from "next/link"
import LegalPageLayout from "@/components/common/LegalPageLayout"

export const metadata: Metadata = {
   title: "Terms of Service — Guidera",
   description: "The terms governing Guidera, an AI-assisted travel planning, comparison, referral, and community service provided by Nitrosoft LLC.",
   alternates: { canonical: "https://guidera.one/terms" },
}

const TermsPage = () => {
   return (
      <LegalPageLayout title="Terms of Service" lastUpdated="August 1, 2026">
         <p>
            These Terms of Service (&quot;Terms&quot;) govern your access to Guidera, including the iOS
            application, guidera.one, and related services (the &quot;Service&quot;). The Service is
            provided by <strong>Nitrosoft LLC</strong> under the Guidera product name
            (&quot;Nitrosoft,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By using the Service, you agree to these
            Terms. If you do not agree, do not use the Service.
         </p>

         <h2>1. Eligibility and Accounts</h2>
         <p>
            You must be at least 18 years old and legally able to enter these Terms. You agree to
            provide accurate account information, protect your sign-in methods, and promptly notify
            <a href="mailto:support@guidera.one"> support@guidera.one</a> of suspected unauthorized
            access. You are responsible for activity performed through your account unless
            applicable law provides otherwise.
         </p>
         <p>
            You may permanently delete your account in the app at Profile &gt; Settings &gt; Account
            &gt; Delete Account. The server-authoritative deletion process and any limited legal or
            security retention are described in our <Link href="/delete-account">account-deletion
            instructions</Link> and <Link href="/privacy">Privacy Policy</Link>. Deleting your
            account does not cancel an Apple-billed subscription.
         </p>

         <h2>2. What Guidera Provides</h2>
         <p>
            Guidera provides AI-assisted trip planning, itinerary and packing tools, travel search
            and comparison, destination and cultural context, informational safety and entry
            guidance, expense tools, and traveler community features. Features may change, be
            unavailable in some places, or depend on third-party services and network access.
         </p>

         <h2>3. External Travel Providers</h2>
         <p>
            Guidera is a discovery, planning, comparison, and referral service. It is not an airline,
            hotel, carrier, tour operator, travel seller, or booking agent, and it does not issue or
            fulfill flights, stays, cars, or experiences. Selecting a travel result sends you to an
            external provider to review and complete any transaction.
         </p>
         <p>
            The provider controls final availability, total price, taxes, fees, baggage, rules,
            payment, cancellation, refund, customer service, and fulfillment. Displayed prices and
            availability may change or be incomplete. Verify all material terms with the provider
            before purchasing. Guidera may receive affiliate compensation for eligible referrals,
            but a click does not prove that a booking occurred and does not increase our control
            over the provider transaction.
         </p>

         <h2>4. Guidera Pro Subscriptions</h2>
         <p>
            Guidera Pro is a digital subscription purchased through the Apple App Store using
            Apple In-App Purchase. The
            paywall displays the current product, billing duration, trial eligibility when supplied
            by Apple, renewal price, and included entitlement. Unless cancelled at least 24 hours
            before renewal or as otherwise stated by Apple, a subscription renews automatically and
            Apple charges the payment method associated with your Apple Account.
         </p>
         <p>
            Manage or cancel through Apple Account Settings. Use Restore Purchases in Guidera to
            restore an eligible entitlement. Apple controls billing, refunds, family-sharing
            eligibility, and transaction records under its terms. Travel purchases from external
            providers are separate from Guidera Pro and are not Apple In-App Purchases.
         </p>

         <h2>5. AI and Informational Content</h2>
         <p>
            Guidera uses third-party AI services to generate or transform requested content,
            including itineraries, chat responses, translations, document or receipt extraction,
            destination context, and safety or entry summaries. AI and translated content can be
            inaccurate, incomplete, ambiguous, or outdated. It is informational and does not
            constitute legal, medical, immigration, financial, emergency, or other professional
            advice.
         </p>
         <p>
            Confirm visa and entry rules, passports, health requirements, local law, traveler
            compensation rights, schedules, prices, accessibility, safety conditions, and emergency
            numbers with the relevant government, carrier, provider, qualified professional, or
            other primary source. Do not rely on Guidera as the sole basis for a high-risk or
            time-sensitive decision. AI data processing is described in the <Link href="/privacy">Privacy Policy</Link>.
         </p>

         <h2>6. Safety and Emergency Features</h2>
         <p>
            Guidera is not an emergency-response service and does not continuously monitor you,
            guarantee your safety, dispatch responders, or replace local authorities. Advisories,
            community reports, maps, AI analysis, and location-based context may be delayed,
            unavailable, or wrong. In an emergency, contact local emergency services and follow
            official instructions. You remain responsible for evaluating travel risks and for your
            decisions and actions.
         </p>

         <h2>7. User Content and Community Conduct</h2>
         <p>
            You retain ownership of content you submit. You grant Nitrosoft LLC a non-exclusive,
            worldwide, royalty-free license to host, store, reproduce, adapt for technical display,
            display, distribute, and moderate that content only as needed to operate, secure,
            promote within, and improve the Service, subject to the Privacy Policy and your settings.
            You represent that you have the rights and permissions needed to submit the content.
         </p>
         <p>
            The <Link href="/community-guidelines">Community Guidelines</Link> are part of these
            Terms. Guidera uses automated text checks and human review of reports, and may reject,
            hold, limit, remove, or preserve content for review. Users can report content and block
            abusive users. These controls reduce risk but cannot guarantee that every violation will
            be detected or removed immediately.
         </p>
         <p>
            You may not post or facilitate illegal activity, threats, harassment, hate, sexual
            exploitation, non-consensual intimate content, doxxing, fraud, impersonation, spam,
            malware, dangerous misinformation, or infringement. You may not evade blocks,
            moderation, access controls, rate limits, or enforcement actions.
         </p>

         <h2>8. Local Guide Program</h2>
         <p>
            The Local Guide program helps travelers discover independent people who have completed
            specified application and identity-verification steps. Identity verification confirms
            only the result reported by the verification provider; it is not a background check,
            professional-license verification, endorsement, employment relationship, or guarantee
            of character, competence, availability, legality, quality, or safety.
         </p>
         <p>
            Local Guides must accurately describe themselves and any permitted listing; comply with
            local registration, licensing, tax, insurance, employment, accessibility, consumer, and
            safety rules; disclose conflicts and material terms; and maintain any legally required
            permits or coverage. They may not offer illegal, sexual, exploitative, dangerous,
            deceptive, discriminatory, or regulated services without every required authorization.
            Guidera does not process Local Guide service payments or resolve private payment disputes.
         </p>
         <p>
            Travelers and Local Guides are responsible for their interactions, due diligence,
            meeting arrangements, payments outside Guidera, and disputes. We may reject an
            application, remove a listing, suspend guide access, or require reverification when we
            reasonably believe it is necessary to protect users or enforce these Terms.
         </p>

         <h2>9. Expenses, Documents, and Imported Data</h2>
         <p>
            Receipt, ticket, boarding-pass, voucher, and document features may use optical character
            recognition or AI. You are responsible for having permission to upload the material and
            for verifying extracted dates, amounts, names, schedules, and other details. Guidera is
            not an accounting, tax, immigration, or document-validation service.
         </p>

         <h2>10. Prohibited Technical Uses</h2>
         <p>
            You may not interfere with the Service; probe or bypass security; access another user&apos;s
            information; introduce malicious code; scrape, copy, or automate access except as we
            expressly allow; reverse engineer except where law prohibits that restriction; misuse
            provider credentials; or use the Service to violate law or third-party rights.
         </p>

         <h2>11. Intellectual Property and Feedback</h2>
         <p>
            Excluding user content and third-party material, Nitrosoft LLC owns or licenses the
            Guidera software, branding, design, and original content. Third-party AI models, travel
            data, maps, provider marks, and other third-party material remain owned by their
            respective owners. If you submit feedback, you permit us to use it without restriction
            or compensation, subject to applicable law.
         </p>

         <h2>12. Third-Party Services</h2>
         <p>
            The Service depends on and links to independent providers. Their terms and privacy
            policies govern your direct use of their services. We do not control and are not
            responsible for their content, availability, security, decisions, or performance.
         </p>

         <h2>13. Account termination, Suspension, and Access</h2>
         <p>
            We may restrict, suspend, or terminate access, remove content, or preserve relevant
            records when reasonably necessary to enforce these Terms, protect users, prevent abuse,
            comply with law, address provider requirements, or protect the Service. Where practical
            and lawful, we may provide notice or an appeal route. You may stop using the Service or
            delete your account at any time. Termination does not automatically cancel an Apple
            subscription, reverse an external-provider transaction, or erase records we must retain.
         </p>

         <h2>14. Disclaimers</h2>
         <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS
            AVAILABLE.&quot; WE DISCLAIM IMPLIED WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A
            PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT PROMISE THAT THE SERVICE OR
            THIRD-PARTY INFORMATION WILL BE UNINTERRUPTED, SECURE, COMPLETE, CURRENT, OR ERROR-FREE.
            NOTHING IN THESE TERMS EXCLUDES A WARRANTY OR CONSUMER RIGHT THAT CANNOT LAWFULLY BE
            EXCLUDED.
         </p>

         <h2>15. Limitation of Liability</h2>
         <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, NITROSOFT LLC AND ITS AFFILIATES, OFFICERS,
            EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL,
            CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR LOSS OF DATA, PROFITS, USE, OR
            GOODWILL, ARISING FROM THE SERVICE. OUR AGGREGATE LIABILITY WILL NOT EXCEED THE GREATER
            OF THE AMOUNT YOU PAID NITROSOFT LLC FOR GUIDERA PRO IN THE 12 MONTHS BEFORE THE CLAIM OR
            US $100. THESE LIMITS DO NOT APPLY WHERE PROHIBITED BY LAW.
         </p>

         <h2>16. Changes</h2>
         <p>
            We may update the Service or these Terms. We will post the updated date and provide
            additional notice when required. Material changes apply prospectively from their
            effective date unless applicable law permits otherwise.
         </p>

         <h2>17. General</h2>
         <p>
            These Terms, the Privacy Policy, Community Guidelines, and product-specific disclosures
            form the agreement between you and Nitrosoft LLC for Guidera. Mandatory consumer
            protections and applicable law remain in effect. If a provision is unenforceable, the
            remaining provisions continue. A failure to enforce a provision is not a waiver. You may
            not assign these Terms without our consent; we may assign them as part of a merger,
            reorganization, financing, or asset transfer, subject to applicable law.
         </p>

         <h2>18. Contact</h2>
         <p>
            <strong>Nitrosoft LLC</strong><br />
            Guidera Legal<br />
            Email: <a href="mailto:legal@guidera.one">legal@guidera.one</a><br />
            Support: <a href="mailto:hello@guidera.one">hello@guidera.one</a><br />
            Website: <a href="https://guidera.one">https://guidera.one</a>
         </p>
      </LegalPageLayout>
   )
}

export default TermsPage
