import Image, { StaticImageData } from "next/image"
import Count from "@/components/common/Count"
import Link from "next/link"

import counter_shape from "@/assets/images/shape/shape_13.svg"
import counter_logo from "@/assets/images/logo/logo_04.svg"
import counter_icon from "@/assets/images/icon/icon_14.svg"

import shape_1 from "@/assets/images/shape/shape_14.svg"
import shape_2 from "@/assets/images/shape/shape_15.svg"
import shape_3 from "@/assets/images/shape/shape_16.svg"

import logo_1 from "@/assets/images/logo/p_logo_09.png"
import logo_2 from "@/assets/images/logo/p_logo_10.png"
import logo_3 from "@/assets/images/logo/p_logo_11.png"

interface DataType {
   id: number;
   shape: StaticImageData;
   logo: StaticImageData;
   count: number;
   counter_text: string;
   counter_title: string;
   class?:string;
}

const counter_data: DataType[] = [
   {
      id: 1,
      shape: shape_1,
      logo: logo_1,
      count: 1200,
      counter_text: "+",
      counter_title: "Faster Server Speed",
      class:"mb-40 md-mb-20",
   },
   {
      id: 2,
      shape: shape_2,
      logo: logo_2,
      count: 3.2,
      counter_text: "X",
      counter_title: "Smooth Integration",
      class:"mb-40 md-mb-20",
   },
   {
      id: 3,
      shape: shape_3,
      logo: logo_3,
      count: 800,
      counter_text: "%",
      counter_title: "Membership Sale",
   },
];

const BLockFeatureThree = () => {
   return (
      <div className="block-feature-six position-relative z-2 pt-150 lg-pt-80">
         <div className="container">
            <div className="border-bottom mb-110 lg-mb-70 pb-60 lg-pb-30">
               <div className="row align-items-end">
                  <div className="col-xl-7 col-lg-6">
                     <div className="title-two text-center text-lg-start md-mb-30">
                        <h2 className="m0">Genuine outcomes powered by AI.</h2>
                     </div>
                  </div>
                  <div className="col-lg-5 ms-auto text-center text-lg-end">
                     <Link href="/" className="btn-four">More About Us</Link>
                  </div>
               </div>
            </div>

            <div className="row align-items-center">
               <div className="col-lg-7 order-lg-last ms-auto">
                  <div className="ps-xxl-5">
                     <blockquote>Piku excels as the top AI solution for B2B SaaS campaigns.&quot;
                         <Image src={counter_icon} alt="" className="shapes icon" />
                         </blockquote>
                     <div className="media-block border-30 mt-70 lg-mt-30 d-flex align-items-end">
                        <div className="name-card w-100 d-flex align-items-center justify-content-between">
                           <div>
                              <h6>Maria Gomez</h6>
                              <span className="text-dark">CEO & Founder, Piku inc</span>
                           </div>
                           <Image src={counter_logo} alt="" />
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 order-lg-first">
                  <div className="wrapper position-relative md-mt-40">
                     {counter_data.map((item) => (
                        <div key={item.id} className={`card-style-three position-relative z-1 ${item.class}`}>
                           <Image src={item.logo} alt="" className="logo" />
                           <div className="main-count fw-bold"><span className="counter"><Count number={item.count} /></span>{item.counter_text}</div>
                           <span className="fs-20">{item.counter_title}</span>
                           <Image src={item.shape} alt="" className="shapes shape_01" />
                        </div>
                     ))}
                     <Image src={counter_shape} alt="" className="shapes bg-shape" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BLockFeatureThree
