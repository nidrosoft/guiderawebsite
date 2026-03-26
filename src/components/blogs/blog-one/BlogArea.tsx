"use client"
import blog_data_main from '@/data/BlogData'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ReactPaginate from 'react-paginate';

import paginate_icon from "@/assets/images/icon/icon_15.svg";


const BlogArea = () => {

   const blog_data = blog_data_main.filter(items => items.page === "blog_1");

   const itemsPerPage = 5;
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
      <div className="blog-section-one mt-200 xl-mt-150 mb-120 lg-mb-80">
         <div className="container">
            <div className="title-three text-center mb-80 lg-mb-40">
               <h2>Our Stories</h2>
            </div>

            <div className="row">
               <div className="col-xxl-10 m-auto">
                  {currentItems.map((item) => (
                     <article key={item.id} className="blog-meta-one mb-70 lg-mb-50">
                        <div className="media">
                           <Image src={item.thumb} alt="" className="w-100" />
                        </div>
                        <div className="post-meta position-relative z-1">
                           <ul className="style-none tags d-flex flex-wrap">
                              {item.tag?.map((tag, i) => (
                                 <li key={i}><Link href="/">{tag}</Link></li>
                              ))}
                           </ul>
                           <Link href="/blog-details" className="blog-title d-block"><h4>{item.title}</h4></Link>
                           <p>{item.desc}</p>
                           <Link href="/blog-details" className="read-more rounded-circle tran3s"><i className="bi bi-arrow-up-right"></i></Link>
                        </div>
                     </article>
                  ))}
               </div>
            </div>

            <ReactPaginate
               breakLabel="..."
               nextLabel={<Image src={paginate_icon} alt="" className="ms-2" />}
               onPageChange={handlePageClick}
               pageRangeDisplayed={3}
               pageCount={pageCount}
               previousLabel={<Image src={paginate_icon} alt="" className="ms-2" />}
               renderOnZeroPageCount={null}
               className="pagination-one d-flex justify-content-center align-items-center style-none pt-10"
            />
         </div>
      </div>
   )
}

export default BlogArea
