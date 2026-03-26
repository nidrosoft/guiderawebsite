import FooterSeven from "@/layouts/footers/FooterSeven"
import FAQ from "./FAQ"
import ServiceBanner from "./ServiceBanner"
import ServiceDetailsAra from "./ServiceDetailsAra"
import HeaderTen from "@/layouts/headers/HeaderTen"

const ServiceDetails = () => {
   return (
      <div className="main-page-wrapper">
         <HeaderTen />
         <ServiceBanner title="Services Details" />
         <ServiceDetailsAra />
         <FAQ />
         <FooterSeven />
      </div>
   )
}

export default ServiceDetails
