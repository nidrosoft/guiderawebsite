import Image from "next/image"
import Link from "next/link"

import logo from "@/assets/images/logo/logo_02.svg"

const LoginHeader = () => {
   return (
      <header className="theme-main-menu menu-style-two sticky-menu menu-overlay">
         <div className="inner-content gap-one">
            <div className="top-header position-relative">
               <div className="d-flex align-items-center justify-content-between">
                  <div className="logo order-lg-0">
                     <Link href="/" className="d-flex align-items-center">
                        <Image src={logo} alt="" />
                     </Link>
                  </div>
                  <div><Link href="/" className="fw-500 text-dark">Go to home</Link></div>
               </div>
            </div>
         </div>
      </header>
   )
}

export default LoginHeader
