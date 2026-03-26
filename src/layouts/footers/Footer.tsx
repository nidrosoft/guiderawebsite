"use client"
import Image from "next/image"
import Link from "next/link"

import logo from "@/assets/images/logo/guideralogo.png"
import shape_1 from "@/assets/images/assets/bg_12.png"
import shape_2 from "@/assets/images/shape/shape_56.svg"
import shape_3 from "@/assets/images/shape/shape_57.svg"

const Footer = () => {
  return (
    <div className="footer-five">
      <div className="wrapper">
        <div className="container">
          <div className="position-relative">
            <div className="row">
              <div className="col-xl-3 me-auto">
                <div className="footer-intro mb-30">
                  <div className="logo mt-15">
                    <Link href="/">
                      <Image src={logo} alt="Guidera" width={160} height={45} style={{ objectFit: 'contain' }} />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-4 col-6">
                <div className="footer-nav mb-20">
                  <h6 className="footer-title" style={{ fontSize: '15px', fontWeight: 700, marginBottom: '12px' }}>Product</h6>
                  <ul className="footer-nav-link style-none">
                    <li><Link href="/#features">Features</Link></li>
                    <li><Link href="/#pricing">Pricing</Link></li>
                    <li><Link href="/#how-it-works">How It Works</Link></li>
                    <li><Link href="/#faq">FAQ</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-md-4 col-6">
                <div className="footer-nav mb-20">
                  <h6 className="footer-title" style={{ fontSize: '15px', fontWeight: 700, marginBottom: '12px' }}>Company</h6>
                  <ul className="footer-nav-link style-none">
                    <li><Link href="/about">About Us</Link></li>
                    <li><a href="mailto:hello@guidera.app">Contact</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Press</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-md-4 col-6">
                <div className="footer-nav mb-20">
                  <h6 className="footer-title" style={{ fontSize: '15px', fontWeight: 700, marginBottom: '12px' }}>Legal</h6>
                  <ul className="footer-nav-link style-none">
                    <li><Link href="/privacy">Privacy</Link></li>
                    <li><Link href="/terms">Terms</Link></li>
                    <li><Link href="/cookies">Cookies</Link></li>
                    <li><Link href="/gdpr">GDPR</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-2 col-xl-2 col-md-4">
                <div className="footer-contact mb-20">
                  <h6 className="footer-title" style={{ fontSize: '15px', fontWeight: 700, marginBottom: '12px' }}>Connect</h6>
                  <ul className="style-none d-flex align-items-center social-icon">
                    <li><Link href="#"><i className="fa-brands fa-twitter"></i></Link></li>
                    <li><Link href="#"><i className="fa-brands fa-instagram"></i></Link></li>
                    <li><Link href="https://www.linkedin.com/in/cyriac-zeh/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="copyright-text text-center m0" style={{ position: 'relative', bottom: 'auto', left: 'auto', marginTop: '40px', paddingTop: '25px', borderTop: '1px solid #eee', clear: 'both', width: '100%' }}>
              &copy; 2026 Guidera Inc. All rights reserved. &nbsp;&nbsp; Made with ❤️ for travelers by{' '}
              <Link href="https://www.linkedin.com/in/cyriac-zeh/" target="_blank" rel="noopener noreferrer" style={{ color: '#3FC39E', fontWeight: 600 }}>
                Cyriac Zeh
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Image src={shape_1} alt="" className="shapes bg_01" />
      <Image src={shape_2} alt="" className="shapes shape_02" />
      <Image src={shape_3} alt="" className="shapes shape_03" />
    </div>
  )
}

export default Footer
