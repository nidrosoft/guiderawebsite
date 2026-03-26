"use client"
import Image from "next/image"
import Link from "next/link"
import Offcanvas from "./Menu/Offcanvas"
import UseSticky from "@/hooks/UseSticky"

import logo from "@/assets/images/logo/logo_01.svg"

const HeaderSeven = () => {

   const { sticky } = UseSticky();

   return (
      <>
         <header className={`theme-main-menu menu-style-four sticky-menu menu-overlay ${sticky ? "fixed" : ""}`}>
            <div className="inner-content gap-one">
               <div className="top-header position-relative">
                  <div className="d-flex align-items-center justify-content-between">
                     <div className="logo order-lg-0">
                        <Link href="/" className="d-flex align-items-center">
                           <Image src={logo} alt="" />
                        </Link>
                     </div>
                     <div className="right-widget ms-auto ms-lg-0 order-lg-3">
                        <ul className="d-flex align-items-center style-none">
                           <li className="d-none d-sm-inline-block">
                              <Link href="/contact-v1" className="btn-five tran3s">Let’s Talk</Link>
                           </li>
                           <li className="ms-4"><button className="sidenavbtn rounded-circle tran3s" type="button" data-bs-toggle="offcanvas" data-bs-target="#sideNav" aria-controls="sideNav"><i className="fa-sharp fa-light fa-bars-filter"></i></button></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         <Offcanvas />
      </>
   )
}

export default HeaderSeven
