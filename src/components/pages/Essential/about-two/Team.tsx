import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import team_img1 from "@/assets/images/media/img_28.jpg"
import team_img2 from "@/assets/images/media/img_29.jpg"
import team_img3 from "@/assets/images/media/img_30.jpg"
import team_img4 from "@/assets/images/media/img_31.jpg"
import shape from "@/assets/images/shape/shape_84.svg"

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
      designation: "Owner & Founder",
      name: "Mark Fernando",
   },
   {
      id: 2,
      img: team_img2,
      designation: "Engineer",
      name: "Jubayer Al Hasan",
   },
   {
      id: 3,
      img: team_img3,
      designation: "Manager",
      name: "Muhibbur Rashid",
   },
   {
      id: 4,
      img: team_img4,
      designation: "HR Admin",
      name: "Elina Gomez",
   },
];

const Team = () => {
   return (
      <div className="team-section-one position-relative z-1 mt-180 xl-mt-150 lg-mt-80 pb-180 xl-pb-150 lg-pb-80">
         <div className="container">
            <div className="position-relative">
               <div className="title-two">
                  <h2>Our Team</h2>
               </div>
               <p className="fs-24 mb-30 md-mb-10">We&apos;ve varity package for our client based on your business</p>

               <div className="row">
                  {team_data.map((item) => (
                     <div key={item.id} className="col-lg-3 col-md-6">
                        <div className="team-block mt-35">
                           <Image src={item.img} alt="" className="w-100" />
                           <div className="text">
                              <span>{item.designation}</span>
                              <h5>{item.name}</h5>
                              <Link href="#" className="stretched-link"></Link>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
               <div className="section-btn text-center md-mt-60">
                  <Link href="/team-v1" className="btn-twenty">See All Members</Link>
               </div>
            </div>
         </div>
         <Image src={shape} alt="" className="shapes shape_01" />
      </div>
   )
}

export default Team
