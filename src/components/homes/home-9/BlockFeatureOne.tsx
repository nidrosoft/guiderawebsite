"use client"
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import btn_icon from "@/assets/images/icon/icon_49.svg"
import icon_1 from "@/assets/images/icon/icon_47.svg"
import icon_2 from "@/assets/images/icon/icon_48.svg"
import icon_3 from "@/assets/images/icon/icon_49.svg"

import brand_1 from "@/assets/images/assets/d_n_01.png"
import brand_2 from "@/assets/images/assets/d_n_02.png"
import brand_3 from "@/assets/images/assets/d_n_03.png"
import brand_4 from "@/assets/images/assets/d_n_04.png"
import brand_5 from "@/assets/images/assets/d_n_05.png"

interface DataType {
   id: number;
   icon: StaticImageData;
   title: string;
   price: JSX.Element;
}

const feature_data: DataType[] = [
   {
      id: 1,
      icon: icon_1,
      title: "WordPress Hosting",
      price: (<>Start from <span className="fw-500 text-dark">$2.99/mo</span></>),
   },
   {
      id: 2,
      icon: icon_2,
      title: "Website Hosting",
      price: (<>Start from <span className="fw-500 text-dark">$2.99/mo</span></>),
   },
   {
      id: 3,
      icon: icon_3,
      title: "Domain Names",
      price: (<>Start from <span className="fw-500 text-dark">$2.99/mo</span></>),
   },
];

const BlockFeatureOne = () => {
   return (
      <div className="block-feature-twentyFour pb-80 lg-pb-40">
         <div className="container lg">
            <div className="row gx-xxl-5">
               {feature_data.map((item) => (
                  <div key={item.id} className="col-lg-4">
                     <div className="card-style-eleven">
                        <Image src={item.icon} alt="" />
                        <h4>{item.title}</h4>
                        <p className="m0">{item.price}</p>
                        <div className="d-flex justify-content-end">
                           <Link href="/" className="stretched-link"><Image src={btn_icon} alt="" /></Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            <form className="d-flex">
               <input type="text" placeholder="Find you perfect domain name..." />
               <button>Search</button>
            </form>
            <div className="d-flex justify-content-center justify-content-md-between flex-wrap logos">
               <div><Image src={brand_1} alt="" /></div>
               <div><Image src={brand_2} alt="" /></div>
               <div><Image src={brand_3} alt="" /></div>
               <div><Image src={brand_4} alt="" /></div>
               <div><Image src={brand_5} alt="" /></div>
            </div>
         </div>
      </div>
   )
}

export default BlockFeatureOne
