// import HeaderOne from "@/layouts/headers/HeaderOne"
import FooterOne from "@/layouts/footers/FooterOne"
import BLockFeature from "./BLockFeature"
import BLockFeatureThree from "./BLockFeatureThree"
import BLockFeatureTwo from "./BLockFeatureTwo"
import FancyBanner from "./FancyBanner"
import FAQ from "./FAQ"
import Feedback from "./Feedback"
import Hero from "./Hero"
import HeaderOne from "@/layouts/headers/HeaderOne"

const HomeOne = () => {
   return (
      <div className="main-page-wrapper dark-bg p-30">
         <HeaderOne />
         <Hero />
         <BLockFeature />
         <BLockFeatureTwo />
         <BLockFeatureThree />
         <Feedback />
         <FAQ />
         <FancyBanner />
         <FooterOne />
      </div>
   )
}

export default HomeOne
