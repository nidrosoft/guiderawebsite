"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

import shape_1 from "@/assets/images/shape/shape_34.svg"
import slider_1 from "@/assets/images/media/img_02.jpg"
import slider_2 from "@/assets/images/media/img_03.jpg"
import slider_3 from "@/assets/images/media/img_04.jpg"
import slider_4 from "@/assets/images/media/img_05.jpg"
import slider_5 from "@/assets/images/media/img_06.jpg"
import slider_6 from "@/assets/images/media/img_07.jpg"
import slider_7 from "@/assets/images/media/img_08.jpg"
import slider_8 from "@/assets/images/media/img_09.jpg"

const slider_data1: StaticImageData[] = [slider_1, slider_2, slider_3, slider_4, slider_2];
const slider_data2: StaticImageData[] = [slider_5, slider_6, slider_7, slider_8, slider_6];

const setting1 = {
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
      '1200': {
         slidesPerView: 4,
      },
      '768': {
         slidesPerView: 3,
      },
      '0': {
         slidesPerView: 2,
      },
   },
};
const setting2 = {
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
      '1200': {
         slidesPerView: 4,
      },
      '768': {
         slidesPerView: 3,
      },
      '0': {
         slidesPerView: 2,
      },
   },
};

const BLockFeatureFour = () => {
   return (
      <div className="block-feature-eleven z-1 bg-seven pt-150 lg-pt-80 mt-150 lg-mt-80">
         <div className="container">
            <div className="row">
               <div className="col-lg-6">
                  <div className="title-five md-mb-20">
                     <h2 className="text-white">Design & Built website</h2>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="position-relative z-1 ps-xl-5">
                     <p className="font-manrope text-white fs-28 fw-500 pb-15">Pickup from 13,000+ stunning template library start building now!</p>
                     <ul className="style-none d-flex flex-wrap align-items-center">
                        <li className="me-4 mt-10"><Link href="/project-v3" className="btn-nine">Explore All</Link></li>
                        <li className="mt-10"><Link href="/project-details" className="btn-ten">Become an expert</Link></li>
                     </ul>
                     <Image src={shape_1} alt="" className="shapes shape_01" />
                  </div>
               </div>
            </div>
         </div>

         <div className="slide-one pr-slide mt-100 lg-mt-50">
            <Swiper {...setting1} modules={[Autoplay]} className="pr-slider-one">
               {slider_data1.map((item, i) => (
                  <SwiperSlide key={i} className="item">
                     <Link href="/" className="d-block"><Image src={item} alt="" className="w-100" /></Link>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>

         <div className="slide-two pr-slide mt-50 lg-mt-30">
            <Swiper {...setting2} modules={[Autoplay]} className="pr-slider-one">
               {slider_data2.map((item, i) => (
                  <SwiperSlide key={i} className="item">
                     <Link href="/" className="d-block"><Image src={item} alt="" className="w-100" /></Link>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </div>
   )
}

export default BLockFeatureFour
