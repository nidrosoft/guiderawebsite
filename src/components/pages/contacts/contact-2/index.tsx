import FancyBanner from "@/components/homes/home-2/FancyBanner"
import ContactMap from "./ContactMap"
import ContactTwoArea from "./ContactTwoArea"
import FooterTwo from "@/layouts/footers/FooterTwo"
import HeaderTwo from "@/layouts/headers/HeaderTwo"

const ContactTwo = () => {
  return (
    <div className="main-page-wrapper">
      <HeaderTwo />
      <ContactMap />
      <ContactTwoArea />
      <FancyBanner />
      <FooterTwo />
    </div>
  )
}

export default ContactTwo
