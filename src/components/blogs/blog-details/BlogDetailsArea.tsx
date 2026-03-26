import BlogForm from "@/components/forms/BlogForm"
import Image from "next/image"
import Link from "next/link"

import blog_details_thumb from "@/assets/images/blog/blog_img_18.jpg"

const BlogDetailsArea = () => {
   return (
      <div className="blog-details mt-200 lg-mt-150 mb-120 lg-mb-80">
         <div className="container">
            <div className="row">
               <div className="col-xl-11 m-auto">
                  <div className="pe-xl-5 ps-xl-5">
                     <article className="blog-details-post">
                        <div className="post-info text-center">Maria Jonas  /  2 Comments  /  o comment </div>
                        <div className="title-three text-center mb-55 lg-mb-40">
                           <h2>Make Productive Day with AI app</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullaum laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit volupta velit esse cillum dolore eu fugiat nulla pariatur ut enim ad minim veniam.</p>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum magna quis nostured sed do eiusmod tempor .</p>
                        <div className="media">
                           <Image src={blog_details_thumb} alt="" className="w-100" />
                        </div>
                        <h3>How I become my own mentor?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullaum laboris nisi ut aliquip ex ea in reprehenderit volupta velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum magna quis nostured sed do eiusmod tempor .</p>

                        <div className="quote-wrapper">
                           <blockquote>&quot;Budget your desires, investing knowledge, & let compound interest build your future.&quot;</blockquote>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>

                        <p>quis nostrud exercitation ullaum laboris nisi ut aliquip ex ea in reprehenderit volupta velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum magna quis nostured sed do eiusmod tempor . minim veniam, quis nostrud exercitation ullaum laboris nisi ut aliquip ex ea  in reprehenderit.</p>
                        <div className="bottom-widget d-lg-flex align-items-center justify-content-between">
                           <ul className="d-flex align-items-center flex-wrap tags style-none pt-20">
                              <li>Tag</li>
                              <li><Link href="/">AI</Link></li>
                              <li><Link href="/">Application</Link></li>
                              <li><Link href="/">Technology</Link></li>
                           </ul>
                           <ul className="d-flex share-icon align-items-center style-none pt-20">
                              <li>Share</li>
                              <li><Link href="/"><i className="bi bi-facebook"></i></Link></li>
                              <li><Link href="/"><i className="bi bi-twitter"></i></Link></li>
                              <li><Link href="/"><i className="bi bi-instagram"></i></Link></li>
                           </ul>
                        </div>
                     </article>

                     <BlogForm />
                  </div>
               </div>
            </div>

         </div>
      </div>
   )
}

export default BlogDetailsArea
