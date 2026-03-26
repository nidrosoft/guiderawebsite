"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image, { StaticImageData } from "next/image";
import Count from "@/components/common/Count";
import Link from "next/link";

import icon from "@/assets/images/icon/icon_19.svg"
import logo_1 from "@/assets/images/logo/p_logo_09.png"
import logo_2 from "@/assets/images/logo/p_logo_10.png"
import logo_3 from "@/assets/images/logo/p_logo_11.png"

import shape_1 from "@/assets/images/shape/shape_31.svg"
import shape_2 from "@/assets/images/shape/shape_32.svg"
import shape_3 from "@/assets/images/shape/shape_33.svg"

interface DataType {
   id: number;
   bg_img: string;
   logo: StaticImageData;
   shape: StaticImageData;
   count: JSX.Element;
   title: string;
}

const feature_data: DataType[] = [
   {
      id: 1,
      bg_img: "/assets/images/assets/bg_02.png",
      logo: logo_1,
      shape: shape_1,
      count: (<><div className="main-count">$<span className="counter"><Count number={1.3} /></span>b+</div></>),
      title: "Membership Sale"
   },
   {
      id: 2,
      bg_img: "/assets/images/assets/bg_03.png",
      logo: logo_2,
      shape: shape_2,
      count: (<><div className="main-count"><span className="counter"><Count number={4.0} /></span>X</div></>),
      title: "Smooth Integration"
   },
   {
      id: 3,
      bg_img: "/assets/images/assets/bg_04.png",
      logo: logo_3,
      shape: shape_3,
      count: (<><div className="main-count"><span className="counter"><Count number={1200} /></span>+</div></>),
      title: "Faster Server Speed"
   },
   {
      id: 4,
      bg_img: "/assets/images/assets/bg_05.png",
      logo: logo_1,
      shape: shape_1,
      count: (<><div className="main-count"><span className="counter"><Count number={1.3} /></span>m</div></>),
      title: "Application Views"
   },
   {
      id: 5,
      bg_img: "/assets/images/assets/bg_03.png",
      logo: logo_2,
      shape: shape_2,
      count: (<><div className="main-count"><span className="counter"><Count number={4.0} /></span>X</div></>),
      title: "Smooth Integration"
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
      '1200': {
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

const BLockFeature = () => {
   return (
      <div className="block-feature-eight pt-250 xl-pt-200 md-pt-150 sm-pt-100 pb-180 xl-pb-150 lg-pb-80">
         <div className="container">
            <div className="row">
               <div className="col-lg-6">
                  <div className="title-four md-mb-20">
                     <h2 className="text-white">Trusted choice for 1000+ Firms</h2>
                  </div>
               </div>
               <div className="col-xxl-5 col-lg-6 ms-auto">
                  <p className="font-manrope fs-24 pb-25 text-white">Go paperless. Back up important to all devices, & keep the information not the clutter.</p>
                  <Link href="/about-us-v3" className="btn-eight d-inline-flex align-items-center">More Details <Image src={icon} alt="" className="ms-3" /></Link>
               </div>
            </div>
            <div className="wrapper mt-100 lg-mt-40">
               <Swiper {...setting} modules={[Autoplay]} className="counter-slider-one">
                  {feature_data.map((item) => (
                     <SwiperSlide key={item.id} className="item">
                        <div className="card-style-four position-relative" style={{ backgroundImage: `url(${item.bg_img})` }}>
                           <div className="d-flex justify-content-between align-items-center">
                              <Image src={item.logo} alt="" />
                              <Image src={item.shape} alt="" />
                           </div>
                           {item.count}
                           <p className="font-manrope fs-24 text-dark">{item.title}</p>
                        </div>
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </div>
      </div>
   )
}

export default BLockFeature
