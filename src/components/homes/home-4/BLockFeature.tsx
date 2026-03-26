import Image, { StaticImageData } from "next/image";

import feature_thumb1 from "@/assets/images/assets/ils_16.svg"
import feature_thumb2 from "@/assets/images/assets/ils_17.svg"

interface DataType {
   id: number;
   thumb: StaticImageData;
   title: string;
   desc: JSX.Element;
   class:string;
}

const feature_data: DataType[] = [
   {
      id: 1,
      thumb: feature_thumb1,
      title: "All in One",
      class:"border-line",
      desc: (<>You design, we generate the code for everything from fully custom layouts to</>),
   },
   {
      id: 2,
      thumb: feature_thumb2,
      title: "Customer Portal",
      class:"md-mt-30",
      desc: (<>You design, we generate the code for everything from fully custom layouts to</>),
   },
];

const BLockFeature = () => {
   return (
      <div className="block-feature-twelve pt-130 lg-pt-80">
         <div className="container">
            <div className="text-center mb-85 lg-mb-40">
               <div className="title-six">
                  <h2>Top Rated Software Farm</h2>
               </div>
               <p className="fs-24 mb-25">“I couldn’t have asked for a better experience with piku!”</p>
               <ul className="rating d-flex justify-content-center align-items-center flex-wrap style-none">
                  <li><i className="fa-sharp fa-solid fa-star-sharp"></i></li>
                  <li><i className="fa-sharp fa-solid fa-star-sharp"></i></li>
                  <li><i className="fa-sharp fa-solid fa-star-sharp"></i></li>
                  <li><i className="fa-sharp fa-solid fa-star-sharp"></i></li>
                  <li><i className="fa-sharp fa-solid fa-star-sharp"></i></li>
                  <li><span><strong>5.00</strong> (27k Reviews)</span></li>
               </ul>
            </div>

            <div className="row">
               <div className="col-xxl-10 m-auto">
                  <div className="row justify-content-between">
                     {feature_data.map((item) => (
                        <div key={item.id} className="col-xl-4 col-lg-5">
                           <div className={`card-style-six text-center ${item.class}`}>
                              <div className="icon d-flex align-items-center justify-content-center">
                                 <Image src={item.thumb} alt="" />
                              </div>
                              <h4>{item.title}</h4>
                              <p className="fs-24">{item.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BLockFeature
