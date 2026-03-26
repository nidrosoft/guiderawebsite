import Feedback from "@/components/homes/home-1/Feedback"
import BlockFeature from "./BlockFeature"
import Faq from "./Faq"
import ServiceArea from "./ServiceArea"
import FancyBanner from "@/components/homes/home-1/FancyBanner"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"

const ServiceOne = () => {
  return (
    <div className="main-page-wrapper dark-bg p-30">
      <HeaderOne />
      <BlockFeature />
      <ServiceArea />
      <Faq />
      <Feedback />
      <FancyBanner />
      <FooterOne />
    </div>
  )
}

export default ServiceOne
