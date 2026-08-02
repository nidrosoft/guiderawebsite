"use client"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

import planningImg from "@/assets/images/assets/planning.png"
import safetyImg from "@/assets/images/assets/safety.png"
import cultureImg from "@/assets/images/assets/culture.png"
import bookingImg from "@/assets/images/assets/booking.png"
import translateImg from "@/assets/images/assets/translate.png"
import expensesImg from "@/assets/images/assets/expenses.png"
import packingImg from "@/assets/images/assets/packing.png"

const features = [
   {
      emoji: "📅",
      title: "Build an AI-assisted trip plan",
      desc: "Tell Guidera where you want to go, your travel dates, preferences, and budget to generate a draft day-by-day itinerary.",
      bullets: ["Personalized itinerary drafts", "Scheduling and budget context", "One-tap Smart Plan request"],
      img: planningImg,
   },
   {
      emoji: "🛡️",
      title: "Review destination safety context",
      desc: "View informational safety zones, scam awareness, emergency contacts, and nearby context. Guidera does not continuously monitor you or replace emergency services.",
      bullets: ["Informational safety zones", "Scam and advisory context", "Direct access to local emergency calling"],
      img: safetyImg,
   },
   {
      emoji: "🙏",
      title: "Prepare for local customs",
      desc: "Review AI-assisted cultural insights, etiquette tips, dress context, and local customs for your destination, then verify sensitive guidance locally.",
      bullets: ["Do\u2019s & don\u2019ts per country", "Tipping & dress code guides", "Local etiquette tips"],
      img: cultureImg,
   },
   {
      emoji: "✈️",
      title: "Search and compare travel options",
      desc: "Explore flights, stays, cars, and experiences from available travel sources. Guidera sends you to the external provider to verify terms and complete any purchase.",
      bullets: ["Provider-attributed results", "Price and availability comparison", "External-provider checkout"],
      img: bookingImg,
   },
   {
      emoji: "📸",
      title: "Point your camera. Understand everything.",
      desc: "Use your camera to request AI-assisted translation of supported menus, signs, and documents. Translation can be inaccurate, so verify important details.",
      bullets: ["Camera-assisted translation", "Menu and sign scanning", "Source and translated text"],
      img: translateImg,
   },
   {
      emoji: "💰",
      title: "Know exactly where your money goes",
      desc: "Record expenses, convert supported currencies, set budgets, and scan receipts. Review extracted amounts and conversion estimates for accuracy.",
      bullets: ["Currency conversion estimates", "Receipt scanning", "Budget tracking and insights"],
      img: expensesImg,
   },
   {
      emoji: "🧳",
      title: "Pack smarter, not heavier",
      desc: "Create packing suggestions using your destination, forecast context, travel preferences, and optional profile details.",
      bullets: ["Weather-aware suggestions", "Preference-aware suggestions", "Shared lists for groups"],
      img: packingImg,
   },
];

const BlockFeatureTwo = () => {
   const sectionRef = useRef<HTMLDivElement>(null);
   const activeIndexRef = useRef(0);
   const fixedModeRef = useRef<'before' | 'fixed' | 'after'>('before');
   const [, forceRender] = useState(0);
   const [isMobile, setIsMobile] = useState(false);

   // Use refs for layout values that don't need to trigger re-renders
   const layoutRef = useRef({ sectionLeft: 0, sectionWidth: 0, pinnedTop: 0, sectionOffsetTop: 0, sectionHeight: 0 });

   useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 992);
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
   }, []);

   useEffect(() => {
      if (isMobile) return;
      const section = sectionRef.current;
      if (!section) return;

      // Measure once and on resize
      const measure = () => {
         layoutRef.current.sectionOffsetTop = section.offsetTop;
         layoutRef.current.sectionHeight = section.offsetHeight;
         layoutRef.current.sectionWidth = section.offsetWidth;
         layoutRef.current.sectionLeft = section.getBoundingClientRect().left;
      };
      measure();

      const handleScroll = () => {
         const { sectionOffsetTop, sectionHeight } = layoutRef.current;
         const scrollY = window.scrollY;
         const viewportHeight = window.innerHeight;
         const scrollableDistance = sectionHeight - viewportHeight;

         // How far we've scrolled past the section's top
         const scrolledPast = scrollY - sectionOffsetTop;

         let newMode: 'before' | 'fixed' | 'after';
         let newIndex: number;

         if (scrolledPast < 0) {
            newMode = 'before';
            newIndex = 0;
         } else if (scrolledPast < scrollableDistance) {
            newMode = 'fixed';
            const progress = scrolledPast / scrollableDistance;
            newIndex = Math.min(features.length - 1, Math.floor(progress * features.length));
         } else {
            newMode = 'after';
            newIndex = features.length - 1;
            layoutRef.current.pinnedTop = scrollableDistance;
         }

         // Only trigger re-render if something changed
         if (newMode !== fixedModeRef.current || newIndex !== activeIndexRef.current) {
            fixedModeRef.current = newMode;
            activeIndexRef.current = newIndex;
            forceRender(n => n + 1);
         }
      };

      const handleResize = () => {
         measure();
         handleScroll();
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('resize', handleResize, { passive: true });
      handleScroll();
      return () => {
         window.removeEventListener('scroll', handleScroll);
         window.removeEventListener('resize', handleResize);
      };
   }, [isMobile]);

   const fixedMode = fixedModeRef.current;
   const activeIndex = activeIndexRef.current;
   const { sectionLeft, sectionWidth, pinnedTop } = layoutRef.current;

   const cardViewStyle: React.CSSProperties =
      fixedMode === 'fixed'
         ? {
              position: 'fixed',
              top: 0,
              left: sectionLeft,
              width: sectionWidth,
              height: '100vh',
              zIndex: 10,
           }
         : fixedMode === 'after'
            ? {
                 position: 'absolute',
                 top: pinnedTop,
                 left: 0,
                 width: '100%',
                 height: '100vh',
              }
            : {
                 position: 'absolute',
                 top: 0,
                 left: 0,
                 width: '100%',
                 height: '100vh',
              };

   const sectionHeader = (
      <div className="container" style={{ marginBottom: isMobile ? '40px' : '0' }}>
         <div className="row">
            <div className="col-xl-8 m-auto text-center">
               <div
                  className="text-uppercase fw-bold"
                  style={{ color: '#3FC39E', fontSize: '14px', letterSpacing: '3px', marginBottom: '16px' }}
               >
                  Core Features
               </div>
               <h2 style={{ fontSize: isMobile ? '36px' : '48px', fontWeight: 700, lineHeight: 1.2, marginBottom: '20px' }}>
                  Planning tools in one iOS app
               </h2>
               <p style={{ fontSize: '18px', color: '#6B7280', maxWidth: '620px', margin: '0 auto', lineHeight: 1.7 }}>
                  Guidera combines AI-assisted planning, travel search and comparison, informational safety and cultural context, packing, expenses, and community tools in one iOS app.
               </p>
            </div>
         </div>
      </div>
   );

   if (isMobile) {
      return (
         <div style={{ marginTop: '60px' }}>
            {sectionHeader}
            <div className="container">
               {features.map((feature, idx) => (
                  <div key={idx} style={{ marginBottom: '30px' }}>
                     <div
                        className="block-feature-two-card"
                        style={{
                           width: '100%',
                           background: '#F7F7F7',
                           borderRadius: '24px',
                           padding: '30px 20px',
                           boxShadow: '0 10px 40px rgba(0, 0, 0, 0.06)',
                        }}
                     >
                        <div style={{ fontSize: '40px', marginBottom: '12px' }}>{feature.emoji}</div>
                        <h3 style={{ fontSize: '26px', lineHeight: '1.2em', fontWeight: 700, marginBottom: '12px' }}>{feature.title}</h3>
                        <p style={{ fontSize: '16px', paddingBottom: '12px', color: '#555', lineHeight: 1.6 }}>{feature.desc}</p>
                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px' }}>
                           {feature.bullets.map((bullet, bIdx) => (
                              <li key={bIdx} style={{
                                 fontSize: '15px',
                                 padding: '5px 0',
                                 color: '#333',
                                 display: 'flex',
                                 alignItems: 'center',
                                 gap: '10px',
                              }}>
                                 <span style={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    background: '#3FC39E',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#fff',
                                    fontSize: '12px',
                                    flexShrink: 0,
                                 }}>✓</span>
                                 {bullet}
                              </li>
                           ))}
                        </ul>
                        <Image src={feature.img} alt={feature.title} style={{ width: '100%', height: 'auto', borderRadius: '16px' }} />
                     </div>
                  </div>
               ))}
            </div>
         </div>
      );
   }

   return (
      <div
         ref={sectionRef}
         style={{
            position: 'relative',
            height: `${(features.length + 1) * 100}vh`,
            marginTop: '120px',
         }}
      >
         <div style={{ paddingTop: '60px', paddingBottom: '60px' }}>
            {sectionHeader}
         </div>
         <div
            style={{
               ...cardViewStyle,
               display: 'flex',
               alignItems: 'center',
               overflow: 'hidden',
            }}
         >
            <div style={{ width: '100%', padding: '0 4%', position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
               {features.map((feature, idx) => {
                  const isReversed = idx % 2 !== 0;
                  const isCurrent = idx === activeIndex;
                  const isPast = idx < activeIndex;

                  return (
                     <div
                        key={idx}
                        style={{
                           position: 'absolute',
                           top: 0,
                           left: 0,
                           right: 0,
                           bottom: 0,
                           display: 'flex',
                           alignItems: 'center',
                           padding: '0 4%',
                           opacity: isCurrent ? 1 : 0,
                           transform: isCurrent
                              ? 'translateY(0) scale(1)'
                              : isPast
                                 ? 'translateY(-80px) scale(0.96)'
                                 : 'translateY(80px) scale(0.96)',
                           transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                           zIndex: isCurrent ? 2 : 1,
                           pointerEvents: isCurrent ? 'auto' : 'none',
                        }}
                     >
                        <div
                           style={{
                              width: '100%',
                              background: '#F7F7F7',
                              borderRadius: '50px',
                              padding: '70px 80px',
                              border: '1px solid #E5E7EB',
                              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.10)',
                           }}
                        >
                           <div className="row align-items-center">
                              <div className={`col-lg-5 ${isReversed ? 'order-lg-first' : 'order-lg-last'}`}>
                                 <div style={{ padding: '20px' }}>
                                    <div style={{ fontSize: '48px', marginBottom: '16px' }}>{feature.emoji}</div>
                                    <h3 style={{ fontSize: '42px', lineHeight: '1.15em', fontWeight: 700 }}>{feature.title}</h3>
                                    <p style={{ fontSize: '20px', paddingTop: '24px', paddingBottom: '16px', color: '#555', lineHeight: 1.6 }}>{feature.desc}</p>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                       {feature.bullets.map((bullet, bIdx) => (
                                          <li key={bIdx} style={{
                                             fontSize: '17px',
                                             padding: '6px 0',
                                             color: '#333',
                                             display: 'flex',
                                             alignItems: 'center',
                                             gap: '10px',
                                          }}>
                                             <span style={{
                                                width: '22px',
                                                height: '22px',
                                                borderRadius: '50%',
                                                background: '#3FC39E',
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: '#fff',
                                                fontSize: '13px',
                                                flexShrink: 0,
                                             }}>✓</span>
                                             {bullet}
                                          </li>
                                       ))}
                                    </ul>
                                    {/* Progress indicator */}
                                    <div style={{ display: 'flex', gap: '6px', marginTop: '30px' }}>
                                       {features.map((_, dotIdx) => (
                                          <div
                                             key={dotIdx}
                                             style={{
                                                width: dotIdx === activeIndex ? '28px' : '10px',
                                                height: '10px',
                                                borderRadius: '999px',
                                                background: dotIdx === activeIndex ? '#3FC39E' : '#ddd',
                                                transition: 'all 0.3s ease',
                                             }}
                                          />
                                       ))}
                                    </div>
                                 </div>
                              </div>
                              <div className="col-lg-7" style={{ padding: '0 20px' }}>
                                 <Image src={feature.img} alt={feature.title} style={{ width: '82%', height: 'auto', margin: '0 auto', display: 'block' }} />
                              </div>
                           </div>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
      </div>
   )
}

export default BlockFeatureTwo
