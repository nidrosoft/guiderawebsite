import type { Metadata } from "next"
import LegalPageLayout from "@/components/common/LegalPageLayout"

export const metadata: Metadata = {
   title: "GDPR — Guidera",
   description: "Learn about your rights under the General Data Protection Regulation (GDPR) with Guidera.",
}

const GDPRPage = () => {
   return (
      <LegalPageLayout title="GDPR Compliance" lastUpdated="March 25, 2026">
         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>1. Our Commitment</h2>
         <p>
            Guidera Inc. is committed to protecting the rights and freedoms of individuals in the European Economic Area (EEA) under the General Data Protection Regulation (GDPR). This page outlines how we comply with GDPR requirements.
         </p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>2. Data Controller</h2>
         <p>
            Guidera Inc. acts as the data controller for personal data collected through the Service. For any data protection inquiries, you may contact us at <a href="mailto:privacy@guidera.app" style={{ color: '#3FC39E' }}>privacy@guidera.app</a>.
         </p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>3. Legal Basis for Processing</h2>
         <p>We process personal data based on the following legal grounds:</p>
         <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
            <li><strong>Consent:</strong> When you sign up for our waitlist or opt in to communications</li>
            <li><strong>Contract:</strong> When processing is necessary to provide the Service you requested</li>
            <li><strong>Legitimate Interest:</strong> For analytics, security, and improving the Service</li>
         </ul>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>4. Your Rights Under GDPR</h2>
         <p>As an EEA resident, you have the right to:</p>
         <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
            <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
            <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
            <li><strong>Erasure:</strong> Request deletion of your personal data (&quot;right to be forgotten&quot;)</li>
            <li><strong>Restriction:</strong> Request restriction of processing under certain conditions</li>
            <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
            <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
            <li><strong>Withdraw Consent:</strong> Withdraw consent at any time without affecting prior processing</li>
         </ul>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>5. Data Transfers</h2>
         <p>
            If we transfer personal data outside the EEA, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses approved by the European Commission.
         </p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>6. Data Retention</h2>
         <p>
            We retain personal data only for as long as necessary to fulfill the purposes outlined in our Privacy Policy, unless a longer retention period is required by law.
         </p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>7. Exercising Your Rights</h2>
         <p>
            To exercise any of your GDPR rights, please contact us at <a href="mailto:privacy@guidera.app" style={{ color: '#3FC39E' }}>privacy@guidera.app</a>. We will respond to your request within 30 days. If you are not satisfied with our response, you have the right to lodge a complaint with your local data protection authority.
         </p>
      </LegalPageLayout>
   )
}

export default GDPRPage
