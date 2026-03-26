import Image from "next/image"
import Link from "next/link"

import logo_1 from "@/assets/images/logo/logo_10.svg"
import icon_1 from "@/assets/images/icon/icon_57.svg"
import icon_2 from "@/assets/images/icon/icon_58.svg"
import icon_3 from "@/assets/images/icon/icon_59.svg"
import shape from "@/assets/images/shape/shape_82.svg"

const FooterEight = () => {
   return (
      <div className="footer-three dark-version">
         <div className="container lg">
            <div className="address-wrapper">
               <h2>Need Some Help?</h2>

               <div className="row gx-xxl-5">
                  <div className="col-lg-4 d-flex">
                     <div className="block d-flex w-100 align-items-center mt-25">
                        <div className="icon d-flex align-items-center justify-content-center rounded-circle"><Image src={icon_1} alt="" /></div>
                        <div className="text">
                           <div className="title">We’r always happy to help</div>
                           <span className="fs-20">ask@homy.com</span>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 d-flex">
                     <div className="block d-flex w-100 align-items-center mt-25">
                        <div className="d-flex align-items-center">
                           <div className="icon d-flex align-items-center justify-content-center rounded-circle"><Image src={icon_2} alt="" /></div>
                           <div className="text">
                              <div className="title">Our Hotline Number</div>
                              <span className="fs-20">+757 699 4478,  +991 377 9731</span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 d-flex">
                     <div className="block d-flex w-100 align-items-center mt-25">
                        <div className="icon d-flex align-items-center justify-content-center rounded-circle"><Image src={icon_3} alt="" /></div>
                        <div className="text">
                           <div className="title">Live chat</div>
                           <span className="fs-20">www.lvesupport.com</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="position-relative">
               <div className="row justify-content-between">
                  <div className="col-lg-2 order-lg-0 md-mb-40">
                     <div className="logo mt-15">
                        <Link href="/">
                           <Image src={logo_1} alt="" />
                        </Link>
                     </div>
                     <div className="fs-6 text-white mt-40 mb-15">Connect with us</div>
                     <ul className="style-none d-flex align-items-center social-icon">
                        <li><Link href="#"><i className="fa-brands fa-facebook"></i></Link></li>
                        <li><Link href="#"><i className="fa-brands fa-twitter"></i></Link></li>
                        <li><Link href="#"><i className="fa-brands fa-instagram"></i></Link></li>
                     </ul>
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
               <p className="copyright-text text-center m0"><span className="text-white fw-500">@2024.</span> All Right Reserved</p>
            </div>
         </div>
         <Image src={shape} alt="" className="shapes shape_01" />
      </div>
   )
}

export default FooterEight
