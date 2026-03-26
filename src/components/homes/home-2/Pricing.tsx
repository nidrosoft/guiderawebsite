"use client"
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

import shape_1 from "@/assets/images/shape/shape_24.svg"

const nav_title: string[] = ["1", "2"];

const Pricing = () => {

   const [activeTab, setActiveTab] = useState(0);

   const handleTabClick = (index: number) => {
      setActiveTab(index);
   };

   return (
      <div className="pricing-section-one position-relative z-1 mt-150 lg-mt-80">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-xxl-9 col-xl-8 col-lg-6 m-auto text-center">
                  <div className="title-two mb-60 lg-mb-40">
                     <h2>All-inclusive great options pick your Plan</h2>
                  </div>
               </div>
            </div>

            <div className="pr-table-one">
               <nav className="pricing-nav-three d-flex justify-content-center">
                  <div className="nav nav-tabs justify-content-between" role="tablist">
                     {nav_title.map((item, index) => (
                        <a style={{ cursor: "pointer" }} key={index} onClick={() => handleTabClick(index)} className={`nav-link ${activeTab === index ? "active" : ""}`}></a>
                     ))}
                  </div>
               </nav>

               <div className="bg-wrapper position-relative mt-60 lg-mt-40">
                  <Image src={shape_1} alt="" className="shapes shape_03" />
                  <div className="tab-content">
                     <div className="tab-pane show active">
                        <div className="main-bg d-flex flex-wrap justify-content-end position-relative">
                           <div className="left-panel d-none d-xl-block">
                              <ul className="style-none">
                                 <li>
                                    <strong>Core Functionality</strong>
                                    <span>Ai copilot Assistant</span>
                                    <span>2 seats </span>
                                    <span>Unlimited Storage</span>
                                 </li>
                                 <li>
                                    <strong>Extension & Integration</strong>
                                    <span>API integration</span>
                                    <span>SEO</span>
                                    <span>Browser Extension</span>
                                    <span>API Access</span>
                                    <span>SSL</span>
                                 </li>
                                 <li>Data Security</li>
                                 <li>Onboarding & Support</li>
                              </ul>
                           </div>

                           <div className="pr-column-wrapper">
                              <div className="pr-header text-center">
                                 <div className="plan text-uppercase">FREE</div>
                                 <strong className="price fw-500">0</strong>
                                 <p>Get Piku tailored for your </p>
                              </div>
                              <ul className="style-none text-center">
                                 <li>
                                    <span>Core Functionality</span>
                                    <div className="icon"><i className="fa-sharp fa-regular fa-xmark"></i></div>
                                 </li>
                                 <li>
                                    <span>Extension & Integration</span>
                                    <div className="icon"><i className="fa-sharp fa-regular fa-xmark"></i></div>
                                 </li>
                                 <li>
                                    <span>Data Security</span>
                                    <div className="icon"><i className="fa-sharp fa-regular fa-check"></i></div>
                                 </li>
                                 <li>
                                    <span>Onboarding & Support</span>
                                    <div className="icon"><i className="fa-sharp fa-regular fa-check"></i></div>
                                 </li>
                              </ul>
                              <div className="pr-footer text-center">
                                 <a href="#" className="btn-three">Active</a>
                              </div>
                           </div>
                           <div className="pr-column-wrapper">
                              <div className="pr-header text-center">
                                 <div className="plan text-uppercase">Pro</div>
                                 <strong className="price fw-500">${activeTab === 0 ? "89" : "289"}</strong>
                                 <p>Save ~20% when billed yearly</p>
                              </div>
                              <ul className="style-none text-center">
                                 <li>
                                    <span>Core Functionality</span>
                                    <div className="icon"><i className="fa-sharp fa-regular fa-xmark"></i></div>
                                 </li>
                                 <li>
                                    <span>Extension & Integration</span>
                                    <div className="icon"><i className="fa-sharp fa-regular fa-check"></i></div>
                                 </li>
                                 <li>
                                    <span>Data Security</span>
                                    <div className="icon"><i className="fa-sharp fa-regular fa-check"></i></div>
                                 </li>
                                 <li>
                                    <span>Onboarding & Support</span>
                                    <div className="icon"><i className="fa-sharp fa-regular fa-check"></i></div>
                                 </li>
                              </ul>
                              <div className="pr-footer text-center">
                                 <Link href="/" className="btn-four">Start Free Trial</Link>
                              </div>
                           </div>
                           <div className="pr-column-wrapper">
                              <div className="pr-header text-center">
                                 <div className="plan text-uppercase">Creator</div>
                                 <strong className="price fw-500">${activeTab === 0 ? "147" : "647"}</strong>
                                 <p>Save ~20% when billed yearly</p>
                              </div>
                              <ul className="style-none text-center">
                                 <li>
                                    <span>Core Functionality</span>
                                    <div className="icon"><i className="fa-sharp fa-regular fa-check"></i></div>
                                 </li>
                                 <li>
                                    <span>Extension & Integration</span>
                                    <div className="icon"><i className="fa-sharp fa-regular fa-check"></i></div>
                                 </li>
                                 <li>
                                    <span>Data Security</span>
                                    <div className="icon"><i className="fa-sharp fa-regular fa-check"></i></div>
                                 </li>
                                 <li>
                                    <span>Onboarding & Support</span>
                                    <div className="icon"><i className="fa-sharp fa-regular fa-check"></i></div>
                                 </li>
                              </ul>
                              <div className="pr-footer text-center">
                                 <Link href="#" className="btn-four">Start Free Trial</Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Pricing
