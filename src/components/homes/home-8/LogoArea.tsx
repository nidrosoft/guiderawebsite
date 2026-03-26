import Image, { StaticImageData } from "next/image"

import logo_1 from "@/assets/images/logo/p_logo_55.png"
import logo_2 from "@/assets/images/logo/p_logo_56.png"
import logo_3 from "@/assets/images/logo/p_logo_57.png"
import logo_4 from "@/assets/images/logo/p_logo_58.png"
import logo_5 from "@/assets/images/logo/p_logo_59.png"
import logo_6 from "@/assets/images/logo/p_logo_60.png"
import logo_7 from "@/assets/images/logo/p_logo_61.png"
import logo_8 from "@/assets/images/logo/p_logo_62.png"
import logo_9 from "@/assets/images/logo/p_logo_63.png"
import logo_10 from "@/assets/images/logo/p_logo_64.png"

const logo_data: StaticImageData[] = [logo_1, logo_2, logo_3, logo_4, logo_5, logo_6, logo_7, logo_8, logo_9, logo_10];

const LogoArea = () => {
   return (
      <div className="app-integration-one mt-170 xl-mt-150 lg-mt-80">
         <div className="container">
            <div className="row">
               <div className="col-xl-11 m-auto">
                  <div className="title-ten text-center mb-95 lg-mb-50">
                     <h2>Integrates Tools</h2>
                  </div>
               </div>
            </div>
         </div>

         <div className="logo-wrapper">
            <div className="partner-logo-two">
               {logo_data.map((logo, i) => (
                  <div key={i} className="item">
                     <Image src={logo} alt="" />
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default LogoArea
