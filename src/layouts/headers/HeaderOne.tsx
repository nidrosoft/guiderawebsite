"use client"
import NavMenu from "./Menu/NavMenu"
import Link from "next/link"
import Image from "next/image"

import logo_1 from "@/assets/images/logo/logo_01.svg";
import logo_2 from "@/assets/images/logo/logo_01.svg";

const HeaderOne = () => {

   return (
      <>
         <header className="theme-main-menu menu-style-one">
            <div className="inner-content bg-wrapper bg-one border-20">
               <div className="top-header position-relative">
                  <div className="d-flex align-items-center justify-content-between">
                     <div className="logo order-lg-0">
                        <Link href="/" className="d-flex align-items-center">
                           <Image src={logo_1} alt="" />
                        </Link>
                     </div>
                     <div className="right-widget ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3">
                        <ul className="d-flex align-items-center style-none">
                           <li className="d-none d-md-inline-block ms-3">
                              <a href="login.html" className="btn-one">Let’s Started</a>
                           </li>
                        </ul>
                     </div>
                     <nav className="navbar navbar-expand-lg p0 order-lg-2">
                        <button className="navbar-toggler d-block d-lg-none" type="button" data-bs-toggle="collapse"
                           data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                           aria-label="Toggle navigation">
                           <span></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav"><ul className="navbar-nav align-items-lg-center">
                           <li className="d-block d-lg-none"><div className="logo"><Link href="/" className="d-block"><Image src={logo_2} alt="" /></Link></div></li>
                           <NavMenu />
                           <li className="d-md-none ps-3 pe-3 mt-20">
                              <Link href="/login" className="btn-one w-100">Let’s Started</Link>
                           </li>
                        </ul>
                        </div>
                     </nav>
                  </div>
               </div>
            </div>
         </header>
      </>
   )
}

export default HeaderOne
