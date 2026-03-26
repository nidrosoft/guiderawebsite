import BlockFeature from "@/components/homes/home-2/BLockFeature"
import AboutBLockFeature from "./BLockFeature"
import Feedback from "@/components/homes/home-2/Feedback"
import Team from "./Team"
import FancyBanner from "@/components/homes/home-2/FancyBanner"
import FooterTwo from "@/layouts/footers/FooterTwo"
import HeaderTwo from "@/layouts/headers/HeaderTwo"

const AboutTwo = () => {
   return (
      <div className="main-page-wrapper">
         <HeaderTwo />
         <AboutBLockFeature />
         <BlockFeature />
         <Feedback />
         <Team />
         <FancyBanner />
         <FooterTwo />
      </div>
   )
}

export default AboutTwo
