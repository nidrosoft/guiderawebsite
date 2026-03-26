import Image from "next/image"
import shape from "@/assets/images/shape/shape_89.svg"

const ContactBanner = () => {
   return (
      <div className="inner-banner-two bg-one border-30 z-1 pt-100 lg-pt-60 pb-90 lg-pb-50 mt-30 lg-mt-20 position-relative">
         <div className="container">
            <div className="title-one text-center">
               <h2>Contact Us</h2>
            </div>
         </div>
         <Image src={shape} alt="" className="shapes shape_01" />
      </div>
   )
}

export default ContactBanner
