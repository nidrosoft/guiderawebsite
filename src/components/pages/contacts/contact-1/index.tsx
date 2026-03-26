import FooterOne from "@/layouts/footers/FooterOne"
import ContactArea from "./ContactArea"
import ContactBanner from "./ContactBanner"
import HeaderOne from "@/layouts/headers/HeaderOne"

const ContactOne = () => {
  return (
    <div className="main-page-wrapper dark-bg p-30">
      <HeaderOne />
      <ContactBanner />
      <ContactArea />
      <FooterOne />
    </div>
  )
}

export default ContactOne
