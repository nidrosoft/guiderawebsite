import Image from "next/image"

import icon_1 from "@/assets/images/icon/icon_43.svg"
import icon_2 from "@/assets/images/icon/icon_44.svg"
import icon_3 from "@/assets/images/icon/icon_45.svg"
import ContactFormOne from "@/components/forms/ContactFormOne"

const ContactArea = () => {
   return (
      <div className="contact-section-two bg-one position-relative z-1 pt-110 lg-pt-80 pb-120 lg-pb-80 border-30 mb-30 lg-mb-20 mt-30 lg-mt-20">
         <div className="contact-banner-one">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-xl-3 col-lg-4">
                     <div className="block d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center rounded-circle"><Image src={icon_1} alt="" /></div>
                        <div className="text">
                           <div className="title">We’r happy to help</div>
                           <span className="fs-20">ask@homy.com</span>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-4">
                     <div className="block d-flex align-items-center justify-content-lg-center position-relative z-1 skew-line pt-5 pb-5 md-mt-20 md-mb-20">
                        <div className="d-flex align-items-center">
                           <div className="icon d-flex align-items-center justify-content-center rounded-circle"><Image src={icon_2} alt="" /></div>
                           <div className="text">
                              <div className="title">Hotline number</div>
                              <span className="fs-20">+757 699 4478,  +991 377 9731</span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-3 col-lg-4">
                     <div className="block d-flex align-items-center ps-xl-5">
                        <div className="icon d-flex align-items-center justify-content-center rounded-circle"><Image src={icon_3} alt="" /></div>
                        <div className="text">
                           <div className="title">Live chat</div>
                           <span className="fs-20">www.pikuchat.com</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="container">
            <div className="form-style-one mt-120 lg-mt-80">
               <h3 className="font-Montserrat text-center pb-20">Any inquiries? Send us message</h3>
               <ContactFormOne />
            </div>
         </div>
      </div>
   )
}

export default ContactArea
