"use client"
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import Link from "next/link";

import pricing_thumb1 from "@/assets/images/assets/ils_20.png"
import pricing_thumb2 from "@/assets/images/assets/ils_21.png"
import pricing_thumb3 from "@/assets/images/assets/ils_22.png"

interface DataType {
   id: number;
   price_details: {
      id: number
      title: string;
      price: number;
      list: string[];
      thumb: StaticImageData;
   }[];
}

const pricing_data: DataType[] = [
   {
      id: 1,
      price_details: [
         {
            id: 1,
            title: "Standard",
            price: 0,
            list: ["1 Domain", "1 Year Premium Support", "3gb Hosting"],
            thumb: pricing_thumb1,
         },
         {
            id: 2,
            title: "Gold",
            price: 7,
            list: ["3 Domain", "1 Year Premium Support", "10gb Hosting"],
            thumb: pricing_thumb2,
         },
         {
            id: 3,
            title: "Standard",
            price: 9,
            list: ["Unlimited Domain", "1 Year Premium Support", "Unlimited Hosting"],
            thumb: pricing_thumb3,
         },
      ],
   },
   {
      id: 2,
      price_details: [
         {
            id: 1,
            title: "Standard",
            price: 0,
            list: ["1 Domain", "1 Year Premium Support", "3gb Hosting"],
            thumb: pricing_thumb1,
         },
         {
            id: 2,
            title: "Gold",
            price: 27,
            list: ["3 Domain", "1 Year Premium Support", "10gb Hosting"],
            thumb: pricing_thumb2,
         },
         {
            id: 3,
            title: "Standard",
            price: 39,
            list: ["Unlimited Domain", "1 Year Premium Support", "Unlimited Hosting"],
            thumb: pricing_thumb3,
         },
      ],
   },
];

const nav_title: string[] = ["Monthly", "Yearly"];

const Pricing = () => {

   const [activeTab, setActiveTab] = useState(0);

   const handleTabClick = (index: number) => {
      setActiveTab(index);
   };

   return (
      <div className="pricing-section-three position-relative z-1 mt-150 xl-mt-120 lg-mt-80">
         <div className="container">
            <div className="row align-items-end">
               <div className="col-lg-7">
                  <div className="title-six text-center text-lg-start">
                     <h2>Transparent pricing, Select plan</h2>
                  </div>
               </div>
               <div className="col-lg-5">
                  <div className="d-flex justify-content-center justify-content-lg-end">
                     <nav className="pricing-nav-two d-flex justify-content-center mb-35 md-mb-10 md-mt-30">
                        <div className="nav nav-tabs" role="tablist">
                           {nav_title.map((item, index) => (
                              <button style={{ cursor: "pointer" }} key={index} onClick={() => handleTabClick(index)} className={`nav-link ${activeTab === index ? "active" : ""}`}>{item}</button>
                           ))}
                        </div>
                     </nav>
                  </div>
               </div>
            </div>

            <div className="tab-content mt-30 md-mt-10">
               {pricing_data.map((items, index) => (
                  <div key={items.id} className={`tab-pane ${activeTab === index ? "show active" : ""}`} id="monthly" role="tabpanel" aria-labelledby="buy-tab">
                     <div className="row gx-xxl-5">
                        {items.price_details.map((item) => (
                           <div key={item.id} className="col-lg-4">
                              <div className="pr-column">
                                 <div className="pr-header text-center">
                                    <div className="plan text-uppercase">{item.title}</div>
                                    <strong className="price fw-500 d-block">${item.price}</strong>
                                 </div>
                                 <ul className="style-none text-center">
                                    {item.list.map((list, i) => (
                                       <li key={i}>{list}</li>
                                    ))}
                                 </ul>
                                 <Link href="#" className="btn-eleven mt-50 mb-50">Get Started</Link>
                                 <div className="illustration d-flex align-items-center justify-content-center">
                                    <Image src={item.thumb} alt="" />
                                 </div>
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
