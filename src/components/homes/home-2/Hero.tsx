"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import Image, { StaticImageData } from "next/image"
import { Autoplay } from 'swiper/modules';

import img_1 from "@/assets/images/assets/ils_04.svg"
import brand_1 from "@/assets/images/logo/p_logo_01.png"
import brand_2 from "@/assets/images/logo/p_logo_02.png"
import brand_3 from "@/assets/images/logo/p_logo_03.png"
import brand_4 from "@/assets/images/logo/p_logo_04.png"
import brand_5 from "@/assets/images/logo/p_logo_05.png"
import brand_6 from "@/assets/images/logo/p_logo_06.png"

import shape_1 from "@/assets/images/shape/shape_11.svg"
import shape_2 from "@/assets/images/shape/shape_12.svg"

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
      '1399': {
         slidesPerView: 5,
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

const Hero = () => {
   return (
      <div className="hero-banner-two z-1 position-relative mt-200 lg-mt-150">
         <div className="container position-relative">
            <div className="row">
               <div className="col-xl-10 col-lg-8 m-auto text-center">
                  <h1 className="hero-heading font-manrope">Generate high-quality post in minutes</h1>
                  <p className="fs-28 font-manrope text-dark pt-5 pb-30 lg-pb-20">Knowledge, answers, ideas. Just a click away</p>
                  <a href="service-v2.html" className="btn-three">Generate Now</a>
               </div>
            </div>
            <Image src={img_1} alt="" className="w-100 mt-70 lg-mt-50" />
         </div>
         <div className="client-logo-wrapper mt-80 lg-mt-40">
            <div className="container">
               <p className="font-manrope fs-24 fw-500 text-center mb-40">Over <span className="fw-600 text-dark">32K+</span> software businesses growing with piku</p>
               <Swiper {...setting} modules={[Autoplay]} className="partner-logo-one">
                  {brand_data.map((item, i) => (
                     <SwiperSlide key={i} className="item"><Image src={item} alt="" className="m-auto" /></SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </div>
         <Image src={shape_1} alt="" className="shapes shape_01" />
         <Image src={shape_2} alt="" className="shapes shape_02" />
      </div>
   )
}

export default Hero
