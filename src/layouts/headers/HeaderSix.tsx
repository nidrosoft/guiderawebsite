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
                        <li className="d-md-inline-block">
                           <button className="download-btn-one" onClick={() => setShowModal(true)} style={{ display: 'inline-block', cursor: 'pointer', background: 'none' }}>
                              Join the Waitlist
                              <style>{`.download-btn-one:after { display: none !important; }`}</style>
                           </button>
                        </li>
                     </ul>
                  </div>
                  <nav className="navbar navbar-expand-lg p0 order-lg-2">
                     <button className="navbar-toggler d-block d-lg-none" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span></span>
                     </button>
                     <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav align-items-lg-center">
                           <li className="d-block d-lg-none"><div className="logo"><Link href="/" className="d-block"><Image src={logo_1} alt="" /></Link></div></li>
                           {navLinks.map((item) => (
                              <li key={item.label} className="nav-item">
                                 <a href={item.href} className="nav-link">{item.label}</a>
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
