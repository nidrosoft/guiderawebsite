import type { Metadata } from "next"
import Header from "@/layouts/headers/Header"
import Footer from "@/layouts/footers/Footer"

export const metadata: Metadata = {
   title: "About Us — Guidera",
   description: "Learn about Guidera, the next-generation travel platform built for modern travelers.",
}

const AboutPage = () => {
   return (
      <div className="main-page-wrapper">
         <Header />
         <div className="container" style={{ paddingTop: '160px', paddingBottom: '80px', maxWidth: '800px' }}>
            <h1 style={{ fontSize: '42px', fontWeight: 700, marginBottom: '24px' }}>About Guidera</h1>

            <p style={{ fontSize: '18px', lineHeight: 1.8, color: '#444', marginBottom: '32px' }}>
               Guidera is an AI-assisted iOS travel app for trip planning, travel search and comparison, destination context, packing, expenses, and traveler community features. Guidera is a product of Nitrosoft LLC.
            </p>

            <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '16px' }}>Our Mission</h2>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#444', marginBottom: '32px' }}>
               Our mission is to help travelers prepare thoughtfully by bringing useful planning and destination tools together. Guidera&apos;s AI, safety, visa, health, translation, and price information is informational and should be verified with official or primary sources when it matters.
            </p>

            <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '16px' }}>What We Do</h2>
            <ul style={{ fontSize: '16px', lineHeight: 2.2, color: '#444', marginBottom: '32px', paddingLeft: '20px' }}>
               <li><strong>AI Trip Planning</strong> — Personalized itinerary drafts using the trip context you provide</li>
               <li><strong>Safety Context</strong> — Informational zones, scam awareness, emergency contacts, and SOS access</li>
               <li><strong>Cultural Context</strong> — AI-assisted etiquette, dress, and local-custom guidance</li>
               <li><strong>Travel Comparison</strong> — Search flights, stays, cars, and experiences, then continue with the external provider</li>
               <li><strong>Smart Packing</strong> — Packing suggestions using destination, forecast, and optional preferences</li>
               <li><strong>Expense Tracking</strong> — Receipt scanning, currency estimates, and budget tools</li>
               <li><strong>Camera Translation</strong> — AI-assisted translation for supported menus, signs, and documents</li>
            </ul>

            <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '16px' }}>Our Story</h2>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#444', marginBottom: '32px' }}>
               Guidera was born from the frustration of planning international trips with disconnected tools. Founded by Cyriac Zeh, Guidera is developed by Nitrosoft LLC in San Diego, California.
            </p>

            <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '16px' }}>Join the Journey</h2>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#444' }}>
               Guidera is preparing its iOS release. Follow the website for current availability and release updates.
            </p>
         </div>
         <Footer />
      </div>
   )
}

export default AboutPage
