"use client"
import { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import project_thumb1 from "@/assets/images/media/img_44.jpg"
import project_thumb2 from "@/assets/images/media/img_45.jpg"
import project_thumb3 from "@/assets/images/media/img_46.jpg"
import project_thumb4 from "@/assets/images/media/img_47.jpg"
import project_thumb5 from "@/assets/images/media/img_48.jpg"
import project_thumb6 from "@/assets/images/media/img_49.jpg"
import icon from "@/assets/images/icon/icon_93.svg"

interface DataType {
   id: number;
   thumb: StaticImageData;
   title: string;
   tag: string;
   category: string;
}

const project_data: DataType[] = [
   {
      id: 1,
      thumb: project_thumb1,
      title: "App — The power of communication",
      tag: "Application",
      category: "application brand"
   },
   {
      id: 2,
      thumb: project_thumb2,
      title: "UI/UX — Case Studies & Branding",
      tag: "UI/UX",
      category: "design"
   },
   {
      id: 3,
      thumb: project_thumb3,
      title: "UI — Banner Exploration",
      tag: "Website",
      category: "marketing development"
   },
   {
      id: 4,
      thumb: project_thumb4,
      title: "Mockup — Calendar Design",
      tag: "Print Design",
      category: "marketing brand"
   },
   {
      id: 5,
      thumb: project_thumb5,
      title: "Poster — Product Branding",
      tag: "Branding",
      category: "application development"
   },
   {
      id: 6,
      thumb: project_thumb6,
      title: "Print — Calendar Design",
      tag: "Print Design",
      category: "design"
   },
];

const ProjectTwoArea = () => {

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
      <div className="project-section-three pt-225 lg-pt-150 mb-150 lg-mb-80">
         <div className="container">
            <div className="title-two text-center mb-55 lg-mb-30">
               <h2>Our Projects</h2>
            </div>

            <div className="filter-nav-two">
               <ul className="style-none d-flex justify-content-center flex-wrap isotop-menu-wrapper">
                  <li className={selectedFilter === "*" ? "is-checked" : ""} onClick={handleFilterKeyChange("*")}>All</li>
                  <li className={selectedFilter === "marketing" ? "is-checked" : ""} onClick={handleFilterKeyChange("marketing")}>Marketing</li>
                  <li className={selectedFilter === "application" ? "is-checked" : ""} onClick={handleFilterKeyChange("application")}>Application</li>
                  <li className={selectedFilter === "design" ? "is-checked" : ""} onClick={handleFilterKeyChange("design")}>Design</li>
                  <li className={selectedFilter === "development" ? "is-checked" : ""} onClick={handleFilterKeyChange("development")}>Development</li>
                  <li className={selectedFilter === "brand" ? "is-checked" : ""} onClick={handleFilterKeyChange("brand")}>Branding</li>
               </ul>
            </div>

            <div id="isotop-gallery-wrapper" className="isotop-gallery-wrapper grid-2column">
               <div className="grid-sizer"></div>
               {project_data.map((item) => (
                  <div key={item.id} className={`isotop-item mt-50 lg-mt-30 ${item.category}`}>
                     <div className="project-block-three position-relative z-1">
                        <Image src={item.thumb} alt="" className="w-100 media-img tran3s" />
                        <div className="position-relative d-flex justify-content-between align-items-start pt-35">
                           <div className="pe-3">
                              <h6>App — The power of communication</h6>
                              <span>Application</span>
                           </div>
                           <Image src={icon} alt="" className="mt-2 ms-auto" />
                           <Link href="/project-details" className="stretched-link"></Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default ProjectTwoArea
