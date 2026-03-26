"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import project_thumb1 from "@/assets/images/media/img_67.jpg"
import project_thumb2 from "@/assets/images/media/img_68.jpg"
import project_thumb3 from "@/assets/images/media/img_69.jpg"

interface DataType {
   id: number;
   thumb: StaticImageData;
   tag: string;
   title: string;
}

const project_data: DataType[] = [
   {
      id: 1,
      thumb: project_thumb1,
      tag: "UI DESIGN",
      title: "Website — Banner Exploration"
   },
   {
      id: 2,
      thumb: project_thumb2,
      tag: "Mobile app",
      title: "App — Finance & Banking"
   },
   {
      id: 3,
      thumb: project_thumb3,
      tag: "Application",
      title: "Kindergarten — Online school"
   },
   {
      id: 4,
      thumb: project_thumb2,
      tag: "Mobile app",
      title: "App — Finance & Banking"
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
   navigation: {
      nextEl: '.next_a',
      prevEl: '.prev_a',
   },
   pagination: {
      clickable: true,
   },
};

const ProjectSixArea = () => {
   return (
      <div className="project-section-six position-relative mt-225 lg-mt-150 mb-150 lg-mb-60">
         <div className="container">
            <div className="title-two mb-55 lg-mb-40">
               <h2>Our Projects</h2>
            </div>
         </div>

         <div className="wrapper">
            <Swiper {...setting} modules={[Navigation]} className="project-slider-one">
               {project_data.map((item) => (
                  <SwiperSlide key={item.id} className="item">
                     <div className="project-block-five">
                        <Image src={item.thumb} alt="" className="media-img w-100" />
                        <div className="position-relative">
                           <span>{item.tag}</span>
                           <h4>{item.title}</h4>
                           <Link href="/project-details" className="stretched-link"></Link>
                        </div>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>

         <ul className="slider-arrows slick-arrow-one d-flex justify-content-center style-none">
            <li className="prev_a slick-arrow"><i className="fa-solid fa-arrow-left-long"></i></li>
            <li className="next_a slick-arrow"><i className="fa-solid fa-arrow-right-long"></i></li>
         </ul>
      </div>
   )
}

export default ProjectSixArea
