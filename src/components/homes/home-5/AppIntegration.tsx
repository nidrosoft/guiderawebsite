"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import logo_1 from "@/assets/images/logo/p_logo_40.png"
import logo_2 from "@/assets/images/logo/p_logo_41.png"
import logo_3 from "@/assets/images/logo/p_logo_42.png"
import logo_4 from "@/assets/images/logo/p_logo_43.png"
import logo_5 from "@/assets/images/logo/p_logo_44.png"
import logo_6 from "@/assets/images/logo/p_logo_45.png"
import logo_7 from "@/assets/images/logo/p_logo_46.png"

interface DataType {
   id: number;
   bg: string;
   logo: StaticImageData;
}

const logo_data: DataType[] = [
   {
      id: 1,
      bg: "#91C400",
      logo: logo_1,
   },
   {
      id: 2,
      bg: "#9F54FF",
      logo: logo_2,
   },
   {
      id: 3,
      bg: "#31D9EC",
      logo: logo_3,
   },
   {
      id: 4,
      bg: "#FE65E5",
      logo: logo_4,
   },
   {
      id: 5,
      bg: "#4EE265",
      logo: logo_5,
   },
   {
      id: 6,
      bg: "#F5DC00",
      logo: logo_6,
   },
   {
      id: 7,
      bg: "#FF7F54",
      logo: logo_7,
   },
   {
      id: 8,
      bg: "#31D9EC",
      logo: logo_3,
   },
   {
      id: 9,
      bg: "#FE65E5",
      logo: logo_4,
   },
];

const setting = {
   slidesPerView: 8,
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
         slidesPerView: 8,
         spaceBetween: 20,
      },
      '1200': {
         slidesPerView: 6,
      },
      '992': {
         slidesPerView: 6,
      },
      '768': {
         slidesPerView: 5,
      },
      '576': {
         slidesPerView: 4,
      },
      '0': {
         slidesPerView: 3,
         spaceBetween: 20,
      },
   },
};

const AppIntegration = () => {
   return (
      <div className="app-integration-one mt-170 xl-mt-150 lg-mt-80">
         <div className="container">
            <div className="row">
               <div className="col-xl-11 m-auto">
                  <div className="title-four text-center mb-95 lg-mb-40">
                     <div className="text-uppercase mb-10">INTEGRATION</div>
                     <h2 className="fw-bold">Piku integrates tools, services, simplifying workflow.</h2>
                  </div>
               </div>
            </div>
         </div>

         <div className="logo-wrapper">
            <Swiper {...setting} modules={[Autoplay]} className="partner-logo-two">
               {logo_data.map((item) => (
                  <SwiperSlide key={item.id} className="item">
                     <div className="logo-box d-flex align-items-center justify-content-center" style={{ background: item.bg }}><Image src={item.logo} alt="" /></div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>

         <div className="text-center mt-75 lg-mt-40">
            <p className="fs-28 font-manrope text-dark mb-25">Connect more than 6000+ tools</p>
            <Link href="/" className="btn-fifteen">Explore All</Link>
         </div>
      </div>
   )
}

export default AppIntegration
