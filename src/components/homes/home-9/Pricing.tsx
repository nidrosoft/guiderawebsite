"use client"
import { useState } from "react";
import Link from "next/link";

const nav_title: string[] = ["Monthly", "Yearly"];

interface DataType {
   id: number;
   price_details: {
      id: number;
      title: string;
      desc: string;
      offer: string;
      price: JSX.Element;
      re_price: JSX.Element;
      list: string[];
   }[];
}

const pricing_data: DataType[] = [
   {
      id: 1,
      price_details: [
         {
            id: 1,
            title: "Personal",
            desc: "Available for single person",
            offer: "Save 75%",
            price: (<>$3.99<sub>/mo*</sub></>),
            re_price: (<>Reguler price <del className="fw-500 text-dark">$13.99</del></>),
            list: ["WP Website Builder", "Free Migration", "Free SSL Certificate", "WP Installer", "10 Email & Domain", "Fast SSD Storage", "Unlimited Free Domain", "Unlimited Traffic", "1 Website"],
         },
         {
            id: 2,
            title: "Business",
            desc: "Available for single person",
            offer: "Save 75%",
            price: (<>$7.99<sub>/mo*</sub></>),
            re_price: (<>Reguler price <del className="fw-500 text-dark">$29.99</del></>),
            list: ["WP Website Builder", "Free Migration", "Free SSL Certificate", "WP Installer", "Unlimited Email & Domain", "Fast SSD Storage", "Unlimited Free Domain", "Unlimited Traffic", "Unlimited Website"],
         },
      ],
   },
   {
      id: 2,
      price_details: [
         {
            id: 1,
            title: "Personal",
            desc: "Available for single person",
            offer: "Save 75%",
            price: (<>$5.99<sub>/mo*</sub></>),
            re_price: (<>Reguler price <del className="fw-500 text-dark">$13.99</del></>),
            list: ["WP Website Builder", "Free Migration", "Free SSL Certificate", "WP Installer", "10 Email & Domain", "Fast SSD Storage", "Unlimited Free Domain", "Unlimited Traffic", "1 Website"],
         },
         {
            id: 2,
            title: "Business",
            desc: "Available for single person",
            offer: "Save 75%",
            price: (<>$9.99<sub>/mo*</sub></>),
            re_price: (<>Reguler price <del className="fw-500 text-dark">$29.99</del></>),
            list: ["WP Website Builder", "Free Migration", "Free SSL Certificate", "WP Installer", "Unlimited Email & Domain", "Fast SSD Storage", "Unlimited Free Domain", "Unlimited Traffic", "Unlimited Website"],
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
      <div className="pricing-section-six mt-170 lg-mt-80">
         <div className="container lg">
            <div className="row">
               <div className="col-xl-4 col-lg-6 m-auto m-xl-0 text-center text-xl-start">
                  <div className="title-eleven">
                     <h2>Solo, Agency or Team? Choose your plan.</h2>
                  </div>
                  <div className="fs-20 fw-500 text-dark mt-55 lg-mt-40 mb-15">Billing Cycle</div>
                  <nav className="pricing-nav-four d-flex justify-content-center justify-content-xl-start lg-mb-40">
                     <div className="nav nav-tabs justify-content-between" role="tablist">
                        {nav_title.map((item, index) => (
                           <a style={{ cursor: "pointer" }} key={index} onClick={() => handleTabClick(index)} className={`nav-link ${activeTab === index ? "active" : ""}`}>{item}</a>
                        ))}
                     </div>
                  </nav>
               </div>
               <div className="col-xl-8">
                  <div className="tab-content ps-xxl-5">
                     {pricing_data.map((items, index) => (
                        <div key={items.id} className={`tab-pane ${activeTab === index ? "show active" : ""}`}>
                           <div className="row">
                              {items.price_details.map((item) => (
                                 <div key={item.id} className="col-lg-6 d-flex">
                                    <div className="pr-column w-100">
                                       <div className="pr-header text-center mb-25">
                                          <div className="plane-name">{item.title}</div>
                                          <div className="info1 fs-20">{item.desc}</div>
                                          <div className="save-line fs-20 fw-500">{item.offer}</div>
                                          <div className="price">{item.price}</div>
                                          <div className="info2 fs-20">{item.re_price}</div>
                                       </div>
                                       <Link href="#" className="btn-eleven w-100 d-flex justify-content-between align-items-center">Start Free Trial<span className="icon tran3s d-flex align-items-center justify-content-center"><i className="bi bi-chevron-right"></i></span></Link>
                                       <h6>Features</h6>
                                       <ul className="style-none package-feature">
                                          {item.list.map((list, i) => (
                                             <li key={i}>{list}</li>
                                          ))}
                                       </ul>
                                    </div>
                                 </div>
                              ))}
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

export default Pricing
