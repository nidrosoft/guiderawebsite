import Image from "next/image"
import Link from "next/link"

import img_1 from "@/assets/images/shape/shape_60.svg"
import img_2 from "@/assets/images/shape/shape_61.svg"
import img_3 from "@/assets/images/shape/shape_64.png"
import img_4 from "@/assets/images/icon/smile.svg"
import img_5 from "@/assets/images/shape/shape_65.png"
import img_6 from "@/assets/images/shape/shape_62.svg"
import img_7 from "@/assets/images/shape/shape_63.svg"
import img_8 from "@/assets/images/assets/avatar_2.png"
import img_9 from "@/assets/images/shape/shape_67.svg"
import img_10 from "@/assets/images/shape/shape_66.svg"

const Hero = () => {
   return (
      <div className="hero-banner-seven z-1 position-relative pt-180 lg-pt-140 pb-100">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <h1 className="hero-heading text-center d-flex align-items-center justify-content-center flex-wrap">
                     <Image src={img_1} alt="" className="shape shape_01 me-xl-5 me-4" />
                     <span>DESIGN</span>
                     <Image src={img_2} alt="" className="shape shape_02 ms-xl-5 ms-4" />

                     <span className="position-relative w-100">
                        <Image src={img_3} alt="" className="shapes shape_05" />
                        BRAIN<span className="fst-italic">STORM.</span>
                        <Image src={img_4} alt="" className="shapes smile_icon" />
                        <Image src={img_5} alt="" className="shapes shape_06" />
                     </span>

                     <Image src={img_6} alt="" className="shape shape_03 me-xl-5 me-4" />
                     <span>Coding</span>
                     <Image src={img_7} alt="" className="shape shape_04 ms-xl-5 ms-4" />
                  </h1>
                  <p className="pt-35 font-Playfair sub-heading"><span className="fw-bold">A full scale agency</span> for digital services</p>


                  <div className="d-sm-flex justify-content-between align-items-center">
                     <div className="mt-20 xs-mt-40">
                        <Image src={img_8} alt="" className="m-auto" />
                        <div className="rating text-center text-sm-start xs-pt-10 xs-pb-20">
                           <div className="fs-24"><span className="fw-500 text-dark">13k rating</span> (4.7 Rating)</div>
                        </div>
                     </div>
                     <Image src={img_9} alt="" className="wave-shape d-none d-lg-block" />
                     <div className="mt-20 text-center text-sm-start">
                        <div className="position-relative d-inline-block quote-bg">
                           <Image src={img_10} alt="" />
                           <Link href="/" className="quote-text fw-500">Request A Quote</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Hero
