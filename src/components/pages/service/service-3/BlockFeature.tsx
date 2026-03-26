import Image from "next/image"
import Link from "next/link"

import thumb from "@/assets/images/media/img_22.jpg"
import icon_1 from "@/assets/images/icon/icon_74.svg"
import icon_2 from "@/assets/images/icon/icon_75.svg"
import icon_3 from "@/assets/images/icon/icon_76.svg"

const BlockFeature = () => {
   return (
      <div className="block-feature-twentyEight mt-180 xl-mt-150 lg-mt-100">
         <div className="container">
            <div className="block-feature">
               <div className="row align-items-center">
                  <div className="col-lg-6 order-lg-last ms-auto">
                     <div className="title-ten">
                        <div className="fs-22 text-dark mb-15">Why Us</div>
                        <h2>Piku is perfect for you.</h2>
                     </div>
                     <p className="fs-22 mt-40 md-mt-20 mb-40">Lorem ipsum dolor sit amet. Hic unde iste ut sunt beatae qui expedita mollitia a perspiciatis nemo. Ea blanditiis tempore et quidem molestiae et</p>
                     <Link href="#" className="btn-nineteen">Learn More</Link>
                  </div>
                  <div className="col-lg-5 col-md-8 m-auto m-lg-0">
                     <div className="img-box position-relative z-1 md-mt-40">
                        <Image src={thumb} alt="" />
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="pt-80 lg-pt-30">
            <div className="container">
               <div className="row justify-content-between">
                  <div className="col-xxl-3 col-lg-4 col-md-6">
                     <div className="card-style-thirteen d-flex align-items-center w-100 mt-35">
                        <div className="icon d-flex align-items-center justify-content-center border border-2 border-dark rounded-circle"><Image src={icon_1} alt="" /></div>
                        <div className="text">
                           <h6>24/7  Expert Dedicated Support</h6>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-3 col-lg-4 col-md-6">
                     <div className="card-style-thirteen d-flex align-items-center w-100 mt-35">
                        <div className="icon d-flex align-items-center justify-content-center border border-2 border-dark rounded-circle"><Image src={icon_2} alt="" /></div>
                        <div className="text">
                           <h6>30-Day Money-Back Guarantee</h6>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-3 col-lg-4 col-md-6">
                     <div className="card-style-thirteen d-flex align-items-center w-100 mt-35">
                        <div className="icon d-flex align-items-center justify-content-center border border-2 border-dark rounded-circle"><Image src={icon_3} alt="" /></div>
                        <div className="text">
                           <h6>AI-Powered Advance Technology</h6>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BlockFeature
