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
      desc: (<>Guidera Free includes one active trip, one AI Trip Snapshot, one Journey Briefing, and five AI Chat messages as lifetime allowances. Travel search and core emergency contacts remain available without purchasing travel through Guidera.</>),
   },
   {
      id: 2,
      showAnswer: false,
      title: "How does AI trip planning work?",
      desc: (<>Tell Guidera your destination, dates, interests, and budget to request a personalized itinerary draft. AI output may be inaccurate or outdated, so verify important details with primary sources.</>),
   },
   {
      id: 3,
      showAnswer: false,
      title: "Is my data safe?",
      desc: (<>We use encrypted transport, access controls, row-level authorization, restricted server credentials, and monitoring designed to protect data. No system is completely secure. See our Privacy Policy for the data and providers involved.</>),
   },
   {
      id: 4,
      showAnswer: false,
      title: "Can I use Guidera offline?",
      desc: (<>Guidera currently depends on network access for many AI, map, search, and synchronization features. Do not rely on it as your only copy of critical documents or emergency information.</>),
   },
   {
      id: 5,
      showAnswer: false,
      title: "What countries does Guidera support?",
      desc: (<>Coverage depends on the destination and the availability of AI, map, government, community, and travel-provider sources. Confirm important local information with official sources.</>),
   },
   {
      id: 6,
      showAnswer: false,
      title: "How accurate are the safety alerts?",
      desc: (<>Safety information can combine provider, government, community, and AI-assisted context. It may be delayed, incomplete, or wrong. Guidera is not an emergency-response service; contact local emergency services when needed.</>),
   },
   {
      id: 7,
      showAnswer: false,
      title: "Can I share my trip with others?",
      desc: (<>Eligible users can share and collaborate on Guidera trip information. Travel purchases remain with external providers and are not managed by the collaboration feature.</>),
   },
   {
      id: 8,
      showAnswer: false,
      title: "What if I cancel my subscription?",
      desc: (<>Manage or cancel Guidera Pro through your Apple Account settings. Access normally continues through the paid period, subject to Apple&apos;s subscription status. Account deletion does not cancel the subscription.</>),
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
                  <Link href="mailto:hello@guidera.one" className="btn-eleven">Contact us</Link>
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
