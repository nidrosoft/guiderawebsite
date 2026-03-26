import Image from "next/image"
import Link from "next/link"

import logo from "@/assets/images/logo/logo_06.svg"
import shape_1 from "@/assets/images/shape/shape_39.svg"
import shape_2 from "@/assets/images/shape/shape_40.svg"

const FancyBanner = () => {
   return (
      <div className="fancy-banner-three pt-150 lg-pt-80 pb-150 lg-pb-80 position-relative z-1">
         <div className="container">
            <Image src={logo} alt="" className="m-auto" />
            <div className="row">
               <div className="col-xl-8 m-auto text-center">
                  <h2 className="mt-30 mb-40 lg-mb-30">Unlock the power of piku Try it now!</h2>
                  <p className="fs-28 mb-50 lg-mb-30">Try it risk free — we don’t charge cancellation fees</p>
                  <Link href="/pricing-v2" className="btn-eleven">Try it Now!</Link>
               </div>
            </div>
         </div>
         <Image src={shape_1} alt="" className="shapes shape_01" />
         <Image src={shape_2} alt="" className="shapes shape_02" />
      </div>
   )
}

export default FancyBanner
