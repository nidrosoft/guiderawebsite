import Link from "next/link"

const FancyBanner = () => {
   return (
      <div className="fancy-banner-eleven mt-150 xl-mt-130 lg-mt-80 gap-40">
         <div className="bg-wrapper position-relative z-1 pt-120 lg-pt-80 pb-120 lg-pb-80">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-7">
                     <div className="title-ten">
                        <h2>Secure your small business, from anywhere.</h2>
                     </div>
                     <p className="fs-24 text-dark mt-35 mb-35">Enjoy peace of mind knowing your business’s devices and customer data are more secure.</p>
                     <Link href="/" className="btn-nineteen">Get Started</Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default FancyBanner
