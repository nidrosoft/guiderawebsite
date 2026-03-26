"use client"
import Image from "next/image"
import Link from "next/link"

import icon_1 from "@/assets/images/icon/icon_05.svg"
import shape from "@/assets/images/shape/shape_19.svg"
import shape_2 from "@/assets/images/shape/shape_18.svg"

const FooterSix = () => {
  return (
    <div className="footer-two p-30">
      <div className="bg-wrapper">
        <div className="container">
          <div className="position-relative">
            <div className="row">
              <div className="col-lg-5 me-auto">
                <div className="footer-intro mb-30 me-xxl-5 pe-xxl-4">
                  <h3 className="text-white">Subscribe to our <span>newsletter.</span></h3>
                  <form onSubmit={(e) => e.preventDefault()} className="position-relative">
                    <input type="email" placeholder="Your email address" />
                    <button className="tran3s"><Image src={icon_1} alt="" className="m-auto" /></button>
                  </form>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-6">
                <div className="footer-nav mb-40">
                  <ul className="footer-nav-link style-none">
                    <li><Link href="/about-us-v1">About </Link></li>
                    <li><Link href="/project-v1">Work Gallery</Link></li>
                    <li><Link href="/pricing-v2">Pricing</Link></li>
                    <li><Link href="/blog-v1">Blog</Link></li>
                    <li><Link href="/contact-v1">Contact</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-6">
                <div className="footer-nav mb-40">
                  <ul className="footer-nav-link style-none">
                    <li><Link href="/faq-v1">Faq’s</Link></li>
                    <li><Link href="/faq-v1">Privacy Policy</Link></li>
                    <li><Link href="/faq-v2">Terms</Link></li>
                  </ul>
                  <Image src={shape_2} alt="" className="mt-50" />
                </div>
              </div>
              <div className="col-xxl-2 col-xl-3">
                <div className="footer-contact mb-20">
                  <p className="fw-500">210 Wallent Street, California, Main OC, USA</p>
                  <Link href="#" className="tel fw-500 tran3s">(+91) 0187 34 377</Link>
                  <ul className="style-none d-flex align-items-center social-icon">
                    <li><Link href="#"><i className="fa-brands fa-facebook"></i></Link></li>
                    <li><Link href="#"><i className="fa-brands fa-twitter"></i></Link></li>
                    <li><Link href="#"><i className="fa-brands fa-instagram"></i></Link></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="container">
          <div className="bottom-footer">
            <div className="d-md-flex align-items-center justify-content-between">
              <div className="d-flex justify-content-center align-items-center sm-mb-20">
                <ul className="style-none d-flex justify-content-center">
                  <li><Link href="/faq-v1">Demo .</Link></li>
                  <li><Link href="/faq-v2">Partners .</Link></li>
                  <li><Link href="/faq-v1">Careers</Link></li>
                </ul>
                <Image src={shape} alt="" className="ms-5 d-none d-md-block" />
              </div>
              <p className="copyright-text text-center m0"><span>@2024 Piku inc.</span> All Right Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterSix
