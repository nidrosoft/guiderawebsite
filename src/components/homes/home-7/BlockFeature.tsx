"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Navigation } from 'swiper/modules';

import icon_1 from "@/assets/images/shape/shape_68.png"
import icon_2 from "@/assets/images/shape/shape_69.png"
import icon_3 from "@/assets/images/shape/shape_70.png"
import icon_4 from "@/assets/images/shape/shape_71.png"

interface DataType {
   id: number;
   bg: string;
   count: string;
   sub_title: string;
   title: JSX.Element;
   icon: StaticImageData;
}

const service_data: DataType[] = [
   {
      id: 1,
      bg: "#FFE073",
      count: "01",
      sub_title: "BUSINESS",
      title: (<>salesforce Marketing, support</>),
      icon: icon_1,
   },
   {
      id: 2,
      bg: "#FF9AE3",
      count: "02",
      sub_title: "MARKETING",
      title: (<>Search Engine Optimization SEO</>),
      icon: icon_2,
   },
   {
      id: 3,
      bg: "#45F08D",
      count: "03",
      sub_title: "WEB DESIGN",
      title: (<>UI/UX <br /> Interface Design</>),
      icon: icon_3,
   },
   {
      id: 4,
      bg: "#A394FF",
      count: "04",
      sub_title: "UI/UX",
      title: (<>Web & <br /> Mobile App Development</>),
      icon: icon_4,
   },
   {
      id: 5,
      bg: "#94E5FF",
      count: "05",
      sub_title: "MARKETING",
      title: (<>Search Engine Optimization SEO</>),
      icon: icon_1,
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
   navigation: {
      nextEl: '.next_a',
      prevEl: '.prev_a',
   },
   pagination: {
      clickable: true,
   },
   breakpoints: {
      '1400': {
         slidesPerView: 4,
      },
      '1200': {
         slidesPerView: 3,
      },
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

const BlockFeature = () => {
   return (
      <div className="block-feature-nineteen mt-130 lg-mt-80">
         <div className="container xl">
            <div className="position-relative">
               <div className="title-three">
                  <h2>Our Services</h2>
               </div>

               <Swiper {...setting} modules={[Navigation]} className="service-slider-one pt-50 lg-pt-30">
                  {service_data.map((item) => (
                     <SwiperSlide key={item.id} className="item">
                        <div className="card-style-nine" style={{ background: item.bg }}>
                           <div className="num fw-500">{item.count}</div>
                           <div className="title text-uppercase">{item.sub_title}</div>
                           <Link href="/project-details" className="service-heading text-uppercase fw-500">{item.title}</Link>
                           <Image src={item.icon} alt="" className="shapes illustration" />
                        </div>
                     </SwiperSlide>
                  ))}
               </Swiper>

               <ul className="slider-arrows slick-arrow-one d-flex justify-content-center style-none">
                  <li className="prev_a slick-arrow"><i className="fa-solid fa-arrow-left-long"></i></li>
                  <li className="next_a slick-arrow"><i className="fa-solid fa-arrow-right-long"></i></li>
               </ul>
            </div>
         </div>
      </div>
   )
}

export default BlockFeature
