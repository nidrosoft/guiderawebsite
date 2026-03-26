import Image from "next/image"
import Link from "next/link"

import img_1 from "@/assets/images/shape/shape_41.svg"
import img_2 from "@/assets/images/shape/shape_42.svg"
import img_3 from "@/assets/images/assets/ils_23.png"

const FancyBanner = () => {
   return (
      <div className="fancy-banner-four p-30 mt-110 lg-mt-60">
         <div className="bg-eight text-center pt-100 lg-pt-70 pb-250">
            <div className="container">
               <div className="position-relative z-1">
                  <div className="row">
                     <div className="col-xl-9 col-lg-8 m-auto">
                        <div className="title-six mb-40">
                           <h2>700k+ Customers have our Piku. Try it Now!</h2>
                        </div>
                        <Link href="#" className="btn-eleven">Get Started</Link>
                     </div>
                  </div>
                  <Image src={img_1} alt="" className="shapes shape_01" />
                  <Image src={img_2} alt="" className="shapes shape_02" />
               </div>
            </div>

         </div>
         <Image src={img_3} alt="" className="position-relative z-1 illustration" />
      </div>
   )
}

export default FancyBanner
