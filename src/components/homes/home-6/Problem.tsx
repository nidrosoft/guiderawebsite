"use client"

import { DocumentText, Global, People } from 'iconsax-react';

const painCards = [
   {
      icon: DocumentText,
      lines: [
         "Itinerary in Google Docs",
         "Hotel confirmation in email",
         "Flight times on another app",
         "Packing list in Notes",
         "Budget in a spreadsheet",
      ],
      punchline: "Sound familiar?",
   },
   {
      icon: Global,
      lines: [
         "You land in a new country.",
         "You don\u2019t know the customs.",
         "You don\u2019t know what\u2019s safe.",
         "You don\u2019t know what to pack",
         "for the weather next Tuesday.",
      ],
      punchline: "You\u2019re winging it.",
   },
   {
      icon: People,
      lines: [
         "Your travel buddy has different",
         "flight times, a different hotel,",
         "and zero idea what you planned.",
      ],
      punchline: "Syncing = a group chat nightmare.",
   },
];

const Problem = () => {
   return (
      <div
         className="bg-one border-30"
         style={{
            padding: '120px 0 100px',
            marginTop: '30px',
         }}
      >
         <div className="container">
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
                  The Problem
               </span>
            </div>

            {/* Headline */}
            <h2
               style={{
                  textAlign: 'center',
                  color: '#111',
                  fontSize: '48px',
                  lineHeight: 1.2,
                  fontWeight: 700,
                  maxWidth: '700px',
                  margin: '0 auto 60px',
               }}
            >
               You use 7 apps to plan one trip.{' '}
               <span style={{ color: 'rgba(0,0,0,0.4)' }}>
                  And none of them talk to each other.
               </span>
            </h2>

            {/* Pain-point cards */}
            <div className="row justify-content-center" style={{ gap: '0' }}>
               {painCards.map((card, idx) => (
                  <div key={idx} className="col-lg-4 col-md-6 mb-4">
                     <div
                        style={{
                           background: '#fff',
                           border: '1px solid rgba(0,0,0,0.06)',
                           borderRadius: '24px',
                           padding: '40px 32px',
                           height: '100%',
                           transition: 'transform 0.3s ease, border-color 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                           (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)';
                           (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(63,195,158,0.4)';
                        }}
                        onMouseLeave={(e) => {
                           (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                           (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,0,0,0.06)';
                        }}
                     >
                        <div
                           style={{
                              width: '40px',
                              height: '40px',
                              borderRadius: '50%',
                              background: '#000',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginBottom: '24px',
                           }}
                        >
                           <card.icon size={18} color="#fff" variant="Bulk" />
                        </div>
                        {card.lines.map((line, lIdx) => (
                           <p
                              key={lIdx}
                              style={{
                                 color: '#666',
                                 fontSize: '17px',
                                 lineHeight: 1.7,
                                 margin: 0,
                              }}
                           >
                              {line}
                           </p>
                        ))}
                        <p
                           style={{
                              color: '#111',
                              fontSize: '18px',
                              fontWeight: 600,
                              marginTop: '20px',
                              marginBottom: 0,
                           }}
                        >
                           {card.punchline}
                        </p>
                     </div>
                  </div>
               ))}
            </div>

            {/* Transition text */}
            <p
               style={{
                  textAlign: 'center',
                  marginTop: '60px',
                  fontSize: '22px',
                  fontWeight: 500,
                  color: '#3FC39E',
                  maxWidth: '600px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
               }}
            >
               What if one app handled all of it — and actually knew you?
            </p>
         </div>
      </div>
   );
};

export default Problem;
