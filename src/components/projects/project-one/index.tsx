"use client"
import FancyBanner from "@/components/homes/home-1/FancyBanner"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import dynamic from "next/dynamic";

const ProjectOneArea = dynamic(() => import("./ProjectOneArea"), { ssr: false });

const ProjectOne = () => {
  return (
    <div className="main-page-wrapper dark-bg p-30">
      <HeaderOne />
      <ProjectOneArea />
      <FancyBanner />
      <FooterOne />
    </div>
  )
}

export default ProjectOne
