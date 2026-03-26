import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import logo_1 from "@/assets/images/logo/p_logo_49.png"
import logo_2 from "@/assets/images/logo/p_logo_48.png"
import logo_3 from "@/assets/images/logo/p_logo_47.png"
import shape_1 from "@/assets/images/shape/shape_46.svg"
import shape_2 from "@/assets/images/shape/shape_47.svg"

interface DataType {
   id: number;
   bg: string;
   logo: StaticImageData;
   desc: JSX.Element;
   rating: string;
}

const testi_data: DataType[] = [
   {
      id: 1,
      bg: "#FFDA7C",
      logo: logo_1,
      desc: (<>“Quick solutions coupled with great performance—a recommendation that&apos;s unequivocal”</>),
      rating: "4.8 Excellent",
   },
   {
      id: 2,
      bg: "#FF90ED",
      logo: logo_2,
      desc: (<>“Quick solutions coupled with great performance—a recommendation that&apos;s unequivocal”</>),
      rating: "4.8 Excellent",
   },
   {
      id: 3,
      bg: "#85F8F1",
      logo: logo_3,
      desc: (<>“Quick solutions coupled with great performance—a recommendation that&apos;s unequivocal”</>),
      rating: "4.8 Excellent",
   },
]

const Feedback = () => {
   return (
      <div className="feedback-section-five position-relative z-1 mt-150 lg-mt-80">
         <div className="wrapper position-relative z-1 pt-150 lg-pt-80 pb-150 lg-pb-80">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-6">
                     <div className="title-eight pe-xxl-3">
                        <h2 className="text-white">Join our <span>30,000+ </span> lovely Community.</h2>
                     </div>
                     <p className="text-white fs-28 font-manrope pe-xxl-4 mt-30 mb-55 md-mb-40">More than 20k client using our product with love. Hear from them what they say.</p>
                     <Link href="/" className="btn-thirteen">Join Now!</Link>
                  </div>
                  <div className="col-lg-6">
                     <div className="feedback-wrapper md-mt-50">
                        {testi_data.map((item) => (
                           <div key={item.id} className="feedback-block" style={{ background: item.bg }}>
                              <Image src={item.logo} alt="" className="logo" />
                              <blockquote>{item.desc}</blockquote>
                              <div className="d-flex align-items-center justify-content-between">
                                 <div className="rating">{item.rating}</div>
                                 <ul className="style-none d-flex">
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                 </ul>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Image src={shape_1} alt="" className="shapes shape_01" />
         <Image src={shape_2} alt="" className="shapes shape_02" />
      </div>
   )
}

export default Feedback
