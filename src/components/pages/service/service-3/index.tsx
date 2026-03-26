import Feedback from "@/components/homes/home-10/Feedback"
import ServiceBanner from "../service-details/ServiceBanner"
import BlockFeature from "./BlockFeature"
import ServiceArea from "./ServiceArea"
import FooterSeven from "@/layouts/footers/FooterSeven"
import HeaderTen from "@/layouts/headers/HeaderTen"

const ServiceThree = () => {
   return (
      <div className="main-page-wrapper">
         <HeaderTen />
         <ServiceBanner title="Services" />
         <ServiceArea />
         <BlockFeature />
         <Feedback />
         <FooterSeven />
      </div>
   )
}

export default ServiceThree
