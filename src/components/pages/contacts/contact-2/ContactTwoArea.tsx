import ContactFormTwo from "@/components/forms/ContactFormTwo"
import ContactSupport from "./ContactSupport"
import Image from "next/image"

import icon_1 from "@/assets/images/icon/icon_97.svg"
import icon_2 from "@/assets/images/icon/icon_98.svg"
import icon_3 from "@/assets/images/icon/icon_99.svg"
import shape from "@/assets/images/shape/shape_92.svg"

const ContactTwoArea = () => {
   return (
      <div className="contact-section-three position-relative z-1 mt-130 lg-mt-80 pb-180 lg-pb-80">
         <div className="container">
            <div className="row">
               <div className="col-xl-8 m-auto">
                  <div className="title-two text-center mb-80 lg-mb-40">
                     <h2>Any question? Send us message.</h2>
                  </div>
               </div>
            </div>

            <div className="row gx-xxl-5">
               <div className="col-lg-7 d-flex">
                  <div className="form-style-two w-100">
                     <ContactFormTwo />
                  </div>
               </div>

               <div className="col-lg-5 d-flex">
                  <div className="address-wrapper w-100 ms-xxl-5 mt-10 md-mt-60">
                     <div className="wrapper w-100 h-100">
                        <ul className="style-none">
                           <li>
                              <Image src={icon_1} alt="" />
                              <h6>Our Address</h6>
                              <p>1012 Pebda Parkway, Mirpur dhos Dhaka, Bangladesh</p>
                           </li>
                           <li>
                              <Image src={icon_2} alt="" />
                              <h6>Contact Info</h6>
                              <p>Open a chat or give us call at <br /> <a href="#">(880) 1789456710</a></p>
                           </li>
                           <li>
                              <Image src={icon_3} alt="" />
                              <h6>Live support</h6>
                              <p>Urgent go to live chat portal <br /> <a href="#">www.supportlive.com</a></p>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>

            <ContactSupport />
         </div>
         <Image src={shape} alt="" className="shapes shape_01" />
      </div>
   )
}

export default ContactTwoArea
