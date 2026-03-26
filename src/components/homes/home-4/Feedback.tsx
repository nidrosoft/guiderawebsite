"use client"
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from "next/image";
import { Pagination, Autoplay } from 'swiper/modules';

import img_1 from "@/assets/images/assets/ils_19.png"
import img_2 from "@/assets/images/media/img_14.png"

interface DataType {
   id: number,
   title: JSX.Element;
   desc: JSX.Element;
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
      title: (<><span>Stefan Jong,</span> Miami</>),
      desc: (<>Game-changer! Boosted efficiency, simplified tasks, and saved time. Highly recommended!</>),
   },
   {
      id: 2,
      title: (<><span>Stefan Jong,</span> Miami</>),
      desc: (<>Game-changer! Boosted efficiency, simplified tasks, and saved time. Highly recommended!</>),
   },
   {
      id: 3,
      title: (<><span>Stefan Jong,</span> Miami</>),
      desc: (<>Game-changer! Boosted efficiency, simplified tasks, and saved time. Highly recommended!</>),
   },
];

const Feedback = () => {
   return (
      <div className="feedback-section-four p-30 mt-150 xl-mt-130 lg-mt-80">
         <div className="bg-ten pt-130 lg-pt-80 pb-130 lg-pb-80">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-6 order-lg-last">
                     <div className="ms-xl-5 ms-lg-4 ps-xxl-3">
                        <div className="title mb-60 lg-mb-30">
                           <h2>Amazing!</h2>
                           <p className="fs-24 text-uppercase text-dark">BEST CRM SOFTWARE</p>
                        </div>
                        <Swiper {...setting} modules={[Pagination, Autoplay]} className="feedback-slider-three">
                           {testi_data.map((item) => (
                              <SwiperSlide key={item.id} className="item">
                                 <div className="feedback-block-three">
                                    <blockquote>{item.desc}</blockquote>
                                    <div className="client-info fs-22 text-dark">{item.title}</div>
                                 </div>
                              </SwiperSlide>
                           ))}
                        </Swiper>
                        <ul className="rating d-flex align-items-center flex-wrap style-none mt-70 md-mt-40">
                           <li><i className="fa-sharp fa-solid fa-star-sharp"></i></li>
                           <li><i className="fa-sharp fa-solid fa-star-sharp"></i></li>
                           <li><i className="fa-sharp fa-solid fa-star-sharp"></i></li>
                           <li><i className="fa-sharp fa-solid fa-star-sharp"></i></li>
                           <li><i className="fa-sharp fa-solid fa-star-sharp"></i></li>
                           <li><span><strong>5.00</strong> (27k Reviews)</span></li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-6 order-lg-first">
                     <div className="media position-relative md-mt-40">
                        <Image src={img_1} alt="" />
                        <div className="card-wrapper d-flex align-items-center">
                           <Image src={img_2} alt="" className="h-100" />
                           <div className="ps-4">
                              <h2>32,0000+</h2>
                              <p className="fs-24 text-dark m0">Total Clients</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Feedback
