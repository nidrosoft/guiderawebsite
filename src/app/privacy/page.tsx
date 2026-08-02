import type { Metadata } from "next"
import Link from "next/link"
import LegalPageLayout from "@/components/common/LegalPageLayout"

export const metadata: Metadata = {
   title: "Privacy Policy — Guidera",
   description: "How Nitrosoft LLC collects, uses, shares, retains, and protects data for Guidera.",
   alternates: { canonical: "https://guidera.one/privacy" },
}

const PrivacyPage = () => {
   return (
      <LegalPageLayout title="Privacy Policy" lastUpdated="August 1, 2026">
         <p>
            This Privacy Policy explains how <strong>Nitrosoft LLC</strong> (&quot;Nitrosoft,&quot;
            &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) handles personal information when you use
            Guidera, our mobile application, website at guidera.one, and related services
            (collectively, the &quot;Service&quot;). Guidera is a product of Nitrosoft LLC.
         </p>

         <p>
            This policy describes our current practices. A feature may use only the providers and
            data needed for that request. If you do not agree with this policy, do not use the
            Service. You may contact us at{" "}
            <a href="mailto:privacy@guidera.one">privacy@guidera.one</a>.
         </p>

         <h2>1. Information We Collect</h2>

         <h3>Account and profile information</h3>
         <p>
            We collect identifiers and profile details such as your name, email address, phone
            number, profile photo, date of birth, language, country, time zone, and preferences you
            choose to provide. Clerk handles authentication credentials and sessions. When you use
            email-and-password sign-in, Clerk processes the password credential; Guidera does not
            receive your raw password. Apple, Google, or Facebook may provide the account details
            you authorize them to share.
         </p>

         <h3>Travel and preference information</h3>
         <p>
            We collect trip destinations, dates, itineraries, traveler counts, saved items, search
            parameters, budgets, expenses, packing information, and travel preferences. Optional
            profile fields may include dietary or allergy information, accessibility needs,
            passport nationality for informational visa guidance, and emergency-contact details.
         </p>

         <h3>Content, communications, and imported material</h3>
         <p>
            We process AI prompts and responses, community posts, comments, messages, groups,
            events, reports, support requests, photos, audio or voice input, receipts, boarding
            passes, tickets, vouchers, and other documents you choose to submit. Uploaded material
            may contain information about other people; submit it only when you have authority to
            do so.
         </p>

         <h3>Location and device information</h3>
         <p>
            With device permission, Guidera may access precise or approximate foreground location
            for maps, nearby results, destination context, and an explicit current-location update
            used for nearby SOS alerts. The submitted iOS app does not claim continuous background
            location monitoring. We also process IP address, device and operating-system details,
            app version, locale, push token, network state, diagnostics, crash data, performance
            data, and feature interactions.
         </p>

         <h3>Subscription and provider-interaction information</h3>
         <p>
            Apple and RevenueCat provide transaction identifiers, product, entitlement, trial,
            renewal, and subscription-state information. Guidera does not receive your full App
            Store payment-card number. When you search for travel or follow an external-provider
            link, we may process destinations, dates, traveler counts, selected options, referral
            parameters, and click-attribution information.
         </p>

         <h3>Local Guide identity verification</h3>
         <p>
            If you apply to become a Local Guide, Didit may collect and process government-ID,
            selfie, biometric comparison, device, and fraud-prevention information under its own
            privacy terms. Guidera receives verification status, session identifiers, and related
            application results needed to review the application. Identity verification is not
            required for ordinary traveler use.
         </p>

         <h2>2. How We Use Information</h2>
         <ul>
            <li>Provide accounts, trips, search, comparison, AI, import, expense, and community features.</li>
            <li>Personalize itineraries, suggestions, destination context, and app settings.</li>
            <li>Operate subscriptions, enforce feature access, restore purchases, and prevent abuse.</li>
            <li>Provide maps, translations, safety information, emergency tools, and support.</li>
            <li>Moderate content, investigate reports, enforce blocks, and protect users and the Service.</li>
            <li>Measure reliability and product use, debug failures, secure systems, and control provider costs.</li>
            <li>Comply with law, resolve disputes, and communicate material service or policy changes.</li>
         </ul>

         <h2>3. AI Processing and Data Sharing</h2>
         <p>
            Guidera uses third-party AI processors to generate requested features. Depending on the
            feature and available configuration, we may send the content you submit and the minimum
            relevant context to <strong>Google (Gemini)</strong>, <strong>Anthropic (Claude)</strong>,
            <strong>Perplexity</strong>, <strong>OpenAI</strong>, or <strong>xAI</strong>. Context can
            include prompt text, trip and preference information, destination or location context,
            images of menus, signs, tickets, documents or receipts, and audio selected for
            transcription or live assistance.
         </p>
         <p>
            These providers act under their own service terms and data-processing commitments. We
            use business or API services under the applicable data terms and do not intentionally
            submit customer content for public-model training. Provider retention and use can vary
            by service and configuration. Avoid including unnecessary sensitive information in AI
            requests. AI results can be
            inaccurate, incomplete, or outdated; confirm important travel, visa, safety, health,
            legal-rights, price, and provider information with official or primary sources.
         </p>

         <h2>4. Service Providers and Other Recipients</h2>
         <p>
            We disclose information to processors only as needed to provide, secure, and measure the
            Service. The categories and current providers include:
         </p>
         <ul>
            <li><strong>Clerk</strong> — authentication, account identity, credentials, and sessions.</li>
            <li><strong>Supabase</strong> — PostgreSQL database, Storage, Realtime, and Edge Functions.</li>
            <li><strong>RevenueCat and Apple</strong> — subscriptions, purchases, entitlements, and account-subscription management.</li>
            <li><strong>Sentry</strong> — crash, error, and performance diagnostics.</li>
            <li><strong>Mixpanel</strong> — product analytics and feature usage.</li>
            <li><strong>Google</strong> — Gemini AI, Maps, Places, translation, vision, and related location services used by a requested feature.</li>
            <li><strong>Anthropic, Perplexity, OpenAI, and xAI</strong> — AI generation, web-informed answers, fallbacks, or transcription when enabled for a requested feature.</li>
            <li><strong>Mapbox</strong> — maps, geocoding, routing, and distance information.</li>
            <li><strong>Didit</strong> — Local Guide identity verification and fraud prevention.</li>
            <li><strong>Resend</strong> — transactional, invitation, moderation, and support email.</li>
            <li><strong>Expo</strong> — app build/update infrastructure and push-notification delivery.</li>
            <li><strong>Vercel and Iubenda</strong> — website hosting, security logs, and cookie-consent tooling.</li>
            <li><strong>Travel and affiliate providers</strong> — search, availability, content, and external handoff through providers that may include SerpAPI, Kiwi.com/RapidAPI, Duffel, LiteAPI, Expedia/RapidAPI, Viator, and CJ Affiliate, depending on the search and availability.</li>
         </ul>
         <p>
            Guidera is a discovery, planning, comparison, and referral service. We do not sell or
            issue flights, stays, cars, or experiences. When you leave Guidera, the external travel
            provider controls the information you submit to it, payment, final availability, total
            price, taxes, fees, cancellation, refund, and fulfillment under its own privacy policy.
         </p>
         <p>
            We may also disclose information when required by law; to protect rights, safety, and
            security; in a corporate transaction with appropriate safeguards; or when you direct or
            consent to the disclosure. Community content and the profile fields you make public can
            be visible to other users subject to privacy, visibility, report, and block controls.
         </p>

         <h2>5. Sale, Advertising, and Affiliate Links</h2>
         <p>
            We do not sell personal information for money. Guidera may earn compensation when you
            follow or transact through certain travel-provider or affiliate links. We do not treat
            an external click as proof that you completed a booking. If our practices become subject
            to a legal definition of &quot;sale&quot; or &quot;sharing&quot; for cross-context behavioral
            advertising, we will provide the notices and opt-out mechanisms required by law.
         </p>

         <h2>6. Retention and Account Deletion</h2>
         <p>
            We retain account and Service data while your account is active and as needed for the
            purposes described above. Retention varies by data type, feature, security need, provider
            obligation, backup cycle, and legal requirement. We may retain limited records to meet
            tax, accounting, fraud-prevention, dispute, abuse, security, or legal obligations.
            De-identified or aggregated information may be retained when it can no longer reasonably
            identify you.
         </p>
         <p>
            You can request deletion in the app at Profile &gt; Settings &gt; Account &gt; Delete Account
            or follow the instructions at <Link href="/delete-account">guidera.one/delete-account</Link>.
            The completed in-app workflow removes the Guidera identity and user-owned operational
            data from Clerk, Supabase Database and Storage, and associated service mappings as
            documented by the Service. Provider logs, security records, backups, and records held by
            Apple or another independent provider may remain for their applicable retention period.
            Deleting Guidera does not cancel an App Store subscription; manage or cancel it through
            Apple.
         </p>

         <h2>7. Security</h2>
         <p>
            We use safeguards designed to protect information, including encrypted transport,
            access controls, row-level authorization, restricted server credentials, provider
            authentication, monitoring, rate limits, and deletion controls. No system is completely
            secure, and we cannot guarantee absolute security. Report a suspected security or
            privacy issue to <a href="mailto:privacy@guidera.one">privacy@guidera.one</a>.
         </p>

         <h2>8. Your Choices and Rights</h2>
         <p>
            Depending on your location, you may have rights to access, correct, delete, restrict, or
            obtain a copy of personal information; object to certain processing; withdraw consent;
            opt out of certain sale, sharing, targeted advertising, or profiling; and appeal a denied
            request. You may change profile and privacy settings in the app, disable location,
            camera, microphone, photo, or notification access in device settings, and unsubscribe
            from eligible marketing messages.
         </p>
         <p>
            Contact <a href="mailto:privacy@guidera.one">privacy@guidera.one</a> to exercise a right.
            We may verify your identity and authority before acting. We respond within the period
            required by applicable law and do not discriminate against you for exercising privacy
            rights. EEA/UK users may complain to their local data-protection authority. California
            and other U.S. state residents may exercise the rights available under applicable state
            law.
         </p>

         <h2>9. Legal Bases</h2>
         <p>
            Where GDPR or similar law applies, we process information as necessary to perform our
            contract with you, based on consent (including device permissions and optional features),
            for legitimate interests such as security, moderation, reliability, and product
            improvement balanced against your rights, and to comply with legal obligations. You may
            withdraw consent at any time, without affecting earlier lawful processing.
         </p>

         <h2>10. International Processing</h2>
         <p>
            Nitrosoft and its providers may process information in the United States and other
            countries where they operate. We do not claim that all Service data is stored only in the
            United States. Where required, transfers rely on recognized safeguards such as adequacy
            decisions, contractual protections, or Standard Contractual Clauses.
         </p>

         <h2>11. Children</h2>
         <p>
            The Service is not directed to children under 18, and we do not knowingly collect their
            personal information. Contact us if you believe a child provided information so we can
            investigate and take appropriate action.
         </p>

         <h2>12. Website Cookies</h2>
         <p>
            The website uses necessary technologies and may use analytics or similar technologies
            according to your choices and applicable law. See the <Link href="/cookies">Cookie Policy</Link>
            and cookie controls for details. Mobile-app permissions are controlled separately in the
            app and device settings.
         </p>

         <h2>13. Changes to This Policy</h2>
         <p>
            We may update this policy as the Service, providers, or legal requirements change. We
            will post the updated date and provide additional notice when required. Material changes
            apply prospectively from their effective date unless law permits otherwise.
         </p>

         <h2>14. Contact</h2>
         <p>
            <strong>Nitrosoft LLC</strong>
            <br />
            Guidera Privacy
            <br />
            Email: <a href="mailto:privacy@guidera.one">privacy@guidera.one</a>
            <br />
            Support: <a href="mailto:hello@guidera.one">hello@guidera.one</a>
            <br />
            Website: <a href="https://guidera.one">https://guidera.one</a>
         </p>
      </LegalPageLayout>
   )
}

export default PrivacyPage
