"use client"
import FooterSeven from "@/layouts/footers/FooterSeven"
import BlockFeature from "../project-three/BlockFeature"
import ProjectBanner from "./ProjectBanner"
import HeaderTen from "@/layouts/headers/HeaderTen"
import dynamic from "next/dynamic";

const ProjectFourArea = dynamic(() => import("./ProjectFourArea"), { ssr: false });

const ProjectFour = () => {
   return (
      <div className="main-page-wrapper">
         <HeaderTen />
         <ProjectBanner />
         <ProjectFourArea />
         <BlockFeature />
         <FooterSeven />
      </div>
   )
}

export default ProjectFour
