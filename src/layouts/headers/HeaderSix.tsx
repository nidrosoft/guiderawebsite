"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import UseSticky from "@/hooks/UseSticky"
import WaitlistModal from "@/components/common/WaitlistModal"

import logo_1 from "@/assets/images/logo/guideralogo.png";

const navLinks = [
   { label: "Features", href: "/#features" },
   { label: "How It Works", href: "/#how-it-works" },
   { label: "Testimonials", href: "/#testimonials" },
   { label: "Pricing", href: "/#pricing" },
   { label: "FAQ", href: "/#faq" },
]

const HeaderSix = () => {

   const { sticky } = UseSticky();
   const [showModal, setShowModal] = useState(false);
   const [menuOpen, setMenuOpen] = useState(false);

   return (
      <>
      <header className={`theme-main-menu menu-style-seven sticky-menu menu-overlay ${sticky ? "fixed" : ""}`}>
         <div className="inner-content gap-one">
            <div className="top-header position-relative">
               <div className="d-flex align-items-center justify-content-between">
                  <div className="logo order-lg-0">
                     <Link href="/" className="d-flex align-items-center">
                        <Image src={logo_1} alt="Guidera" width={140} height={40} style={{ objectFit: 'contain' }} />
                     </Link>
                  </div>
                  <div className="right-widget ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3">
                     <ul className="d-flex align-items-center style-none">
                        <li>
                           <button
                              onClick={() => setShowModal(true)}
                              style={{
                                 display: 'inline-flex',
                                 alignItems: 'center',
                                 gap: '8px',
                                 cursor: 'pointer',
                                 background: '#000',
                                 color: '#fff',
                                 border: 'none',
                                 borderRadius: '12px',
                                 padding: '10px 24px',
                                 fontSize: '15px',
                                 fontWeight: 600,
                                 transition: 'background 0.2s ease, transform 0.2s ease',
                              }}
                              onMouseEnter={(e) => { e.currentTarget.style.background = '#333' }}
                              onMouseLeave={(e) => { e.currentTarget.style.background = '#000' }}
                           >
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                              Join the Waitlist
                           </button>
                        </li>
                     </ul>
                  </div>
                  <nav className="navbar navbar-expand-lg p0 order-lg-2">
                     <button
                        className="navbar-toggler d-block d-lg-none"
                        type="button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle navigation"
                     >
                        <span></span>
                     </button>
                     <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav align-items-lg-center">
                           <li className="d-block d-lg-none"><div className="logo"><Link href="/" className="d-block"><Image src={logo_1} alt="" /></Link></div></li>
                           {navLinks.map((item) => (
                              <li key={item.label} className="nav-item">
                                 <Link href={item.href} className="nav-link" onClick={() => setMenuOpen(false)}>{item.label}</Link>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </nav>
               </div>
            </div>
         </div>
      </header>
      <WaitlistModal isOpen={showModal} onClose={() => setShowModal(false)} />
      </>
   )
}

export default HeaderSix
