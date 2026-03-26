"use client"
import { useState } from "react"
import WaitlistModal from "@/components/common/WaitlistModal"

const checkmarks = [
   "Plan in minutes, not hours",
   "Stay safe with real-time alerts",
   "Book everything in one place",
   "Never get lost in translation",
   "Track every expense automatically",
   "Understand every culture you visit",
];

const Solution = () => {
   const [showModal, setShowModal] = useState(false)
   return (
      <>
      <div
         className="border-30"
         style={{
            background: '#00574A',
            padding: '120px 0',
            marginTop: '30px',
            position: 'relative',
            overflow: 'hidden',
         }}
      >
         {/* Grid overlay matching Home 8 hero */}
         <div
            style={{
               position: 'absolute',
               width: '100%',
               height: '100%',
               left: 0,
               top: 0,
               background: 'url(/assets/images/assets/bg_13.svg) no-repeat center',
               backgroundSize: 'cover',
               pointerEvents: 'none',
            }}
         />
         <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            {/* Section label */}
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
               <span
                  style={{
                     fontSize: '14px',
                     fontWeight: 600,
                     letterSpacing: '3px',
                     textTransform: 'uppercase',
                     color: '#3FC39E',
                  }}
               >
                  The Solution
               </span>
            </div>

            {/* Headline */}
            <h2
               style={{
                  textAlign: 'center',
                  color: '#fff',
                  fontSize: '52px',
                  lineHeight: 1.15,
                  fontWeight: 700,
                  maxWidth: '700px',
                  margin: '0 auto 24px',
               }}
            >
               One app. Your entire trip.{' '}
               <span style={{ color: '#3FC39E' }}>Intelligently planned.</span>
            </h2>

            {/* Body */}
            <p
               style={{
                  textAlign: 'center',
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '20px',
                  lineHeight: 1.7,
                  maxWidth: '680px',
                  margin: '0 auto 50px',
               }}
            >
               Guidera is the first travel platform that combines AI trip planning,
               real-time intelligence, booking management, and a global traveler
               community — all in one place. It doesn&apos;t just organize your trip.
               It understands you.
            </p>

            {/* Checkmarks grid */}
            <div
               style={{
                  maxWidth: '640px',
                  margin: '0 auto',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '16px 40px',
               }}
            >
               {checkmarks.map((item, idx) => (
                  <div
                     key={idx}
                     style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                     }}
                  >
                     <span
                        style={{
                           width: '28px',
                           height: '28px',
                           borderRadius: '50%',
                           background: 'rgba(63,195,158,0.25)',
                           display: 'inline-flex',
                           alignItems: 'center',
                           justifyContent: 'center',
                           color: '#3FC39E',
                           fontSize: '15px',
                           flexShrink: 0,
                        }}
                     >
                        ✓
                     </span>
                     <span
                        style={{
                           color: 'rgba(255,255,255,0.9)',
                           fontSize: '17px',
                           fontWeight: 500,
                        }}
                     >
                        {item}
                     </span>
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
                  See How It Works
               </button>
            </div>
         </div>
      </div>
      <WaitlistModal isOpen={showModal} onClose={() => setShowModal(false)} />
      </>
   );
};

export default Solution;
