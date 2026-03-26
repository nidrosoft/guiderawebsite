import Image from "next/image"

import img_1 from "@/assets/images/shape/shape_72.svg"
import img_2 from "@/assets/images/media/img_15.jpg"
import img_3 from "@/assets/images/shape/shape_73.svg"
import img_4 from "@/assets/images/shape/shape_74.png"

const BlockFeatureTwo = () => {
   return (
      <div className="block-feature-twenty mt-180 lg-mt-80">
         <div className="container xl">
            <div className="row gx-xxl-5 align-items-center">
               <div className="col-lg-7">
                  <h2>We turn concepts into business.</h2>
                  <div className="mt-55 lg-mt-30 mb-45 lg-mb-30">
                     <div className="row">
                        <div className="col-xxl-9 col-xl-10">
                           <p className="fs-28 mb-35">Our diverse team, comprising developers, designers, business consultants, and digital marketing </p>
                           <p className="fs-28">specialists, transforms promising ideas into successful companies through collaborative efforts and strategic implementation.</p>
                        </div>
                     </div>
                  </div>
                  <div className="d-flex align-items-center">
                     <div className="me-5"><a href="about-us-v1.html" className="btn-five tran3s">Let’s Get Started</a></div>
                     <Image src={img_1} alt="" className="d-none d-sm-block" />
                  </div>
               </div>
               <div className="col-lg-5 text-center text-lg-end">
                  <div className="img-box d-inline-block position-relative z-1">
                     <Image src={img_2} alt="" className="main-img" />
                     <div className="text-sticker">
                        <Image src={img_3} alt="" />
                        <div><span>13+</span> Years Experience</div>
                     </div>
                     <Image src={img_4} alt="" className="shapes shape_01" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BlockFeatureTwo
