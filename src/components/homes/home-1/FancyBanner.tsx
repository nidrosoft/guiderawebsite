import Image from "next/image"
import Link from "next/link"

import shape_1 from "@/assets/images/assets/ils_02.png"
import shape_2 from "@/assets/images/assets/ils_03.png"

const FancyBanner = () => {
   return (
      <div className="fancy-banner-one position-relative z-1 bg-one border-30 text-center pt-130 lg-pt-80 pb-130 lg-pb-80 mb-30 lg-mb-20">
         <div className="container">
            <div className="row">
               <div className="col-xxl-8 col-lg-7 m-auto">
                  <div className="title-one mb-35 lg-mb-30">
                     <h2>Start Spending with piku</h2>
                  </div>
               </div>
            </div>
            <p className="fs-28 mb-45 lg-mb-30">Order debit cards for your business & start using it today.</p>
            <Link href="/signup" className="btn-two xl">Let’s Get Started</Link>
         </div>
         <Image src={shape_1} alt="" className="shapes shape_01" />
         <Image src={shape_2} alt="" className="shapes shape_02" />
      </div>
   )
}

export default FancyBanner
