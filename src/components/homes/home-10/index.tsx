import Hero from "./Hero"
import BlockFeature from "./BlockFeature"
import BlockFeatureTwo from "./BlockFeatureTwo"
import Feedback from "./Feedback"
import BlockFeatureFour from "./BlockFeatureFour"
import FancyBanner from "./FancyBanner"
import Pricing from "./Pricing"
import FooterSeven from "@/layouts/footers/FooterSeven"
import HeaderTen from "@/layouts/headers/HeaderTen"

const HomeTen = () => {
  return (
    <div className="main-page-wrapper">
      <HeaderTen />
      <Hero />
      <BlockFeature />
      <Pricing />
      <BlockFeatureTwo />
      <Feedback />
      <BlockFeatureFour />
      <FancyBanner />
      <FooterSeven />
    </div>
  )
}

export default HomeTen
