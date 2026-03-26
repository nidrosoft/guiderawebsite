import type { Metadata } from "next"
import LegalPageLayout from "@/components/common/LegalPageLayout"

export const metadata: Metadata = {
   title: "Privacy Policy — Guidera",
   description: "Learn how Guidera collects, uses, and protects your personal information.",
}

const PrivacyPage = () => {
   return (
      <LegalPageLayout title="Privacy Policy" lastUpdated="March 25, 2026">
         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>1. Introduction</h2>
         <p>
            Guidera Inc. (&quot;Guidera,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website (collectively, the &quot;Service&quot;).
         </p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>2. Information We Collect</h2>
         <p><strong>Personal Information:</strong> When you create an account or join our waitlist, we may collect your name, email address, and travel preferences.</p>
         <p><strong>Usage Data:</strong> We automatically collect information about how you interact with the Service, including pages visited, features used, and device information.</p>
         <p><strong>Location Data:</strong> With your permission, we collect location data to provide safety alerts, local recommendations, and cultural insights.</p>
         <p><strong>Travel Data:</strong> Trip itineraries, bookings, and preferences you input to personalize your experience.</p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>3. How We Use Your Information</h2>
         <p>We use the information we collect to:</p>
         <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
            <li>Provide, maintain, and improve the Service</li>
            <li>Generate personalized trip itineraries and recommendations</li>
            <li>Send safety alerts and travel intelligence</li>
            <li>Process bookings and transactions</li>
            <li>Communicate with you about updates, features, and promotions</li>
            <li>Analyze usage patterns to improve our AI engine</li>
         </ul>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>4. Data Sharing</h2>
         <p>
            We do not sell your personal information. We may share data with trusted third-party service providers who assist in operating the Service (e.g., booking partners, payment processors, cloud hosting). All third parties are bound by data protection agreements.
         </p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>5. Data Security</h2>
         <p>
            We implement industry-standard security measures including encryption in transit and at rest, secure authentication, and regular security audits to protect your data.
         </p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>6. Your Rights</h2>
         <p>You have the right to access, update, or delete your personal information at any time. You may also opt out of marketing communications. To exercise these rights, contact us at <a href="mailto:privacy@guidera.app" style={{ color: '#3FC39E' }}>privacy@guidera.app</a>.</p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>7. Contact Us</h2>
         <p>If you have questions about this Privacy Policy, please contact us at <a href="mailto:privacy@guidera.app" style={{ color: '#3FC39E' }}>privacy@guidera.app</a>.</p>
      </LegalPageLayout>
   )
}

export default PrivacyPage
