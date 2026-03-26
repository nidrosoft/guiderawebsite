import Image from "next/image"

import img_1 from "@/assets/images/media/img_35.jpg"
import img_2 from "@/assets/images/shape/shape_85.svg"
import Count from "@/components/common/Count"

const BlockFeature = () => {
   return (
      <div className="block-feature-thirty bg-one border-30 z-1 pt-100 lg-pt-80 pb-130 lg-pb-80 mt-30 lg-mt-20 position-relative">
         <div className="container">
            <div className="row">
               <div className="col-xxl-9 col-xl-8 col-lg-7 m-auto">
                  <div className="title-one text-center mb-80 lg-mb-40">
                     <h2>7,00000+ User uses our card.</h2>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-7 order-lg-last">
                  <div className="ps-xl-5 ms-xxl-5">
                     <p className="fs-22 fw-500 text-dark mb-65 md-mb-40">Piku offers virtual debit cards, FDIC-insured USD accounts through City Savings.</p>
                     <p className="fs-22 fw-500 text-dark">Online shopping or holiday expenses, auto-converts currencies at the lowest fees, ensuring hassle-free transactions globally.</p>

                     <div className="counter-wrapper mt-100 xl-mt-60 lg-mt-30">
                        <div className="row">
                           <div className="col-7">
                              <div className="counter-block-one mt-20">
                                 <div className="main-count fw-500 color-dark">$<span className="counter"><Count number={9.1} /></span>B+</div>
                                 <span className="fs-22">Coverage</span>
                              </div>
                           </div>
                           <div className="col-5">
                              <div className="counter-block-one mt-20">
                                 <div className="main-count fw-500 color-dark"><span className="counter"><Count number={1.2} /></span>M</div>
                                 <span className="fs-22">Low interest rate</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-5">
                  <Image src={img_1} alt="" className="border-30 md-mt-40" />
               </div>
            </div>
         </div>
         <Image src={img_2} alt="" className="shapes shape_02" />
      </div>
   )
}

export default BlockFeature
