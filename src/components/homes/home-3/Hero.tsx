"use client"
import Image from "next/image"

import img_1 from "@/assets/images/assets/ils_11.png"
import img_2 from "@/assets/images/assets/ils_11_01.png"
import img_3 from "@/assets/images/assets/ils_11_02.png"
import img_4 from "@/assets/images/shape/shape_29.png"
import img_5 from "@/assets/images/shape/shape_30.png"

const Hero = () => {
   return (
      <div className="hero-banner-three z-1 position-relative pt-200 lg-pt-150">
         <div className="container position-relative">
            <div className="row">
               <div className="col-xl-10 col-lg-10 m-auto text-center">
                  <h1 className="hero-heading">Design website without Coding Experience</h1>
                  <p className="fs-28 text-dark pt-40 lg-pt-30 pb-35 lg-pb-20">What kind of website would you like to create? Let’s Get started</p>
                  <form onSubmit={(e) => e.preventDefault()} className="m-auto position-relative">
                     <input type="text" placeholder="Ex: Business, Marketing" />
                     <button className="tran3s">Build Now</button>
                  </form>
               </div>
            </div>
         </div>
         <div className="media d-flex justify-content-center mt-100 lg-mt-60">
            <div className="position-relative">
               <Image src={img_1} alt="" />
               <Image src={img_2} alt="" className="shapes card_01" />
               <Image src={img_3} alt="" className="shapes card_02" />
            </div>
         </div>
         <Image src={img_4} alt="" className="shapes shape_01" />
         <Image src={img_5} alt="" className="shapes shape_02" />
      </div>
   )
}

export default Hero
