"use client"
import Count from "@/components/common/Count";
import VideoPopup from "@/modals/VideoPopup";
import { useEffect, useState } from "react";

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

const BlockFeatureThree = () => {

   const [isVideoOpen, setIsVideoOpen] = useState(false);
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
      <>
         <div className="block-feature-thirtyOne bg-one border-30 z-1 pt-120 lg-pt-80 pb-130 lg-pb-80 mb-30 lg-mb-20 position-relative">
            <div className="container">
               <div className="row">
                  <div className="col-lg-6">
                     <div className="title-one">
                        <h2>Learn more about us.</h2>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="accordion accordion-style-five ms-xxl-5 md-mt-50" id="accordionThree">
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

               <div className="video-banner d-flex align-items-center justify-content-center mt-100 lg-mt-60">
                  <a onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer" }} className="video-btn tran3s rounded-circle d-flex align-items-center justify-content-center" data-fancybox=""
                  ><i className="fa-sharp fa-solid fa-play"></i></a>
               </div>


               <div className="counter-wrapper mt-70 lg-mt-40">
                  <div className="row justify-content-between">
                     <div className="col-xl-4 col-lg-4">
                        <div className="counter-block-one text-center text-lg-start mt-20">
                           <div className="main-count fw-500 color-dark">$<span className="counter"> <Count number={9.1} /> </span>B+</div>
                           <span className="fs-22">Coverage</span>
                        </div>
                     </div>
                     <div className="col-xl-4 col-lg-4">
                        <div className="counter-block-one text-center mt-20">
                           <div className="main-count fw-500 color-dark"><span className="counter"> <Count number={20} /></span>+</div>
                           <span className="fs-22">Years Experience</span>
                        </div>
                     </div>
                     <div className="col-xl-2 col-lg-3 ms-auto">
                        <div className="counter-block-one text-center text-lg-start mt-20">
                           <div className="main-count fw-500 color-dark"><span className="counter"> <Count number={1.2} /></span>M</div>
                           <span className="fs-22">Low interest rate</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* video modal start */}
         <VideoPopup
            isVideoOpen={isVideoOpen}
            setIsVideoOpen={setIsVideoOpen}
            videoId={"tUP5S4YdEJo"}
         />
         {/* video modal end */}
      </>
   )
}

export default BlockFeatureThree
