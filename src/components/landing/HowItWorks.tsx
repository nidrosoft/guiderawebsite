"use client"
import { useState, ReactNode } from "react"
import WaitlistModal from "@/components/common/WaitlistModal"

const steps = [
   {
      number: "01",
      title: "Download the app",
      desc: "Available on iOS and Android. Get set up in under 2 minutes.",
      icon: (
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
            <line x1="12" y1="18" x2="12.01" y2="18" />
         </svg>
      ),
   },
   {
      number: "02",
      title: "Tell us about you",
      desc: "Your travel style, diet, health, profession — Guidera learns what matters to you.",
      icon: (
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
         </svg>
      ),
   },
   {
      number: "03",
      title: "Start exploring",
      desc: "Tap \u201CGenerate Smart Plan\u201D and watch your entire trip come together instantly.",
      icon: (
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
         </svg>
      ),
   },
];

const CardDecorator = ({ children }: { children: ReactNode }) => (
   <div
      style={{
         position: 'relative',
         width: '144px',
         height: '144px',
         margin: '0 auto',
         maskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)',
         WebkitMaskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)',
      }}
   >
      {/* Grid pattern */}
      <div
         style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
         }}
      />
      {/* Icon container */}
      <div
         style={{
            position: 'absolute',
            inset: 0,
            margin: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '48px',
            height: '48px',
            background: '#fff',
            borderTop: '1px solid #E5E7EB',
            borderLeft: '1px solid #E5E7EB',
            color: '#111',
         }}
      >
         {children}
      </div>
   </div>
);

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
            {/* Header */}
            <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 60px' }}>
               <span
                  style={{
                     fontSize: '14px',
                     fontWeight: 600,
                     letterSpacing: '3px',
                     textTransform: 'uppercase',
                     color: '#3FC39E',
                     display: 'block',
                     marginBottom: '16px',
                  }}
               >
                  How It Works
               </span>
               <h2
                  className="how-it-works-heading"
                  style={{
                     fontSize: '48px',
                     lineHeight: 1.2,
                     fontWeight: 700,
                     color: '#111',
                     marginBottom: '16px',
                  }}
               >
                  Get started in 3 simple steps
               </h2>
               <p style={{ fontSize: '17px', color: '#6B7280', lineHeight: 1.6, margin: 0 }}>
                  No complicated setup. No learning curve. Just download, personalize, and let Guidera handle the rest.
               </p>
            </div>

            {/* Steps */}
            <div className="row justify-content-center">
               {steps.map((step, idx) => (
                  <div key={idx} className="col-lg-4 col-md-6 mb-4">
                     <div
                        style={{
                           background: '#F7F7F7',
                           borderRadius: '24px',
                           padding: '40px 32px 36px',
                           textAlign: 'center',
                           height: '100%',
                           border: 'none',
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
                        {/* Grid decorator with icon */}
                        <CardDecorator>
                           {step.icon}
                        </CardDecorator>

                        {/* Step number badge */}
                        <div
                           style={{
                              display: 'inline-block',
                              fontSize: '12px',
                              fontWeight: 700,
                              letterSpacing: '1.5px',
                              color: '#3FC39E',
                              background: 'rgba(63,195,158,0.1)',
                              borderRadius: '20px',
                              padding: '4px 14px',
                              marginBottom: '16px',
                              textTransform: 'uppercase',
                           }}
                        >
                           Step {step.number}
                        </div>

                        {/* Title */}
                        <h4
                           style={{
                              fontSize: '22px',
                              fontWeight: 700,
                              color: '#111',
                              marginBottom: '10px',
                           }}
                        >
                           {step.title}
                        </h4>

                        {/* Description */}
                        <p
                           style={{
                              fontSize: '15px',
                              color: '#6B7280',
                              lineHeight: 1.65,
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
