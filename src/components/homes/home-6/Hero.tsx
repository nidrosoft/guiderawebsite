"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import ComingSoonModal from "@/components/common/ComingSoonModal"

import heroPhone from "@/assets/images/assets/guidera_hero_phone.png"
import avatarImg from "@/assets/images/assets/avatar.png"
import img_6 from "@/assets/images/assets/bg_09.png"
import appleIcon from "@/assets/images/icon/apple.svg"
import playstoreIcon from "@/assets/images/icon/playstore.svg"

const floatingWidgetStyle: React.CSSProperties = {
   position: 'absolute',
   zIndex: 3,
   background: '#fff',
   borderRadius: '16px',
   padding: '10px 16px',
   boxShadow: '0 8px 32px rgba(63, 195, 158, 0.18)',
   display: 'flex',
   alignItems: 'center',
   gap: '8px',
   fontSize: '13px',
   fontWeight: 600,
   color: '#1a1a1a',
   whiteSpace: 'nowrap' as const,
}

const tealDot: React.CSSProperties = {
   width: '8px',
   height: '8px',
   borderRadius: '50%',
   background: '#3FC39E',
   flexShrink: 0,
}

const Hero = () => {
   const [showComingSoon, setShowComingSoon] = useState(false)
   const [phoneLoaded, setPhoneLoaded] = useState(false)

   useEffect(() => {
      const timer = setTimeout(() => setPhoneLoaded(true), 100)
      return () => clearTimeout(timer)
   }, [])

   return (
      <>
      <div className="hero-banner-six z-1 position-relative">
         <div className="wrapper position-relative z-1 pt-250 xl-pt-200 md-pt-150 pb-180 xl-pb-100 lg-pb-50">
            <div className="container">
               <div className="row">
                  <div className="col-lg-6 col-md-7">
                     <h1 className="hero-heading pe-xxl-5">Your trip, <span>before you even</span> plan it.</h1>
                     <p className="fs-24 pt-35 pb-20 pe-xxl-5">Guidera runs on a next-generation travel engine — purpose-built, trained on billions of real-world travel signals. It handles your entire trip: a personalized day-by-day itinerary, cultural insights, real-time safety alerts, and a packing list that adapts to your profession, your health, and the forecast.</p>

                     <div className="d-flex align-items-center flex-wrap platform-button-group" style={{ gap: '10px' }}>
                        <button onClick={() => setShowComingSoon(true)} className="d-flex align-items-center ios-button mt-10" style={{ cursor: 'pointer' }}>
                           <Image src={appleIcon} alt="" className="icon" />
                           <div>
                              <span>Download on the</span>
                              <strong>App Store</strong>
                           </div>
                        </button>
                        <button onClick={() => setShowComingSoon(true)} className="d-flex align-items-center windows-button mt-10" style={{ cursor: 'pointer' }}>
                           <Image src={playstoreIcon} alt="" className="icon" />
                           <div>
                              <span>Get it on</span>
                              <strong>Google Play</strong>
                           </div>
                        </button>
                     </div>

                     <div className="d-flex align-items-center mt-75 md-mt-40">
                        <Image src={avatarImg} alt="Waitlist members" />
                        <div className="rating">
                           <div className="fw-500 text-dark fs-20">&#10022; 10,847 travelers already waiting &middot; Launching 2026</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="illustration" style={{
               right: '5%', top: '15%', maxWidth: '62%', paddingLeft: '0%',
               transform: phoneLoaded ? 'scale(1) translateZ(0)' : 'scale(0.55) translateY(60px)',
               opacity: phoneLoaded ? 1 : 0,
               transition: 'transform 1.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease-out',
            }}>
               <Image src={heroPhone} alt="Guidera App" className="w-100" style={{ maxWidth: '680px', objectFit: 'contain', position: 'relative', zIndex: 1 }} />

               {/* Floating travel widgets - hidden on mobile via CSS */}
               <div className="d-none d-lg-flex" style={{ ...floatingWidgetStyle, top: '12%', left: '-14%', animation: 'jumpTwo 4s infinite linear' }}>
                  <span style={{ fontSize: '18px' }}>✈️</span>
                  <span>Flight Tracked</span>
                  <span style={tealDot}></span>
               </div>

               <div className="d-none d-lg-flex" style={{ ...floatingWidgetStyle, top: '42%', left: '-16%', animation: 'jumpThree 5s infinite linear' }}>
                  <span style={{ fontSize: '18px' }}>🧳</span>
                  <span>Packing List Ready</span>
               </div>

               <div className="d-none d-lg-flex" style={{ ...floatingWidgetStyle, top: '12%', right: '8%', animation: 'jumpTwo 6s infinite linear' }}>
                  <span style={{ fontSize: '18px' }}>🌍</span>
                  <span>127 Countries</span>
               </div>

               <div className="d-none d-lg-flex" style={{ ...floatingWidgetStyle, bottom: '30%', right: '3%', animation: 'jumpThree 4.5s infinite linear' }}>
                  <span style={{ fontSize: '18px' }}>🛡️</span>
                  <span>Safety Alerts On</span>
                  <span style={{ ...tealDot, background: '#3FC39E' }}></span>
               </div>

               <div className="d-none d-lg-flex" style={{ ...floatingWidgetStyle, bottom: '15%', left: '-10%', animation: 'jumpTwo 5.5s infinite linear' }}>
                  <span style={{ fontSize: '18px' }}>📅</span>
                  <span>AI Itinerary</span>
                  <span style={{ color: '#3FC39E', fontWeight: 700 }}>Generated</span>
               </div>
            </div>
            <Image src={img_6} alt="" className="shapes bg-shape" />
         </div>
      </div>
      <ComingSoonModal isOpen={showComingSoon} onClose={() => setShowComingSoon(false)} />
      </>
   )
}

export default Hero
