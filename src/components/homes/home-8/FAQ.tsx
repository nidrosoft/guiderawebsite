"use client";
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
      showAnswer: false,
      title: "What is piku?",
      desc: (<>Revolutionize customer support workflows with our help desk SaaS company, delivering seamless solutions for modern businesses.</>),
   },
   {
      id: 2,
      showAnswer: false,
      title: "How do I find different criteria in pricing",
      desc: (<>Revolutionize customer support workflows with our help desk SaaS company, delivering seamless solutions for modern businesses.</>),
   },
   {
      id: 3,
      showAnswer: false,
      title: "How does piku cost?",
      desc: (<>Revolutionize customer support workflows with our help desk SaaS company, delivering seamless solutions for modern businesses.</>),
   },
   {
      id: 4,
      showAnswer: false,
      title: "I have running plan, How can I change it?",
      desc: (<>Revolutionize customer support workflows with our help desk SaaS company, delivering seamless solutions for modern businesses.</>),
   },
]

const FAQ = () => {

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
      <div className="faq-section-three bg-fourteen position-relative pt-150 lg-pt-80 pb-150 lg-pb-80">
         <div className="container">
            <div className="title-ten text-center mb-75 lg-mb-30">
               <h2><span className="position-relative z-1">Questions<span className="line" style={{ background: "#FFC92E" }}></span></span> & Answers</h2>
            </div>
            <div className="row">
               <div className="col-lg-10 m-auto">
                  <div className="accordion accordion-style-four" id="accordionFour">
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
         </div>
      </div>
   )
}

export default FAQ
