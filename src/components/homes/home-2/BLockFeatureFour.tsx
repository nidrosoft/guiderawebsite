import Image, { StaticImageData } from "next/image";

import logo_1 from "@/assets/images/logo/p_logo_12.png"
import logo_2 from "@/assets/images/logo/p_logo_13.png"
import logo_3 from "@/assets/images/logo/p_logo_14.png"
import logo_4 from "@/assets/images/logo/p_logo_15.png"
import logo_5 from "@/assets/images/logo/p_logo_16.png"
import logo_6 from "@/assets/images/logo/p_logo_17.png"
import logo_7 from "@/assets/images/logo/p_logo_18.png"
import logo_8 from "@/assets/images/logo/p_logo_19.png"
import logo_9 from "@/assets/images/logo/p_logo_20.png"
import logo_10 from "@/assets/images/logo/p_logo_21.png"
import logo_11 from "@/assets/images/logo/p_logo_22.png"
import logo_12 from "@/assets/images/logo/p_logo_23.png"
import logo_13 from "@/assets/images/logo/p_logo_24.png"
import logo_14 from "@/assets/images/logo/p_logo_25.png"
import logo_15 from "@/assets/images/logo/p_logo_26.png"
import logo_16 from "@/assets/images/logo/p_logo_27.png"
import logo_17 from "@/assets/images/logo/p_logo_28.png"
import logo_18 from "@/assets/images/logo/p_logo_29.png"
import logo_19 from "@/assets/images/logo/p_logo_30.png"
import logo_20 from "@/assets/images/logo/p_logo_31.png"
import logo_21 from "@/assets/images/logo/p_logo_32.png"

interface DataType {
   id: number;
   col: string;
   logo_details: StaticImageData[];
}

const logo_data: DataType[] = [
   {
      id: 1,
      col: "col-12",
      logo_details: [logo_1, logo_2, logo_3, logo_4, logo_5, logo_6, logo_7, logo_8],
   },
   {
      id: 2,
      col: "col-xl-10 col-11 m-auto",
      logo_details: [logo_9, logo_10, logo_11, logo_12, logo_13, logo_14, logo_15],
   },
   {
      id: 3,
      col: "col-xl-9 col-10 m-auto",
      logo_details: [logo_16, logo_17, logo_18, logo_19, logo_20, logo_21],
   },
];

const BLockFeatureFour = () => {
   return (
      <div className="block-feature-seven position-relative z-1 mt-150 lg-mt-80">
         <div className="container">
            <div className="row align-items-center mb-50 xl-mb-30 xs-mb-10">
               <div className="col-xl-10 col-lg-8 m-auto text-center">
                  <div className="title-two mb-40 lg-mb-20">
                     <h2>Piku integrates tools, services, simplifying workflow.</h2>
                  </div>
                  <p className="font-manrope fs-24 fw-500 text-dark">Ya gratis dong, masa aplikasi chat aja berbayar sih</p>
               </div>
            </div>
            {logo_data.map((items) => (
               <div key={items.id} className="row">
                  <div className={items.col}>
                     <div className="logo-wrapper d-flex flex-wrap align-items-center justify-content-between">
                        {items.logo_details.map((logo, i) => (
                           <Image key={i} src={logo} alt="" />
                        ))}
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

export default BLockFeatureFour
