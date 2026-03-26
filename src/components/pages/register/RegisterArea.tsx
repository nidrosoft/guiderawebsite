import RegisterForm from "@/components/forms/RegisterForm"
import Image from "next/image"
import Link from "next/link"

import icon_1 from "@/assets/images/icon/google.png"
import icon_2 from "@/assets/images/icon/facebook.png"
import shape from "@/assets/images/shape/shape_94.svg"

const RegisterArea = () => {
   return (
      <div className="login-page position-relative z-1 d-flex align-items-center justify-content-center">
         <div className="bg-wrapper">
            <div className="user-data-form ">
               <div className="form-wrapper">
                  <div className="mb-30 text-center">
                     <h2>Register</h2>
                     <p>Already have an account? <Link href="/login">Login</Link></p>
                  </div>
                  <RegisterForm />
                  <div className="d-flex align-items-center justify-content-center mb-10">
                     <span className="pe-3 ps-3 fs-6">OR</span>
                  </div>
                  <div className="row">
                     <div className="col-sm-6">
                        <Link href="#" className="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10">
                           <Image src={icon_1} alt="" />
                           <span className="ps-3">Signup with Google</span>
                        </Link>
                     </div>
                     <div className="col-sm-6">
                        <Link href="#" className="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10">
                           <Image src={icon_2} alt="" />
                           <span className="ps-3">Signup with Facebook</span>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <p className="copyright-text"> <span className="fw-500">@2024 Piku inc.</span> All Right Reserved</p>
         <Image src={shape} alt="" className="shapes shape_01" />
      </div>
   )
}

export default RegisterArea
