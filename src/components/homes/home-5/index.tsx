import FooterFour from "@/layouts/footers/FooterFour"
import AppIntegration from "./AppIntegration"
import BLockFeature from "./BLockFeature"
import Brand from "./Brand"
import FancyBanner from "./FancyBanner"
import FAQ from "./FAQ"
import Feedback from "./Feedback"
import Hero from "./Hero"
import Pricing from "./Pricing"
import HeaderFive from "@/layouts/headers/HeaderFive"

const HomeFive = () => {
   return (
      <div className="main-page-wrapper">
         <HeaderFive />
         <Hero />
         <Brand />
         <BLockFeature />
         <AppIntegration />
         <Feedback />
         <Pricing />
         <FAQ />
         <FancyBanner />
         <FooterFour />
      </div>
   )
}

export default HomeFive
