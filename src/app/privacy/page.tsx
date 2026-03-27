import type { Metadata } from "next"
import LegalPageLayout from "@/components/common/LegalPageLayout"

export const metadata: Metadata = {
   title: "Privacy Policy — Guidera",
   description: "Learn how Guidera collects, uses, shares, and protects your personal information.",
}

const PrivacyPage = () => {
   return (
      <LegalPageLayout title="Privacy Policy" lastUpdated="March 26, 2026">
         <p>
            This Privacy Policy describes how Guidera (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, shares, and protects your personal information when you use our mobile application, website at guidera.one, and related services (collectively, the &quot;Service&quot;).
         </p>
         <p>
            We are committed to protecting your privacy and being transparent about how we handle your data. Please read this Privacy Policy carefully. By using the Service, you consent to the practices described in this policy.
         </p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>1. Information We Collect</h2>

         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>1.1 Information You Provide Directly</h3>
         <p><strong>Account Information:</strong> When you create an account, we collect your name, email address, password, and optionally your profile photo, date of birth, and preferred language.</p>
         <p><strong>Profile Information:</strong> If you complete your travel profile, we may collect your travel preferences (travel style, budget level, interests), dietary restrictions or allergies, accessibility needs, passport country (for visa requirement lookup — we do not collect your passport number), and preferred currency.</p>
         <p><strong>Trip Information:</strong> When you create or plan trips, we collect destination, dates, number of travelers, budget preferences, and itinerary details.</p>
         <p><strong>Communications:</strong> When you contact us for support, send messages through community features, or interact with the AI travel assistant, we collect the content of those communications.</p>
         <p><strong>Reviews and Content:</strong> When you post reviews, photos, tips, or other content, we collect that information along with associated metadata.</p>
         <p><strong>Expense and Receipt Data:</strong> If you use the expense tracking feature, we collect receipt images you scan, extracted transaction data (merchant name, amount, date, category), and manually entered expenses.</p>
         <p><strong>Identity Verification (Local Guides Only):</strong> If you apply to become a Local Guide, our third-party verification provider collects a photo of your government-issued ID and a biometric selfie for identity matching purposes. We do not store copies of your ID documents — these are processed and stored by our verification provider (Entrust/Onfido) in accordance with their privacy policy.</p>

         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>1.2 Information Collected Automatically</h3>
         <p><strong>Device Information:</strong> We collect your device type and model, operating system and version, unique device identifiers, app version, and language and timezone settings.</p>
         <p><strong>Usage Information:</strong> We collect how you interact with the Service, including features used and frequency, search queries, pages and screens viewed, session duration, and in-app actions and navigation patterns.</p>
         <p><strong>Location Information:</strong> With your permission, we collect your approximate or precise location to provide location-relevant recommendations, nearby Local Guides and community features, weather and safety information, and destination-aware search results. You can disable location services at any time through your device settings. The Service will continue to function with reduced personalization.</p>
         <p><strong>Log Data:</strong> Our servers automatically record information including your IP address, browser type (for web), referring/exit pages, and crash reports and performance data.</p>

         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>1.3 Information from Third Parties</h3>
         <p><strong>Travel Providers:</strong> When you search for or compare travel options, we receive pricing, availability, and product information from third-party travel APIs (such as flight data, hotel listings, and experience catalogs). This information relates to travel products, not to you personally.</p>
         <p><strong>Sign-In Services:</strong> If you sign in using Apple, Google, or another third-party authentication provider, we receive the information you authorize that provider to share (typically name and email address).</p>
         <p><strong>Analytics Providers:</strong> We use third-party analytics tools that may collect anonymized or aggregated usage data to help us understand how the Service is used.</p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>2. How We Use Your Information</h2>
         <p>We use the information we collect to:</p>
         <p><strong>Provide and Operate the Service:</strong> Create and manage your account, generate AI-powered trip plans, itineraries, and recommendations, display search results for flights, hotels, cars, and experiences, facilitate community features and Local Guide connections, process expense tracking and receipt scanning, and deliver push notifications you have opted into.</p>
         <p><strong>Personalize Your Experience:</strong> Tailor destination recommendations to your preferences, adjust AI responses based on your travel profile, customize content and search results, and remember your settings and preferences.</p>
         <p><strong>Improve the Service:</strong> Analyze usage patterns to identify and fix issues, develop new features and improve existing ones, conduct research and analysis (using aggregated or de-identified data), and monitor Service performance and stability.</p>
         <p><strong>Safety and Security:</strong> Detect and prevent fraud, abuse, and unauthorized access, enforce our Terms of Service and Community Guidelines, verify Local Guide identities, and respond to legal requests and prevent harm.</p>
         <p><strong>Communicate with You:</strong> Send account-related notifications (booking confirmations, security alerts), provide customer support, send marketing communications (only with your consent — you may opt out at any time), and notify you of changes to our Terms or Privacy Policy.</p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>3. How We Share Your Information</h2>
         <p><strong>We do not sell your personal information.</strong> We share information only in the following circumstances:</p>

         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>3.1 Travel Providers</h3>
         <p>When you click through to a Travel Provider&apos;s website to complete a booking, the Travel Provider may receive your search parameters (destination, dates, number of travelers). Any personal information you provide during the booking process is collected directly by the Travel Provider and is subject to their privacy policy, not ours.</p>

         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>3.2 Local Guides and Community</h3>
         <p>If you interact with a Local Guide or participate in community features, other users may see your public profile information (name, profile photo, and any information you choose to make public), your reviews and community posts, and your trust tier and verification status (if you are a Local Guide).</p>

         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>3.3 Service Providers</h3>
         <p>We share information with trusted third-party service providers who perform services on our behalf, including:</p>
         <div style={{ overflowX: 'auto', marginBottom: '16px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
               <thead>
                  <tr style={{ borderBottom: '2px solid #eee' }}>
                     <th style={{ textAlign: 'left', padding: '8px 12px', fontWeight: 600 }}>Provider Category</th>
                     <th style={{ textAlign: 'left', padding: '8px 12px', fontWeight: 600 }}>Purpose</th>
                     <th style={{ textAlign: 'left', padding: '8px 12px', fontWeight: 600 }}>Data Shared</th>
                  </tr>
               </thead>
               <tbody>
                  <tr style={{ borderBottom: '1px solid #eee' }}>
                     <td style={{ padding: '8px 12px' }}>Cloud Hosting (Supabase)</td>
                     <td style={{ padding: '8px 12px' }}>Data storage and backend services</td>
                     <td style={{ padding: '8px 12px' }}>All Service data (encrypted)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #eee' }}>
                     <td style={{ padding: '8px 12px' }}>AI Processing (Anthropic)</td>
                     <td style={{ padding: '8px 12px' }}>Trip planning, recommendations, chat</td>
                     <td style={{ padding: '8px 12px' }}>Conversation content, trip context</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #eee' }}>
                     <td style={{ padding: '8px 12px' }}>Identity Verification (Entrust/Onfido)</td>
                     <td style={{ padding: '8px 12px' }}>Local Guide verification</td>
                     <td style={{ padding: '8px 12px' }}>ID document image, selfie</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #eee' }}>
                     <td style={{ padding: '8px 12px' }}>Analytics</td>
                     <td style={{ padding: '8px 12px' }}>Usage analysis</td>
                     <td style={{ padding: '8px 12px' }}>Anonymized usage data</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #eee' }}>
                     <td style={{ padding: '8px 12px' }}>Push Notifications</td>
                     <td style={{ padding: '8px 12px' }}>Delivering notifications</td>
                     <td style={{ padding: '8px 12px' }}>Device tokens, notification content</td>
                  </tr>
               </tbody>
            </table>
         </div>
         <p>We require all service providers to use your information only for the purposes of providing services to us, to maintain appropriate security measures, and to not use your data for their own purposes (including training AI models).</p>

         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>3.4 Legal Requirements</h3>
         <p>We may disclose your information if required by law, regulation, legal process, or government request, or if we believe in good faith that disclosure is necessary to protect the safety, rights, or property of Guidera, our users, or the public.</p>

         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>3.5 Business Transfers</h3>
         <p>If Guidera is involved in a merger, acquisition, reorganization, or sale of assets, your information may be transferred as part of that transaction. We will notify you of any such change.</p>

         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>3.6 With Your Consent</h3>
         <p>We may share your information with third parties when you give us explicit consent to do so.</p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>4. AI-Specific Privacy Practices</h2>
         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>4.1 How AI Features Use Your Data</h3>
         <p>When you use AI-powered features (trip planning, conversational assistant, destination intelligence), your inputs and travel context are sent to our AI processing provider (Anthropic) to generate responses. This includes your messages and queries, your trip details (destination, dates, travelers, preferences), and your travel profile (if you have completed one).</p>

         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>4.2 AI Data Retention</h3>
         <p>AI conversation data is retained to provide continuity within your planning sessions and to allow you to revisit previous trip plans. We do not provide your personal conversation data to Anthropic for the purpose of training their AI models.</p>

         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>4.3 AI Transparency</h3>
         <p>Content generated by AI is clearly identified as AI-generated within the Service. AI recommendations are based on the information available to us and may not always be accurate, current, or complete. You should verify important information through official sources before relying on it.</p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>5. Data Storage and Security</h2>
         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>5.1 Storage</h3>
         <p>Your data is stored on servers operated by our cloud hosting provider (Supabase) with data centers in the United States. If you are located outside the United States, your information will be transferred to and processed in the United States.</p>

         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>5.2 Security Measures</h3>
         <p>We implement industry-standard security measures to protect your information, including encryption of data in transit (TLS/SSL) and at rest, access controls and authentication requirements, regular security assessments, and secure coding practices.</p>

         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>5.3 No Absolute Security</h3>
         <p>No method of electronic transmission or storage is completely secure. While we strive to protect your personal information, we cannot guarantee its absolute security. You are responsible for maintaining the security of your account credentials.</p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>6. Data Retention</h2>
         <p>We retain your personal information for as long as your account is active or as needed to provide the Service. After account deletion, we will delete or anonymize your personal information within thirty (30) days, except where retention is required by law, necessary to resolve disputes, or needed to enforce our agreements.</p>
         <p>Anonymized or aggregated data that cannot be used to identify you may be retained indefinitely for research and analytical purposes.</p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>7. Your Rights and Choices</h2>
         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>7.1 All Users</h3>
         <p>Regardless of your location, you have the right to access your personal information through your account settings, update or correct inaccurate information, delete your account and associated data, opt out of marketing communications, disable push notifications through your device settings, and disable location services through your device settings.</p>

         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>7.2 European Economic Area (EEA) Residents — GDPR</h3>
         <p>If you are located in the EEA, you have additional rights under the General Data Protection Regulation (GDPR), including the right to data portability (receive your data in a structured, machine-readable format), the right to restrict processing of your data, the right to object to processing based on legitimate interests, the right to withdraw consent at any time (without affecting the lawfulness of processing before withdrawal), and the right to lodge a complaint with your local data protection authority.</p>
         <p><strong>Legal Bases for Processing:</strong> We process your data based on contractual necessity (providing the Service you signed up for), your consent (marketing communications, location services, camera access), our legitimate interests (improving the Service, fraud prevention, security), and legal obligations (compliance with applicable laws).</p>

         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>7.3 California Residents — CCPA/CPRA</h3>
         <p>If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA), including the right to know what personal information we collect and how it is used, the right to delete your personal information, the right to opt out of the sale of personal information (we do not sell your personal information), and the right to non-discrimination for exercising your privacy rights.</p>
         <p><strong>Categories of personal information collected:</strong> Identifiers (name, email, device ID), commercial information (travel preferences, searches), internet or electronic network activity (usage data), geolocation data, biometric information (Local Guides only, for verification), and audio, electronic, or visual information (photos, receipt images).</p>

         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>7.4 How to Exercise Your Rights</h3>
         <p>To exercise any of these rights, contact us at <a href="mailto:privacy@guidera.one" style={{ color: '#3FC39E' }}>privacy@guidera.one</a>. We will respond to verifiable requests within thirty (30) days (or within the timeframe required by applicable law). We may request additional information to verify your identity before processing your request.</p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>8. Children&apos;s Privacy</h2>
         <p>The Service is not directed to children under the age of 18. We do not knowingly collect personal information from children under 18. If you believe we have collected information from a child under 18, please contact us at <a href="mailto:privacy@guidera.one" style={{ color: '#3FC39E' }}>privacy@guidera.one</a> and we will promptly delete that information.</p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>9. Push Notifications</h2>
         <p>With your consent, we may send push notifications related to trip reminders and updates, flight status changes, safety alerts for your destination, community activity (messages, vouches, reviews), and promotional content and travel deals.</p>
         <p>You can manage your notification preferences in the app settings or disable push notifications entirely through your device settings.</p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>10. Camera and Photo Access</h2>
         <p>The Service may request access to your device camera and photo library for scanning receipts and travel documents (expense tracking), scanning tickets and boarding passes (trip import), uploading profile photos, posting photos in reviews and community features, and identity verification (Local Guides).</p>
         <p>Camera and photo access is optional and requested only when you initiate a feature that requires it. You can revoke access at any time through your device settings.</p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>11. Cookies and Tracking (Web)</h2>
         <p>Our website uses cookies and similar technologies to maintain your session and preferences, analyze website traffic and usage, and improve the Service.</p>
         <p>You can manage cookie preferences through your browser settings. For more information, see our Cookie Notice at guidera.one/cookies.</p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>12. Third-Party Links</h2>
         <p>The Service contains links to third-party websites, including Travel Provider booking pages. This Privacy Policy does not apply to those websites. We encourage you to review the privacy policies of any third-party website you visit.</p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>13. International Data Transfers</h2>
         <p>If you are located outside the United States, your information will be transferred to and processed in the United States. By using the Service, you consent to this transfer. We take steps to ensure that your data is treated securely and in accordance with this Privacy Policy regardless of where it is processed.</p>
         <p>For EEA residents, transfers are conducted in accordance with applicable GDPR requirements, including the use of Standard Contractual Clauses where appropriate.</p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>14. Changes to This Privacy Policy</h2>
         <p>We may update this Privacy Policy from time to time. If we make material changes, we will notify you by posting the updated policy on the Service and updating the &quot;Last Updated&quot; date. We may also notify you via email or in-app notification.</p>
         <p>Your continued use of the Service after the effective date of any changes constitutes your acceptance of the updated Privacy Policy.</p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>15. Contact Us</h2>
         <p>If you have questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us at:</p>
         <p>
            <strong>Guidera</strong><br />
            Email: <a href="mailto:privacy@guidera.one" style={{ color: '#3FC39E' }}>privacy@guidera.one</a><br />
            Website: <a href="https://guidera.one/privacy" style={{ color: '#3FC39E' }}>https://guidera.one/privacy</a>
         </p>
         <p>For GDPR-related inquiries, you may also contact our Data Protection contact at: <a href="mailto:dpo@guidera.one" style={{ color: '#3FC39E' }}>dpo@guidera.one</a></p>
      </LegalPageLayout>
   )
}

export default PrivacyPage
