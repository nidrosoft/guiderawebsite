import type { Metadata } from "next"
import LegalPageLayout from "@/components/common/LegalPageLayout"

export const metadata: Metadata = {
   title: "Community Guidelines — Guidera",
   description: "Our community standards for keeping Guidera safe, welcoming, and useful for travelers worldwide.",
}

const CommunityGuidelinesPage = () => {
   return (
      <LegalPageLayout title="Community Guidelines" lastUpdated="March 26, 2026">
         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>Our Community Philosophy</h2>
         <p>
            Guidera is built on the belief that travel is better when people help each other. Our community — travelers, Local Guides, and explorers from every corner of the world — is what makes Guidera more than just an app. These guidelines exist to keep that community safe, welcoming, and genuinely useful for everyone.
         </p>
         <p>
            By using Guidera&apos;s community features, you agree to follow these guidelines. Violations may result in content removal, account suspension, or permanent removal from the platform.
         </p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>1. Be Respectful and Inclusive</h2>
         <p>
            Guidera serves a global community of travelers from every culture, background, and identity. We expect every member to treat others with respect and dignity, regardless of race, ethnicity, nationality, religion, gender, gender identity, sexual orientation, age, disability, or any other characteristic.
         </p>
         <p><strong>Do:</strong> Engage in good-faith conversations. Offer constructive feedback. Respect differing opinions and travel styles. Acknowledge that customs and norms differ around the world.</p>
         <p><strong>Don&apos;t:</strong> Use slurs, insults, or derogatory language. Harass, bully, or intimidate other users. Discriminate or express hostility toward any group of people. Mock or belittle someone&apos;s travel experience, questions, or background.</p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>2. Be Honest and Authentic</h2>
         <p>
            Trust is the foundation of our community. Reviews, recommendations, and guide profiles should reflect real experiences and genuine intentions.
         </p>
         <p><strong>Do:</strong> Write reviews based on your actual experiences. Represent yourself honestly in your profile. Provide accurate information about services you offer (Local Guides). Disclose any conflicts of interest.</p>
         <p><strong>Don&apos;t:</strong> Post fake or misleading reviews. Create multiple accounts or impersonate another person. Misrepresent your qualifications, location, or identity. Offer incentives in exchange for positive reviews.</p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>3. Keep It Safe</h2>
         <p>
            People use Guidera to make real-world travel decisions. Inaccurate or irresponsible information can put someone at risk.
         </p>
         <p><strong>Do:</strong> Share safety information responsibly and in good faith. Flag outdated or potentially dangerous advice if you see it. Report suspicious or threatening behavior immediately. Use the SOS and reporting features if you feel unsafe.</p>
         <p><strong>Don&apos;t:</strong> Share information that could endanger someone&apos;s physical safety. Encourage illegal activity, regardless of the destination. Provide medical, legal, or visa advice that you&apos;re not qualified to give. Share another person&apos;s location, contact information, or personal details without their consent.</p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>4. Keep It Relevant</h2>
         <p>
            Guidera&apos;s community spaces are designed for travel-related discussion, connection, and support.
         </p>
         <p><strong>Do:</strong> Keep conversations and posts relevant to travel, destinations, and the community topic. Share useful tips, photos, recommendations, and experiences. Ask questions — even basic ones. Everyone starts somewhere.</p>
         <p><strong>Don&apos;t:</strong> Post spam, promotional content, or unsolicited advertisements. Use community spaces for unrelated sales, political campaigning, or chain messages. Post repetitive or identical content across multiple communities. Promote competing apps or services within Guidera.</p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>5. Respect Privacy</h2>
         <p>
            Protecting the privacy of fellow travelers is essential.
         </p>
         <p><strong>Do:</strong> Ask for consent before sharing photos that include other people. Respect other users&apos; privacy settings and boundaries. Report any doxxing or unauthorized sharing of personal information.</p>
         <p><strong>Don&apos;t:</strong> Share someone&apos;s real name, address, phone number, or other personal information without their consent. Screenshot and distribute private messages. Stalk, track, or monitor another user&apos;s activity. Use information from someone&apos;s profile for purposes outside of Guidera.</p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>6. Local Guide Standards</h2>
         <p>
            Local Guides are held to a higher standard because travelers trust them with their safety and experience.
         </p>
         <p><strong>Do:</strong> Accurately represent your services, pricing, and availability. Respond to inquiries promptly and professionally. Maintain the accuracy of your profile and service listings. Respect agreed-upon arrangements with travelers. Report any safety concerns involving other guides or users.</p>
         <p><strong>Don&apos;t:</strong> Misrepresent your services or qualifications. Engage in price gouging, bait-and-switch tactics, or deceptive practices. Request payment outside of agreed-upon channels. Use your verified status to pressure or manipulate travelers.</p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>7. Prohibited Content</h2>
         <p>The following content is strictly prohibited on Guidera:</p>
         <p><strong>Illegal Content:</strong> Content that promotes or facilitates illegal activity in any jurisdiction.</p>
         <p><strong>Violence and Threats:</strong> Threats of violence, encouragement of violence, or graphic violent content.</p>
         <p><strong>Hate Speech:</strong> Content that promotes hatred, violence, or discrimination against individuals or groups based on protected characteristics.</p>
         <p><strong>Sexual Content:</strong> Sexually explicit content, solicitation, or non-consensual intimate imagery.</p>
         <p><strong>Exploitation:</strong> Content involving the exploitation of minors, human trafficking, or any form of abuse.</p>
         <p><strong>Dangerous Misinformation:</strong> Deliberately false information that could endanger health or safety (e.g., false claims about vaccine requirements, fabricated safety assessments of dangerous areas).</p>
         <p><strong>Intellectual Property Violations:</strong> Content that infringes on copyrights, trademarks, or other intellectual property rights of others.</p>
         <p><strong>Malware and Phishing:</strong> Links to malicious websites, phishing attempts, or scam operations.</p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>8. Reporting and Enforcement</h2>
         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>How to Report</h3>
         <p>
            If you encounter content or behavior that violates these guidelines, use the in-app <strong>Report</strong> button available on all profiles, posts, reviews, and messages, or email us at <a href="mailto:safety@guidera.one" style={{ color: '#3FC39E' }}>safety@guidera.one</a> with details.
         </p>
         <p>All reports are reviewed by our team. We take every report seriously.</p>

         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>What Happens When Guidelines Are Violated</h3>
         <p>Depending on the severity and frequency of the violation, we may issue a warning to the user, remove the offending content, temporarily suspend the user&apos;s account, permanently ban the user from the platform, or report the activity to law enforcement (in cases involving illegal activity or imminent danger).</p>

         <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', marginTop: '20px', color: '#222' }}>Appeals</h3>
         <p>If you believe an enforcement action was made in error, you may appeal by contacting <a href="mailto:appeals@guidera.one" style={{ color: '#3FC39E' }}>appeals@guidera.one</a> within thirty (30) days. We will review your appeal and respond within fourteen (14) business days.</p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>9. Your Responsibility</h2>
         <p>
            These guidelines are not exhaustive. Use good judgment. If something feels wrong, it probably is. Our goal is simple: make Guidera a place where travelers feel safe, informed, and connected.
         </p>
         <p>Thank you for being part of the Guidera community.</p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>10. Contact Us</h2>
         <p>Questions about these Community Guidelines? Reach us at:</p>
         <p>
            <strong>Guidera</strong><br />
            Email: <a href="mailto:community@guidera.one" style={{ color: '#3FC39E' }}>community@guidera.one</a><br />
            Website: <a href="https://guidera.one" style={{ color: '#3FC39E' }}>https://guidera.one</a>
         </p>
      </LegalPageLayout>
   )
}

export default CommunityGuidelinesPage
