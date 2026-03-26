import Image, { StaticImageData } from "next/image";

import icon_1 from "@/assets/images/icon/icon_40.png"
import icon_2 from "@/assets/images/icon/icon_40.png"
import icon_3 from "@/assets/images/icon/icon_40.png"

interface DataType {
   id: number;
   icon: StaticImageData
   title: JSX.Element
}

const feature_data: DataType[] = [
   {
      id: 1,
      icon: icon_1,
      title: (<>Enhance teamwork, reduce repetitive efforts.</>),
   },
   {
      id: 2,
      icon: icon_2,
      title: (<>Integrated inbox for multi-channel assistance.</>),
   },
   {
      id: 3,
      icon: icon_3,
      title: (<>Highly rated support from Piku anytime.</>),
   },
];

const BlockFeatureFour = () => {
   return (
      <div className="block-feature-twentyThree mt-180 xl-mt-150 lg-mt-100">
         <div className="container">
            <div className="row">
               <div className="col-xxl-9 col-lg-8 m-auto">
                  <div className="title-ten text-center mb-55 lg-mb-20">
                     <h2>Three Reasons Our <span className="position-relative z-1">Clients<span className="line" style={{ background: "#FFC92E" }}></span></span> Love About Piku</h2>
                  </div>
               </div>
            </div>

            <div className="row gx-xxl-5">
               {feature_data.map((item) => (
                  <div key={item.id} className="col-lg-4">
                     <div className="card-style-ten mt-35">
                        <div className="icon d-flex align-items-center justify-content-center"><Image src={item.icon} alt="" /></div>
                        <h4>{item.title}</h4>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default BlockFeatureFour
