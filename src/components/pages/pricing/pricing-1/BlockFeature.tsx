import Image, { StaticImageData } from "next/image";

import icon_1 from "@/assets/images/icon/icon_50.svg"
import icon_2 from "@/assets/images/icon/icon_51.svg"
import icon_3 from "@/assets/images/icon/icon_52.svg"

interface DataType {
   id: number;
   icon: StaticImageData;
   title: string;
   desc: JSX.Element;
}

const feature_data: DataType[] = [
   {
      id: 1,
      icon: icon_1,
      title: "24/7 Support",
      desc: (<>Our team will seamlessly transfer your websites to the new server, free of charge.</>),
   },
   {
      id: 2,
      icon: icon_2,
      title: "Free domain & easy set up",
      desc: (<>Our team will seamlessly transfer your websites to the new server, free of charge.</>),
   },
   {
      id: 3,
      icon: icon_3,
      title: "Free SSL Security",
      desc: (<>Our team will seamlessly transfer your websites to the new server, free of charge.</>),
   },
];

const BlockFeature = () => {
   return (
      <div className="block-feature-twentyFive mt-180 xl-mt-150 lg-mt-80">
         <div className="container lg">
            <div className="title-eleven text-center mb-50 lg-mb-30">
               <h2>All Plan Included</h2>
            </div>
            <div className="position-relative">
               <div className="row gx-xxl-5">
                  {feature_data.map((item) => (
                     <div key={item.id} className="col-lg-4">
                        <div className="card-style-twelve text-center mt-20">
                           <Image src={item.icon} alt="" className="m-auto" />
                           <h4>{item.title}</h4>
                           <p className="pe-xxl-4 ps-xxl-4">{item.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default BlockFeature
