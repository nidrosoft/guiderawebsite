import Image from "next/image"
import Link from "next/link"

import icon from "@/assets/images/icon/icon_73.png"
import thumb from "@/assets/images/media/img_23.jpg"

const BlockFeatureThree = () => {
   return (
      <div className="block-feature mt-180 lg-mt-150 md-mt-120">
         <div className="row align-items-center">
            <div className="col-lg-6 me-auto">
               <div className="title-ten">
                  <div className="fs-22 text-dark mb-15">Secure VPN</div>
                  <h2>Online privacy protection</h2>
               </div>
               <p className="fs-22 mt-40 lg-mt-30 mb-40 lg-mb-30">Piku Secure VPN safeguards your online activities from prying hackers, whether you&apos;re connected to public Wi-Fi or your home network, ensuring privacy.</p>
               <Link href="/service-details" className="btn-nineteen">Learn More</Link>
            </div>
            <div className="col-lg-5 col-md-8 m-auto m-lg-0">
               <div className="img-box position-relative z-1 md-mt-40">
                  <Image src={thumb} alt="" />
                  <div className="card-two">
                     <Image src={icon} alt="" className="m-auto" />
                     <h4>Award winner VPN</h4>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BlockFeatureThree
