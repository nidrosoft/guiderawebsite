import Image, { StaticImageData } from "next/image";

import icon_1 from "@/assets/images/icon/icon_74.svg"
import icon_2 from "@/assets/images/icon/icon_75.svg"
import icon_3 from "@/assets/images/icon/icon_76.svg"

interface DataType {
   id: number;
   icon: StaticImageData;
   title: JSX.Element;
   desc: JSX.Element;
}

const feature_data: DataType[] = [
   {
      id: 1,
      icon: icon_1,
      title: (<>24/7  Dedicated <br /> Support</>),
      desc: (<>Our team will seamlessly transfer your websites to the new server, free of charge.</>),
   },
   {
      id: 2,
      icon: icon_2,
      title: (<>30-Day Money-Back <br />Guarantee</>),
      desc: (<>Our team will seamlessly transfer your websites to the new server, free of charge.</>),
   },
   {
      id: 3,
      icon: icon_3,
      title: (<>AI-Powered Smart <br /> Technology</>),
      desc: (<>Our team will seamlessly transfer your websites to the new server, free of charge.</>),
   },
];

const BlockFeatureFour = () => {
   return (
      <div className="block-feature-twentyNine mt-180 xl-mt-150 lg-mt-80">
         <div className="container">
            <div className="row">
               <div className="col-xl-7 col-lg-6 m-auto">
                  <div className="title-ten text-center mb-70 lg-mb-40">
                     <h2>The Guarantee Piku Protection</h2>
                  </div>
               </div>
            </div>

            <div className="row gx-xxl-5">
               {feature_data.map((item) => (
                  <div key={item.id} className="col-lg-4">
                     <div className="card-style-fifteen text-center mt-25">
                        <div className="icon d-flex align-items-center justify-content-center border border-2 border-dark rounded-circle"><Image src={item.icon} alt="" /></div>
                        <h6>{item.title}</h6>
                        <p className="ps-xxl-4 pe-xxl-4">{item.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default BlockFeatureFour
