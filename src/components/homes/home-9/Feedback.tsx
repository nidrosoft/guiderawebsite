"use client"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules';
import Image, { StaticImageData } from "next/image";

import logo_1 from "@/assets/images/logo/p_logo_65.png"
import logo_2 from "@/assets/images/logo/p_logo_66.png"
import icon from "@/assets/images/icon/icon_56.svg"
import shape from "@/assets/images/shape/shape_81.svg"

interface DataType {
   id: number;
   logo: StaticImageData;
   name: JSX.Element;
   desc: JSX.Element;
}

const testi_data: DataType[] = [
   {
      id: 1,
      logo: logo_1,
      name: (<><span className="fw-500">Adul Kashem,</span> Engineer</>),
      desc: (<>&quot;Best decision ever, smooth hosting experience!&quot;</>),
   },
   {
      id: 2,
      logo: logo_2,
      name: (<><span className="fw-500">Rashed Ka,</span> Engineer</>),
      desc: (<>&quot;Best decision ever, smooth hosting experience!&quot;</>),
   },
   {
      id: 3,
      logo: logo_1,
      name: (<><span className="fw-500">Adul Kashem,</span> Engineer</>),
      desc: (<>&quot;Best decision ever, smooth hosting experience!&quot;</>),
   },
   {
      id: 4,
      logo: logo_2,
      name: (<><span className="fw-500">Rashed Ka,</span> Engineer</>),
      desc: (<>&quot;Best decision ever, smooth hosting experience!&quot;</>),
   },
];

const setting = {
   slidesPerView: 3,
   spaceBetween: 30,
   loop: true,
   centeredSlides: true,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   pagination: {
      clickable: true,
   },
   navigation: {
      nextEl: '.next_b',
      prevEl: '.prev_b',
   },
   breakpoints: {
      '768': {
         slidesPerView: 3,
      },
      '576': {
         slidesPerView: 2,
      },
      '0': {
         slidesPerView: 1,
      },
   },
};

const Feedback = () => {
   return (
      <div className="feedback-section-nine position-relative z-1 pt-120 xl-pt-100 lg-pt-70 pb-130 lg-pb-80 mt-180 lg-mt-80">
         <div className="container">
            <div className="text-center mb-70 lg-mb-30">
               <h2><span className="counter">12,0000</span>+</h2>
               <p className="fs-28 text-white opacity-75">Customer love our product with more 20+ years reparation</p>
            </div>
         </div>
         <div className="wrapper">
            <Swiper {...setting} modules={[Autoplay, Navigation]} className="feedback-slider-six">
               {testi_data.map((item) => (
                  <SwiperSlide key={item.id} className="item">
                     <div className="feedback-block">
                        <Image src={item.logo} alt="" className="logo" />
                        <blockquote>{item.desc}</blockquote>
                        <div className="d-flex align-items-center justify-content-between">
                           <div className="name text-white">{item.name}</div>
                           <Image src={icon} alt="" className="icon" />
                        </div>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>

            <ul className="slider-arrows slick-arrow-one d-flex justify-content-center style-none mt-50">
               <li className="prev_b slick-arrow"><i className="fa-solid fa-arrow-left-long"></i></li>
               <li className="next_b slick-arrow"><i className="fa-solid fa-arrow-right-long"></i></li>
            </ul>
         </div>
         <Image src={shape} alt="" className="shapes shape_01" />
      </div>
   )
}

export default Feedback
