import Image, { StaticImageData } from "next/image";
import icon_1 from "@/assets/images/icon/icon_43.svg"
import icon_2 from "@/assets/images/icon/icon_44.svg"
import icon_3 from "@/assets/images/icon/icon_45.svg"

interface DataType {
   id: number;
   icon: StaticImageData;
   contact_1: string;
   contact_2: string;
   class?: string;
   class_2?: string;
}

const contact_data: DataType[] = [
   {
      id: 1,
      icon: icon_1,
      contact_1: "We’r happy to help",
      contact_2: "ask@homy.com",
   },
   {
      id: 2,
      icon: icon_2,
      contact_1: "Hotline number",
      contact_2: "+757 699 4478,  +991 377 9731",
      class: "justify-content-xl-center position-relative z-1 skew-line pt-5 pb-5 md-mt-20 md-mb-20",
      class_2: "col-xl-6",
   },
   {
      id: 3,
      icon: icon_3,
      contact_1: "Live chat",
      contact_2: "www.pikuchat.com",
      class: "ps-xl-5",
   },
];

const Contact = () => {
   return (
      <div className="contact-banner-one mt-120 lg-mt-80">
         <div className="container">
            <h5 className="text-center font-Montserrat mb-80 lg-mb-40">Don’t find answer? Contact Us</h5>
            <div className="row align-items-center">
               {contact_data.map((item) => (
                  <div key={item.id} className={`${item.class_2 ? "col-xl-6" : "col-xl-3"} col-lg-4`}>
                     <div className={`block d-flex align-items-center ${item.class}`}>
                        <div className="icon d-flex align-items-center justify-content-center rounded-circle"><Image src={item.icon} alt="" /></div>
                        <div className="text">
                           <div className="title">{item.contact_1}</div>
                           <span className="fs-20">{item.contact_2}</span>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Contact
