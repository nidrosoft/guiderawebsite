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
               Guidera is the first travel platform that combines AI trip planning, real-time safety intelligence, cultural insights, booking management, and a global traveler community — all in one app.
            </p>

            <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '16px' }}>Our Mission</h2>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#444', marginBottom: '32px' }}>
               We believe travel should be effortless, safe, and culturally respectful. Our mission is to give every traveler — solo or group, first-time or frequent — the tools to explore the world with confidence. No more juggling 7 apps. No more guesswork. Just one intelligent companion that knows you, your style, and your destination.
            </p>

            <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '16px' }}>What We Do</h2>
            <ul style={{ fontSize: '16px', lineHeight: 2.2, color: '#444', marginBottom: '32px', paddingLeft: '20px' }}>
               <li><strong>AI Trip Planning</strong> — Personalized day-by-day itineraries generated in seconds</li>
               <li><strong>Safety Intelligence</strong> — Real-time alerts, danger zones, and one-tap SOS</li>
               <li><strong>Cultural Intelligence</strong> — Do&apos;s and don&apos;ts, etiquette, and local customs for every destination</li>
               <li><strong>Unified Booking</strong> — Flights, hotels, cars, and experiences in one place</li>
               <li><strong>Smart Packing</strong> — Weather-aware, profession-aware packing lists</li>
               <li><strong>Expense Tracking</strong> — Auto currency conversion and budget management</li>
               <li><strong>AR Translation</strong> — Point your camera, understand everything</li>
            </ul>

            <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '16px' }}>Our Story</h2>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#444', marginBottom: '32px' }}>
               Guidera was born from the frustration of planning international trips with disconnected tools. Founded by Cyriac Zeh, a passionate traveler and technologist, Guidera is built on a next-generation travel engine trained on billions of real-world travel signals. We&apos;re headquartered in San Diego, California, and serve travelers across 127+ countries.
            </p>

            <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '16px' }}>Join the Journey</h2>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#444' }}>
               We&apos;re currently in pre-launch with over 10,000 travelers on our waitlist. Guidera launches in 2026. Join us and be among the first to experience the future of travel.
            </p>
         </div>
         <Footer />
      </div>
   )
}

export default AboutPage
