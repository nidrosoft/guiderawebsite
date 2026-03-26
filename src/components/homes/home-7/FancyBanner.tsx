import Link from "next/link"

import img_1 from "@/assets/images/icon/smile.svg"
import img_2 from "@/assets/images/shape/shape_78.png"
import img_3 from "@/assets/images/shape/shape_61.svg"
import img_4 from "@/assets/images/shape/shape_77.svg"
import Image from "next/image"

const FancyBanner = () => {
   return (
      <div className="fancy-banner-eight position-relative z-1 mt-200 xl-mt-150 lg-mt-100 mb-120 lg-mb-80">
         <div className="container xl">
            <div className="row">
               <div className="col-xl-10 col-lg-10 m-auto text-center">
                  <h2 className="hero-heading font-Montserrat d-flex align-items-center justify-content-center flex-wrap">
                     <span>ANY &nbsp;</span>
                     <span className="position-relative">
                        PROJECT
                        <Image src={img_1} alt="" className="shapes smile_icon" />
                        <Image src={img_2} alt="" className="shapes shape_01" />
                     </span>
                     <Image src={img_3} alt="" className="shape shape_02 me-lg-4" />
                     <span>IN MIND?</span>
                     <Image src={img_4} alt="" className="shape shape_03 ms-lg-4" />
                  </h2>
                  <Link href="/contact-v2" className="btn-seventeen mt-50 lg-mt-30">Let’s Talk</Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default FancyBanner
