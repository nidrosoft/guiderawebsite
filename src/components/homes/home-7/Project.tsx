import Image, { StaticImageData } from "next/image";

import thumb_1 from "@/assets/images/media/img_16.png"
import thumb_2 from "@/assets/images/media/img_17.png"
import thumb_3 from "@/assets/images/media/img_18.png"
import Link from "next/link";

interface DataType {
   id: number,
   count: string;
   title: JSX.Element;
   desc: JSX.Element;
   btn: string[];
   thumb: StaticImageData;
   class: string;
   bg: string;
}

const project_data: DataType[] = [
   {
      id: 1,
      count: "01",
      title: (<>Mobile app UI & Branding</>),
      desc: (<>Successful companies through collaborative efforts and strategic implementation.</>),
      btn: ["Mobile app", "UI/UX", "BRANDING"],
      thumb: thumb_1,
      class: "lg-mt-20",
      bg: "#45F08D",
   },
   {
      id: 2,
      count: "02",
      title: (<>TASK & PROJECT DASHBOARD</>),
      desc: (<>Lorem ipsum dolor sit amet. Ut omnis nisi nam modi ipsum aut blanditiis omnis</>),
      btn: ["Management", "UI", "DASHBOARD", "CRM"],
      thumb: thumb_2,
      class: "sm-mt-40",
      bg: "#FFE073",
   },
   {
      id: 3,
      count: "03",
      title: (<>Finance & Banking Application</>),
      desc: (<>At saepe commodi a sunt quaerat est impedit qui ullam delectus et consequatur</>),
      btn: ["FINANCE", "Mobile app"],
      thumb: thumb_3,
      class: "sm-mt-40",
      bg: "#FF92DF",
   },
];

const Project = () => {
   return (
      <div className="project-section-one mt-180 lg-mt-80">
         <div className="container xl">
            <div className="position-relative">
               <div className="title-three pb-10">
                  <h2>Latest Work</h2>
               </div>
               {project_data.map((item) => (
                  <div key={item.id} className={`project-block-one overflow-hidden mt-60 ${item.class}`}>
                     <div className="row gx-0">
                        <div className="col-lg-6 d-flex">
                           <div className="text-meta w-100">
                              <div className="num font-Montserrat">{item.count}</div>
                              <Link href="/project-details" className="title text-uppercase fw-500">{item.title}</Link>
                              <p className="fs-28 text-dark">{item.desc}</p>
                              <Link href="/project-details" className="arow-icon"><i className="fa-light fa-arrow-up-right"></i></Link>
                              <ul className="style-none d-flex flex-wrap">
                                 {item.btn.map((btn, i) => (
                                    <li key={i}><Link href="/project-details">{btn}</Link></li>
                                 ))}
                              </ul>
                           </div>
                        </div>
                        <div className="col-lg-6 d-flex">
                           <div className="image-meta w-100" style={{ background: item.bg }}>
                              <Image src={item.thumb} alt="" className="ms-auto" />
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Project
