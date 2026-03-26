"use client"
import Image from "next/image"

import bg_img from "@/assets/images/assets/bg_14.png"
import person from "@/assets/images/assets/person.png"
import card from "@/assets/images/assets/card_20.png"

const Hero = () => {
   return (
      <div className="hero-banner-eight bg-twelve z-1 position-relative pt-250 xl-pt-200 md-pt-150 pb-160 xl-pb-140 md-p0">
         <div className="container">
            <div className="row">
               <div className="col-xl-6 col-lg-7 col-md-10">
                  <h1 className="hero-heading">Click,Chat, <span>Convert</span> Sales.</h1>
                  <p className="fs-28 text-white font-manrope pt-35 lg-pt-20 pb-40 lg-pb-20 pe-xxl-5">Seamlessly integrate teams, tasks, & documents with the all-in-one piku app.</p>

                  <div className="">
                     <form onSubmit={(e) => e.preventDefault()} className="d-flex align-items-center justify-content-between flex-wrap mb-15">
                        <input type="email" placeholder="Email address.." />
                        <button>Try It Now</button>
                     </form>
                     <ul className="style-none d-flex flex-wrap">
                        <li><i className="bi bi-check2"></i> No Card required</li>
                        <li><i className="bi bi-check2"></i> 14 Days Free Trial</li>
                     </ul>
                  </div>
               </div>
            </div>

            <div className="illustration">
               <Image src={bg_img} alt="" />
               <Image src={person} alt="" className="shapes person-img" />
               <Image src={card} alt="" className="shapes shape_01" />
            </div>
         </div>
      </div>
   )
}

export default Hero
