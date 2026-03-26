import Image from "next/image"
import Link from "next/link"

import thumb from "@/assets/images/assets/card_09.png"

const Hero = () => {
   return (
      <div className="hero-banner-five z-1 position-relative">
         <div className="wrapper position-relative z-1 pt-200 md-pt-150 pb-130 lg-pb-80">
            <div className="container">
               <div className="row">
                  <div className="col-lg-6 col-md-8">
                     <div className="badge-tag mt-30">#1 App in the market</div>
                     <h1 className="hero-heading">work <span>project</span> share</h1>
                     <p className="fs-28 font-manrope pt-35 pb-20 pe-xxl-5">Seamlessly integrate teams, tasks, & documents with the all-in-one piku app.</p>

                     <div className="d-flex align-items-center flex-wrap">
                        <Link href="/" className="btn-thirteen mt-10 me-3">Start your free trial</Link>
                        <Link className="btn-fourteen mt-10" data-fancybox href="https://www.youtube.com/embed/aXFSJTjVjw0">Watch Video</Link>
                     </div>
                  </div>
               </div>
            </div>
            <Image src={thumb} alt="" className="illustration" />

            <div className="container">
               <div className="d-flex align-items-center justify-content-between flex-wrap mt-100 lg-mt-60 md-mt-40">
                  <div className="fact-feature mt-30 d-flex align-items-center">
                     <div className="icon d-flex align-items-center justify-content-center rounded-circle" style={{ borderColor: "#00DBE4", color: "#00DBE4" }}><i className="bi bi-check-lg"></i></div>
                     <h3>60x Faster Project set up time</h3>
                  </div>
                  <div className="fact-feature mt-30 d-flex align-items-center">
                     <div className="icon d-flex align-items-center justify-content-center rounded-circle" style={{ borderColor: "#FFD542", color: "#FFD542" }}><i className="bi bi-check-lg"></i></div>
                     <h3>Witness a 70% boost in productivity.</h3>
                  </div>
                  <div className="fact-feature mt-30 d-flex align-items-center">
                     <div className="icon d-flex align-items-center justify-content-center rounded-circle" style={{ borderColor: "#EF62E9", color: "#EF62E9" }}><i className="bi bi-check-lg"></i></div>
                     <h3>Save 4,000+ hours each year.</h3>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Hero
