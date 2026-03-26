"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image, { StaticImageData } from "next/image";
import Brand from "./Brand";

import shape from "@/assets/images/shape/shape_35.svg"
import avatar_1 from "@/assets/images/media/img_10.jpg"
import avatar_2 from "@/assets/images/media/img_11.jpg"
import avatar_3 from "@/assets/images/media/img_12.jpg"
import avatar_4 from "@/assets/images/media/img_13.jpg"

interface DataType {
   id: number,
   title: string;
   country: string;
   avatar: StaticImageData;
   desc: JSX.Element;
}

const testi_data: DataType[] = [
   {
      id: 1,
      title: "Rashed Kabir",
      country: "Claifornia",
      avatar: avatar_1,
      desc: (<>Game-changer! Boosted efficiency, simplified tasks, and saved time. Highly recommended!</>),
   },
   {
      id: 2,
      title: "Marry Gorge",
      country: "Milan",
      avatar: avatar_2,
      desc: (<>“Reliable and professional. Delivers high-quality products that exceed our expectations.”</>),
   },
   {
      id: 3,
      title: "Stefan Jong",
      country: "Miami",
      avatar: avatar_3,
      desc: (<>&quot;Highly recommend this reliable SaaS provider for seamless workflow optimization.&quot;</>),
   },
   {
      id: 4,
      title: "Zubayer Hasan",
      country: "India",
      avatar: avatar_4,
      desc: (<>“Exceptional service and quality. Exceeded expectations. Recommend for future projects.”</>),
   },
];

const setting = {
   slidesPerView: 3,
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
      '992': {
         slidesPerView: 3,
      },
      '768': {
         slidesPerView: 2,
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
      <div className="feedback-section-three mt-180 xl-mt-150 lg-mt-80">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-5 col-md-6">
                  <h3 className="m0">12,0000+</h3>
                  <p className="text1">Customer love our product</p>
               </div>
               <div className="col-lg-5 col-md-6 ms-auto">
                  <div className="d-inline-flex position-relative z-1 sm-mt-40">
                     <Image src={avatar_1} alt="" className="rounded-circle avatar-group" />
                     <Image src={avatar_2} alt="" className="rounded-circle avatar-group" />
                     <Image src={avatar_3} alt="" className="rounded-circle avatar-group" />
                     <Image src={avatar_4} alt="" className="rounded-circle avatar-group" />
                     <Image src={shape} alt="" className="shapes shape_01" />
                  </div>
                  <p className="fs-24 text-dark mt-20 lg-mt-10">Client satisfaction speaks louder than our words. Hear from them.</p>
               </div>
            </div>
         </div>
         <div className="container">
            <div className="slider-wrapper mt-80 lg-mt-40 mb-130 lg-mb-80">
               <Swiper {...setting} modules={[Autoplay]} className="feedback-slider-two">
                  {testi_data.map((item) => (
                     <SwiperSlide key={item.id} className="item">
                        <div className="feedback-block-two">
                           <blockquote>{item.desc}</blockquote>
                           <div className="d-flex align-items-center justify-content-between">
                              <div>
                                 <h6>{item.title}</h6>
                                 <span>{item.country}</span>
                              </div>
                              <Image src={item.avatar} alt="" className="rounded-circle client-avatar" />
                           </div>
                        </div>
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </div>
         <Brand />
      </div>
   )
}

export default Feedback
