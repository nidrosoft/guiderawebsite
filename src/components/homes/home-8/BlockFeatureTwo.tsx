import Image from "next/image";
import Link from "next/link";
import card from "@/assets/images/assets/card_22.png"

interface DataType {
   id: number;
   count: string;
   text: JSX.Element;
}

const featuter_data: DataType[] = [
   {
      id: 1,
      count: "01",
      text: (<>Drive better customers conversations</>),
   },
   {
      id: 2,
      count: "02",
      text: (<>Organize your project effortlessly</>),
   },
   {
      id: 3,
      count: "03",
      text: (<>Track Project workflow & Progress</>),
   },
];

const BlockFeatureTwo = () => {
   return (
      <div className="block-feature-twentyTwo bg-thirteen position-relative z-1 pt-180 xl-pt-130 lg-pt-80 pb-150 xl-pb-120 lg-pb-80 mt-150 lg-mt-80">
         <div className="container">
            <div className="row">
               <div className="col-xl-6 col-lg-7">
                  <div className="pe-xxl-5">
                     <div className="title-ten">
                        <div className="upper-title text-uppercase">Features</div>
                        <h2>Streamlined <span className="position-relative z-1">Solutions <span className="line" style={{ background: "#FF5B00" }}></span></span> Tailored by Piku for You.</h2>
                     </div>
                     <p className="fs-28 text-dark pt-65 xl-pt-50 md-pt-30 pb-80 xl-pb-50 md-pb-30">Revolutionize customer support workflows with our help desk SaaS company, delivering seamless solutions for modern businesses.</p>
                     <Link href="/" className="btn-five color-two tran3s">Try It Now</Link>
                  </div>
               </div>
            </div>
         </div>
         <Image src={card} alt="" className="shapes shape_01" />
         <div className="container mt-100 md-mt-50">
            <div className="row gx-xxl-5">
               {featuter_data.map((item) => (
                  <div key={item.id} className="col-md-4">
                     <div className="feature mt-20">
                        <div className="num fw-500">{item.count}</div>
                        <p className="fw-500">{item.text}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default BlockFeatureTwo
