import FooterFive from "@/layouts/footers/FooterFive"
import BlockFeature from "./BlockFeature"
import BlockFeatureTwo from "./BlockFeatureTwo"
import FancyBanner from "./FancyBanner"
import FancyBannerTwo from "./FancyBannerTwo"
import FAQ from "./FAQ"
import Feedback from "./Feedback"
import Hero from "./Hero"
import HowItWorks from "./HowItWorks"
import Pricing from "./Pricing"
import Problem from "./Problem"
import Solution from "./Solution"
import HeaderSix from "@/layouts/headers/HeaderSix"

const HomeSix = () => {
  return (
    <div className="main-page-wrapper home-six-bg">
      <HeaderSix />
      <Hero />
      <FancyBanner />
      <Problem />
      <Solution />
      <div id="features">
        <BlockFeature />
        <BlockFeatureTwo />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="testimonials">
        <Feedback />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <FancyBannerTwo />
      <FooterFive />
    </div>
  )
}

export default HomeSix
