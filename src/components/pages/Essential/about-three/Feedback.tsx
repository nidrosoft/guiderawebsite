"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image, { StaticImageData } from "next/image";

import logo_1 from "@/assets/images/logo/p_logo_67.png"
import logo_2 from "@/assets/images/logo/p_logo_68.png"

interface DataType {
   id: number;
   logo: StaticImageData;
   title: JSX.Element;
   desc: JSX.Element;
}

const testi_data: DataType[] = [
   {
      id: 1,
      logo: logo_1,
      title: (<><span className="fw-500 text-dark">Mark Joge,</span> Marketing Chief</>),
      desc: (<>“I have been using Piku since I got it and I love it!”</>),
   },
   {
      id: 2,
      logo: logo_2,
      title: (<><span className="fw-500 text-dark">Rashed kabir,</span> Lead Designer</>),
      desc: (<>Piku absolute favorite! This VPN brand transformed our lives.</>),
   },
   {
      id: 3,
      logo: logo_1,
      title: (<><span className="fw-500 text-dark">Mark Joge,</span> Marketing Chief</>),
      desc: (<>“I have been using Piku since I got it and I love it!”</>),
   },
];

const setting = {
   slidesPerView: 2,
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
   breakpoints: {
      '768': {
         slidesPerView: 2,
      },
      '576': {
         slidesPerView: 1,
      },
      '0': {
         slidesPerView: 1,
      },
   },
};

const Feedback = () => {
   return (
      <div className="feedback-section-ten mt-180 xl-mt-150 lg-mt-80">
         <div className="position-relative">
            <div className="container lg">
               <div className="row">
                  <div className="col-lg-6 m-auto">
                     <div className="title-ten text-center mb-70 lg-mb-40">
                        <h2>73,0000+ Client using our services</h2>
                     </div>
                  </div>
               </div>

               <Swiper {...setting} modules={[Autoplay]} className="feedback-slider-seven">
                  {testi_data.map((item) => (
                     <SwiperSlide key={item.id} className="item">
                        <div className="feedback-block-four border border-2 border-dark">
                           <Image src={item.logo} alt="" className="logo" />
                           <blockquote>{item.desc}</blockquote>
                           <div className="d-lg-flex align-items-center justify-content-between">
                              <div className="name">{item.title}</div>
                              <ul className="rating style-none d-flex md-mt-10">
                                 <li><i className="bi bi-star-fill"></i></li>
                                 <li><i className="bi bi-star-fill"></i></li>
                                 <li><i className="bi bi-star-fill"></i></li>
                                 <li><i className="bi bi-star-fill"></i></li>
                                 <li><i className="bi bi-star"></i></li>
                              </ul>
                           </div>
                        </div>
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </div>
      </div>
   )
}

export default Feedback
