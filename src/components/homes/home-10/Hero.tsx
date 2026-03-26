import Image, { StaticImageData } from "next/image"
import Link from "next/link"

import icon_1 from "@/assets/images/icon/icon_62.svg"
import icon_2 from "@/assets/images/icon/icon_63.svg"
import icon_3 from "@/assets/images/icon/icon_64.svg"
import icon_4 from "@/assets/images/icon/icon_65.svg"
import icon_5 from "@/assets/images/icon/icon_66.svg"

interface DataType {
   id: number;
   icon: StaticImageData;
   desc: string;
   title: string;
}

const hero_data: DataType[] = [
   {
      id: 1,
      icon: icon_3,
      desc: "3 Times Award Winner",
      title: "Antivirus"
   },
   {
      id: 2,
      icon: icon_4,
      desc: "Over 12m+ Customers",
      title: "Worldwide"
   },
   {
      id: 3,
      icon: icon_5,
      desc: "We have 20+ years of",
      title: "Experience"
   },
];

const Hero = () => {
   return (
      <div className="hero-banner-ten z-1 position-relative gap-40 mt-120 xl-mt-110 lg-mt-90">
         <div className="bg position-relative z-1 pt-130 lg-pt-80 pb-150 xl-pb-120 lg-pb-80">
            <div className="container lg">
               <div className="row">
                  <div className="col-xxl-5 col-xl-7 col-lg-8 col-md-10">
                     <h1 className="hero-heading font-Montserrat">Opt-in for Cyber Safety, stay secure.</h1>
                     <p className="fs-22 text-dark pt-20 pb-30 lg-pb-10">User-friendly antivirus blocks online threats, includes privacy and identity theft safeguards</p>
                     <ul className="d-flex align-items-center flex-wrap style-none btn-group">
                        <li><Link href="/" className="active"><Image src={icon_1} alt="" /> Download for Mac</Link></li>
                        <li><Link href="/"><Image src={icon_2} alt="" /> Download for Windows</Link></li>
                     </ul>
                     <div className="dm-text mt-15 mb-60 lg-mb-40">Also available for <Link href="/">Android,</Link> and <Link href="/">iOS</Link></div>
                     <div className="fs-24"><span className="fw-500 text-dark text-decoration-underline">Trusted by 27,000+</span> customers around the world</div>
                  </div>
               </div>
            </div>
         </div>

         <div className="border-bottom border-2 border-dark pt-40 lg-pt-20 pb-65 lg-pb-40">
            <div className="container lg">
               <div className="row justify-content-between">
                  {hero_data.map((item) => (
                     <div key={item.id} className="col-lg-4 col-md-6">
                        <div className="card-style-thirteen d-flex w-100 mt-35">
                           <div className="icon d-flex align-items-center justify-content-center border border-2 border-dark rounded-circle"><Image src={item.icon} alt="" /></div>
                           <div className="text">
                              <h6>{item.desc}</h6>
                              <span className="fs-20">{item.title}</span>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default Hero
