import Image from "next/image"

import icon_1 from "@/assets/images/icon/icon_53.svg"
import icon_2 from "@/assets/images/icon/icon_54.svg"
import icon_3 from "@/assets/images/icon/icon_55.svg"
import thumb_1 from "@/assets/images/assets/card_23.png"
import avatar from "@/assets/images/assets/avatar_4.png"
import shape from "@/assets/images/shape/shape_80.svg"

const BlockFeatureTwo = () => {
   return (
      <div className="block-feature-twentySix mt-180 xl-mt-150 lg-mt-80">
         <div className="container lg">
            <div className="row">
               <div className="col-xl-7 col-lg-7 m-auto">
                  <div className="title-eleven text-center mb-30 lg-mb-10">
                     <h2>Why it&apos;s right for you to stay with Piku hosting</h2>
                  </div>
               </div>
            </div>
            <div className="row gx-xxl-5">
               <div className="col-lg-4 d-flex">
                  <div className="block-one d-flex flex-column justify-content-center w-100 mt-50 lg-mt-30">
                     <div>
                        <Image src={icon_1} alt="" />
                        <h3>Trustworthy hosting ensuring 99.9% uptime.</h3>
                     </div>
                  </div>
               </div>
               <div className="col-lg-8 d-flex">
                  <div className="block-two w-100 mt-50 lg-mt-30">
                     <div className="row">
                        <div className="col-xl-8 col-lg-7">
                           <h3 className="md-mt-20">Install over 150 free apps with one click.</h3>
                        </div>
                     </div>
                     <Image src={thumb_1} alt="" />
                  </div>
               </div>
               <div className="col-lg-8 d-flex">
                  <div className="block-three w-100 mt-50 lg-mt-30">
                     <div className="row">
                        <div className="col-md-8 ms-auto text-end">
                           <div className="icon d-flex align-items-center justify-content-center rounded-circle"><Image src={icon_2} alt="" /></div>
                           <blockquote>“Efficient, knowledgeable, & smooth experience. Highly recommended”</blockquote>
                           <div className="name fs-20"><span className="fw-500 text-dark">Musa Jamy.</span> CEO babun</div>
                        </div>
                     </div>
                     <Image src={avatar} alt="" className="shapes shape_01" />
                     <Image src={shape} alt="" className="shapes shape_02" />

                  </div>
               </div>
               <div className="col-lg-4 d-flex">
                  <div className="block-four d-flex flex-column justify-content-center w-100 mt-50 lg-mt-30">
                     <div>
                        <h3>Peak performance with rapid load times.</h3>
                        <Image src={icon_3} alt="" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BlockFeatureTwo
