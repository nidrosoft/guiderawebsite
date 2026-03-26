import Image from "next/image"
import Link from "next/link"
import Count from "@/components/common/Count"

import block_featur1 from "@/assets/images/assets/card_01.png"
import block_featur2 from "@/assets/images/assets/card_02.png"
import block_featur3 from "@/assets/images/assets/card_03.png"
import block_featur4 from "@/assets/images/shape/shape_02.svg"

const BLockFeature = () => {
   return (
      <div className="block-feature-one border-30 bg-three mt-30 lg-mt-20 pt-150 lg-pt-80 pb-200 lg-pb-140">
         <div className="container">
            <div className="row">
               <div className="col-xxl-7 col-lg-6 order-lg-last">
                  <div className="ps-lg-5 ms-xxl-4 md-mb-60">
                     <div className="title-one">
                        <h2>Smart Card for business growth</h2>
                     </div>
                     <p className="fs-28 text-dark fw-500 mt-40 md-mt-20">Piku offers virtual debit cards, FDIC-insured USD accounts through City Savings.</p>
                     <div className="counter-wrapper mt-25 mb-70 lg-mb-50">
                        <div className="row">
                           <div className="col-7">
                              <div className="counter-block-one mt-20">
                                 <div className="main-count fw-500 color-dark">$<span className="counter"><Count number={9.1} /></span>B+</div>
                                 <span className="fs-22">Coverage</span>
                              </div>
                           </div>
                           <div className="col-5">
                              <div className="counter-block-one mt-20">
                                 <div className="main-count fw-500 color-dark"><span className="counter"><Count number={9.1} /></span>M</div>
                                 <span className="fs-22">Low interest rate</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <Link href="/" className="btn-two xl">Order Your Card Now!</Link>
                  </div>
               </div>
               <div className="col-xxl-5 col-lg-6 col-md-7 m-auto text-end order-lg-first">
                  <div className="img-holder z-1 d-inline-block position-relative">
                     <Image src={block_featur1} alt="" />
                     <Image src={block_featur2} alt="" className="card_01" />
                     <Image src={block_featur3} alt="" className="card_02" />
                     <Image src={block_featur4} alt="" className="shapes shape_01" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BLockFeature
