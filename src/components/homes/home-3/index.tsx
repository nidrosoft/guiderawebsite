import FooterThree from "@/layouts/footers/FooterThree"
import BLockFeature from "./BLockFeature"
import BLockFeatureFour from "./BLockFeatureFour"
import BLockFeatureThree from "./BLockFeatureThree"
import BLockFeatureTwo from "./BLockFeatureTwo"
import FancyBanner from "./FancyBanner"
import Feedback from "./Feedback"
import Hero from "./Hero"
import Pricing from "./Pricing"
import HeaderThree from "@/layouts/headers/HeaderThree"

const HomeThree = () => {
   return (
      <div className="main-page-wrapper bg-six">
         <HeaderThree />
         <Hero />
         <BLockFeature />
         <BLockFeatureTwo />
         <BLockFeatureThree />
         <BLockFeatureFour />
         <Feedback />
         <Pricing />
         <FancyBanner />
         <FooterThree />
      </div>
   )
}

export default HomeThree
