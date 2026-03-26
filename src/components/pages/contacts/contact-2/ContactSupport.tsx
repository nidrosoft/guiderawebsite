import Image from "next/image"
import Link from "next/link"

import icon_1 from "@/assets/images/icon/icon_100.svg"
import icon_2 from "@/assets/images/icon/icon_101.svg"

const ContactSupport = () => {
   return (
      <>
         <div className="title-two text-center mb-60 lg-mb-20 mt-150 lg-mt-80">
            <h2>Looking for Support?</h2>
         </div>

         <div className="row gx-xxl-5">
            <div className="col-lg-6">
               <div className="card-style-sixteen mt-35">
                  <div className="d-flex align-items-center justify-content-between">
                     <h6>Support Center</h6>
                     <Image src={icon_1} alt="" />
                  </div>
                  <p className="fs-22">Explore varied resources for quick answers to common inquiries.</p>
                  <Link href="#" className="d-flex align-items-center justify-content-between">Check it out <span className="icon"><i className="fa-light fa-arrow-up-right"></i></span></Link>
               </div>
            </div>
            <div className="col-lg-6">
               <div className="card-style-sixteen mt-35">
                  <div className="d-flex align-items-center justify-content-between">
                     <h6>Community</h6>
                     <Image src={icon_2} alt="" />
                  </div>
                  <p className="fs-22">Engage in our lively community, exchange experiences, and gain insights.</p>
                  <Link href="#" className="d-flex align-items-center justify-content-between">Check it out <span className="icon"><i className="fa-light fa-arrow-up-right"></i></span></Link>
               </div>
            </div>
         </div>
      </>
   )
}

export default ContactSupport
