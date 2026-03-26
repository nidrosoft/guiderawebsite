"use client"
import { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import project_thumb1 from "@/assets/images/media/img_52.jpg"
import project_thumb2 from "@/assets/images/media/img_53.jpg"
import project_thumb3 from "@/assets/images/media/img_54.jpg"
import project_thumb4 from "@/assets/images/media/img_55.jpg"
import project_thumb5 from "@/assets/images/media/img_56.jpg"
import project_thumb6 from "@/assets/images/media/img_57.jpg"
import project_thumb7 from "@/assets/images/media/img_58.jpg"
import project_thumb8 from "@/assets/images/media/img_59.jpg"
import project_thumb9 from "@/assets/images/media/img_60.jpg"

interface DataType {
   id: number,
   thumb: StaticImageData;
   category: string;
}

const project_data: DataType[] = [
   {
      id: 1,
      thumb: project_thumb1,
      category: "application brand",
   },
   {
      id: 2,
      thumb: project_thumb2,
      category: "design",
   },
   {
      id: 3,
      thumb: project_thumb3,
      category: "marketing development"
   },
   {
      id: 4,
      thumb: project_thumb4,
      category: "marketing brand"
   },
   {
      id: 5,
      thumb: project_thumb5,
      category: "application development"
   },
   {
      id: 6,
      thumb: project_thumb6,
      category: "design"
   },
   {
      id: 7,
      thumb: project_thumb7,
      category: "marketing brand"
   },
   {
      id: 8,
      thumb: project_thumb8,
      category: "application development"
   },
   {
      id: 9,
      thumb: project_thumb9,
      category: "design"
   },
];

const ProjectFourArea = () => {

   const isotope = useRef<Isotope | null>(null);
   const [filterKey, setFilterKey] = useState("*");

   useEffect(() => {
      if (typeof window !== "undefined") {
         isotope.current = new Isotope(".isotop-gallery-wrapper", {
            itemSelector: ".isotop-item",
            layoutMode: "fitRows",
         });

         // Cleanup
         return () => {
            isotope.current?.destroy();
         };
      }
   }, []);

   // Handling filter key change
   useEffect(() => {
      if (filterKey === "*") isotope.current?.arrange?.({ filter: "*" });
      else isotope.current?.arrange?.({ filter: `.${filterKey}` });
   }, [filterKey]);

   const [selectedFilter, setSelectedFilter] = useState("*");

   const handleFilterKeyChange = (key: string) => () => {
      setFilterKey(key);
      setSelectedFilter(key);
   };

   return (
      <div className="project-section-four mt-110 lg-mt-80">
         <div className="container">
            <div className="filter-nav-three">
               <ul className="style-none d-flex justify-content-center flex-wrap isotop-menu-wrapper">
                  <li className={selectedFilter === "*" ? "is-checked" : ""} onClick={handleFilterKeyChange("*")}>All</li>
                  <li className={selectedFilter === "marketing" ? "is-checked" : ""} onClick={handleFilterKeyChange("marketing")}>Marketing</li>
                  <li className={selectedFilter === "application" ? "is-checked" : ""} onClick={handleFilterKeyChange("application")}>Application</li>
                  <li className={selectedFilter === "design" ? "is-checked" : ""} onClick={handleFilterKeyChange("design")}>Design</li>
                  <li className={selectedFilter === "development" ? "is-checked" : ""} onClick={handleFilterKeyChange("development")}>Development</li>
                  <li className={selectedFilter === "brand" ? "is-checked" : ""} onClick={handleFilterKeyChange("brand")}>Branding</li>
               </ul>
            </div>
         </div>

         <div className="gap-40 mt-60 lg-mt-40">
            <div id="isotop-gallery-wrapper" className="isotop-gallery-wrapper grid-3column">
               <div className="grid-sizer"></div>
               {project_data.map((item) => (
                  <div key={item.id} className={`isotop-item ${item.category} mb-40 lg-mb-20`}>
                     <div className="project-block-four position-relative z-1">
                        <Image src={item.thumb} alt="" className="w-100 media-img tran3s" />
                        <Link href="/" className="btn-round"><i className="bi bi-arrow-up-right"></i></Link>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default ProjectFourArea
