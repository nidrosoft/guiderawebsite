import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import btn_icon from "@/assets/images/icon/icon_70.svg"

import icon_1 from "@/assets/images/icon/icon_67.png"
import icon_2 from "@/assets/images/icon/icon_68.png"
import icon_3 from "@/assets/images/icon/icon_69.png"
import icon_4 from "@/assets/images/icon/icon_86.png"
import icon_5 from "@/assets/images/icon/icon_87.png"
import icon_6 from "@/assets/images/icon/icon_88.png"

interface DataType {
  id: number;
  icon: StaticImageData;
  title: JSX.Element;
}

const feature_data: DataType[] = [
  {
    id: 1,
    icon: icon_1,
    title: (<>Advance Protection for Virus & Threat</>)
  },
  {
    id: 2,
    icon: icon_2,
    title: (<>Online Protection &  Data Privacy</>)
  },
  {
    id: 3,
    icon: icon_3,
    title: (<>Boost Performance for device</>)
  },
  {
    id: 4,
    icon: icon_4,
    title: (<>Boost Performance for device</>)
  },
  {
    id: 5,
    icon: icon_5,
    title: (<>Boost Performance for device</>)
  },
  {
    id: 6,
    icon: icon_6,
    title: (<>Boost Performance for device</>)
  },
];

const ServiceArea = () => {
  return (
    <div className="block-feature-twentySeven mt-160 lg-mt-80">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-8 m-auto text-center">
            <div className="title-ten mb-20">
              <h2>What problem can we help you solve?</h2>
            </div>
          </div>
        </div>
        <p className="fs-24 text-center">Personal or business, desktop or mobile — whatever your needs — we’ve got you covered.</p>

        <div className="row gx-xxl-5 mt-30 lg-mt-10">
          {feature_data.map((item) => (
            <div key={item.id} className="col-lg-4">
              <div className="card-style-fourteen mt-35">
                <Image src={item.icon} alt="" className="m-auto icon" />
                <h4>{item.title}</h4>
                <Link href="/service-details" className="cta-btn border-2 border-top border-start border-dark tran3s d-flex align-items-center justify-content-center">
                  <Image src={btn_icon} alt="" /></Link>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default ServiceArea
