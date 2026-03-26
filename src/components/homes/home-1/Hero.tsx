"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { Autoplay } from 'swiper/modules';

import hero_shape1 from "@/assets/images/shape/shape_01.svg"
import logo_1 from "@/assets/images/logo/p_logo_01.png"
import logo_2 from "@/assets/images/logo/p_logo_02.png"
import logo_3 from "@/assets/images/logo/p_logo_03.png"
import logo_4 from "@/assets/images/logo/p_logo_04.png"
import logo_5 from "@/assets/images/logo/p_logo_05.png"
import logo_6 from "@/assets/images/logo/p_logo_06.png"
import bottom_img from "@/assets/images/assets/ils_01.png"

const logo_data: StaticImageData[] = [logo_1, logo_2, logo_3, logo_4, logo_5, logo_6, logo_4]

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
         slidesPerView: 4,
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
      <div className="hero-banner-one bg-one border-30 z-1 pt-120 lg-pt-80 pb-100 lg-pb-70 mt-30 lg-mt-20 position-relative">
         <div className="container position-relative">
            <div className="row">
               <div className="col-lg-7 col-md-7">
                  <p className="fs-24 fw-500 text-dark mb-10">Apply Now!</p>
                  <h1 className="hero-heading">Global Transfers <span className="d-inline-block position-relative">Quick <Image src={hero_shape1} alt="" className="d-inline-block" /></span>Savings</h1>
                  <div className="row">
                     <div className="col-xxl-8 col-lg-10">
                        <p className="fs-24 text-dark pt-25 pb-30 lg-pb-20 xs-pb-10">Piku delivered blazing performance, fast striking word solution</p>
                     </div>
                  </div>
                  <ul className="style-none d-flex align-items-center flex-wrap">
                     <li className="mt-10"><Link href="/" className="btn-one me-4">Let’s Started</Link></li>
                     <li className="mt-10"><Link href="/" className="btn-two xl">Apply Now</Link></li>
                  </ul>
                  <p className="fs-22 pt-100 md-pt-50 md-pb-20"><span className="fw-500 text-dark text-decoration-underline">Join 27,000+</span> companies who’ve reached </p>
               </div>
            </div>
         </div>
         <div className="client-logo-wrapper">
            <div className="container">
               <Swiper {...setting} modules={[Autoplay]} className="partner-logo-one">
                  {logo_data.map((logo, i) => (
                     <SwiperSlide key={i} className="item"><Image src={logo} alt="" className="m-auto" /></SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </div>
         <Image src={bottom_img} alt="" className="shapes illustration" />
      </div>
   )
}

export default Hero
