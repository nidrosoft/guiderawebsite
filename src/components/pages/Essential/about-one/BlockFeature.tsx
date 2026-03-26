import Image from "next/image"
import Link from "next/link"

import thumb from "@/assets/images/media/img_26.jpg"
import shape from "@/assets/images/shape/shape_83.svg"

const BlockFeature = () => {
   return (
      <div className="block-feature-thirty bg-one border-30 z-1 pt-120 lg-pt-80 pb-130 lg-pb-80 mt-30 lg-mt-20 position-relative">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-xl-7 col-lg-6 order-lg-last">
                  <div className="ps-xl-5">
                     <div className="title-one">
                        <h2>We Guide <br />your business forward.</h2>
                     </div>
                     <p className="fs-28 fw-500 text-dark mt-55 lg-mt-30 mb-70 lg-mb-40 pe-xxl-5">“Piku provides virtual debit cards and FDIC-insured USD accounts, available through City Savings for added security and convenience.”</p>
                     <div className="fs-24 text-dark mb-40 lg-mb-30">- CEO, Piku inc</div>
                     <Link href="/contact-v1" className="btn-one">Let’s Started</Link>
                  </div>
               </div>
               <div className="col-xl-5 col-lg-6">
                  <Image src={thumb} alt="" className="media-img md-mt-40" />
               </div>
            </div>
         </div>
         <Image src={shape} alt="" className="shapes shape_01" />
      </div>
   )
}

export default BlockFeature
