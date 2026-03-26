import Image from "next/image"
import Link from "next/link"

import img_1 from "@/assets/images/assets/ils_26.png"
import img_2 from "@/assets/images/shape/shape_93.svg"

const ErrorArea = () => {
   return (
      <div className="error-page bg-one border-30 z-1 pt-130 pb-90 md-pb-40 mt-30 lg-mt-20 position-relative">
         <div className="container">
            <div className="row">
               <div className="col-lg-6 col-md-7 col-sm-8">
                  <h2>404</h2>
                  <h3>Page Not Found </h3>
                  <p className="fs-24 pe-xxl-5 mt-30 mb-35">Publishing industries for previewing layouts & visual mockups used.</p>

                  <Link href="/" className="btn-seven">Go Back</Link>
               </div>
            </div>
         </div>
         <Image src={img_1} alt="" className="illustration" />
         <Image src={img_2} alt="" className="shapes shape_01" />
      </div>
   )
}

export default ErrorArea
