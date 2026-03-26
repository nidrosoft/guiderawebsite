"use client"
import { useEffect, useState } from "react";
import Image from "next/image";

import img_1 from "@/assets/images/assets/card_01.png"
import img_2 from "@/assets/images/assets/card_02.png"
import img_3 from "@/assets/images/assets/card_03.png"
import img_4 from "@/assets/images/shape/shape_02.svg"

interface DataType {
   id: number;
   title: string;
   desc: JSX.Element;
   showAnswer: boolean;
}

const faq_data: DataType[] = [
   {
      id: 1,
      showAnswer: true,
      title: "Multi-Currency Card",
      desc: (<>Our founders Dustin Moskovitz and Justin Rosenstein met while leading Engineering .</>),
   },
   {
      id: 2,
      showAnswer: false,
      title: "FDA Approved Agency",
      desc: (<>Our founders Dustin Moskovitz and Justin Rosenstein met while leading Engineering .</>),
   },
   {
      id: 3,
      showAnswer: false,
      title: " 24/7 Support",
      desc: (<>Our founders Dustin Moskovitz and Justin Rosenstein met while leading Engineering .</>),
   },
];

const Faq = () => {

   const [faqData, setFaqData] = useState<DataType[]>([]);

   useEffect(() => {
      setFaqData(faq_data);
   }, []);

   const toggleAnswer = (faqId: number) => {
      setFaqData((prevFaqData) =>
         prevFaqData.map((faq) =>
            faq.id === faqId
               ? { ...faq, showAnswer: !faq.showAnswer }
               : { ...faq, showAnswer: false }
         )
      );
   };

   return (
      <div className="block-feature-one border-30 bg-one mb-30 lg-mb-20 pt-150 lg-pt-80 pb-200">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-xxl-7 col-lg-6">
                  <div className="pe-lg-5 me-xxl-4 md-mb-60">
                     <div className="title-one">
                        <h2>Why we’re the perfect fit for you.</h2>
                     </div>
                     <div className="accordion accordion-style-five me-xxl-5 mt-35 lg-mt-30" id="accordionThree">
                        {faqData.map((item) => (
                           <div key={item.id} className="accordion-item">
                              <h2 className="accordion-header">
                                 <button
                                    className={`accordion-button ${item.showAnswer ? "" : "collapsed"
                                       }`}
                                    type="button"
                                    onClick={() => toggleAnswer(item.id)}
                                 >
                                    {item.title}
                                 </button>
                              </h2>
                              <div
                                 className={`accordion-collapse collapse ${item.showAnswer ? "show" : ""
                                    }`}
                              >
                                 <div className="accordion-body">
                                    <p className="fs-22">{item.desc}</p>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
               <div className="col-xxl-5 col-lg-6 col-md-7 m-auto text-end">
                  <div className="img-holder z-1 d-inline-block position-relative">
                     <Image src={img_1} alt="" />
                     <Image src={img_2} alt="" className="card_01" />
                     <Image src={img_3} alt="" className="card_02" />
                     <Image src={img_4} alt="" className="shapes shape_01" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Faq
