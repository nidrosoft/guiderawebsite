"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import React, { useState, useEffect } from "react";

import project_thumb1 from "@/assets/images/media/img_61.jpg";
import project_thumb2 from "@/assets/images/media/img_62.jpg";
import project_thumb3 from "@/assets/images/media/img_63.jpg";
import project_thumb4 from "@/assets/images/media/img_64.jpg";
import project_thumb5 from "@/assets/images/media/img_65.jpg";
import project_thumb6 from "@/assets/images/media/img_66.jpg";
import icon from "@/assets/images/icon/icon_93.svg";

interface DataType {
   id: number;
   thumb: StaticImageData;
   tags: string[];
   title: string;
   category: string;
}

const project_data: DataType[] = [
   { id: 1, thumb: project_thumb1, tags: ["PRINT", "DESIGN"], title: "Poster — Product Branding", category: "application brand" },
   { id: 2, thumb: project_thumb2, tags: ["Mobile", "UI/UX"], title: "UI — Banner Exploration", category: "design" },
   { id: 3, thumb: project_thumb3, tags: ["Branding", "UI/UX"], title: "Mockup — Calendar Design", category: "marketing development" },
   { id: 4, thumb: project_thumb4, tags: ["BANNER", "WEB DESIGN"], title: "Poster — Product Branding", category: "marketing brand" },
   { id: 5, thumb: project_thumb5, tags: ["Mobile", "UI/UX"], title: "App — The power of communication", category: "application development" },
   { id: 6, thumb: project_thumb6, tags: ["PRINT", "DESIGN"], title: "Mockup — Calendar Design", category: "design" },
];

const ProjectFiveArea = () => {
   const [isMounted, setIsMounted] = useState(false);

   useEffect(() => {
      setIsMounted(true);
   }, []);

   return (
      <div className="project-section-five responsive-masonry mt-80 lg-mt-40">
         <div className="container">
            {isMounted && (
               <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2, 1200: 2 }}>
                  <Masonry columnsCount={2} gutter="30px" className="isotop-gallery-wrapper grid-2column xl">
                     <div className="grid-sizer"></div>
                     {project_data.map((item) => (
                        <div key={item.id} className={`isotop-item mt-80 lg-mt-40 ${item.category}`}>
                           <div className="project-block-three position-relative z-1">
                              <Image src={item.thumb} alt={item.title} className="w-100 media-img tran3s" />
                              <div className="position-relative d-flex justify-content-between align-items-start pt-35">
                                 <div className="pe-3">
                                    <ul className="style-none d-flex">
                                       {item.tags.map((tag, i) => (
                                          <li key={i}>{tag}</li>
                                       ))}
                                    </ul>
                                    <h6>{item.title}</h6>
                                 </div>
                                 <Image src={icon} alt="icon" className="mt-2 ms-auto" />
                                 <Link href="/project-details" className="stretched-link"></Link>
                              </div>
                           </div>
                        </div>
                     ))}
                  </Masonry>
               </ResponsiveMasonry>
            )}
         </div>
      </div>
   );
};

export default ProjectFiveArea;
