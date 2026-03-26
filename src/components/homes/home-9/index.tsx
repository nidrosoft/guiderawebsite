import FooterEight from "@/layouts/footers/FooterEight"
import BlockFeatureOne from "./BlockFeatureOne"
import BlockFeatureThree from "./BlockFeatureThree"
import BlockFeatureTwo from "./BlockFeatureTwo"
import FancyBanner from "./FancyBanner"
import FAQ from "./FAQ"
import Feedback from "./Feedback"
import Hero from "./Hero"
import Pricing from "./Pricing"
import HeaderNine from "@/layouts/headers/HeaderNine"

const HomeNine = () => {
   return (
      <div className="main-page-wrapper">
         <HeaderNine />
         <Hero />
         <BlockFeatureOne />
         <Pricing />
         <BlockFeatureThree />
         <BlockFeatureTwo />
         <Feedback />
         <FancyBanner />
         <FAQ />
         <FooterEight />
      </div>
   )
}

export default HomeNine
