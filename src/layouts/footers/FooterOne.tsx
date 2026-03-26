"use client"
import Image from "next/image"
import Link from "next/link"

import icon_1 from "@/assets/images/icon/icon_05.svg"
import logo from "@/assets/images/logo/logo_01.svg"

const FooterOne = () => {
   return (
      <div className="footer-one border-30 bg-one">
         <div className="position-relative z-1">
            <div className="container">
               <div className="email-banner position-relative z-1 bg-three border-30">
                  <div className="row align-items-center">
                     <div className="col-lg-6">
                        <h3>Subscribe Now!</h3>
                     </div>
                     <div className="col-lg-6">
                        <form onSubmit={(e) => e.preventDefault()} className="position-relative">
                           <input type="email" placeholder="Your email address" />
                           <button className="tran3s"><Image src={icon_1} alt="" className="m-auto" /></button>
                        </form>
                     </div>
                  </div>
               </div>
               <div className="position-relative">
                  <div className="row">
                     <div className="col-lg-3">
                        <div className="footer-intro mb-30">
                           <div className="logo">
                              <Link href="/">
                                 <Image src={logo} alt="" />
                              </Link>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-2 col-md-3 col-6">
                        <div className="footer-nav mb-20">
                           <ul className="footer-nav-link style-none">
                              <li><Link href="/about-us-v1">About </Link></li>
                              <li><Link href="/project-v1">Work Gallery</Link></li>
                              <li><Link href="/pricing-v1">Pricing</Link></li>
                              <li><Link href="/blog-v1">Blog</Link></li>
                              <li><Link href="/contact-v1">Contact</Link></li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-lg-2 col-md-3 col-6">
                        <div className="footer-nav mb-20">
                           <ul className="footer-nav-link style-none">
                              <li><Link href="/faq-v1">Faq’s</Link></li>
                              <li><Link href="/service-v1">Service</Link></li>
                              <li><Link href="/login">Login</Link></li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-lg-2 col-md-3 col-sm-6">
                        <div className="footer-nav mb-20">
                           <ul className="footer-nav-link style-none">
                              <li><Link href="/project-v2">Portfolio</Link></li>
                              <li><Link href="/faq-v1">Cookies Policy</Link></li>
                              <li><Link href="/blog-v2">Reports</Link></li>
                              <li><Link href="/team-v1">Team</Link></li>
                              <li><Link href="/blog-v3">Article</Link></li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="footer-contact mb-20">
                           <p className="fw-500 fs-20 text-dark mb-30 md-mb-20">210 Wallent Street, California, Main OC, USA</p>
                           <a href="#" className="tel fw-500 fs-24 tran3s mb-40">(+91) 0187 34 377</a>
                           <ul className="style-none d-flex align-items-center social-icon">
                              <li><Link href="#"><i className="fa-brands fa-facebook"></i></Link></li>
                              <li><Link href="#"><i className="fa-brands fa-twitter"></i></Link></li>
                              <li><Link href="#"><i className="fa-brands fa-instagram"></i></Link></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <p className="copyright-text m0"><strong className="text-dark">@2024.</strong> All Right Reserved. </p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default FooterOne
