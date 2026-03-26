"use client"
import { useEffect, useState } from "react";
import Image from "next/image";

import faq_shape_1 from "@/assets/images/shape/shape_28.svg"
import shape_1 from "@/assets/images/shape/shape_25.svg"
import shape_2 from "@/assets/images/shape/shape_26.svg"
import shape_3 from "@/assets/images/shape/shape_27.svg"

interface ContentType {
   id: number;
   margin?: string;
   content_details: {
      btn: JSX.Element;
      title: string;
   };
   faq_area: {
      id: 1,
      faq_details: {
         id: number,
         title: string;
         desc: JSX.Element;
         showAnswer: boolean;
      }[];
   }
}

const faq_data: ContentType[] = [
   {
      id: 1,
      content_details: {
         btn: (<><div className="pointer" style={{ background: "#FFCE52" }}>Account <Image src={shape_1} alt="" /></div></>),
         title: "Questions & Answers",
      },
      faq_area: {
         id: 1,
         faq_details: [
            {
               id: 1,
               showAnswer: false,
               title: "What is piku?",
               desc: (<>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one.</>),
            },
            {
               id: 2,
               showAnswer: false,
               title: "Why I should choose piku?",
               desc: (<>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one.</>),
            },
            {
               id: 3,
               showAnswer: false,
               title: "How does piku cost?",
               desc: (<>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one.</>),
            },
         ],
      },
   },
   {
      id: 2,
      margin: "mt-90 lg-mt-60",
      content_details: {
         btn: (<><div className="pointer" style={{ background: "#FF4BD8" }}>Financial <Image src={shape_2} alt="" /></div></>),
         title: "Pricing plan, Billing",
      },
      faq_area: {
         id: 1,
         faq_details: [
            {
               id: 1,
               showAnswer: false,
               title: "Do you have any free trials?",
               desc: (<>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one.</>),
            },
            {
               id: 2,
               showAnswer: false,
               title: "How do I find different criteria in pricing?",
               desc: (<>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one.</>),
            },
            {
               id: 3,
               showAnswer: false,
               title: "What can I use to build my website?",
               desc: (<>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one.</>),
            },
            {
               id: 4,
               showAnswer: false,
               title: "I have running plan, How can I change it?",
               desc: (<>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one.</>),
            },
            {
               id: 5,
               showAnswer: false,
               title: "Which payment method works?",
               desc: (<>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one.</>),
            },
         ],
      }
   },
   {
      id: 3,
      margin: "mt-90 lg-mt-60",
      content_details: {
         btn: (<><div className="pointer" style={{ background: "#00D9B2" }}>Common <Image src={shape_3} alt="" /></div></>),
         title: "Questions & Answers",
      },
      faq_area: {
         id: 1,
         faq_details: [
            {
               id: 1,
               showAnswer: false,
               title: "Which product do you offer?",
               desc: (<>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one.</>),
            },
            {
               id: 2,
               showAnswer: false,
               title: "Is my Identity safe?",
               desc: (<>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one.</>),
            },
            {
               id: 3,
               showAnswer: false,
               title: "Is piku offer expert support?",
               desc: (<>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one.</>),
            },
         ],
      }
   },
]

const FAQ = () => {
   const [faqData, setFaqData] = useState<ContentType[]>([]);

   useEffect(() => {
      setFaqData(faq_data);
   }, []);

   const toggleAnswer = (faqId: number, detailId: number) => {
      setFaqData((prevFaqData) =>
         prevFaqData.map((faq) =>
            faq.id === faqId
               ? {
                  ...faq,
                  faq_area: {
                     ...faq.faq_area,
                     faq_details: faq.faq_area.faq_details.map((detail) =>
                        detail.id === detailId
                           ? { ...detail, showAnswer: !detail.showAnswer }
                           : { ...detail, showAnswer: false }
                     ),
                  },
               }
               : faq
         )
      );
   };

   return (
      <div className="faq-section-two position-relative mt-250 xl-mt-200 lg-mt-80 mb-200 xl-mb-150 lg-mb-80">
         <div className="container">
            {faqData.map((faq) => (
               <div key={faq.id} className={`row ${faq.margin || ""}`}>
                  <div className="col-lg-5">
                     <div className="title-two mb-40">
                        {faq.content_details.btn}
                        <h2>{faq.content_details.title}</h2>
                     </div>
                  </div>
                  <div className="col-lg-7">
                     <div className="accordion accordion-style-two ms-xxl-4">
                        {faq.faq_area.faq_details.map((detail) => (
                           <div key={detail.id} className="accordion-item">
                              <h2 className="accordion-header">
                                 <button
                                    className={`accordion-button ${detail.showAnswer ? "" : "collapsed"
                                       }`}
                                    type="button"
                                    onClick={() => toggleAnswer(faq.id, detail.id)}
                                 >
                                    {detail.title}
                                 </button>
                              </h2>
                              {detail.showAnswer && (
                                 <div
                                    id={`collapse-${faq.id}-${detail.id}`}
                                    className="accordion-collapse collapse show"
                                 >
                                    <div className="accordion-body">
                                       {detail.desc}
                                    </div>
                                 </div>
                              )}
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            ))}
         </div>
         <Image src={faq_shape_1} alt="" className="shapes shape_01" />
      </div>
   );
};

export default FAQ;
