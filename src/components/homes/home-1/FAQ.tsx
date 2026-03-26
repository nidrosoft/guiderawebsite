"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import shape_1 from "@/assets/images/shape/shape_05.svg"
import shape_2 from "@/assets/images/shape/shape_06.svg"

interface DataType {
   id: number;
   faq_details: {
      id: number,
      title: string;
      desc: JSX.Element;
      showAnswer: boolean;
   }[];
}

const faq_data: DataType[] = [
   {
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
            title: "How do I find different criteria in pricing?",
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
   {
      id: 2,
      faq_details: [
         {
            id: 4,
            showAnswer: false,
            title: "I have running plan, How can I change it?",
            desc: (<>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one.</>),
         },
         {
            id: 5,
            showAnswer: false,
            title: "How does piku cost?",
            desc: (<>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one.</>),
         },
         {
            id: 6,
            showAnswer: false,
            title: "Why I should choose piku?",
            desc: (<>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one.</>),
         },
      ],
   },
];

const FAQ = () => {
   const [faqData, setFaqData] = useState<DataType[]>([]);

   useEffect(() => {
      setFaqData(faq_data);
   }, []);

   const toggleAnswer = (faqId: number, detailId: number) => {
      setFaqData((prevFaqData) =>
         prevFaqData.map((faq) =>
            faq.id === faqId
               ? {
                  ...faq,
                  faq_details: faq.faq_details.map((detail) =>
                     detail.id === detailId
                        ? { ...detail, showAnswer: !detail.showAnswer }
                        : { ...detail, showAnswer: false }
                  ),
               }
               : faq
         )
      );
   };

   return (
      <div className="faq-section-one bg-four position-relative z-1 pt-150 lg-pt-80 pb-120 lg-pb-80 border-30 mb-30 lg-mb-20">
         <div className="container">
            <div className="row">
               <div className="col-lg-9 m-auto">
                  <div className="title-one text-center mb-80 xl-mb-60 md-mb-40">
                     <h2>Frequently Asked Questions</h2>
                  </div>
               </div>
            </div>

            <div className="row">
               {faqData.map((faq) => (
                  <div key={faq.id} className="col-lg-6">
                     <div className="accordion accordion-style-one">
                        {faq.faq_details.map((detail) => (
                           <div key={detail.id} className="accordion-item">
                              <h2 className="accordion-header">
                                 <button
                                    className={`accordion-button ${detail.showAnswer ? "" : "collapsed"}`}
                                    type="button"
                                    onClick={() => toggleAnswer(faq.id, detail.id)}
                                 >
                                    {detail.title}
                                 </button>
                              </h2>
                              {detail.showAnswer && (
                                 <div
                                    id={`collapse-${detail.id}`}
                                    className="accordion-collapse collapse show"
                                 >
                                    <div className="accordion-body">
                                       <p className="fs-22">{detail.desc}</p>
                                    </div>
                                 </div>
                              )}
                           </div>
                        ))}
                     </div>
                  </div>
               ))}
            </div>

            <div className="text-center mt-60 lg-mt-40">
               <h4 className="mb-35">Don’t find your answer?</h4>
               <Link href="/contact-v1" className="btn-two xl">
                  Contact us
               </Link>
            </div>
         </div>
         <Image src={shape_1} alt="" className="shapes shape_01" />
         <Image src={shape_2} alt="" className="shapes shape_02" />
      </div>
   );
};

export default FAQ;
