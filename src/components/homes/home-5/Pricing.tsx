"use client"
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import Link from "next/link";

import shape_1 from "@/assets/images/shape/shape_48.svg"
import shape_2 from "@/assets/images/shape/shape_49.svg"
import shape_3 from "@/assets/images/shape/shape_50.svg"
import icon from "@/assets/images/icon/icon_32.svg"

const nav_title: string[] = ["Monthly", "Yearly"];

interface DataType {
   id: number;
   pricing_details: {
      bg_color: string;
      price: number;
      offer: string;
      title: string;
      desc: string;
      list: string[];
      shape: StaticImageData;
   }[];
}

const pricing_data: DataType[] = [
   {
      id: 1,
      pricing_details: [
         {
            bg_color: "#20E8C4",
            price: 7,
            offer: "Save ~20% when billed yearly",
            title: "Personal",
            desc: "Available for single person",
            list: ["Web Design", "Front-End Coding", "Mobile App Development"],
            shape: shape_1
         },
         {
            bg_color: "#FFC736",
            price: 49,
            offer: "Save ~20% when billed yearly",
            title: "Team, Startup",
            desc: "Available team seat up to 10",
            list: ["Web Design", "Front-End Coding", "Mobile App Development", "Programming", "Ai Pilot"],
            shape: shape_2
         },
         {
            bg_color: "#FF56BB",
            price: 99,
            offer: "Save ~20% when billed yearly",
            title: "Enterprise",
            desc: "Available team seat up to 10",
            list: ["Web Design", "Front-End Coding", "Mobile App Development", "Programming", "Ai Pilot", "Expert Support"],
            shape: shape_3
         },
      ],
   },
   {
      id: 2,
      pricing_details: [
         {
            bg_color: "#20E8C4",
            price: 107,
            offer: "Save ~20% when billed yearly",
            title: "Personal",
            desc: "Available for single person",
            list: ["Web Design", "Front-End Coding", "Mobile App Development"],
            shape: shape_1
         },
         {
            bg_color: "#FFC736",
            price: 449,
            offer: "Save ~20% when billed yearly",
            title: "Team, Startup",
            desc: "Available team seat up to 10",
            list: ["Web Design", "Front-End Coding", "Mobile App Development", "Programming", "Ai Pilot"],
            shape: shape_2
         },
         {
            bg_color: "#FF56BB",
            price: 990,
            offer: "Save ~20% when billed yearly",
            title: "Enterprise",
            desc: "Available team seat up to 10",
            list: ["Web Design", "Front-End Coding", "Mobile App Development", "Programming", "Ai Pilot", "Expert Support"],
            shape: shape_3
         },
      ],
   },
];

const Pricing = () => {

   const [activeTab, setActiveTab] = useState(0);

   const handleTabClick = (index: number) => {
      setActiveTab(index);
   };

   return (
      <div className="pricing-section-four position-relative z-1 mt-150 lg-mt-80">
         <div className="container">
            <div className="row">
               <div className="col-xxl-9 col-xl-8 col-lg-7 m-auto">
                  <div className="title-four text-center">
                     <div className="text-uppercase mb-10">Pricing</div>
                     <h2 className="fw-bold">All-inclusive great options pick your Plan</h2>
                  </div>
               </div>
            </div>
            <div className="mt-60 lg-mt-40">
               <nav className="pricing-nav-three d-flex justify-content-center mb-35">
                  <div className="nav nav-tabs justify-content-between" role="tablist">
                     {nav_title.map((item, index) => (
                        <a style={{ cursor: "pointer" }} key={index} onClick={() => handleTabClick(index)} className={`nav-link ${activeTab === index ? "active" : ""}`}></a>
                     ))}
                  </div>
               </nav>
            </div>

            <div className="tab-content mt-30 lg-mt-10">
               {pricing_data.map((items, index) => (
                  <div key={index} className={`tab-pane ${activeTab === index ? "show active" : ""}`}>
                     <div className="row gx-xxl-5">
                        {items.pricing_details.map((item, i) => (
                           <div key={i} className="col-lg-4 d-flex">
                              <div className="pr-column w-100 mt-30" style={{ borderColor: "#20E8C4" }}>
                                 <div className="pr-header mb-30">
                                    <div className="d-flex align-items-center">
                                       <div className="price">${item.price}</div>
                                       <div className="info1">{item.offer}</div>
                                    </div>
                                    <div className="plane-name">{item.title}</div>
                                    <p className="info2">{item.desc}</p>
                                 </div>
                                 <Link href="#" className="btn-eleven w-100 d-flex justify-content-between align-items-center">Start Free
                                    Trial<span className="icon d-flex align-items-center justify-content-center">
                                       <Image src={icon} alt="" /></span></Link>
                                 <ul className="style-none package-feature mt-60 lg-mt-50">
                                    {item.list.map((list, i) => (
                                       <li key={i}>{list}</li>
                                    ))}
                                 </ul>
                                 <Image src={item.shape} alt="" className="shapes shape" />
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               ))}
            </div>
         </div>

      </div>
   )
}

export default Pricing
