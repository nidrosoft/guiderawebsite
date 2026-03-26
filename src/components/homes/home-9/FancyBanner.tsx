import Image from "next/image"

import fancy_thumb from "@/assets/images/assets/ils_25.svg"

const FancyBanner = () => {
   return (
      <>
         <div className="fancy-banner-ten mt-250 xl-mt-200 md-mt-130">
            <div className="container lg">
               <div className="wrapper">
                  <Image src={fancy_thumb} alt="" className="illustration" />
                  <div className="row">
                     <div className="col-xl-7 col-lg-6">
                        <div className="d-flex flex-wrap align-items-center">
                           <a className="video-btn tran3s rounded-circle d-flex align-items-center justify-content-center" data-fancybox="" href="https://www.youtube.com/embed/aXFSJTjVjw0"><i className="fa-sharp fa-solid fa-play"></i></a>
                           <h2>Win online business with piku.</h2>
                        </div>
                     </div>
                     <div className="col-xl-5 col-lg-6">
                        <p className="fs-24 text-dark md-mt-30">Elevate your online business success with our expert guidance & reliable hosting services. Let&apos;s win together!&quot;</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default FancyBanner
