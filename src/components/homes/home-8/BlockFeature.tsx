import Image from "next/image"

import img_1 from "@/assets/images/assets/avatar_3.png"
import img_2 from "@/assets/images/logo/p_logo_50.png"
import img_3 from "@/assets/images/logo/p_logo_51.png"
import img_4 from "@/assets/images/logo/p_logo_52.png"
import img_5 from "@/assets/images/logo/p_logo_53.png"
import img_6 from "@/assets/images/logo/p_logo_54.png"
import card from "@/assets/images/assets/card_21.png"
import shape from "@/assets/images/shape/shape_79.png"
import Count from "@/components/common/Count"

const BlockFeature = () => {
   return (
      <div className="block-feature-twentyOne pt-150 lg-pt-80">
         <div className="container">
            <div className="row">
               <div className="col-xxl-10 col-xl-9 col-lg-8 m-auto">
                  <div className="title-ten text-center mb-90 lg-mb-40">
                     <h2>The Piku Support Agent for Growing Businesses</h2>
                  </div>
               </div>
            </div>

            <div className="row">
               <div className="col-lg-6 order-lg-last d-flex flex-column">
                  <div className="feature-block block-one w-100">
                     <div className="row gx-0">
                        <div className="col-sm-6">
                           <div className="counter-block text-center border-style">
                              <div className="main-count font-Montserrat"><span className="counter"><Count number={70} /></span>%</div>
                              <p className="fs-20 text-dark">Piku Resolution Rate</p>
                           </div>
                        </div>
                        <div className="col-sm-6">
                           <div className="counter-block text-center">
                              <div className="main-count font-Montserrat"><span className="counter"><Count number={83} /></span>%</div>
                              <p className="fs-20 text-dark">Happy with AI agent</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="feature-block block-two mt-50 lg-mt-30 w-100">
                     <div className="d-flex">
                        <Image src={img_1} alt="" className="avatar rounded-circle" />
                        <div className="name">
                           <h6>Daniel Hussy,</h6>
                           <span className="f-20 text-dark">CEO & Founder, Piku</span>
                        </div>
                     </div>
                     <blockquote>Game-changer! Boosted efficiency, simplified tasks, and saved time. Highly recommended!</blockquote>
                     <ul className="style-none d-flex flex-wrap justify-content-between">
                        <li><span><Image src={img_2} alt="" /></span></li>
                        <li><span><Image src={img_3} alt="" /></span></li>
                        <li><span><Image src={img_4} alt="" /></span></li>
                        <li><span><Image src={img_5} alt="" /></span></li>
                        <li><span><Image src={img_6} alt="" /></span></li>
                     </ul>
                  </div>
               </div>
               <div className="col-lg-6 d-flex">
                  <div className="feature-block block-three w-100 d-flex align-items-end justify-content-center me-xxl-4 md-mt-40">
                     <Image src={card} alt="" className="screen" />
                     <Image src={shape} alt="" className="shapes shape_01" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BlockFeature
