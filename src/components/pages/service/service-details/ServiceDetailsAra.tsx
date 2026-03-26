import Image from "next/image"

import img_1 from "@/assets/images/media/img_36.jpg"
import img_2 from "@/assets/images/media/img_37.jpg"
import icon_1 from "@/assets/images/icon/icon_90.svg"
import icon_2 from "@/assets/images/icon/icon_91.svg"
import icon_3 from "@/assets/images/icon/icon_92.svg"

const ServiceDetailsAra = () => {
  return (
   <div className="service-details mt-150 xl-mt-120 lg-mt-80">
			<div className="container">
                <div className="wrapper m-auto">
                    <div className="row">
                        <div className="col-xl-8 m-auto text-center">
                            <div className="title-ten mb-60 lg-mb-30">
                                <h2>Branding & Digital Strategies</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-8">
                            <Image src={img_1} alt="" className="w-100 mt-10"/>
                        </div>
                        <div className="col-sm-4">
                            <Image src={img_2} alt="" className="w-100 mt-10"/>
                        </div>
                    </div>
                    <p className="mt-70 lg-mt-40 mb-40">Risk management and compliance, when approached strategically, have the potential to go beyond mitigating threats and protecting a company’s operations and reputation.</p>

                    <p>Our dedicated risk compliance consulting team assists clients transforming uncertainty into advantageous prospects. We work collaboratively organizations to identify & leverage the potential within their risk & compliance functions, enabling them to thrive in an ever-changing business landscape.</p>

                    <h3>Our Work Strategy</h3>
                    <ul className="style-none list-type-one">
                        <li><span>Market Research -</span> Crafting brand identity with logo, website, and social media design to ensure a strong digital presence and brand recognition.</li>
                        <li><span>Strategy Planning -</span> Utilizing content marketing and ads to bolster brand & engage target audience effectively.</li>
                    </ul>
                    <h3>Work Process</h3>
                    <p>Risk management and compliance, when approached strategically, have the potential to go beyond mitigating threats and protecting a company’s operations and reputation.</p>

                    <div className="bg-wrapper bg-grey mt-40">
                        <div className="row gx-xxl-5">
                            <div className="col-lg-4">
                                <div className="card-style-fifteen text-center mt-25">
                                    <div className="icon d-flex align-items-center justify-content-center border border-2 border-dark rounded-circle"><Image src={icon_1} alt=""/></div>
                                    <h6>Collect Doc</h6>
                                    <p className="ps-xxl-4 pe-xxl-4">We collect require documents & send for check</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card-style-fifteen text-center mt-25">
                                    <div className="icon d-flex align-items-center justify-content-center border border-2 border-dark rounded-circle"><Image src={icon_2} alt=""/></div>
                                    <h6>Check & Finalize</h6>
                                    <p className="ps-xxl-4 pe-xxl-4">We check the documents & send for final approval</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card-style-fifteen text-center mt-25">
                                    <div className="icon d-flex align-items-center justify-content-center border border-2 border-dark rounded-circle"><Image src={icon_3} alt=""/></div>
                                    <h6>Completedy</h6>
                                    <p className="ps-xxl-4 pe-xxl-4">After approve you ready to use your accounts</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3>Are you ready to take our services?</h3>
                    <p> Our dedicated risk compliance consulting team assists clients transforming uncertainty into advantageous prospects. We work collaboratively organizations to identify & leverage the potential within their risk & compliance functions, enabling them to thrive in an ever-changing business landscape.</p>
                </div>
			</div>

		</div>
  )
}

export default ServiceDetailsAra
