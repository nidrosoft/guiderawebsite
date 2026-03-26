import Image from "next/image"

import title_shape from "@/assets/images/shape/shape_17.svg"
import testi_thumb from "@/assets/images/assets/card_06.png"

const Feedback = () => {
   return (
      <div className="feedback-section-two mt-150 lg-mt-80 sm-pt-50">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-5 col-md-6">
                  <div className="upper-text">4.7 rating (130k)</div>
                  <h2>We’ve been <br /> helping <Image src={title_shape} alt="" className="d-inline-block" /> <br />
                     Customer globally</h2>
               </div>
               <div className="col-lg-7 col-md-6 text-end">
                  <div className="feedback-card position-relative z-1 ms-xxl-4 sm-mt-40">
                     <Image src={testi_thumb} alt="" className="w-100" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Feedback
