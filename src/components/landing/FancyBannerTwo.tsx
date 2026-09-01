import Image from "next/image"
import StoreButtons from "@/components/common/StoreButtons"

import img_1 from "@/assets/images/shape/shape_59.svg"

const FancyBannerTwo = () => {
   return (
      <div className="fancy-banner-seven position-relative z-1 mt-150 lg-mt-80">
         <div className="container">
            <div
               className="fancy-banner-cta-card"
               style={{
                  background: '#fff',
                  borderRadius: '40px',
                  padding: '80px 40px 60px',
                  boxShadow: '0px -40px 90px rgba(0, 0, 0, 0.03)',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
               }}
            >
               <Image src={img_1} alt="" className="m-auto shape_01" />
               <div className="row">
                  <div className="col-xxl-9 col-lg-8 m-auto text-center">
                     <div className="title-four mt-40 lg-mt-20">
                        <h2>Ready to travel smarter?</h2>
                     </div>
                     <p className="fs-28 mt-40 lg-mt-30 mb-40 lg-mb-30">
                        Download Guidera on iOS or Android and start planning with context.
                     </p>

                     <StoreButtons className="justify-content-center mb-10" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default FancyBannerTwo
