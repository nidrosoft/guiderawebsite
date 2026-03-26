import FancyBanner from "@/components/homes/home-5/FancyBanner"
import ProjectBanner from "./ProjectBanner"
import ProjectFiveArea from "./ProjectFiveArea"
import FooterFour from "@/layouts/footers/FooterFour"
import HeaderFive from "@/layouts/headers/HeaderFive"

const ProjectFive = () => {
   return (
      <div className="main-page-wrapper">
         <HeaderFive />
         <ProjectBanner />
         <ProjectFiveArea />
         <FancyBanner />
         <FooterFour />
      </div>
   )
}

export default ProjectFive
