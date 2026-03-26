"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from "next/image";

import shape from "@/assets/images/shape/shape_88.svg"

interface DataType {
   id: number;
   desc: JSX.Element;
   name: string;
   color: string;
}

const testi_data: DataType[] = [
   {
      id: 1,
      desc: (<>&quot;User-friendly, <span style={{ color: "#FF2BC4" }}>efficient - the best</span> SaaS experience!&quot;</>),
      name: "Maria Gomez",
      color: "#FF2BC4",
   },
   {
      id: 2,
      desc: (<>&quot;Incredible SaaS innovation - simplified tasks, increased efficiency. <span style={{ color: "#FFBA35" }}>A game-changer</span> for our business success.&quot;</>),
      name: "Daniel Thomas",
      color: "#FFBA35",
   },
   {
      id: 3,
      desc: (<>&quot;Faucibus et, elit ipsum eu pulvir neque leo <span style={{ color: "#5B40FF" }}>eros pulvinar nec</span> facilisis massa.”</>),
      name: "Lassy Chester",
      color: "#5B40FF",
   },
   {
      id: 4,
      desc: (<>&quot;User-friendly, <span style={{ color: "#FF2BC4" }}>efficient - the best</span> SaaS experience!&quot;</>),
      name: "Maria Gomez",
      color: "#FF2BC4",
   },
   {
      id: 5,
      desc: (<>&quot;Faucibus et, elit ipsum eu pulvir neque leo <span style={{ color: "#1AB800" }}>eros pulvinar nec</span> facilisis massa.”</>),
      name: "Lassy Chester",
      color: "#1AB800",
   },
];

const setting = {
   slidesPerView: 4,
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
      '1400': {
         slidesPerView: 4,
      },
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
      <div className="feedback-section-eleven position-relative z-1 mt-150 lg-mt-80 pb-80 lg-pb-10">
         <div className="container">
            <div className="row">
               <div className="col-xl-8 col-lg-6 m-auto text-center">
                  <div className="title-two mb-90 lg-mb-40">
                     <h2>Become an AI-powered Team with Piku</h2>
                  </div>
               </div>
            </div>
         </div>

         <div className="wrapper">
            <Swiper {...setting} modules={[Autoplay]} className="feedback-slider-eight">
               {testi_data.map((item) => (
                  <SwiperSlide key={item.id} className="item">
                     <div className="feedback-block-five">
                        <ul className="style-none d-flex rating" style={{ color: item.color }}>
                           <li><i className="bi bi-star-fill"></i></li>
                           <li><i className="bi bi-star-fill"></i></li>
                           <li><i className="bi bi-star-fill"></i></li>
                           <li><i className="bi bi-star-fill"></i></li>
                           <li><i className="bi bi-star-fill"></i></li>
                        </ul>
                        <blockquote>{item.desc}</blockquote>
                        <div className="name">{item.name}</div>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
         <Image src={shape} alt="" className="shapes bg-shape" />
      </div>
   )
}

export default Feedback
