"use client"
import HeaderSeven from "@/layouts/headers/HeaderSeven"
import FooterSix from "@/layouts/footers/FooterSix"
import dynamic from "next/dynamic";

const BlogThreeArea = dynamic(() => import("./BlogThreeArea"), { ssr: false });

const BlogThree = () => {
   return (
      <div className="main-page-wrapper bg-five">
         <HeaderSeven />
         <BlogThreeArea />
         <FooterSix />
      </div>
   )
}

export default BlogThree
