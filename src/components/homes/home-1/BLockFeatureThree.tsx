import Image from "next/image";

import shape_1 from "@/assets/images/shape/shape_03.svg"
import shape_2 from "@/assets/images/shape/shape_04.svg"
import shape_3 from "@/assets/images/shape/shape_05.svg"

import img_1 from "@/assets/images/assets/card_04.png"
import img_2 from "@/assets/images/assets/card_05.png"



const BLockFeatureThree = () => {
   return (
      <div className="block-feature-three border-30 bg-two pt-130 lg-pt-80 md-pt-30 pb-150 lg-pb-80 mb-30 lg-mb-20">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-6">
                  <div className="title-one mb-30 mt-50">
                     <h2>Globally  Send Money <span className="d-inline-block position-relative">with <Image src={shape_1} alt="" className="d-inline-block" /></span> <br /> Low Fees</h2>
                  </div>
                  <p className="fs-24 fw-500 text-dark">Online shopping or holiday expenses, auto-converts currencies at the lowest fees, ensuring hassle-free transactions globally.</p>
               </div>
               <div className="col-lg-6 col-md-8 m-auto text-end">
                  <div className="img-holder-one position-relative d-inline-block z-1 md-mt-40">
                     <Image src={img_1} alt="" />
                     <Image src={shape_2} alt="" className="shapes shape_01" />
                  </div>
               </div>
            </div>

            <div className="row align-items-center mt-100 md-mt-30">
               <div className="col-lg-6 order-lg-last">
                  <div className="ps-xl-5">
                     <div className="title-one mb-30 mt-50">
                        <h2>Withdraw money from <span className="d-inline-block position-relative">an ATM <Image src={shape_1} alt="" className="d-inline-block" /></span></h2>
                     </div>
                     <p className="fs-24 fw-500 text-dark">Our user-friendly app simplifies money transfers, eliminating lines, fees, and worries about transaction confirmation.</p>
                  </div>
               </div>
               <div className="col-lg-6 col-md-8 m-auto order-lg-first">
                  <div className="img-holder-two position-relative d-inline-block z-1 md-mt-20">
                     <Image src={img_2} alt="" />
                     <Image src={shape_3} alt="" className="shapes shape_01" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BLockFeatureThree
