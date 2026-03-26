"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image, { StaticImageData } from "next/image"

import brand_1 from "@/assets/images/logo/p_logo_01.png"
import brand_2 from "@/assets/images/logo/p_logo_02.png"
import brand_3 from "@/assets/images/logo/p_logo_03.png"
import brand_4 from "@/assets/images/logo/p_logo_04.png"
import brand_5 from "@/assets/images/logo/p_logo_05.png"
import brand_6 from "@/assets/images/logo/p_logo_06.png"

const brand_data: StaticImageData[] = [brand_1, brand_2, brand_3, brand_4, brand_5, brand_6, brand_3];

const setting = {
   slidesPerView: 6,
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
         slidesPerView: 6,
      },
      '1200': {
         slidesPerView: 5,
      },
      '768': {
         slidesPerView: 4,
      },
      '576': {
         slidesPerView: 3,
      },
      '0': {
         slidesPerView: 2,
         spaceBetween: 20,
      },
   },
};

const Brand = () => {
   return (
      <div className="client-logo-wrapper border-top border-bottom border-dark border-2 pt-50 lg-pt-30 pb-50 lg-pb-30">
         <div className="container xl">
            <Swiper {...setting} modules={[Autoplay]} className="partner-logo-one">
               {brand_data.map((item, i) => (
                  <SwiperSlide key={i} className="item"><Image src={item} alt="" className="m-auto" /></SwiperSlide>
               ))}
            </Swiper>
         </div>
      </div>
   )
}

export default Brand
