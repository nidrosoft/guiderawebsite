"use client"
import { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import blog_data_three from "@/data/BlogDataThree";
import Image from "next/image";
import ReactPaginate from 'react-paginate';
import Link from "next/link";

import paginate_icon from "@/assets/images/icon/icon_15.svg";

const BlogThreeArea = () => {

   const blog_data = blog_data_three;

   const itemsPerPage = 8;
   const [itemOffset, setItemOffset] = useState(0);
   const endOffset = itemOffset + itemsPerPage;
   const currentItems = blog_data.slice(itemOffset, endOffset);
   const pageCount = Math.ceil(blog_data.length / itemsPerPage);
   // click to request another page.
   const handlePageClick = (event: { selected: number }) => {
      const newOffset = (event.selected * itemsPerPage) % blog_data.length;
      setItemOffset(newOffset);
   };

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
      <div className="blog-section-one mt-200 xl-mt-150 mb-120 lg-mb-80">
         <div className="container">
            <div className="title-three text-center mb-80 lg-mb-40">
               <h2>Our Stories</h2>
            </div>

            <div className="filter-nav-one">
               <ul className="style-none d-flex justify-content-center flex-wrap isotop-menu-wrapper">
                  <li className={selectedFilter === "*" ? "is-checked" : ""} onClick={handleFilterKeyChange("*")}>All</li>
                  <li className={selectedFilter === "marketing" ? "is-checked" : ""} onClick={handleFilterKeyChange("marketing")}>Marketing</li>
                  <li className={selectedFilter === "application" ? "is-checked" : ""} onClick={handleFilterKeyChange("application")}>Application</li>
                  <li className={selectedFilter === "design" ? "is-checked" : ""} onClick={handleFilterKeyChange("design")}>Design</li>
                  <li className={selectedFilter === "development" ? "is-checked" : ""} onClick={handleFilterKeyChange("development")}>Development</li>
                  <li className={selectedFilter === "lifestyle" ? "is-checked" : ""} onClick={handleFilterKeyChange("lifestyle")}>Lifestyle</li>
                  <li className={selectedFilter === "others" ? "is-checked" : ""} onClick={handleFilterKeyChange("others")}>Others</li>
               </ul>
            </div>


            <div id="isotop-gallery-wrapper" className="isotop-gallery-wrapper grid-2column pt-60 lg-pt-40">
               <div className="grid-sizer"></div>
               {currentItems.map((item) => (
                  <div key={item.id} className={`isotop-item ${item.category}`}>
                     <article className="blog-meta-one style-two mb-70 lg-mb-40">
                        <div className="media">
                           <Image src={item.thumb} alt="" className="w-100" />
                        </div>
                        <div className="post-meta position-relative z-1">
                           <div className="date">17 apr, 2024</div>
                           <Link href="/blog-details" className="blog-title d-block"><h4>How to become a web designer in 2021</h4></Link>
                           <div className="d-lg-flex justify-content-between align-items-center">
                              <ul className="style-none tags d-flex flex-wrap">
                                 {item.tags?.map((tag, i) => (
                                    <li key={i}><Link href="/">{tag}</Link></li>
                                 ))}
                              </ul>
                              <Link href="/blog-details" className="read-more rounded-circle tran3s md-mt-20"><i className="bi bi-arrow-up-right"></i></Link>
                           </div>
                        </div>
                     </article>
                  </div>
               ))}
            </div>

            <ReactPaginate
               breakLabel="..."
               nextLabel={<Image src={paginate_icon} alt="" className="ms-2" />}
               onPageChange={handlePageClick}
               pageRangeDisplayed={3}
               pageCount={pageCount}
               previousLabel={<Image src={paginate_icon} alt="" className="ms-2" />}
               renderOnZeroPageCount={null}
               className="pagination-one d-flex justify-content-center align-items-center style-none pt-40"
            />
         </div>
      </div>
   )
}

export default BlogThreeArea
