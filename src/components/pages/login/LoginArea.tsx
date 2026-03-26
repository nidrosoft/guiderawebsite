import LoginForm from "@/components/forms/LoginForm"
import Image from "next/image"

import shape from "@/assets/images/shape/shape_94.svg"
import Link from "next/link"

const LoginArea = () => {
   return (
      <div className="login-page position-relative z-1 d-flex align-items-center justify-content-center">
         <div className="bg-wrapper">
            <div className="user-data-form ">
               <div className="form-wrapper">
                  <div className="mb-50 sm-mb-30">
                     <h2>Login</h2>
                     <p>Don’t have any account? <Link href="/signup">Register</Link></p>
                  </div>
                  <LoginForm />
               </div>
            </div>
         </div>
         <p className="copyright-text"> <span className="fw-500">@2024 Piku inc.</span> All Right Reserved</p>
         <Image src={shape} alt="" className="shapes shape_01" />
      </div>
   )
}

export default LoginArea
