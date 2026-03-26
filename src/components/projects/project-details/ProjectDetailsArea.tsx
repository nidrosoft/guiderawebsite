import Image from "next/image"
import Link from "next/link"

import project_details_thumb1 from "@/assets/images/media/img_70.jpg"
import project_details_thumb2 from "@/assets/images/media/img_71.jpg"
import project_details_thumb3 from "@/assets/images/media/img_72.jpg"
import project_details_thumb4 from "@/assets/images/media/img_73.jpg"

const ProjectDetailsArea = () => {
   return (
      <div className="project-details mt-200 xl-mt-150">
         <div className="container">
            <div className="position-relative">
               <div className="row align-items-end">
                  <div className="col-md-8">
                     <div className="title-three">
                        <h2>Mobile app UI & Branding</h2>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="d-flex justify-content-md-end">
                        <ul className="style-none d-flex align-items-center share-icon mb-15 sm-mt-30">
                           <li>Share</li>
                           <li><Link href="/"><i className="fa-brands fa-facebook"></i></Link></li>
                           <li><Link href="/"><i className="fa-brands fa-twitter"></i></Link></li>
                           <li><Link href="/"><i className="fa-brands fa-instagram"></i></Link></li>
                        </ul>
                     </div>
                  </div>
               </div>

               <div className="border-top border-2 border-dark mt-55 lg-mt-30 sm-mt-10 pt-60 lg-pt-20 pb-80 lg-pb-40">
                  <ul className="project-info style-none d-flex flex-wrap justify-content-between">
                     <li>
                        <h6>Date</h6>
                        <span>23 Apr, 2024</span>
                     </li>
                     <li>
                        <h6>Client</h6>
                        <span>CreativeGigs Themes</span>
                     </li>
                     <li>
                        <h6>Category</h6>
                        <span>Branding & UI/UX</span>
                     </li>
                     <li>
                        <h6>Website</h6>
                        <span>www.zigzagauto.com</span>
                     </li>
                  </ul>
               </div>

               <div className="media-lg">
                  <Image src={project_details_thumb1} alt="" className="w-100" />
               </div>

               <h3>Project Overview.</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullaum laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit volupta velit esse cillum dolore eu fugiat nulla pariatur.</p>
               <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum magna quis nostured sed do eiusmod tempor .</p>
               <h3>Process & Challenge</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullaum laboris nisi </p>
               <ul className="style-none list-type-one mb-35">
                  <li><span>Market Research -</span> Crafting brand identity with logo, website, and social media design to ensure a strong digital presence and brand recognition.</li>
                  <li><span>Strategy Planning -</span> Utilizing content marketing and ads to bolster brand &amp; engage target audience effectively.</li>
                  <li><span>Finalize -</span> Duis aute irure dolor in reprehenderit volupta velit esse cillum dolore</li>
               </ul>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullaum ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit volupta velit esse cillum dolore eu fugiat nulla pariatur.</p>

               <div className="row">
                  <div className="col-md-8">
                     <div className="media-md mb-25"><Image src={project_details_thumb2} alt="" className="w-100" /></div>
                  </div>
                  <div className="col-md-4">
                     <div className="media-md mb-25"><Image src={project_details_thumb3} alt="" className="w-100" /></div>
                     <div className="media-md mb-25"><Image src={project_details_thumb4} alt="" className="w-100" /></div>
                  </div>
               </div>
               <h3>Summery</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullaum laboris nisi</p>
               <p>Duis aute irure dolor in reprehenderit volupta velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum magna quis nostured sed do eiusmod tempor . ut aliquip ex ea commodo consequat.</p>

               <div className="page-pagination mt-90 lg-mt-50 border-top border-bottom border-2 border-dark">
                  <ul className="style-none d-flex justify-content-between">
                     <li>
                        <Link href="/">
                           <span className="d-flex align-items-center align-items-md-end">
                              <i className="bi bi-arrow-left"></i>
                              <span className="ms-3 ms-md-4">
                                 <span className="pr-dir text-uppercase d-block">Previous</span>
                                 <span className="pr-name d-none d-md-block tran3s fw-500">Finance & Banking App</span>
                              </span>
                           </span>
                        </Link>
                     </li>
                     <li>
                        <Link href="/">
                           <span className="d-flex align-items-center text-end align-items-md-end">
                              <span className="me-3 me-md-4">
                                 <span className="pr-dir text-uppercase d-block">Next</span>
                                 <span className="pr-name d-none d-md-block tran3s fw-500">Product Branding</span>
                              </span>
                              <i className="bi bi-arrow-right"></i>
                           </span>
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ProjectDetailsArea
