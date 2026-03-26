import Link from "next/link"

const BlockFeature = () => {
   return (
      <div className="block-feature-twentyEight mt-100 lg-mt-50">
         <div className="container">
            <div className="block-feature text-center border-2 border-bottom border-dark pb-130 lg-pb-60">
               <div className="row align-items-center">
                  <div className="col-xxl-10 col-lg-9 m-auto">
                     <div className="title-ten">
                        <h2>Secure your small business, from anywhere.</h2>
                     </div>

                  </div>
                  <div className="col-xl-6 m-auto">
                     <p className="fs-24 mt-25 mb-35">Enjoy peace of mind knowing your business’s devices and customer data are more secure.</p>
                  </div>
               </div>
               <Link href="/" className="btn-nineteen">Learn More</Link>
            </div>
         </div>
      </div>
   )
}

export default BlockFeature
