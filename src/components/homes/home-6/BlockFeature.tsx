"use client"
import { useState, useEffect, useCallback } from "react"
import Image from "next/image"

import phoneImg from "@/assets/images/assets/guidera_hero_phone.png"

interface FeatureTab {
   id: number;
   emoji: string;
   label: string;
   title: string;
   desc: string;
   bullets: string[];
   img: typeof phoneImg;
}

const feature_tabs: FeatureTab[] = [
   {
      id: 1,
      emoji: "📅",
      label: "Planning",
      title: "AI Trip Planning",
      desc: "Tell Guidera where you want to go, your travel style, and budget. Get a complete day-by-day itinerary generated in seconds — not hours.",
      bullets: ["Personalized day-by-day itineraries", "Smart scheduling & budget optimization", "One-tap Smart Plan generation"],
      img: phoneImg,
   },
   {
      id: 2,
      emoji: "🛡️",
      label: "Safety",
      title: "Real-Time Safety",
      desc: "Color-coded danger zones, scam warnings, and emergency SOS. Our engine monitors your location and keeps you informed 24/7.",
      bullets: ["Live danger zone mapping", "Scam & emergency alerts", "One-tap SOS"],
      img: phoneImg,
   },
   {
      id: 3,
      emoji: "🙏",
      label: "Culture",
      title: "Cultural Intelligence",
      desc: "Never accidentally offend again. Get do's and don'ts, etiquette tips, dress codes, and tipping customs for every destination.",
      bullets: ["Do's & don'ts per country", "Tipping & dress code guides", "Local etiquette tips"],
      img: phoneImg,
   },
   {
      id: 4,
      emoji: "✈️",
      label: "Booking",
      title: "Unified Booking",
      desc: "Flights, hotels, cars, experiences — all in one place. Compare prices across 50+ providers and book without switching apps.",
      bullets: ["Compare 50+ providers", "Bundle deals & discounts", "Manage all bookings in one place"],
      img: phoneImg,
   },
   {
      id: 5,
      emoji: "📸",
      label: "Translate",
      title: "AR Translation",
      desc: "Point your camera at menus, signs, or documents. Instant translations in 100+ languages overlaid right on your screen.",
      bullets: ["Real-time camera translation", "Menu & sign scanning", "100+ languages supported"],
      img: phoneImg,
   },
   {
      id: 6,
      emoji: "💰",
      label: "Expenses",
      title: "Expense Tracking",
      desc: "Track every expense in real-time with auto currency conversion. Set budgets, scan receipts, and never go over budget again.",
      bullets: ["Auto currency conversion", "Receipt scanning", "Budget alerts & insights"],
      img: phoneImg,
   },
   {
      id: 7,
      emoji: "🧳",
      label: "Packing",
      title: "Smart Packing List",
      desc: "Weather-aware. Profession-aware. Allergy-aware. Your packing list adapts to your destination, your health, and your travel style.",
      bullets: ["Weather-based suggestions", "Profession & health-aware", "Shared lists for groups"],
      img: phoneImg,
   },
];

const BlockFeature = () => {
   const [activeIndex, setActiveIndex] = useState(0);

   const nextSlide = useCallback(() => {
      setActiveIndex((prev) => (prev + 1) % feature_tabs.length);
   }, []);

   useEffect(() => {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
   }, [nextSlide]);

   const active = feature_tabs[activeIndex];

   return (
      <div className="block-feature-seventeen position-relative z-1 mt-150 lg-mt-80">
         <div className="container">
            {/* Intro */}
            <div className="row">
               <div className="col-xl-8 m-auto text-center">
                  <div
                     className="text-uppercase fw-bold"
                     style={{ color: '#3FC39E', fontSize: '14px', letterSpacing: '3px', marginBottom: '16px' }}
                  >
                     Core Features
                  </div>
                  <h2 style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1.2, marginBottom: '16px' }}>
                     See Guidera in action
                  </h2>
                  <p style={{ fontSize: '18px', color: '#6B7280', maxWidth: '560px', margin: '0 auto 50px' }}>
                     7 powerful features, one app. Tap a feature to see how it works on your phone.
                  </p>
               </div>
            </div>

            {/* Tab Navigation */}
            <div
               style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '50px',
               }}
            >
               {feature_tabs.map((tab, idx) => (
                  <button
                     key={tab.id}
                     onClick={() => setActiveIndex(idx)}
                     style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '12px 22px',
                        borderRadius: '60px',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '15px',
                        fontWeight: 600,
                        transition: 'all 0.3s ease',
                        background: activeIndex === idx ? '#000' : '#F3F4F6',
                        color: activeIndex === idx ? '#fff' : '#374151',
                     }}
                  >
                     <span style={{ fontSize: '18px' }}>{tab.emoji}</span>
                     {tab.label}
                  </button>
               ))}
            </div>

            {/* Content: Phone + Feature Details */}
            <div
               style={{
                  background: '#F9FAFB',
                  borderRadius: '32px',
                  padding: '60px 40px',
                  overflow: 'hidden',
               }}
            >
               <div className="row align-items-center">
                  {/* Phone screenshot */}
                  <div className="col-lg-5 text-center mb-4 mb-lg-0">
                     <div style={{ position: 'relative', maxWidth: '280px', margin: '0 auto' }}>
                        {feature_tabs.map((tab, idx) => (
                           <div
                              key={tab.id}
                              style={{
                                 position: idx === activeIndex ? 'relative' : 'absolute',
                                 top: 0,
                                 left: 0,
                                 width: '100%',
                                 opacity: idx === activeIndex ? 1 : 0,
                                 transform: idx === activeIndex ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(20px)',
                                 transition: 'opacity 0.5s ease, transform 0.5s ease',
                                 pointerEvents: idx === activeIndex ? 'auto' : 'none',
                              }}
                           >
                              <Image
                                 src={tab.img}
                                 alt={tab.title}
                                 style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '24px',
                                    boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                                 }}
                              />
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Feature details */}
                  <div className="col-lg-7">
                     <div style={{ padding: '0 20px' }}>
                        <div
                           key={active.id}
                           style={{
                              animation: 'fadeInUp 0.4s ease',
                           }}
                        >
                           <div style={{ fontSize: '48px', marginBottom: '16px' }}>{active.emoji}</div>
                           <h3 style={{ fontSize: '36px', fontWeight: 700, lineHeight: 1.2, marginBottom: '16px' }}>
                              {active.title}
                           </h3>
                           <p style={{ fontSize: '18px', color: '#555', lineHeight: 1.7, marginBottom: '24px' }}>
                              {active.desc}
                           </p>
                           <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                              {active.bullets.map((bullet, bIdx) => (
                                 <li
                                    key={bIdx}
                                    style={{
                                       fontSize: '17px',
                                       padding: '8px 0',
                                       color: '#333',
                                       display: 'flex',
                                       alignItems: 'center',
                                       gap: '12px',
                                    }}
                                 >
                                    <span
                                       style={{
                                          width: '24px',
                                          height: '24px',
                                          borderRadius: '50%',
                                          background: '#3FC39E',
                                          display: 'inline-flex',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          color: '#fff',
                                          fontSize: '13px',
                                          flexShrink: 0,
                                       }}
                                    >
                                       ✓
                                    </span>
                                    {bullet}
                                 </li>
                              ))}
                           </ul>

                           {/* Progress dots */}
                           <div style={{ display: 'flex', gap: '6px', marginTop: '32px' }}>
                              {feature_tabs.map((_, dotIdx) => (
                                 <button
                                    key={dotIdx}
                                    onClick={() => setActiveIndex(dotIdx)}
                                    style={{
                                       width: dotIdx === activeIndex ? '28px' : '10px',
                                       height: '10px',
                                       borderRadius: '999px',
                                       border: 'none',
                                       background: dotIdx === activeIndex ? '#000' : '#ddd',
                                       transition: 'all 0.3s ease',
                                       cursor: 'pointer',
                                       padding: 0,
                                    }}
                                 />
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <style>{`
            @keyframes fadeInUp {
               from { opacity: 0; transform: translateY(16px); }
               to { opacity: 1; transform: translateY(0); }
            }
         `}</style>
      </div>
   )
}

export default BlockFeature
