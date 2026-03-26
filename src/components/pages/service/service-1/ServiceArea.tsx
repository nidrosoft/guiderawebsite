import Image, { StaticImageData } from "next/image";

import icon_1 from "@/assets/images/icon/icon_80.svg"
import icon_2 from "@/assets/images/icon/icon_81.svg"
import icon_3 from "@/assets/images/icon/icon_82.svg"
import icon_4 from "@/assets/images/icon/icon_83.svg"
import icon_5 from "@/assets/images/icon/icon_84.svg"
import icon_6 from "@/assets/images/icon/icon_85.svg"

interface DataType {
   id: number;
   icon: StaticImageData;
   title: JSX.Element;
   desc: JSX.Element;
}

const service_data: DataType[] = [
   {
      id: 1,
      icon: icon_1,
      title: (<>Receive USD in <br /> minutes</>),
      desc: (<>Receive global employer payments directly into your account.</>),
   },
   {
      id: 2,
      icon: icon_2,
      title: (<>Protection & highly <br /> Security</>),
      desc: (<>No monthly charges for holding your money in the account indefinitely.</>),
   },
   {
      id: 3,
      icon: icon_3,
      title: (<>Transfer Home</>),
      desc: (<>Return money to your local bank with the best available market rates.</>),
   },
   {
      id: 4,
      icon: icon_4,
      title: (<>24/7 Dedicated <br />Support</>),
      desc: (<>Receive global employer payments directly into your account.</>),
   },
   {
      id: 5,
      icon: icon_5,
      title: (<>Multi-Currency <br />Card</>),
      desc: (<>No monthly charges for holding your money in the account indefinitely.</>),
   },
   {
      id: 6,
      icon: icon_6,
      title: (<>E-Wallet Facility</>),
      desc: (<>Return money to your local bank with the best available market rates.</>),
   },
]

const ServiceArea = () => {
   return (
      <div className="block-feature-two mb-30 lg-mb-20">
         <div className="row gx-xl-4">
            {service_data.map((item) => (
               <div key={item.id} className="col-lg-4 d-flex mt-30 lg-mt-20">
                  <div className="card-style-one text-center border-30 bg-four w-100">
                     <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto"><Image src={item.icon} alt="" /></div>
                     <h3>{item.title}</h3>
                     <p className="fs-24 fw-500 text-dark">{item.desc}</p>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

export default ServiceArea
