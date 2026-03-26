"use client"
import blog_data_two from '@/data/BlogDataTwo'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ReactPaginate from 'react-paginate';

import paginate_icon from "@/assets/images/icon/icon_15.svg";
import Sidebar from '../sidebar'

const BlogTwoArea = () => {

   const blog_data = blog_data_two;

   const itemsPerPage = 4;
   const [itemOffset, setItemOffset] = useState(0);
   const endOffset = itemOffset + itemsPerPage;
   const currentItems = blog_data.slice(itemOffset, endOffset);
   const pageCount = Math.ceil(blog_data.length / itemsPerPage);
   // click to request another page.
   const handlePageClick = (event: { selected: number }) => {
      const newOffset = (event.selected * itemsPerPage) % blog_data.length;
      setItemOffset(newOffset);
   };

   return (
      <div className="blog-section-two mt-200 lg-mt-150 mb-120 lg-mb-80">
         <div className="container">
            <div className="title-two text-center mb-80 lg-mb-50">
               <h2>Our Blog</h2>
            </div>

            <div className="row">
               <div className="col-xxl-11 m-auto">
                  <div className="row gx-xxl-5">
                     <div className="col-lg-8">
                        {currentItems.map((item) => (
                           <article key={item.id} className="blog-meta-two mb-90 lg-mb-50">
                              <figure className="media position-relative" style={{ backgroundImage: `url(${item.bg_img})` }}>
                                 <Link href="/blog-details" className="stretched-link date tran3s">{item.date}</Link>
                              </figure>
                              <div className="post-meta">
                                 <div className="post-info">{item.time}</div>
                                 <div className="d-flex justify-content-between align-items-start flex-wrap">
                                    <Link href="/blog-details" className="blog-title"><h4>{item.title}</h4></Link>
                                    <Link href="/blog-details" className="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s"><i className="bi bi-arrow-up-right"></i></Link>
                                 </div>
                              </div>
                           </article>
                        ))}

                        <ReactPaginate
                           breakLabel="..."
                           nextLabel={<Image src={paginate_icon} alt="" className="ms-2" />}
                           onPageChange={handlePageClick}
                           pageRangeDisplayed={3}
                           pageCount={pageCount}
                           previousLabel={<Image src={paginate_icon} alt="" className="ms-2" />}
                           renderOnZeroPageCount={null}
                           className="pagination-one d-flex align-items-center style-none pt-10"
                        />
                     </div>
                     <Sidebar />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BlogTwoArea
