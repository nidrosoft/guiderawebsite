"use client"
import { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import shape from "@/assets/images/shape/shape_89.svg";

import project_1 from "@/assets/images/media/img_38.jpg"
import project_2 from "@/assets/images/media/img_39.jpg"
import project_3 from "@/assets/images/media/img_40.jpg"
import project_4 from "@/assets/images/media/img_41.jpg"
import project_5 from "@/assets/images/media/img_42.jpg"
import project_6 from "@/assets/images/media/img_43.jpg"

interface DataType {
   id: number;
   thumb: StaticImageData;
   category: string;
}

const project_data: DataType[] = [
   {
      id: 1,
      thumb: project_1,
      category: "application brand"
   },
   {
      id: 2,
      thumb: project_2,
      category: "design"
   },
   {
      id: 3,
      thumb: project_3,
      category: "marketing development"
   },
   {
      id: 4,
      thumb: project_4,
      category: "marketing brand"
   },
   {
      id: 5,
      thumb: project_5,
      category: "application development"
   },
   {
      id: 6,
      thumb: project_6,
      category: "design"
   },
];

const ProjectOneArea = () => {

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
      <>
         <div className="inner-banner-two bg-one border-30 z-1 pt-100 lg-pt-60 pb-90 lg-pb-50 mt-30 lg-mt-20 position-relative">
            <div className="container">
               <div className="title-one text-center">
                  <h2>Portfolio</h2>
               </div>

               <div className="filter-nav-one mt-50 lg-mt-30">
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
            <Image src={shape} alt="" className="shapes shape_01" />
         </div>

         <div className="project-section-two mt-30 lg-mt-20">
            <div id="isotop-gallery-wrapper" className="isotop-gallery-wrapper grid-2column">
               <div className="grid-sizer"></div>
               {project_data.map((item) => (
                  <div key={item.id} className={`isotop-item mb-30 ${item.category}`}>
                     <div className="project-block-two position-relative z-1">
                        <Image src={item.thumb} alt="" className="w-100 media-img tran3s" />
                        <Link href="/project-details" className="btn-one rounded-circle"><i className="bi bi-arrow-up-right"></i></Link>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </>
   )
}

export default ProjectOneArea
