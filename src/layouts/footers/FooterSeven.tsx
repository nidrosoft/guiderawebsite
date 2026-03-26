import Image from "next/image"
import Link from "next/link"

import logo from "@/assets/images/logo/logo_01.svg"

const FooterSeven = () => {
   return (
      <div className="footer-three">
         <div className="container">
            <div className="position-relative">
               <div className="row justify-content-between">
                  <div className="col-lg-2 order-lg-0">
                     <div className="logo mt-15 mb-30">
                        <Link href="/">
                           <Image src={logo} alt="" />
                        </Link>
                     </div>
                  </div>
                  <div className="col-lg-2 col-6 order-lg-1">
                     <div className="footer-nav">
                        <ul className="footer-nav-link style-none">
                           <li><Link href="/about-us-v1">About </Link></li>
                           <li><Link href="/project-v4">Work Gallery</Link></li>
                           <li><Link href="/pricing-v2">Pricing</Link></li>
                           <li><Link href="/blog-v2">Blog</Link></li>
                           <li><Link href="/contact-v1">Contact</Link></li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-2 col-6 order-lg-3">
                     <div className="footer-nav">
                        <ul className="footer-nav-link style-none">
                           <li><Link href="/faq-v1">​​Take the tour</Link></li>
                           <li><Link href="/faq-v1">Live chat</Link></li>
                           <li><Link href="/contact-v1">Self-service</Link></li>
                           <li><Link href="/faq-v1">Social</Link></li>
                           <li><Link href="/faq-v1">Mobile</Link></li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-2 col-6 order-lg-2">
                     <div className="footer-nav mb-20">
                        <ul className="footer-nav-link style-none">
                           <li><Link href="/faq-v1">Faq’s</Link></li>
                           <li><Link href="/faq-v2">Privacy Policy</Link></li>
                           <li><Link href="/faq-v1">Terms</Link></li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-2 col-6 order-lg-4">
                     <div className="footer-nav mb-20">
                        <ul className="footer-nav-link style-none">
                           <li><Link href="/faq-v1">Help Docs</Link></li>
                           <li><Link href="/faq-v2">Chat</Link></li>
                           <li><Link href="/faq-v1">Developer</Link></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="container">
            <div className="bottom-footer border-dark">
               <div className="d-md-flex align-items-center justify-content-between">
                  <div className="d-flex justify-content-center align-items-center sm-mb-20">
                     <ul className="style-none d-flex justify-content-center">
                        <li><Link href="/faq-v2">Demo .</Link></li>
                        <li><Link href="/faq-v2">Partners .</Link></li>
                        <li><Link href="/blog-v2">Careers</Link></li>
                     </ul>
                  </div>
                  <p className="copyright-text text-center m0"><span>@2024 Piku inc.</span> All Right Reserved</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default FooterSeven
