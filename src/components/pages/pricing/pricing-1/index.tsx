import Pricing from "@/components/homes/home-9/Pricing"
import PricingArea from "./PricingArea"
import BlockFeature from "./BlockFeature"
import FAQ from "@/components/homes/home-9/FAQ"
import FooterEight from "@/layouts/footers/FooterEight"
import HeaderNine from "@/layouts/headers/HeaderNine"

const PricingOne = () => {
   return (
      <div className="main-page-wrapper">
         <HeaderNine />
         <Pricing />
         <PricingArea />
         <BlockFeature />
         <FAQ />
         <FooterEight />
      </div>
   )
}

export default PricingOne
