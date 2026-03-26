"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image, { StaticImageData } from "next/image"

import hero_thumb from "@/assets/images/assets/ils_15.svg"

import brand_1 from "@/assets/images/logo/p_logo_01.png"
import brand_2 from "@/assets/images/logo/p_logo_02.png"
import brand_3 from "@/assets/images/logo/p_logo_03.png"
import brand_4 from "@/assets/images/logo/p_logo_04.png"
import brand_5 from "@/assets/images/logo/p_logo_05.png"
import brand_6 from "@/assets/images/logo/p_logo_06.png"

const brand_data: StaticImageData[] = [brand_1, brand_2, brand_3, brand_4, brand_5, brand_6, brand_3, brand_4];

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

const Hero = () => {
   return (
      <div className="hero-banner-four p-30 z-1 position-relative">
         <div className="bg-eight wrapper position-relative">
            <div className="container">
               <div className="row">
                  <div className="col-lg-6 col-md-10">
                     <h1 className="hero-heading font-Playfair">Develop lasting client relations  </h1>
                     <p className="fs-28 text-dark pt-15 pb-35 md-pb-20 pe-xxl-5 me-xxl-5">Piku delivered blazing performance, fast striking word soludtion</p>
                     <form onSubmit={(e) => e.preventDefault()} className="position-relative">
                        <input type="email" placeholder="Your Email address..." />
                        <button className="tran3s">Get Started</button>
                     </form>
                  </div>
                  <div className="col-lg-6">
                     <Image src={hero_thumb} alt="" className="illustration" />
                  </div>
               </div>

               <div className="client-logo-wrapper mt-100 lg-mt-50">
                  <div className="container">
                     <p className="fs-22 fw-500 text-dark mb-50 lg-mb-20">Trusted by over 5,000 businesses</p>
                     <Swiper {...setting} modules={[Autoplay]} className="partner-logo-one">
                        {brand_data.map((brand, i) => (
                           <SwiperSlide key={i} className="item"><Image src={brand} alt="" /></SwiperSlide>
                        ))}
                     </Swiper>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Hero
