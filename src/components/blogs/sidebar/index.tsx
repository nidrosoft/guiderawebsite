import React from 'react'
import Category from './Category'
import RecentNews from './RecentNews'
import Tags from './Tags'
import Link from 'next/link'

const Sidebar = () => {
   return (
      <div className="col-lg-4">
         <div className="blog-sidebar md-mt-60 ps-xl-4">
            <form onSubmit={(e) => e.preventDefault()} className="sidebar-search">
               <input type="text" placeholder="Search.." />
               <button className="tran3s"><i className="bi bi-search"></i></button>
            </form>
            <Category />
            <RecentNews />

            <Tags />
            <div className="contact-banner text-center mt-50 lg-mt-30">
               <h3 className="mb-20">Any Questions? <br />Let’s talk</h3>
               <Link href="/contact" className="tran3s fw-500">Let’s Talk</Link>
            </div>
         </div>
      </div>
   )
}

export default Sidebar
