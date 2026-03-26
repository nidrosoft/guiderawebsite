import type { Metadata } from "next"
import LegalPageLayout from "@/components/common/LegalPageLayout"

export const metadata: Metadata = {
   title: "Terms of Service — Guidera",
   description: "Read the terms and conditions governing the use of Guidera.",
}

const TermsPage = () => {
   return (
      <LegalPageLayout title="Terms of Service" lastUpdated="March 25, 2026">
         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>1. Acceptance of Terms</h2>
         <p>
            By accessing or using Guidera&apos;s website and mobile application (the &quot;Service&quot;), you agree to be bound by these Terms of Service. If you do not agree, please do not use the Service.
         </p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>2. Description of Service</h2>
         <p>
            Guidera provides an AI-powered travel platform that includes trip planning, safety intelligence, cultural insights, booking management, expense tracking, translation, and packing assistance. The Service is provided &quot;as is&quot; and may be updated from time to time.
         </p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>3. User Accounts</h2>
         <p>
            To access certain features, you may need to create an account. You are responsible for maintaining the confidentiality of your credentials and for all activities under your account. You must provide accurate and current information.
         </p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>4. Acceptable Use</h2>
         <p>You agree not to:</p>
         <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
            <li>Use the Service for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to the Service or its systems</li>
            <li>Interfere with the proper functioning of the Service</li>
            <li>Scrape, copy, or redistribute content without permission</li>
            <li>Impersonate another person or entity</li>
         </ul>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>5. Intellectual Property</h2>
         <p>
            All content, features, and functionality of the Service — including text, graphics, logos, and software — are the exclusive property of Guidera Inc. and are protected by copyright, trademark, and other intellectual property laws.
         </p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>6. Limitation of Liability</h2>
         <p>
            Guidera shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service. Travel decisions are ultimately your responsibility. Safety alerts and cultural information are provided as guidance and should not replace your own judgment.
         </p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>7. Termination</h2>
         <p>
            We reserve the right to suspend or terminate your access to the Service at any time, with or without cause, with or without notice. Upon termination, your right to use the Service will immediately cease.
         </p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>8. Changes to Terms</h2>
         <p>
            We may update these Terms from time to time. We will notify you of material changes by posting the new Terms on this page. Continued use of the Service constitutes acceptance of the updated Terms.
         </p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>9. Contact</h2>
         <p>For questions about these Terms, contact us at <a href="mailto:legal@guidera.app" style={{ color: '#3FC39E' }}>legal@guidera.app</a>.</p>
      </LegalPageLayout>
   )
}

export default TermsPage
