const checkmarks = [
   "Plan in minutes, not hours",
   "Review informational safety context",
   "Search and compare travel options",
   "Use camera-assisted translation",
   "Track expenses and scan receipts",
   "Prepare for local customs",
];

const Solution = () => {
   return (
      <div
         className="border-30 solution-section-wrapper"
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
               className="solution-section-heading"
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
               Plan, compare, and prepare.{' '}
               <span style={{ color: '#3FC39E' }}>With AI-assisted context.</span>
            </h2>

            {/* Body */}
            <p
               className="solution-section-body"
               style={{
                  textAlign: 'center',
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '20px',
                  lineHeight: 1.7,
                  maxWidth: '680px',
                  margin: '0 auto 50px',
               }}
            >
               Guidera brings together AI-assisted trip planning, travel search and
               comparison, destination context, packing, expenses, and traveler
               community features. Travel purchases are completed with the external
               provider, and important guidance should be verified with primary sources.
            </p>

            {/* Checkmarks grid */}
            <div
               className="solution-checkmarks-grid"
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
               <a
                  href="#how-it-works"
                  style={{
                     display: 'inline-block',
                     background: '#3FC39E',
                     color: '#fff',
                     fontSize: '18px',
                     fontWeight: 600,
                     padding: '16px 40px',
                     borderRadius: '60px',
                     border: 'none',
                     textDecoration: 'none',
                     transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  }}
               >
                  See How It Works
               </a>
            </div>
         </div>
      </div>
   );
};

export default Solution;
