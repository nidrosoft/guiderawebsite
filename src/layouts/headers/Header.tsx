"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import UseSticky from "@/hooks/UseSticky"

import logo_1 from "@/assets/images/logo/guideralogo.png";

const navLinks = [
   { label: "Features", href: "/feature-breakdown" },
   { label: "How It Works", href: "/#how-it-works" },
   { label: "Pricing", href: "/pricing" },
   { label: "Support", href: "/support" },
]

interface HeaderProps {
   /** Smaller logo + tighter header — used on legal/content pages */
   compact?: boolean
}

const Header = ({ compact = false }: HeaderProps) => {

   const { sticky } = UseSticky();
   const [menuOpen, setMenuOpen] = useState(false);

   return (
      <header className={`theme-main-menu menu-style-seven sticky-menu menu-overlay ${sticky ? "fixed" : ""} ${compact ? "header-compact" : ""}`}>
         <div className="inner-content gap-one">
            <div className="top-header position-relative">
               <div className="d-flex align-items-center justify-content-between">
                  <div className="logo order-lg-0">
                     <Link href="/" className="d-flex align-items-center">
                        <Image
                           src={logo_1}
                           alt="Guidera"
                           width={compact ? 110 : 140}
                           height={compact ? 32 : 40}
                           className="site-logo"
                           style={{ objectFit: "contain", width: "auto", height: "auto" }}
                        />
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
                     <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`} id="navbarNav">
                        <ul className="navbar-nav align-items-lg-center">
                           <li className="d-block d-lg-none">
                              <div className="logo">
                                 <Link href="/" className="d-block">
                                    <Image src={logo_1} alt="" className="site-logo" style={{ width: "auto", height: "auto", maxHeight: 28 }} />
                                 </Link>
                              </div>
                           </li>
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
         <style>{`
            .site-logo {
               max-width: 140px;
               height: auto !important;
            }

            .header-compact .site-logo {
               max-width: 110px;
            }

            @media (max-width: 991px) {
               .site-logo {
                  max-width: 100px;
               }

               .header-compact .site-logo {
                  max-width: 84px;
               }
            }

            @media (max-width: 575px) {
               .header-compact .site-logo {
                  max-width: 72px;
               }
            }
         `}</style>
      </header>
   )
}

export default Header
