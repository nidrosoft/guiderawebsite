/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link"

const ServiceBanner = ({title}:any) => {
   return (
      <div className="inner-banner-one z-1 position-relative gap-40 mt-120 lg-mt-100">
         <div className="bg position-relative z-1 pt-120 xl-pt-100 lg-pt-80 pb-130 xl-pb-100 lg-pb-70">
            <div className="container">
               <h2>{title}</h2>
               <ul className="style-none d-flex align-items-center">
                  <li><Link href="/home-ten">Home</Link></li>
                  <li>/</li>
                  <li>Service</li>
               </ul>
            </div>
         </div>
      </div>
   )
}

export default ServiceBanner
