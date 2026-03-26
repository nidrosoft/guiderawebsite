"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import Image, { StaticImageData } from "next/image";
import icon from "@/assets/images/icon/icon_04.svg"

import testi_img1 from "@/assets/images/logo/p_logo_07.png"
import testi_img2 from "@/assets/images/logo/p_logo_08.png"

interface DataType {
   id: number;
   img: StaticImageData;
   title: JSX.Element;
   desc: JSX.Element;
}

const testi_data: DataType[] = [
   {
      id: 1,
      img: testi_img1,
      title: (<><span className="fw-500 text-dark fs-20">Rashed kabir,</span> Lead Designser, Monday</>),
      desc: (<>&quot;I think if you do something and it turns <span style={{ color: "#FD05F3" }}>out pretty good</span>, then you should go to do something&quot;</>),
   },
   {
      id: 2,
      img: testi_img2,
      title: (<><span className="fw-500 text-dark fs-20">Jon Cooper, </span> Art Director, Slack</>),
      desc: (<>&quot;The <span style={{ color: "#5AD95F" }}>best SaaS company</span> without doubt. something recommended to express your achievement!&quot;</>),
   },
   {
      id: 3,
      img: testi_img1,
      title: (<><span className="fw-500 text-dark fs-20">Rashed kabir,</span> Lead Designser, Monday</>),
      desc: (<>&quot;I think if you do something and it turns <span style={{ color: "#FD05F3" }}>out pretty good</span>, then you should go to do something&quot;</>),
   },
];

const setting = {
   slidesPerView: 2,
   spaceBetween: 30,
   loop: true,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   pagination: {
      clickable: true,
   },
   navigation: false,
   breakpoints: {
      '768': {
         slidesPerView: 2,
      },
      '0': {
         slidesPerView: 1,
      },
   },
};

const Feedback = () => {
   return (
      <div className="feedback-section-one mb-30 lg-mb-20">
         <Swiper {...setting} className="feedback-slider-one">
            {testi_data.map((item) => (
               <SwiperSlide key={item.id} className="item">
                  <div className="feedback-block-one bg-white border-30">
                     <div className="d-flex align-items-center justify-content-between">
                        <Image src={item.img} alt="" />
                        <div className="icon rounded-circle d-flex align-items-center justify-content-center"><Image src={icon} alt="" /></div>
                     </div>
                     <blockquote>{item.desc}</blockquote>
                     <div className="d-sm-flex align-items-center justify-content-between">
                        <p className="m0">{item.title}</p>
                        <ul className="style-none d-flex rating">
                           <li><i className="bi bi-star-fill"></i></li>
                           <li><i className="bi bi-star-fill"></i></li>
                           <li><i className="bi bi-star-fill"></i></li>
                           <li><i className="bi bi-star-fill"></i></li>
                           <li><i className="bi bi-star-fill"></i></li>
                        </ul>
                     </div>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   )
}

export default Feedback
