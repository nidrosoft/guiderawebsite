"use client"
import VideoPopup from "@/modals/VideoPopup";
import { useState } from "react";

const Video = () => {

   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <>
         <div className="video-banner-one gap-40 mt-150 lg-mt-80">
            <div className="bg-wrapper d-flex align-items-center justify-content-center">
               <a onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer" }} className="video-btn tran3s rounded-circle d-flex align-items-center justify-content-center" data-fancybox="" ><i className="fa-sharp fa-solid fa-play"></i></a>
            </div>
         </div>
         {/* video modal start */}
         <VideoPopup
            isVideoOpen={isVideoOpen}
            setIsVideoOpen={setIsVideoOpen}
            videoId={"tUP5S4YdEJo"}
         />
         {/* video modal end */}
      </>
   )
}

export default Video
