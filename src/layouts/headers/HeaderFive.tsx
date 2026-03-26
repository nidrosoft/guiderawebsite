"use client"
import NavMenu from "./Menu/NavMenu"
import Link from "next/link"
import Image from "next/image"
import UseSticky from "@/hooks/UseSticky"

import logo_1 from "@/assets/images/logo/logo_08.svg";
import icon from "@/assets/images/icon/icon_26.svg"

const HeaderFive = () => {

   const { sticky } = UseSticky();

   return (
      <header className={`theme-main-menu menu-style-six white-vr sticky-menu menu-overlay ${sticky ? "fixed" : ""}`}>
         <div className="inner-content gap-one">
            <div className="top-header position-relative">
               <div className="d-flex align-items-center justify-content-between">
                  <div className="logo order-lg-0">
                     <Link href="/" className="d-flex align-items-center">
                        <Image src={logo_1} alt="" />
                     </Link>
                  </div>
                  <div className="right-widget ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3">
                     <ul className="d-flex align-items-center style-none">
                        <li>
                           <Link href="/login" className="login-btn-four fw-500 d-flex align-items-center tran3s"><Image src={icon} alt="" className="me-2" /> <span>Login</span></Link>
                        </li>
                        <li className="d-none d-md-inline-block ms-4">
                           <div className="dropdown">
                              <Link className="btn-thirteen dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                 Download
                              </Link>

                              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                 <li><Link className="dropdown-item" href="#">For Windows</Link></li>
                                 <li><Link className="dropdown-item" href="#">For iOS</Link></li>
                                 <li><Link className="dropdown-item" href="#">For Mobile</Link></li>
                              </ul>
                           </div>
                        </li>
                     </ul>
                  </div>
                  <nav className="navbar navbar-expand-lg p0 order-lg-2 ms-lg-5">
                     <button className="navbar-toggler d-block d-lg-none" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span></span>
                     </button>
                     <div className="collapse navbar-collapse ms-lg-5" id="navbarNav">
                        <ul className="navbar-nav align-items-lg-center">
                           <li className="d-block d-lg-none"><div className="logo"><Link href="/" className="d-block"><Image src={logo_1} alt="" /></Link></div></li>
                           <NavMenu />
                        </ul>
                     </div>
                  </nav>
               </div>
            </div>
         </div>
      </header>
   )
}

export default HeaderFive
