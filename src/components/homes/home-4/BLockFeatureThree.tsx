import Image from "next/image"
import thumb from "@/assets/images/assets/card_08.png"
import Link from "next/link"

const BLockFeatureThree = () => {
   return (
      <div className="block-feature-fifteen p-30 mt-150 xl-mt-120 lg-mt-80">
         <div className="bg-eleven md-pt-70">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-6 order-lg-last">
                     <div className="ms-lg-5">
                        <div className="title-six">
                           <h2>App Integration Available</h2>
                        </div>
                        <p className="fs-28 mt-30 mb-50 md-mb-30">Broaden piku’s line potential by leveraging its compatibility with a vast array of apps and integration solutions.</p>
                        <Link href="/" className="btn-seven">See all Apps</Link>
                     </div>
                  </div>
                  <div className="col-lg-6 order-lg-first">
                     <div className="media position-relative md-mt-40">
                        <Image src={thumb} alt="" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BLockFeatureThree
