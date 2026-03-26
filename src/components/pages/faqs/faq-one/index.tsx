import FooterOne from "@/layouts/footers/FooterOne"
import FaqArea from "./FaqArea"
import FaqBanner from "./FaqBanner"
import HeaderOne from "@/layouts/headers/HeaderOne"

const FaqOne = () => {
  return (
    <div className="main-page-wrapper dark-bg p-30">
      <HeaderOne />
      <FaqBanner />
      <FaqArea />
      <FooterOne />
    </div>
  )
}

export default FaqOne
