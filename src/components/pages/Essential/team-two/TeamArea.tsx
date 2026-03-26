import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import team_img1 from "@/assets/images/media/img_28.jpg"
import team_img2 from "@/assets/images/media/img_29.jpg"
import team_img3 from "@/assets/images/media/img_30.jpg"
import team_img4 from "@/assets/images/media/img_31.jpg"
import team_img5 from "@/assets/images/media/img_80.jpg"
import team_img6 from "@/assets/images/media/img_81.jpg"
import team_img7 from "@/assets/images/media/img_82.jpg"
import team_img8 from "@/assets/images/media/img_83.jpg"
import shape from "@/assets/images/shape/shape_91.svg"

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
      designation: "Owner & Founder",
      name: "Mark Fernando",
   },
   {
      id: 5,
      img: team_img5,
      designation: "Manager",
      name: "Muhibbur Rashid",
   },
   {
      id: 6,
      img: team_img6,
      designation: "HR Admin",
      name: "Elina Gomez",
   },
   {
      id: 7,
      img: team_img7,
      designation: "Engineer",
      name: "Jubayer Al Hasan",
   },
   {
      id: 8,
      img: team_img8,
      designation: "Owner & Founder",
      name: "Mark Fernando",
   },
];

const TeamArea = () => {
   return (
      <div className="team-section-one position-relative z-1 mt-225 xl-mt-200 lg-mt-150 pb-150 lg-pb-80">
			<div className="container">
				<div className="position-relative">
					<div className="title-two text-center mb-30 lg-mb-10">
						<h2>Our Talented Team</h2>
					</div>

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
					<div className="position-relative text-center mt-80 lg-mt-50">
						<div className="row">
							<div className="col-lg-8 m-auto">
								<h2 className="font-manrope mb-40">Join us & shine the world with your skill</h2>
							</div>
						</div>
						<Link href="/" className="btn-twenty">Join Now!!</Link>
					</div>
				</div>
			</div>
			<Image src={shape} alt="" className="shapes shape_02"/>
		</div>
   )
}

export default TeamArea
