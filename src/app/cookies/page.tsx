import type { Metadata } from "next"
import LegalPageLayout from "@/components/common/LegalPageLayout"

export const metadata: Metadata = {
   title: "Cookie Policy — Guidera",
   description: "Learn how Guidera uses cookies and similar technologies.",
}

const CookiesPage = () => {
   return (
      <LegalPageLayout title="Cookie Policy" lastUpdated="March 25, 2026">
         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>1. What Are Cookies</h2>
         <p>
            Cookies are small text files stored on your device when you visit a website. They help us provide a better experience by remembering your preferences and understanding how you use our Service.
         </p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>2. How We Use Cookies</h2>
         <p>Guidera uses cookies for the following purposes:</p>
         <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
            <li><strong>Essential Cookies:</strong> Required for the Service to function properly (e.g., authentication, session management)</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with the Service so we can improve it</li>
            <li><strong>Preference Cookies:</strong> Remember your settings and preferences for a personalized experience</li>
         </ul>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>3. Third-Party Cookies</h2>
         <p>
            We may use third-party analytics services (e.g., Google Analytics) that set their own cookies to collect usage data. These third parties have their own privacy policies governing their use of cookies.
         </p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>4. Managing Cookies</h2>
         <p>
            You can control and manage cookies through your browser settings. Most browsers allow you to block or delete cookies. However, disabling certain cookies may affect the functionality of the Service.
         </p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>5. Updates to This Policy</h2>
         <p>
            We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated &quot;Last updated&quot; date.
         </p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>6. Contact</h2>
         <p>For questions about our use of cookies, contact us at <a href="mailto:privacy@guidera.app" style={{ color: '#3FC39E' }}>privacy@guidera.app</a>.</p>
      </LegalPageLayout>
   )
}

export default CookiesPage
