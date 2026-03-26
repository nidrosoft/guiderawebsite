import Image, { StaticImageData } from "next/image"

import logo_1 from "@/assets/images/logo/p_logo_69.png"
import logo_2 from "@/assets/images/logo/p_logo_70.png"
import logo_3 from "@/assets/images/logo/p_logo_71.png"
import logo_4 from "@/assets/images/logo/p_logo_72.png"
import logo_5 from "@/assets/images/logo/p_logo_73.png"
import logo_6 from "@/assets/images/logo/p_logo_74.png"
import logo_7 from "@/assets/images/logo/p_logo_75.png"
import logo_8 from "@/assets/images/logo/p_logo_76.png"
import logo_9 from "@/assets/images/logo/p_logo_77.png"
import logo_10 from "@/assets/images/logo/p_logo_78.png"
import logo_11 from "@/assets/images/logo/p_logo_79.png"
import logo_12 from "@/assets/images/logo/p_logo_80.png"

interface DataType {
   id: number;
   col: string;
   logo: StaticImageData[];
}

const logo_data: DataType[] = [
   {
      id: 1,
      col: "col-12",
      logo: [logo_1, logo_2, logo_3, logo_4, logo_5, logo_6, logo_7, logo_8],
   },
   {
      id: 2,
      col: "col-lg-10 m-auto",
      logo: [logo_9, logo_10, logo_11, logo_12, logo_1, logo_2, logo_3],
   },
   {
      id: 3,
      col: "col-lg-9 m-auto",
      logo: [logo_4, logo_5, logo_6, logo_7, logo_8, logo_9],
   },
]

const BLockFeatureTwo = () => {
   return (
      <div className="block-feature-seven position-relative bg-fifteen z-1 pt-120 lg-pt-80 pb-100 xl-pb-80 lg-pb-40">
         <div className="container">
            <div className="row mb-50 lg-mb-20">
               <div className="col-xl-10 col-lg-8 m-auto text-center">
                  <div className="title-two mb-40 lg-mb-20">
                     <h2 className="text-white">Piku integrates tools, services, simplifying workflow.</h2>
                  </div>
                  <p className="font-manrope fs-24 fw-500 text-white">Ya gratis dong, masa aplikasi chat aja berbayar sih</p>
               </div>
            </div>
            {logo_data.map((item) => (
               <div key={item.id} className="row">
                  <div className={item.col}>
                     <div className="logo-wrapper d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between">
                        {item.logo.map((logo, i) => (
                           <div key={i} className="logo d-flex align-items-center justify-content-center"><Image src={logo} alt="" /></div>
                        ))}
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

export default BLockFeatureTwo
