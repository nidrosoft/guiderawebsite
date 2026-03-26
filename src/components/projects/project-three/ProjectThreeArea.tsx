import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import project_thumb1 from "@/assets/images/media/img_16.png"
import project_thumb2 from "@/assets/images/media/img_17.png"
import project_thumb3 from "@/assets/images/media/img_18.png"
import project_thumb4 from "@/assets/images/media/img_50.jpg"
import project_thumb5 from "@/assets/images/media/img_51.png"

interface DataType {
   id: number;
   count: string;
   title: string;
   desc: JSX.Element;
   tags: string[];
   thumb: StaticImageData;
   bg_color: string;
   class:string;
}

const project_data: DataType[] = [
   {
      id: 1,
      count: "01",
      title: "Mobile app UI & Branding",
      desc: (<>Successful companies through collaborative efforts and strategic implementation.</>),
      tags: ["Mobile app", "UI/UX", "BRANDING"],
      thumb: project_thumb1,
      bg_color: "#45F08D",
      class:"image-meta w-100",
   },
   {
      id: 2,
      count: "02",
      title: "TASK & PROJECT DASHBOARD",
      desc: (<>Lorem ipsum dolor sit amet. Ut omnis nisi nam modi ipsum aut blanditiis omnis</>),
      tags: ["CRM", "DASHBOARD", "UI", "Management"],
      thumb: project_thumb2,
      bg_color: "#FFE073",
      class:"image-meta d-flex align-items-end justify-content-end w-100",
   },
   {
      id: 3,
      count: "03",
      title: "Finance & Banking Application",
      desc: (<>At saepe commodi a sunt quaerat est impedit qui ullam delectus et consequatur</>),
      tags: ["Mobile app", "FINANCE"],
      thumb: project_thumb3,
      bg_color: "#FF92DF",
      class:"image-meta d-flex align-items-end justify-content-center w-100",
   },
   {
      id: 4,
      count: "04",
      title: "Mockup - MacBook Pro m1",
      desc: (<>At saepe commodi a sunt quaerat est impedit qui ullam delectus et consequatur</>),
      tags: ["Mobile app", "FINANCE"],
      thumb: project_thumb4,
      bg_color: "#000",
      class:"image-meta d-flex align-items-end justify-content-center w-100",
   },
   {
      id: 5,
      count: "05",
      title: "Poster — Product Branding",
      desc: (<>At saepe commodi a sunt quaerat est impedit qui ullam delectus et consequatur</>),
      tags: ["CRM", "DASHBOARD", "Management"],
      thumb: project_thumb5,
      bg_color: "#BCA5FF",
      class:"image-meta d-flex align-items-center justify-content-center w-100",
   },
];

const ProjectThreeArea = () => {
   return (
      <div className="project-section-one mt-200 xl-mt-150">
         <div className="container xl">
            <div className="position-relative">
               <div className="title-three text-center pb-50 lg-pb-10">
                  <h2>Latest Work</h2>
               </div>
               {project_data.map((item) => (
                  <div key={item.id} className="project-block-one overflow-hidden mt-60 sm-mt-40">
                     <div className="row gx-0">
                        <div className="col-lg-6 d-flex">
                           <div className="text-meta w-100">
                              <div className="num font-Montserrat">{item.count}</div>
                              <Link href="/" className="title text-uppercase fw-500">{item.title}</Link>
                              <p className="fs-28 text-dark">{item.desc}</p>
                              <Link href="/" className="arow-icon"><i className="fa-light fa-arrow-up-right"></i></Link>
                              <ul className="style-none d-flex flex-wrap">
                                 {item.tags.map((tag, i) => (
                                    <li key={i}><Link href="/">{tag}</Link></li>
                                 ))}
                              </ul>
                           </div>
                        </div>
                        <div className="col-lg-6 d-flex">
                           <div className={item.class} style={{ background: item.bg_color }}>
                              <Image src={item.thumb} alt="" className="" />
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

export default ProjectThreeArea
