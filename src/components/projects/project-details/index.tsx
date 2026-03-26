import FancyBanner from "@/components/homes/home-7/FancyBanner"
import ProjectDetailsArea from "./ProjectDetailsArea"
import FooterSix from "@/layouts/footers/FooterSix"
import HeaderSeven from "@/layouts/headers/HeaderSeven"

const ProjectDetails = () => {
  return (
    <div className="main-page-wrapper bg-five">
      <HeaderSeven />
      <ProjectDetailsArea />
      <FancyBanner />
      <FooterSix />
    </div>
  )
}

export default ProjectDetails
