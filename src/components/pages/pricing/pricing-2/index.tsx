import PricingOne from "@/components/homes/home-5/Pricing"
import PricingBanner from "./PricingBanner"
import Pricing from "@/components/homes/home-3/Pricing"
import FAQ from "@/components/homes/home-5/FAQ"
import FancyBanner from "@/components/homes/home-5/FancyBanner"
import FooterFour from "@/layouts/footers/FooterFour"
import HeaderFive from "@/layouts/headers/HeaderFive"

const PricingTwo = () => {
   return (
      <div className="main-page-wrapper">
         <HeaderFive />
         <PricingBanner />
         <PricingOne />
         <Pricing />
         <FAQ />
         <FancyBanner />
         <FooterFour />
      </div>
   )
}

export default PricingTwo
