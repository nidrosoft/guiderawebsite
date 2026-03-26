import FooterTwo from "@/layouts/footers/FooterTwo"
import BLockFeature from "./BLockFeature"
import BLockFeatureFour from "./BLockFeatureFour"
import BLockFeatureThree from "./BLockFeatureThree"
import BLockFeatureTwo from "./BLockFeatureTwo"
import FancyBanner from "./FancyBanner"
import FAQ from "./FAQ"
import Feedback from "./Feedback"
import Hero from "./Hero"
import Pricing from "./Pricing"
import HeaderTwo from "@/layouts/headers/HeaderTwo"

const HomeTwo = () => {
  return (
    <div className="main-page-wrapper">
      <HeaderTwo />
      <Hero />
      <BLockFeature />
      <BLockFeatureTwo />
      <BLockFeatureThree />
      <Feedback />
      <BLockFeatureFour />
      <Pricing />
      <FAQ />
      <FancyBanner />
      <FooterTwo />
    </div>
  )
}

export default HomeTwo
