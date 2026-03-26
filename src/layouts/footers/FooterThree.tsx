"use client"
import Image from "next/image"
import Link from "next/link"

import logo from "@/assets/images/logo/logo_07.svg"

const FooterThree = () => {
   return (
      <div className="footer-four">
         <div className="container">
            <div className="wrapper">
               <div className="row">
                  <div className="col-lg-2">
                     <div className="footer-intro mb-30">
                        <div className="logo mt-15">
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
                  <div className="col-lg-4">
                     <div className="footer-newsletter mb-20">
                        <h6>Join Our Newsletter</h6>
                        <form onSubmit={(e) => e.preventDefault()} className="position-relative">
                           <input type="email" placeholder="Your email address" />
                           <button className="tran3s">Sign Up</button>
                        </form>
                        <p className="fs-16 mt-15">We only send interesting and relevant emails.</p>
                     </div>
                  </div>
               </div>

            </div>
         </div>
         <div className="container">
            <div className="bottom-footer">
               <p className="copyright-text text-center"><strong className="text-dark">@2024.</strong> All Right Reserved. </p>
            </div>
         </div>
      </div>
   )
}

export default FooterThree
