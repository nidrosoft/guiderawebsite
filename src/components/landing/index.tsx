import Footer from "@/layouts/footers/Footer"
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
import Header from "@/layouts/headers/Header"

const Home = () => {
  return (
    <div className="main-page-wrapper home-six-bg">
      <Header />
      <Hero />
      <FancyBanner />
      <Problem />
      <Solution />
      <div id="features">
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
      <Footer />
    </div>
  )
}

export default Home
