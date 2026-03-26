import Image, { StaticImageData } from "next/image"

import brand_1 from "@/assets/images//logo/p_logo_33.png"
import brand_2 from "@/assets/images//logo/p_logo_34.png"
import brand_3 from "@/assets/images//logo/p_logo_35.png"
import brand_4 from "@/assets/images//logo/p_logo_36.png"
import brand_5 from "@/assets/images//logo/p_logo_37.png"
import brand_6 from "@/assets/images//logo/p_logo_38.png"
import brand_7 from "@/assets/images//logo/p_logo_39.png"

const brand_data: StaticImageData[] = [brand_1, brand_2, brand_3, brand_4, brand_5, brand_6, brand_7];

const Brand = () => {
   return (
      <div className="container">
         <h6 className="fs-20 text-uppercase text-center mb-20 md-mb-10">Some of Our Clients</h6>

         <div className="row gx-5 justify-content-center align-items-center">
            {brand_data.map((brand, i) => (
               <div key={i} className="col-lg-3 col-4 mt-60 lg-mt-30">
                  <Image src={brand} alt="" className="m-auto" />
               </div>
            ))}
         </div>
      </div>
   )
}

export default Brand
