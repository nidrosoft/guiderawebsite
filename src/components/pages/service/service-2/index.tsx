import FooterTwo from "@/layouts/footers/FooterTwo"
import BLockFeature from "./BLockFeature"
import BLockFeatureTwo from "./BLockFeatureTwo"
import Feedback from "./Feedback"
import ServiceArea from "./ServiceArea"
import FancyBanner from "@/components/homes/home-2/FancyBanner"
import HeaderTwo from "@/layouts/headers/HeaderTwo"

const ServiceTwo = () => {
  return (
    <div className="main-page-wrapper">
      <HeaderTwo />
      <ServiceArea />
      <BLockFeature />
      <BLockFeatureTwo />
      <Feedback />
      <FancyBanner />
      <FooterTwo />
    </div>
  )
}

export default ServiceTwo
