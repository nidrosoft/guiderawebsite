"use client"
import Count from "@/components/common/Count";
import Image from "next/image";
import { useEffect, useState } from "react";

import img from "@/assets/images/media/img_33.jpg"

interface DataType {
   id: number,
   title: string;
   desc: JSX.Element;
   showAnswer: boolean;
}

const faq_data: DataType[] = [
   {
      id: 1,
      showAnswer: true,
      title: "Who we are?",
      desc: (<>Our founders Dustin Moskovitz and Justin Rosenstein met while leading Engineering .</>),
   },
   {
      id: 2,
      showAnswer: false,
      title: "What’s our goal",
      desc: (<>Our founders Dustin Moskovitz and Justin Rosenstein met while leading Engineering .</>),
   },
   {
      id: 3,
      showAnswer: false,
      title: "Our vision",
      desc: (<>Our founders Dustin Moskovitz and Justin Rosenstein met while leading Engineering .</>),
   },
]

const BlockFeature = () => {

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
      <div className="block-feature-twentyEight mt-180 xl-mt-150 lg-mt-80">
         <div className="container">
            <div className="block-feature">
               <div className="row">
                  <div className="col-lg-6 order-lg-last ms-auto">
                     <div className="title-ten pe-xxl-5">
                        <div className="fs-22 text-dark mb-15">About us</div>
                        <h2>Best Agency for success in business. </h2>
                     </div>
                     <div className="accordion accordion-style-five mt-50 md-mt-20" id="accordionThree">
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
                  <div className="col-lg-5 col-md-8 m-auto m-lg-0">
                     <div className="img-box position-relative z-1 md-mt-40">
                        <Image src={img} alt="" />
                     </div>
                  </div>
               </div>
            </div>


            <div className="counter-wrapper mt-70 lg-mt-40">
               <div className="row justify-content-between">
                  <div className="col-xl-4 col-lg-4">
                     <div className="counter-block-one text-center text-lg-start mt-20">
                        <div className="main-count fw-500 color-dark"><span className="counter"> <Count number={9.1} /></span>B+</div>
                        <span className="fs-22">Coverage</span>
                     </div>
                  </div>
                  <div className="col-xl-4 col-lg-4">
                     <div className="counter-block-one text-center mt-20">
                        <div className="main-count fw-500 color-dark"><span className="counter"><Count number={20} /></span>+</div>
                        <span className="fs-22">Years Experience</span>
                     </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 ms-auto">
                     <div className="counter-block-one text-center text-lg-start mt-20">
                        <div className="main-count fw-500 color-dark"><span className="counter"><Count number={1.2} /></span>M</div>
                        <span className="fs-22">Low interest rate</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BlockFeature
