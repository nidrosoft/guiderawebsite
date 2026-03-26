import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import shape_1 from "@/assets/images/shape/shape_08.svg"
import shape_2 from "@/assets/images/shape/shape_09.svg"
import shape_3 from "@/assets/images/shape/shape_86.svg"
import icon from "@/assets/images/icon/icon_07.svg"

interface DataType {
   id: number;
   title: string;
   desc: JSX.Element;
   shape?: StaticImageData;
}

const feature_data: DataType[] = [
   {
      id: 1,
      title: "Correct Verb",
      shape: shape_1,
      desc: (<>AI refines language, suggests, applies precise verbs for polished communication effortlessly.</>),
   },
   {
      id: 2,
      title: "Team & Collaboration",
      desc: (<>Boost teamwork with intuitive tools, real-time chat, and shared project dashboards for efficiency.</>),
   },
   {
      id: 3,
      title: "AI Assistant",
      desc: (<>Empower tasks with AI assistant, automate, optimize, and enhance productivity seamlessly.&quot;</>),
   },
   {
      id: 4,
      title: "Blog & Article",
      shape: shape_2,
      desc: (<>Revolutionize content creation, auto AI crafts engaging blogs and articles effortlessly.</>),
   },
   {
      id: 5,
      title: "Text Suggestion",
      shape: shape_3,
      desc: (<>AI refines language, suggests, applies precise verbs for polished communication effortlessly.</>),
   },
   {
      id: 6,
      title: "Search Engine",
      desc: (<>Boost teamwork with intuitive tools, real-time chat, and shared project dashboards for efficiency.</>),
   },
];

const ServiceArea = () => {
   return (
      <div className="block-feature-four pt-225 lg-pt-150">
         <div className="container">
            <div className="title-two text-center mb-100 xl-mb-70 lg-mb-50">
               <h2>Our Services</h2>
            </div>
            <div className="row gx-xl-5">
               {feature_data.map((item) => (
                  <div key={item.id} className="col-lg-6 d-flex mb-40 md-mb-20">
                     <div className="card-style-two tran3s w-100">
                        <div className="wrapper tran3s d-flex flex-column h-100 position-relative">
                           <div className="d-flex justify-content-between align-items-center mb-160 xl-mb-120 lg-mb-80 position-relative z-1">
                              <h3 className="tran3s">Correct Verb</h3>
                              {item.shape && <Image src={item.shape} alt="" className="shapes pointer" />}
                              <div className="icon tran3s rounded-circle d-flex align-items-center justify-content-center"><Image src={icon} alt="" /></div>
                           </div>
                           <p className="font-manrope tran3s mt-auto">{item.desc}</p>
                           <Link href="/" className="stretched-link"></Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default ServiceArea
