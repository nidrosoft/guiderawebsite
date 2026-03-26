import Image from "next/image"

import feature_icon from "@/assets/images/icon/icon_72.png"
import thumb from "@/assets/images/media/img_22.jpg"
import BlockFeatureThree from "./BlockFeatureThree"

const BlockFeatureTwo = () => {
   return (
      <div className="block-feature-twentyEight mt-225 lg-mt-150 sm-mt-100">
         <div className="container">
            <div className="block-feature">
               <div className="row align-items-center">
                  <div className="col-lg-6 order-lg-last ms-auto">
                     <div className="title-ten pe-xl-5 me-xl-5">
                        <div className="fs-22 text-dark mb-15">Threat Protection</div>
                        <h2>Secure assets with our piku shield.</h2>
                     </div>
                     <p className="fs-22 mt-40 lg-mt-30 mb-40 lg-mb-30">Secure devices, maintain privacy online, & safeguard identity seamlessly. Streamline defense against hackers.</p>
                     <a href="service-details.html" className="btn-nineteen">Learn More</a>
                  </div>
                  <div className="col-lg-5 col-md-8 m-auto m-lg-0">
                     <div className="img-box position-relative z-1 md-mt-40">
                        <Image src={thumb} alt="" />
                        <div className="card-one">
                           <Image src={feature_icon} alt="" className="m-auto" />
                           <h4>99% protection against any threat</h4>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <BlockFeatureThree />
         </div>
      </div>
   )
}

export default BlockFeatureTwo
