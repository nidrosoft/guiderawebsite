import Link from "next/link"

const PricingBanner = () => {
   return (
      <div className="inner-banner-three z-1 position-relative">
         <div className="wrapper text-center position-relative z-1 pt-200 xl-pt-150 pb-120 xl-pb-100 lg-pb-80">
            <div className="container">
               <h2>Our <span>Pricing</span></h2>
               <ul className="style-none d-flex align-items-center justify-content-center">
                  <li><Link href="/home-five">Home</Link></li>
                  <li>/</li>
                  <li>Pricing</li>
               </ul>
            </div>
         </div>
      </div>
   )
}

export default PricingBanner
