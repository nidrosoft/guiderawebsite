import icon from "@/assets/images/icon/icon_20.svg"
import Image from "next/image";

interface DataType {
   id: number;
   title: string;
   desc: JSX.Element;
}

const feature_data: DataType[] = [
   {
      id: 1,
      title: "User friendly",
      desc: (<>Quick, easy and <br /> very user friendly interface</>)
   },
   {
      id: 2,
      title: "Lowest Price",
      desc: (<>Get Membership <br />in very  affordable price</>)
   },
   {
      id: 3,
      title: "#1 platform",
      desc: (<>Over 12,000+ <br /> Template ready to use</>)
   },
];

const BLockFeatureThree = () => {
   return (
      <div className="block-feature-ten position-relative z-2 pt-150 lg-pt-80">
         <div className="container">
            <div className="row">
               <div className="col-xl-7 col-lg-8 m-auto">
                  <div className="title-four text-center mb-35 lg-mb-30">
                     <h2>What’s things makes us different?</h2>
                  </div>
               </div>
            </div>
            <p className="fs-24 text-dark text-center font-manrope pb-70 lg-pb-40">Piku for every business you need. we’r provide best offer with best services</p>

            <div className="row justify-content-between">
               {feature_data.map((item) => (
                  <div key={item.id} className="col-xxl-3 col-lg-4">
                     <div className="card-style-five text-center mb-25">
                        <div className="icon d-flex align-items-center justify-content-center rounded-circle"><Image src={icon} alt="" /></div>
                        <span>{item.title}</span>
                        <p className="font-manrope fw-600 lh-base fs-24 text-dark">{item.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default BLockFeatureThree
