import Link from "next/link"
import Image from "next/image"

import shape_1 from "@/assets/images/shape/shape_20.svg"
import shape_2 from "@/assets/images/shape/shape_21.svg"

const FancyBanner = () => {
   return (
      <div className="fancy-banner-two pt-120 lg-pt-80 pb-150 xl-pb-120 lg-pb-80 position-relative z-1">
         <div className="container">
            <div className="row">
               <div className="col-xl-9 col-lg-7 m-auto text-center">
                  <h2>700k+ Customers have our Piku. Try it Now!</h2>
                  <Link href="/" className="btn-six">Claim 10k Words</Link>
               </div>
            </div>
         </div>
         <Image src={shape_1} alt="" className="shapes shape_01" />
         <Image src={shape_2} alt="" className="shapes shape_02" />
      </div>
   )
}

export default FancyBanner
