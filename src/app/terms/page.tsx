import type { Metadata } from "next"
import LegalPageLayout from "@/components/common/LegalPageLayout"

export const metadata: Metadata = {
   title: "Terms of Service — Guidera",
   description: "Read the terms and conditions governing the use of Guidera, your AI-powered travel companion.",
}

const TermsPage = () => {
   return (
      <LegalPageLayout title="Terms of Service" lastUpdated="March 26, 2026">
         <p style={{ marginBottom: '16px' }}>
            <strong>IMPORTANT:</strong> Section 14 contains an arbitration agreement and class action waiver. Please read it carefully, as it affects your legal rights.
         </p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>1. Definitions</h2>
         <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
            <li><strong>&quot;Service&quot;</strong> refers to the Guidera mobile application (iOS and Android), the website at guidera.one, and all features, tools, content, and functionality we provide.</li>
            <li><strong>&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;</strong> refers to any individual who accesses or uses the Service.</li>
            <li><strong>&quot;Content&quot;</strong> refers to all text, images, photos, reviews, itineraries, recommendations, and other materials submitted to or generated through the Service.</li>
            <li><strong>&quot;AI Features&quot;</strong> refers to Guidera&apos;s artificial intelligence-powered tools, including but not limited to trip planning, itinerary generation, destination intelligence, packing lists, safety assessments, and the conversational travel assistant.</li>
            <li><strong>&quot;Travel Provider&quot;</strong> refers to any third-party airline, hotel, car rental company, experience provider, or other travel supplier whose products or services are displayed, compared, or linked through the Service.</li>
            <li><strong>&quot;Local Guide&quot;</strong> or <strong>&quot;Partner&quot;</strong> refers to a verified individual who offers travel-related services through Guidera&apos;s Local Guide Partner Program.</li>
            <li><strong>&quot;Booking&quot;</strong> refers to any reservation, purchase, or transaction made through a Travel Provider&apos;s website after being redirected from the Service.</li>
         </ul>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>2. The Service</h2>
         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>2.1 What Guidera Does</h3>
         <p>
            Guidera is an AI-powered travel companion platform that provides trip planning and itinerary generation, destination intelligence and travel previews, flight, hotel, car rental, and experience search and comparison, community features including Local Guides, safety and cultural intelligence, expense tracking, and a conversational AI travel assistant.
         </p>

         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>2.2 What Guidera Does NOT Do</h3>
         <p>
            <strong>Guidera is not a travel agency, booking platform, or seller of travel services.</strong> We operate as an affiliate and meta-search platform. When you search for flights, hotels, car rentals, or experiences through Guidera, we display results from third-party Travel Providers. When you choose to book, you are redirected to the Travel Provider&apos;s own website or app to complete your transaction.
         </p>
         <p>
            All bookings, payments, cancellations, refunds, and customer service related to travel purchases are handled entirely by the relevant Travel Provider. Guidera is not a party to any booking transaction and assumes no responsibility for the acts, errors, omissions, representations, warranties, breaches, or negligence of any Travel Provider.
         </p>

         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>2.3 Prices and Availability</h3>
         <p>
            Prices, availability, and travel information displayed on Guidera are sourced from third-party providers and APIs. We make reasonable efforts to ensure accuracy but cannot guarantee that prices, availability, schedules, or other information shown on the Service will be current, complete, or error-free at the time you view or act on them. The final price and terms of any booking are determined by the Travel Provider at the time of purchase.
         </p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>3. Account Registration</h2>
         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>3.1 Eligibility</h3>
         <p>You must be at least 18 years of age to create an account or use the Service. By creating an account, you represent and warrant that you meet this age requirement.</p>

         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>3.2 Account Information</h3>
         <p>You agree to provide accurate, current, and complete information during registration and to keep your account information up to date. You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account.</p>

         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>3.3 Account Security</h3>
         <p>You must notify us immediately at <a href="mailto:support@guidera.one" style={{ color: '#3FC39E' }}>support@guidera.one</a> if you become aware of any unauthorized use of your account or any other breach of security.</p>

         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>3.4 Account Deletion</h3>
         <p>You may delete your account at any time through the Settings menu in the app. Upon deletion, we will remove your personal data in accordance with our Privacy Policy, subject to any legal retention obligations. Account deletion is permanent and cannot be reversed.</p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>4. AI-Powered Features</h2>
         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>4.1 Nature of AI Content</h3>
         <p>Guidera uses artificial intelligence, including large language models, to generate trip plans, itineraries, destination intelligence, packing lists, safety information, cultural guidance, and other travel-related content. AI-generated content is provided for informational and planning purposes only.</p>

         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>4.2 Accuracy and Limitations</h3>
         <p>While we strive to provide helpful and accurate information, AI-generated content may contain errors, inaccuracies, or outdated information. You should independently verify critical information, including but not limited to visa and entry requirements, health and vaccination requirements, local laws and regulations, safety conditions, flight schedules and pricing, and emergency contact numbers.</p>
         <p><strong>Guidera does not guarantee the accuracy, completeness, or reliability of any AI-generated content.</strong> You use AI-generated recommendations at your own risk.</p>

         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>4.3 Not Professional Advice</h3>
         <p>AI-generated content does not constitute legal, medical, financial, or professional advice. For matters involving health, safety, immigration, or legal compliance, you should consult qualified professionals and official government sources.</p>

         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>4.4 AI Data Usage</h3>
         <p>Your interactions with AI features (such as trip planning conversations) may be used to improve the quality of responses within your session. We do not use your personal conversations to train third-party AI models. See our Privacy Policy for full details.</p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>5. User Content</h2>
         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>5.1 Your Content</h3>
         <p>You retain ownership of all Content you submit to the Service, including reviews, photos, itineraries, and community posts. By submitting Content, you grant Guidera a non-exclusive, worldwide, royalty-free, transferable, sublicensable license to use, display, reproduce, modify, and distribute your Content in connection with operating and improving the Service.</p>

         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>5.2 Content Standards</h3>
         <p>You agree not to submit Content that is false, misleading, defamatory, obscene, or offensive; infringes any third party&apos;s intellectual property, privacy, or other rights; promotes illegal activity, violence, discrimination, or harassment; contains spam, advertising, or solicitations unrelated to the Service; or impersonates any person or entity.</p>

         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>5.3 Content Moderation</h3>
         <p>We reserve the right, but have no obligation, to monitor, review, edit, or remove any Content at our sole discretion. We may remove Content that violates these Terms or our Community Guidelines.</p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>6. Local Guide Partner Program</h2>
         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>6.1 Overview</h3>
         <p>The Local Guide Partner Program allows verified individuals to create profiles and list travel-related services for travelers to discover. Guidera serves as a platform for discovery and connection between travelers and Local Guides.</p>

         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>6.2 Identity Verification</h3>
         <p>Local Guides must complete identity verification through our third-party verification provider. Verification requires a valid government-issued ID and a biometric selfie. By completing verification, you consent to the collection and processing of this data as described in our Privacy Policy.</p>

         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>6.3 Guidera&apos;s Role</h3>
         <p><strong>Guidera is a platform that facilitates connections between travelers and Local Guides. Guidera does not employ, endorse, or guarantee the services of any Local Guide.</strong> All arrangements, payments, and disputes between travelers and Local Guides are between those parties. Guidera is not responsible for the quality, safety, legality, or accuracy of any services offered by Local Guides.</p>

         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>6.4 Trust Tiers and Badges</h3>
         <p>Trust tiers (Verified Local, Background Cleared, Trusted Guide, Community Ambassador) and verification badges represent completed verification steps only. They do not constitute an endorsement, guarantee, or warranty of any Local Guide&apos;s character, reliability, or service quality.</p>

         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>6.5 Vouch System</h3>
         <p>The vouch system allows verified Local Guides to vouch for one another. Vouches represent personal endorsements between individual guides and do not constitute endorsements by Guidera.</p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>7. Community Features</h2>
         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>7.1 User-Generated Communities</h3>
         <p>Guidera allows users to create and join travel communities, participate in events, and connect with other travelers. Your participation in community features is subject to these Terms and our Community Guidelines.</p>

         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>7.2 Safety and Conduct</h3>
         <p>You are solely responsible for your interactions with other users. Guidera does not conduct background checks on users (except as part of the Local Guide verification process) and does not guarantee the identity, intentions, or conduct of any user. Exercise caution and good judgment when meeting or communicating with other users.</p>

         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>7.3 Reporting</h3>
         <p>You may report users, Content, or behavior that violates these Terms or our Community Guidelines through the in-app reporting tools. We will review reports and take appropriate action at our discretion.</p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>8. Expense Tracking and Receipt Scanning</h2>
         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>8.1 Camera and Document Access</h3>
         <p>Expense tracking features may use your device camera to scan receipts and travel documents. By using these features, you grant Guidera permission to access your camera for this purpose. You may revoke camera access at any time through your device settings.</p>

         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>8.2 Data Processing</h3>
         <p>Receipt and document images are processed using AI (including optical character recognition) to extract relevant information. See our Privacy Policy for details on how this data is stored and used.</p>

         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>8.3 Accuracy</h3>
         <p>Automated data extraction from receipts and documents may contain errors. You are responsible for verifying the accuracy of extracted information and any expense calculations.</p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>9. Intellectual Property</h2>
         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>9.1 Our Property</h3>
         <p>The Service, including its design, features, functionality, code, AI models, content, graphics, logos, and trademarks, is owned by Guidera and is protected by intellectual property laws. You may not copy, modify, distribute, sell, or lease any part of the Service without our prior written consent.</p>

         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>9.2 Feedback</h3>
         <p>If you provide suggestions, ideas, or feedback about the Service (&quot;Feedback&quot;), you grant Guidera an unrestricted, perpetual, irrevocable, royalty-free license to use and incorporate such Feedback without any obligation to you.</p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>10. Prohibited Uses</h2>
         <p>You agree not to use the Service to violate any applicable law or regulation; interfere with or disrupt the Service or its infrastructure; attempt to gain unauthorized access to any part of the Service; use automated tools (bots, scrapers, crawlers) to access the Service without our written permission; transmit malware, viruses, or other harmful code; collect or harvest user data without consent; use the Service for any commercial purpose not expressly permitted by these Terms; circumvent any security or access control measures; or misrepresent your identity or affiliation.</p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>11. Third-Party Services and Links</h2>
         <p>The Service may contain links to third-party websites, services, or content. These links are provided for your convenience and do not imply our endorsement. We are not responsible for the content, privacy practices, or terms of any third-party website or service. Your use of third-party services is at your own risk and subject to those services&apos; own terms and conditions.</p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>12. Disclaimers</h2>
         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>12.1 &quot;As Is&quot; Basis</h3>
         <p style={{ textTransform: 'uppercase', fontSize: '14px' }}>
            The Service is provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, title, and non-infringement.
         </p>

         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>12.2 No Guarantee</h3>
         <p style={{ textTransform: 'uppercase', fontSize: '14px' }}>
            We do not warrant that the Service will be uninterrupted, secure, or error-free; that any information provided through the Service (including AI-generated content) will be accurate, reliable, or complete; that defects will be corrected; or that the Service is free of viruses or other harmful components.
         </p>

         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>12.3 Travel Risks</h3>
         <p style={{ textTransform: 'uppercase', fontSize: '14px' }}>
            Travel involves inherent risks. Guidera does not guarantee your safety or the safety of any travel destination, activity, or service. Safety information provided through the Service is for general informational purposes only and may not reflect current conditions.
         </p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>13. Limitation of Liability</h2>
         <p style={{ textTransform: 'uppercase', fontSize: '14px' }}>
            To the maximum extent permitted by law, Guidera and its officers, directors, employees, agents, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, or goodwill, arising out of or in connection with your use of the Service, whether based on warranty, contract, tort, or any other legal theory.
         </p>
         <p style={{ textTransform: 'uppercase', fontSize: '14px' }}>
            Our total liability for all claims arising from or relating to these Terms or the Service shall not exceed the greater of (a) the amount you paid to Guidera, if any, in the twelve (12) months preceding the claim, or (b) one hundred dollars (US $100.00).
         </p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>14. Dispute Resolution</h2>
         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>14.1 Informal Resolution</h3>
         <p>Before filing any legal claim, you agree to attempt to resolve the dispute informally by contacting us at <a href="mailto:legal@guidera.one" style={{ color: '#3FC39E' }}>legal@guidera.one</a>. We will attempt to resolve the dispute within thirty (30) days.</p>

         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>14.2 Binding Arbitration</h3>
         <p>If informal resolution fails, any dispute, claim, or controversy arising out of or relating to these Terms or the Service shall be resolved by binding arbitration administered by the American Arbitration Association (&quot;AAA&quot;) under its Consumer Arbitration Rules. Arbitration shall take place in the state where you reside, or remotely by video or telephone, at your election.</p>

         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>14.3 Class Action Waiver</h3>
         <p style={{ textTransform: 'uppercase', fontSize: '14px' }}>
            You and Guidera agree that each may bring claims against the other only in your or its individual capacity, and not as a plaintiff or class member in any purported class, consolidated, or representative proceeding.
         </p>

         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>14.4 Exceptions</h3>
         <p>Nothing in this section prevents either party from seeking injunctive or other equitable relief in court for intellectual property infringement or unauthorized access to the Service.</p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>15. Indemnification</h2>
         <p>You agree to indemnify, defend, and hold harmless Guidera and its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys&apos; fees) arising out of or relating to your use of the Service; your violation of these Terms; your Content; your interaction with any Travel Provider, Local Guide, or other user; or your violation of any applicable law or regulation.</p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>16. Modifications</h2>
         <p>We may update these Terms from time to time. If we make material changes, we will notify you by posting the updated Terms on the Service and updating the &quot;Last Updated&quot; date. We may also notify you via email or in-app notification. Your continued use of the Service after the effective date of any changes constitutes your acceptance of the updated Terms.</p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>17. Termination</h2>
         <p>We may suspend or terminate your account and access to the Service at any time, with or without cause, and with or without notice. You may stop using the Service and delete your account at any time. Upon termination, your right to use the Service ceases immediately. Sections of these Terms that by their nature should survive termination shall survive, including Sections 5, 9, 12, 13, 14, and 15.</p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>18. General Provisions</h2>
         <p><strong>18.1 Governing Law:</strong> These Terms shall be governed by the laws of the State of Delaware, United States, without regard to conflict of law principles.</p>
         <p><strong>18.2 Entire Agreement:</strong> These Terms, together with our Privacy Policy and Community Guidelines, constitute the entire agreement between you and Guidera regarding the Service.</p>
         <p><strong>18.3 Severability:</strong> If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.</p>
         <p><strong>18.4 Waiver:</strong> Our failure to enforce any right or provision of these Terms shall not constitute a waiver of that right or provision.</p>
         <p><strong>18.5 Assignment:</strong> You may not assign or transfer your rights under these Terms without our prior written consent. We may assign our rights and obligations without restriction.</p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>19. Contact Us</h2>
         <p>If you have questions about these Terms of Service, please contact us at:</p>
         <p>
            <strong>Guidera</strong><br />
            Email: <a href="mailto:legal@guidera.one" style={{ color: '#3FC39E' }}>legal@guidera.one</a><br />
            Website: <a href="https://guidera.one" style={{ color: '#3FC39E' }}>https://guidera.one</a>
         </p>
      </LegalPageLayout>
   )
}

export default TermsPage
