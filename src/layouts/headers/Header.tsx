"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import UseSticky from "@/hooks/UseSticky"

import logo_1 from "@/assets/images/logo/guideralogo.png";

const navLinks = [
   { label: "Features", href: "/#features" },
   { label: "How It Works", href: "/#how-it-works" },
   { label: "Testimonials", href: "/#testimonials" },
]

const Header = () => {

   const { sticky } = UseSticky();
   const [menuOpen, setMenuOpen] = useState(false);

   return (
      <header className={`theme-main-menu menu-style-seven sticky-menu menu-overlay ${sticky ? "fixed" : ""}`}>
         <div className="inner-content gap-one">
            <div className="top-header position-relative">
               <div className="d-flex align-items-center justify-content-between">
                  <div className="logo order-lg-0">
                     <Link href="/" className="d-flex align-items-center">
                        <Image src={logo_1} alt="Guidera" width={140} height={40} style={{ objectFit: 'contain' }} />
                     </Link>
                  </div>
                  <nav className="navbar navbar-expand-lg p0 ms-auto order-lg-2">
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
   )
}

export default Header
