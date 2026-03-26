"use client"
import { useState } from "react"
import WaitlistModal from "@/components/common/WaitlistModal"

const steps = [
   {
      number: "01",
      title: "Download the app",
      desc: "Available on iOS and Android. Get set up in under 2 minutes.",
      emoji: "📱",
   },
   {
      number: "02",
      title: "Tell us about you",
      desc: "Your travel style, diet, health, profession — Guidera learns what matters to you.",
      emoji: "🧠",
   },
   {
      number: "03",
      title: "Start exploring",
      desc: "Tap \u201CGenerate Smart Plan\u201D and watch your entire trip come together instantly.",
      emoji: "🚀",
   },
];

const HowItWorks = () => {
   const [showModal, setShowModal] = useState(false)
   return (
      <>
      <div
         className="how-it-works-wrapper"
         style={{
            background: '#fff',
            padding: '120px 0 100px',
         }}
      >
         <div className="container">
            {/* Section label */}
            <div style={{ textAlign: 'center', marginBottom: '16px' }}>
               <span
                  style={{
                     fontSize: '14px',
                     fontWeight: 600,
                     letterSpacing: '3px',
                     textTransform: 'uppercase',
                     color: '#3FC39E',
                  }}
               >
                  How It Works
               </span>
            </div>

            {/* Headline */}
            <h2
               className="how-it-works-heading"
               style={{
                  textAlign: 'center',
                  fontSize: '48px',
                  lineHeight: 1.2,
                  fontWeight: 700,
                  color: '#111',
                  margin: '0 auto 70px',
               }}
            >
               Get started in 3 simple steps
            </h2>

            {/* Steps */}
            <div className="row justify-content-center align-items-start">
               {steps.map((step, idx) => (
                  <div key={idx} className="col-lg-4 col-md-6 mb-4" style={{ position: 'relative' }}>
                     {/* Dashed connector line (between cards, not after last) */}
                     {idx < steps.length - 1 && (
                        <div
                           className="d-none d-lg-block"
                           style={{
                              position: 'absolute',
                              top: '80px',
                              right: '-16px',
                              width: '32px',
                              height: '2px',
                              borderTop: '2px dashed #ccc',
                              zIndex: 2,
                           }}
                        />
                     )}
                     <div
                        style={{
                           background: '#F7F7F7',
                           borderRadius: '24px',
                           padding: '44px 36px',
                           textAlign: 'center',
                           height: '100%',
                           transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                           (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)';
                           (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)';
                        }}
                        onMouseLeave={(e) => {
                           (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                           (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                        }}
                     >
                        {/* Step number */}
                        <div
                           style={{
                              fontSize: '56px',
                              fontWeight: 800,
                              color: 'rgba(63,195,158,0.2)',
                              lineHeight: 1,
                              marginBottom: '12px',
                           }}
                        >
                           {step.number}
                        </div>

                        {/* Emoji */}
                        <div style={{ fontSize: '40px', marginBottom: '16px' }}>{step.emoji}</div>

                        {/* Title */}
                        <h4
                           style={{
                              fontSize: '24px',
                              fontWeight: 700,
                              color: '#111',
                              marginBottom: '12px',
                           }}
                        >
                           {step.title}
                        </h4>

                        {/* Description */}
                        <p
                           style={{
                              fontSize: '16px',
                              color: '#666',
                              lineHeight: 1.6,
                              margin: 0,
                           }}
                        >
                           {step.desc}
                        </p>
                     </div>
                  </div>
               ))}
            </div>

            {/* CTA */}
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
               <button
                  onClick={() => setShowModal(true)}
                  style={{
                     display: 'inline-block',
                     background: '#3FC39E',
                     color: '#fff',
                     fontSize: '18px',
                     fontWeight: 600,
                     padding: '16px 40px',
                     borderRadius: '60px',
                     border: 'none',
                     cursor: 'pointer',
                     transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                     e.currentTarget.style.transform = 'translateY(-2px)';
                     e.currentTarget.style.boxShadow = '0 8px 30px rgba(63,195,158,0.35)';
                  }}
                  onMouseLeave={(e) => {
                     e.currentTarget.style.transform = 'translateY(0)';
                     e.currentTarget.style.boxShadow = 'none';
                  }}
               >
                  Join the Waitlist
               </button>
            </div>
         </div>
      </div>
      <WaitlistModal isOpen={showModal} onClose={() => setShowModal(false)} />
      </>
   );
};

export default HowItWorks;
