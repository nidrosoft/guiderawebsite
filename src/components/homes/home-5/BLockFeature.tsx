import Image, { StaticImageData } from "next/image";

import icon_1 from "@/assets/images/icon/icon_28.svg"
import icon_2 from "@/assets/images/icon/icon_29.svg"
import icon_3 from "@/assets/images/icon/icon_30.svg"
import img_1 from "@/assets/images/assets/card_10.png"
import img_2 from "@/assets/images/shape/shape_43.svg"
import img_3 from "@/assets/images/assets/card_11.png"
import img_4 from "@/assets/images/shape/shape_44.svg"
import img_5 from "@/assets/images/assets/card_12.png"
import img_6 from "@/assets/images/shape/shape_45.svg"

interface DataType {
   id: number;
   icon: StaticImageData;
   title: JSX.Element;
}

const feature_data: DataType[] = [
   {
      id: 1,
      icon: icon_1,
      title: (<>Collaboration with <br />Team easily</>),
   },
   {
      id: 2,
      icon: icon_2,
      title: (<>Organize your project <br /> effortlessly</>),
   },
   {
      id: 3,
      icon: icon_3,
      title: (<>Track Project workflow <br /> & Progress</>),
   },
];

const BLockFeature = () => {
   return (
      <div className="block-feature-sixteen pt-130 lg-pt-80">
         <div className="container">
            <div className="row">
               <div className="col-xl-11 m-auto">
                  <div className="title-four text-center mb-80 lg-mb-40 pe-xl-3 ps-xl-3">
                     <h2 className="fw-bold">Streamline tasks, boost productivity with effective project management app.</h2>
                  </div>
               </div>
            </div>

            <div className="row">
               {feature_data.map((item) => (
                  <div key={item.id} className="col-lg-4">
                     <div className="card-style-seven position-relative text-center mt-30 pb-45 lg-pb-30">
                        <Image src={item.icon} alt="" className="icon m-auto" />
                        <h4>{item.title}</h4>
                     </div>
                  </div>
               ))}
            </div>

            <div className="pt-120 lg-pt-50">
               <div className="row">
                  <div className="col-lg-8 d-flex">
                     <div className="feature-block block-one w-100 mt-30" style={{ background: "#FFEB80" }}>
                        <h3>Track Project</h3>
                        <div className="row">
                           <div className="col-md-9">
                              <p className="fs-24 text-dark">Efficiently monitor project progress, ensuring timelines, resource allocation, </p>
                           </div>
                        </div>
                        <Image src={img_1} alt="" className="w-100 mt-70 md-mt-40" />
                        <Image src={img_2} alt="" className="shapes shape_01" />
                     </div>
                  </div>
                  <div className="col-lg-4 d-flex">
                     <div className="feature-block block-one w-100 mt-30" style={{ background: "#76FFCE" }}>
                        <h3>Plan Project</h3>
                        <div className="row">
                           <div className="col-12">
                              <p className="fs-24 text-dark">Efficiently monitor project progress, resource allocation</p>
                           </div>
                        </div>
                        <Image src={img_3} alt="" className="w-100 mt-40" />
                        <Image src={img_4} alt="" className="shapes shape_02" />
                     </div>
                  </div>
                  <div className="col-12 d-flex">
                     <div className="feature-block block-one w-100 mt-50 lg-mt-30 pe-0" style={{ background: "#D3A7FF" }}>
                        <div className="row">
                           <div className="col-lg-6">
                              <h3>Team Collaboration & Communication</h3>
                              <div className="row">
                                 <div className="col-xxl-10">
                                    <p className="fs-24 text-dark">Efficiently monitor project progress, ensuring that timelines, resource allocation, </p>
                                 </div>
                              </div>
                              <ul className="style-none list-item mt-50">
                                 <li>Make Real-time Communication</li>
                                 <li>Document Sharing and Centralized Storage</li>
                                 <li>Task Assignment and Tracking</li>
                                 <li>And many more...</li>
                              </ul>
                           </div>
                           <div className="col-lg-6">
                              <Image src={img_5} alt="" className="ms-auto mt-20 md-mt-40 mb-60 md-mb-10" />
                           </div>
                        </div>
                        <Image src={img_6} alt="" className="shapes shape_03" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BLockFeature
