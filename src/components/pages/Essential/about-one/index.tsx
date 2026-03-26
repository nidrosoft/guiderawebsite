import Feedback from "@/components/homes/home-1/Feedback"
import BlockFeature from "./BlockFeature"
import BlockFeatureThree from "./BlockFeatureThree"
import BLockFeatureTwo from "./BLockFeatureTwo"
import FancyBanner from "@/components/homes/home-1/FancyBanner"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"

const AboutOne = () => {
  return (
    <div className="main-page-wrapper dark-bg p-30">
      <HeaderOne />
      <BlockFeature />
      <BLockFeatureTwo />
      <BlockFeatureThree />
      <Feedback />
      <FancyBanner />
      <FooterOne />
    </div>
  )
}

export default AboutOne
