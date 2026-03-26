import Image from "next/image"
import thumb from "@/assets/images/assets/ils_24.svg"
import Link from "next/link"

const Hero = () => {
   return (
      <div className="hero-banner-nine z-1 position-relative pt-225 md-pt-150 pb-225 xl-pb-200 md-pb-120">
         <div className="container lg">
            <div className="row">
               <div className="col-lg-6 col-md-8">
                  <h1 className="hero-heading font-Playfair">Easily Create your website Now</h1>
                  <p className="fs-24 text-dark pt-35 lg-pt-30 pb-30 pe-xxl-5">Guaranteeing fast, secure, always-online site for trust from visitors, search engines.</p>
                  <Link href="/" className="btn-eighteen">Start Now</Link>
                  <p className="fs-22 pt-40 lg-pt-20">From <span className="fw-500 text-dark">$3.99/mo.</span> <del>Regular $17.99/mo.</del>  exc VAT</p>
               </div>
            </div>

            <div className="illustration">
               <Image src={thumb} alt="" />
            </div>
         </div>
      </div>
   )
}

export default Hero
