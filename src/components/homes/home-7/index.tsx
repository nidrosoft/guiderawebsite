import FooterSix from "@/layouts/footers/FooterSix"
import BlockFeature from "./BlockFeature"
import BlockFeatureTwo from "./BlockFeatureTwo"
import Brand from "./Brand"
import Contact from "./Contact"
import Counter from "./Counter"
import FancyBanner from "./FancyBanner"
import Feedback from "./Feedback"
import Hero from "./Hero"
import Project from "./Project"
import HeaderSeven from "@/layouts/headers/HeaderSeven"

const HomeSeven = () => {
  return (
    <div className="main-page-wrapper bg-five">
      <HeaderSeven />
      <Hero />
      <Brand />
      <BlockFeature />
      <BlockFeatureTwo />
      <Counter />
      <Project />
      <Feedback />
      <Contact />
      <FancyBanner />
      <FooterSix />
    </div>
  )
}

export default HomeSeven
