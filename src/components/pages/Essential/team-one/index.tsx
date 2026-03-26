import FancyBanner from "@/components/homes/home-1/FancyBanner"
import TeamArea from "./TeamArea"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"

const TeamOne = () => {
  return (
    <div className="main-page-wrapper dark-bg p-30">
      <HeaderOne />
      <TeamArea />
      <FancyBanner />
      <FooterOne />
    </div>
  )
}

export default TeamOne
