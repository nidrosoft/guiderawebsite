import FooterSeven from "@/layouts/footers/FooterSeven"
import Brand from "../home-5/Brand"
import AppIntegration from "./AppIntegration"
import BlockFeature from "./BlockFeature"
import BlockFeatureFour from "./BlockFeatureFour"
import BlockFeatureTwo from "./BlockFeatureTwo"
import Contact from "./Contact"
import Counter from "./Counter"
import FancyBanner from "./FancyBanner"
import FAQ from "./FAQ"
import Feedback from "./Feedback"
import Hero from "./Hero"
import HeaderEight from "@/layouts/headers/HeaderEight"

const HomeEight = () => {
   return (
      <div className="main-page-wrapper">
         <HeaderEight />
         <Hero />
         <Brand />
         <BlockFeature />
         <Counter />
         <BlockFeatureTwo />
         <AppIntegration />
         <BlockFeatureFour />
         <Feedback />
         <FAQ />
         <Contact />
         <FancyBanner />
         <FooterSeven />
      </div>
   )
}

export default HomeEight
