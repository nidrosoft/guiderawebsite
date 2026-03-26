import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import team_img1 from "@/assets/images/media/img_74.jpg"
import team_img2 from "@/assets/images/media/img_75.jpg"
import team_img3 from "@/assets/images/media/img_76.jpg"
import team_img4 from "@/assets/images/media/img_77.jpg"
import team_img5 from "@/assets/images/media/img_78.jpg"
import team_img6 from "@/assets/images/media/img_79.jpg"
import shape from "@/assets/images/shape/shape_90.svg"

interface DataType {
   id: number;
   img: StaticImageData;
   designation: string;
   name: string;
}

const team_data: DataType[] = [
   {
      id: 1,
      img: team_img1,
      name: "Hussy Mike",
      designation: "UI/UX Designer",
   },
   {
      id: 2,
      img: team_img2,
      name: "Carlos Santro",
      designation: "UI/UX Designer",
   },
   {
      id: 3,
      img: team_img3,
      name: "Zabed Ansari",
      designation: "Designer",
   },
   {
      id: 4,
      img: team_img4,
      name: "Hussy Mike",
      designation: "UI/UX Designer",
   },
   {
      id: 5,
      img: team_img5,
      name: "Carlos Santro",
      designation: "UI/UX Designer",
   },
   {
      id: 6,
      img: team_img6,
      name: "Zabed Ansari",
      designation: "Designer",
   },
];

const TeamArea = () => {
   return (
      <div className="team-section-two bg-one border-30 z-1 pt-120 lg-pt-80 pb-140 lg-pb-80 mt-30 lg-mt-20 mb-30 lg-mb-20 position-relative">
         <div className="container">
            <div className="title-one text-center mb-40 lg-mb-10">
               <h2>Our Team</h2>
            </div>

            <div className="row gx-xxl-5">
               {team_data.map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6">
                     <div className="team-block mt-40">
                        <Image src={item.img} alt="" className="w-100" />
                        <div className="text position-relative text-center">
                           <h6>{item.name}</h6>
                           <span>{item.designation}</span>
                           <Link href="#" className="stretched-link"></Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         <Image src={shape} alt="" className="shapes shape_01" />
      </div>
   )
}

export default TeamArea
