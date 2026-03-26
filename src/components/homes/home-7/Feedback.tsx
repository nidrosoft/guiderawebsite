"use client"
import { Swiper, SwiperSlide } from 'swiper/react'
import Image, { StaticImageData } from "next/image";
import { Pagination } from 'swiper/modules';

import icon_1 from "@/assets/images/icon/icon_37.svg"
import icon_2 from "@/assets/images/shape/shape_75.png"
import thumb from "@/assets/images/media/img_19.png"
import shape from "@/assets/images/shape/shape_76.png"

interface DataType {
   id: number;
   icon: StaticImageData;
   desc: JSX.Element;
   name: JSX.Element;
}

const testi_data: DataType[] = [
   {
      id: 1,
      icon: icon_2,
      desc: (<>&quot;Extraordinary performance! <span style={{ color: "#EE21B2" }}>Quick</span> <span style={{ color: "#00D770" }}>solutions.</span> Highly recommended.&quot;</>),
      name: (<><span className="fw-500">Stefan Jong,</span> Miami</>),
   },
   {
      id: 2,
      icon: icon_2,
      desc: (<>&quot;Extraordinary performance! <span style={{ color: "#EE21B2" }}>Quick</span> <span style={{ color: "#00D770" }}>solutions.</span> Highly recommended.&quot;</>),
      name: (<><span className="fw-500">Stefan Jong,</span> Miami</>),
   },
   {
      id: 3,
      icon: icon_2,
      desc: (<>&quot;Extraordinary performance! <span style={{ color: "#EE21B2" }}>Quick</span> <span style={{ color: "#00D770" }}>solutions.</span> Highly recommended.&quot;</>),
      name: (<><span className="fw-500">Stefan Jong,</span> Miami</>),
   },
];

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

const Feedback = () => {
   return (
      <div className="feedback-section-seven position-relative z-1 mt-225 xl-mt-150">
         <div className="container xl">
            <div className="row align-items-center">
               <div className="col-lg-7 order-lg-last">
                  <div className="ps-lg-5">
                     <Image src={icon_1} alt="" />
                     <div className="feedback-slider-five">
                        <Swiper {...setting} modules={[Pagination]}>
                           {testi_data.map((item) => (
                              <SwiperSlide key={item.id} className="item">
                                 <blockquote className="font-Montserrat">{item.desc}</blockquote>
                                 <div className="name fs-24 text-dark">{item.name}</div>
                                 <Image src={item.icon} alt="" />
                              </SwiperSlide>
                           ))}
                        </Swiper>
                     </div>
                  </div>
               </div>
               <div className="col-lg-5 col-md-8 m-auto">
                  <div className="img-box position-relative z-1 md-mt-40">
                     <Image src={thumb} alt="" className="position-relative" />
                     <ul className="rating-card style-none d-flex align-items-center">
                        <li><i className="bi bi-star-fill"></i></li>
                        <li><i className="bi bi-star-fill"></i></li>
                        <li><i className="bi bi-star-fill"></i></li>
                        <li><i className="bi bi-star-fill"></i></li>
                        <li><i className="bi bi-star-fill"></i></li>
                        <li>5.00 (27k Reviews)</li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
         <Image src={shape} alt="" className="shapes shape_01" />
      </div>
   )
}

export default Feedback
