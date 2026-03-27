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
      title: "Plan your perfect trip in minutes, not hours",
      desc: "Tell Guidera where you want to go, your travel style, and budget. Get a complete day-by-day itinerary generated in seconds — not hours.",
      bullets: ["Personalized day-by-day itineraries", "Smart scheduling & budget optimization", "One-tap Smart Plan generation"],
      img: planningImg,
   },
   {
      emoji: "🛡️",
      title: "Travel with confidence, not worry",
      desc: "Get instant alerts about unsafe areas, scams, and emergencies. Our engine monitors your location and keeps you informed 24/7.",
      bullets: ["Color-coded danger zones", "Scam & emergency alerts", "One-tap SOS"],
      img: safetyImg,
   },
   {
      emoji: "🙏",
      title: "Never accidentally offend again",
      desc: "Learn the do\u2019s and don\u2019ts before you arrive. Cultural insights, etiquette tips, and local customs for every destination.",
      bullets: ["Do\u2019s & don\u2019ts per country", "Tipping & dress code guides", "Local etiquette tips"],
      img: cultureImg,
   },
   {
      emoji: "✈️",
      title: "Flights, hotels, cars, experiences. One app.",
      desc: "Stop juggling multiple apps. Book everything in one place, compare prices across 50+ providers, and see your entire trip at a glance.",
      bullets: ["Compare 50+ providers", "Bundle deals & discounts", "Manage all bookings in one place"],
      img: bookingImg,
   },
   {
      emoji: "📸",
      title: "Point your camera. Understand everything.",
      desc: "Scan menus, signs, and documents in any language. Instant translations overlaid right on your screen.",
      bullets: ["Real-time camera translation", "Menu & sign scanning", "100+ languages supported"],
      img: translateImg,
   },
   {
      emoji: "💰",
      title: "Know exactly where your money goes",
      desc: "Track every expense in real-time with auto currency conversion. Set budgets, scan receipts, and never go over budget again.",
      bullets: ["Auto currency conversion", "Receipt scanning", "Budget alerts & insights"],
      img: expensesImg,
   },
   {
      emoji: "🧳",
      title: "Pack smarter, not heavier",
      desc: "Weather-aware. Profession-aware. Allergy-aware. Your packing list adapts to your destination, your health, and your travel style.",
      bullets: ["Weather-based suggestions", "Profession & health-aware", "Shared lists for groups"],
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
                  Everything you need. One app.
               </h2>
               <p style={{ fontSize: '18px', color: '#6B7280', maxWidth: '620px', margin: '0 auto', lineHeight: 1.7 }}>
                  Guidera combines AI trip planning, real-time safety intelligence, cultural guidance, unified booking, and more — so you can stop juggling 7 apps and start enjoying the journey.
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
                              padding: '50px',
                              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.06)',
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
                              <div className="col-lg-7">
                                 <Image src={feature.img} alt={feature.title} style={{ width: '100%', height: 'auto' }} />
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
