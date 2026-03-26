"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

interface DataType {
   id: number;
   title: string;
   desc: JSX.Element;
   showAnswer: boolean;
}

const faq_data: DataType[] = [
   {
      id: 1,
      showAnswer: false,
      title: "Is Guidera really free?",
      desc: (<>Yes! Our free tier includes AI trip planning, booking, real-time safety alerts, and cultural guides. You can plan up to 3 trips per month at no cost — no credit card required.</>),
   },
   {
      id: 2,
      showAnswer: false,
      title: "How does AI trip planning work?",
      desc: (<>Tell Guidera your destination, dates, interests, and budget. Our AI analyzes thousands of data points to generate a personalized day-by-day itinerary in seconds — not hours.</>),
   },
   {
      id: 3,
      showAnswer: false,
      title: "Is my data safe?",
      desc: (<>Absolutely. We use end-to-end encryption and are SOC 2 &amp; GDPR compliant. We never sell your data — your travel plans stay yours.</>),
   },
   {
      id: 4,
      showAnswer: false,
      title: "Can I use Guidera offline?",
      desc: (<>Premium users can download trips, maps, and translations for offline access. Perfect for remote destinations or international travel without reliable data.</>),
   },
   {
      id: 5,
      showAnswer: false,
      title: "What countries does Guidera support?",
      desc: (<>Guidera supports 190+ countries worldwide with localized safety data, cultural intelligence, and real-time alerts for each destination.</>),
   },
   {
      id: 6,
      showAnswer: false,
      title: "How accurate are the safety alerts?",
      desc: (<>Our safety data is aggregated from government sources, local reports, and community feedback — updated in real-time so you always have the latest information.</>),
   },
   {
      id: 7,
      showAnswer: false,
      title: "Can I share my trip with others?",
      desc: (<>Yes! Share your itinerary with travel companions for real-time collaboration. Everyone stays in sync with updates, bookings, and changes.</>),
   },
   {
      id: 8,
      showAnswer: false,
      title: "What if I cancel my subscription?",
      desc: (<>Cancel anytime — no questions asked. You&apos;ll keep access to all premium features until the end of your billing period. Your trip data is always yours to export.</>),
   },
];

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
      <div className="faq-section-three position-relative mt-150 lg-mt-80">
         <div className="container">
            <div className="row">
               <div className="col-lg-5">
                  <div className="title-four">
                     <div className="text-uppercase mb-10">FAQ</div>
                     <h2 className="fw-bold">Questions &amp; Answers</h2>
                  </div>
                  <p className="fs-22 text-dark pe-xxl-5 mt-40 md-mt-10 mb-40">Find your answers here. If you don&apos;t find it here, please contact us.</p>
                  <Link href="mailto:hello@guidera.app" className="btn-eleven">Contact us</Link>
               </div>
               <div className="col-lg-7">
                  <div className="accordion accordion-style-two p0 shadow-none ms-xl-4 md-mt-40" id="accordionGuidera">
                     {faqData.map((item) => (
                        <div key={item.id} className="accordion-item">
                           <h2 className="accordion-header">
                              <button
                                 className={`accordion-button ${item.showAnswer ? "" : "collapsed"}`}
                                 type="button"
                                 onClick={() => toggleAnswer(item.id)}
                              >
                                 {item.title}
                              </button>
                           </h2>
                           <div
                              className={`accordion-collapse collapse ${item.showAnswer ? "show" : ""}`}
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
   );
};

export default FAQ;
