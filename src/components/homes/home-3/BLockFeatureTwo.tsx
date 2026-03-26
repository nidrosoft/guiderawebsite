import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import feature_thumb1 from "@/assets/images/assets/ils_12.png"
import feature_thumb2 from "@/assets/images/assets/ils_13.png"
import feature_thumb3 from "@/assets/images/assets/ils_14.png"

interface DataType {
   id: number;
   thumb: StaticImageData;
   title: string;
   desc: JSX.Element;
   btn: string;
   class?: string;
}

const feature_data: DataType[] = [
   {
      id: 1,
      thumb: feature_thumb1,
      title: "Make website without any coding",
      desc: (<>Go paperless. Back up important to all devices, & keep the information not the clutter. Lorem ipsum dolor sit amet.</>),
      btn: "Get Started",
   },
   {
      id: 2,
      thumb: feature_thumb2,
      title: "Smart widget for you",
      desc: (<>The intuitive and flexible drag & drop editor saves time on development with great speed. great sapped</>),
      btn: "Learn More",
      class: "mt-150 xl-mt-100 lg-mt-60",
   },
   {
      id: 3,
      thumb: feature_thumb3,
      title: "Application Integrate",
      desc: (<>Share content across apps. Evernote connects with the productivity tools you already use, so you can work your way.</>),
      btn: "Learn More",
      class: "mt-150 xl-mt-100 lg-mt-60",
   },
];

const BLockFeatureTwo = () => {
   return (
      <div className="block-feature-nine pt-180 xl-pt-150 lg-pt-80">
         <div className="container">
            {feature_data.map((item) => (
               <div key={item.id} className={`row align-items-center ${item.class}`}>
                  <div className="col-xl-5 col-lg-6 order-lg-last">
                     <div className="ps-xl-5 ms-xxl-3">
                        <div className="title-four">
                           <h2>{item.title}</h2>
                        </div>
                        <p className="fs-24 font-manrope mt-45 lg-mt-30 mb-45 lg-mb-30">{item.desc}</p>
                        <Link href="/project-details" className="btn-seven">{item.btn}</Link>
                     </div>
                  </div>
                  <div className="col-xl-7 col-lg-6 col-md-10 m-auto">
                     <div className="img-holder d-flex align-items-center justify-content-center md-mt-40">
                        <Image src={item.thumb} alt="" />
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

export default BLockFeatureTwo
