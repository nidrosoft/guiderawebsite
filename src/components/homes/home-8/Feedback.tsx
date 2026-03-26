"use client"
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from "next/image";
import { Pagination } from 'swiper/modules';

import icon from "@/assets/images/icon/icon_37.svg"
import thumb from "@/assets/images/media/img_20.png"

interface DataType {
   id: number;
   desc: JSX.Element;
   name: string;
   designation: string;
   review: string;
}

const setting = {
   slidesPerView: 1,
   loop: true,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   pagination: {
      clickable: true,
   },
   navigation: false,
};

const testi_data: DataType[] = [
   {
      id: 1,
      desc: (<>&quot;Extraordinary performance! Quick solutions. Highly recommended.&quot;</>),
      name: "Stefan Jong,",
      designation: "Senior Officer, Arong",
      review: "5.00 (27k Reviews)"
   },
   {
      id: 2,
      desc: (<>&quot;Extraordinary performance! Quick solutions. Highly recommended.&quot;</>),
      name: "Stefan Jong,",
      designation: "Senior Officer, Arong",
      review: "5.00 (27k Reviews)"
   },
   {
      id: 3,
      desc: (<>&quot;Extraordinary performance! Quick solutions. Highly recommended.&quot;</>),
      name: "Stefan Jong,",
      designation: "Senior Officer, Arong",
      review: "5.00 (27k Reviews)"
   },
];

const Feedback = () => {
   return (
      <div className="feedback-section-eight position-relative bg-twelve z-1 pt-150 lg-pt-80 pb-170 lg-pb-80 mt-180 xl-mt-150 lg-mt-80">
         <div className="container">
            <div className="wrapper">
               <div className="row align-items-center">
                  <div className="col-lg-7 order-lg-last">
                     <Image src={icon} alt="" />
                     <Swiper {...setting} modules={[Pagination]} className="feedback-slider-five">
                        {testi_data.map((item) => (
                           <SwiperSlide key={item.id} className="item">
                              <blockquote className="font-Montserrat">{item.desc}</blockquote>
                              <div className="name fs-24 text-dark">
                                 <h6>{item.name}</h6>
                                 <span>{item.designation}</span>
                              </div>
                              <ul className="style-none d-flex align-items-center rating">
                                 <li><i className="bi bi-star-fill"></i></li>
                                 <li><i className="bi bi-star-fill"></i></li>
                                 <li><i className="bi bi-star-fill"></i></li>
                                 <li><i className="bi bi-star-fill"></i></li>
                                 <li><i className="bi bi-star-fill"></i></li>
                                 <li>{item.review}</li>
                              </ul>
                           </SwiperSlide>
                        ))}
                     </Swiper>
                  </div>
                  <div className="col-lg-5">
                     <Image src={thumb} alt="" className="m-auto ms-xl-0 md-mt-40" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Feedback
