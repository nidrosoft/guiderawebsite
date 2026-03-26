"use client"
import Image from "next/image"
import Link from "next/link"

import img_1 from "@/assets/images/shape/shape_59.svg"
import img_2 from "@/assets/images/icon/apple.svg"
import img_3 from "@/assets/images/icon/playstore.svg"

const FancyBannerTwo = () => {
   return (
      <div className="fancy-banner-seven position-relative z-1 mt-150 lg-mt-80">
         <div className="container">
            <div
               style={{
                  background: '#fff',
                  borderRadius: '40px',
                  padding: '80px 40px 60px',
                  boxShadow: '0px -40px 90px rgba(0, 0, 0, 0.03)',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
               }}
            >
               <Image src={img_1} alt="" className="m-auto shape_01" />
               <div className="row">
                  <div className="col-xxl-9 col-lg-8 m-auto text-center">
                     <div className="title-four mt-40 lg-mt-20">
                        <h2>Ready to travel smarter?</h2>
                     </div>
                     <p className="fs-28 mt-40 lg-mt-30 mb-20 lg-mb-20">
                        Join 10,000+ travelers who&apos;ve discovered a better way.
                     </p>

                     <div className="d-flex align-items-center justify-content-center flex-wrap platform-button-group mb-30">
                        <Link href="/" className="d-flex align-items-center ios-button">
                           <Image src={img_2} alt="" className="icon" />
                           <div>
                              <span>Download on the</span>
                              <strong>App Store</strong>
                           </div>
                        </Link>
                        <Link href="/" className="d-flex align-items-center windows-button">
                           <Image src={img_3} alt="" className="icon" />
                           <div>
                              <span>Get it on</span>
                              <strong>Google Play</strong>
                           </div>
                        </Link>
                     </div>

                     <p style={{ color: '#999', fontSize: '15px', marginBottom: '30px' }}>— or —</p>

                     <form
                        action="https://submit-form.com/XJSszqDm"
                        method="POST"
                        className="d-flex align-items-center justify-content-center flex-wrap"
                        style={{ gap: '12px', maxWidth: '520px', margin: '0 auto 24px' }}
                     >
                        <input type="hidden" name="name" value="Quick Signup" />
                        <input type="hidden" name="message" value="Signed up via banner email form" />
                        <input
                           type="email"
                           name="email"
                           placeholder="Enter your email for early access"
                           required
                           style={{
                              flex: 1,
                              minWidth: '260px',
                              height: '56px',
                              border: '2px solid #E5E7EB',
                              borderRadius: '60px',
                              padding: '0 24px',
                              fontSize: '16px',
                              outline: 'none',
                              transition: 'border-color 0.2s',
                           }}
                           onFocus={(e) => { e.currentTarget.style.borderColor = '#3FC39E'; }}
                           onBlur={(e) => { e.currentTarget.style.borderColor = '#E5E7EB'; }}
                        />
                        <button
                           type="submit"
                           style={{
                              height: '56px',
                              padding: '0 32px',
                              background: '#000',
                              color: '#fff',
                              fontSize: '16px',
                              fontWeight: 600,
                              border: 'none',
                              borderRadius: '60px',
                              cursor: 'pointer',
                              transition: 'transform 0.2s, box-shadow 0.2s',
                           }}
                           onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'translateY(-2px)';
                              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.25)';
                           }}
                           onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'translateY(0)';
                              e.currentTarget.style.boxShadow = 'none';
                           }}
                        >
                           Join
                        </button>
                     </form>

                     <p style={{ color: '#999', fontSize: '14px' }}>
                        ✓ No spam &nbsp;&nbsp; ✓ Unsubscribe anytime
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default FancyBannerTwo
