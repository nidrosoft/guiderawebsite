import Link from "next/link"

const FancyBanner = () => {
   return (
      <div className="fancy-banner-five position-relative z-1 mt-150 lg-mt-80">
         <div className="wrapper position-relative z-1 pt-110 lg-pt-80 pb-120 lg-pb-80">
            <div className="container">
               <div className="row">
                  <div className="col-xl-10 col-lg-9 m-auto text-center">
                     <div className="title-eight">
                        <h2 className="text-white"><span>300k+ </span> clients have our piku.Try it now!</h2>
                     </div>
                     <p className="text-white fs-28 font-manrope pe-xxl-4 mt-30 mb-55">Try it risk free — we don’t charge cancellation fees.</p>
                     <Link href="/" className="btn-thirteen">Let’s Get Started</Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default FancyBanner
