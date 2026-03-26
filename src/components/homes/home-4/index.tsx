import BLockFeature from "./BLockFeature"
import BLockFeatureThree from "./BLockFeatureThree"
import BLockFeatureTwo from "./BLockFeatureTwo"
import FancyBanner from "./FancyBanner"
import FAQ from "./FAQ"
import FAQTwo from "./FAQTwo"
import Feedback from "./Feedback"
import Hero from "./Hero"
import FooterFour from "@/layouts/footers/FooterFour"
import Pricing from "./Pricing"
import HeaderFour from "@/layouts/headers/HeaderFour"

const HomeFour = () => {
   return (
      <div className="main-page-wrapper">
         <HeaderFour />
         <Hero />
         <BLockFeature />
         <FAQ />
         <BLockFeatureTwo />
         <Feedback />
         <Pricing />
         <BLockFeatureThree />
         <FAQTwo />
         <FancyBanner />
         <FooterFour />
      </div>
   )
}

export default HomeFour
