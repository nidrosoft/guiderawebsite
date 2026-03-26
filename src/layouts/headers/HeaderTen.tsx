"use client"
import NavMenu from "./Menu/NavMenu"
import Link from "next/link"
import Image from "next/image"
import UseSticky from "@/hooks/UseSticky"

import logo_1 from "@/assets/images/logo/logo_09.svg";
import icon from "@/assets/images/icon/icon_18.svg"
import icon_2 from "@/assets/images/icon/icon_60.svg"
import icon_3 from "@/assets/images/icon/icon_61.svg"

const HeaderTen = () => {

   const { sticky } = UseSticky();

   return (
      <header className={`theme-main-menu menu-style-ten sticky-menu menu-overlay ${sticky ? "fixed" : ""}`}>
         <div className="inner-content gap-one">
            <div className="top-header position-relative">
               <div className="d-flex align-items-center justify-content-between">
                  <div className="logo order-lg-0">
                     <Link href="/" className="d-flex align-items-center">
                        <Image src={logo_1} alt="" />
                     </Link>
                  </div>
                  <div className="order-lg-2 ms-5 d-none d-md-inline-block">
                     <p className="m0 fs-20 font-manrope fw-500">Call <a href="#" className="fw-600 text-dark">+757 699-4478</a></p>
                  </div>
                  <div className="right-widget order-lg-3 ms-auto me-3 me-lg-0">
                     <ul className="d-flex align-items-center style-none">
                        <li>
                           <div className="dropdown language-dropdown me-4">
                              <button className="dropdown-toggle" type="button" id="langDrop" data-bs-toggle="dropdown" aria-expanded="false">
                                 <Image src={icon_2} alt="" className="d-inline-block" /> EN
                              </button>
                              <ul className="dropdown-menu" aria-labelledby="langDrop">
                                 <li><Link className="dropdown-item" href="#">Italian</Link></li>
                                 <li><Link className="dropdown-item" href="#">Japanese</Link></li>
                                 <li><Link className="dropdown-item" href="#">Russian</Link></li>
                              </ul>
                           </div>
                        </li>
                        <li>
                           <div className="dropdown search-dropdown me-sm-4 border-end pe-3">
                              <button className="dropdown-toggle" type="button" id="serchDrop" data-bs-toggle="dropdown" aria-expanded="false">
                                 <Image src={icon_3} alt="" />
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="serchDrop">
                                 <li>
                                    <form onSubmit={(e) => e.preventDefault()}>
                                       <input type="text" placeholder="Search....." />
                                       <button><Image src={icon_3} alt="" className="m-auto" /></button>
                                    </form>
                                 </li>
                              </ul>
                           </div>
                        </li>
                        <li className="d-none d-sm-inline-block">
                           <Link href="#" className="login-btn-one fw-500 d-flex align-items-center tran3s"><Image src={icon} alt="" className="me-2" /> <span>My Account</span></Link>
                        </li>
                     </ul>
                  </div>
                  <nav className="navbar navbar-expand-lg p0 order-lg-2 ms-lg-auto">
                     <button className="navbar-toggler d-block d-lg-none" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span></span>
                     </button>
                     <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav align-items-lg-center">
                           <li className="d-block d-lg-none"><div className="logo"><Link href="/" className="d-block"><Image src={logo_1} alt="" /></Link></div></li>
                           <NavMenu />
                           <li className="d-md-none ps-3 pe-3 mt-20">
                              <Link href="#" className="login-btn-one fw-500 d-flex justify-content-center align-items-center tran3s"><Image src={icon} alt="" className="me-2" /> <span>My Account</span></Link>
                           </li>
                           <li className="d-md-none ps-3 pe-3 mt-20">
                              <p className="m0 fs-20 font-manrope text-center fw-500">Call <Link href="#" className="fw-600 text-dark">+757 699-4478</Link></p>
                           </li>
                        </ul>
                     </div>
                  </nav>
               </div>
            </div>
         </div>
      </header>
   )
}

export default HeaderTen
