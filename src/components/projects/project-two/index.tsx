"use client"
import FancyBanner from "@/components/homes/home-2/FancyBanner"
import FooterTwo from "@/layouts/footers/FooterTwo"
import HeaderTwo from "@/layouts/headers/HeaderTwo"
import dynamic from "next/dynamic";

const ProjectTwoArea = dynamic(() => import("./ProjectTwoArea"), { ssr: false });


const ProjectTwo = () => {
  return (
    <div className="main-page-wrapper">
      <HeaderTwo />
      <ProjectTwoArea />
      <FancyBanner />
      <FooterTwo />
    </div>
  )
}

export default ProjectTwo
