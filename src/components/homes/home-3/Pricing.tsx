import Image, { StaticImageData } from "next/image";

import shape_1 from "@/assets/images/shape/shape_36.svg"
import shape_2 from "@/assets/images/shape/shape_37.svg"
import shape_3 from "@/assets/images/shape/shape_38.svg"
import Link from "next/link";

interface DataType {
   id: number;
   pricing_bg: string;
   price: number;
   title: string;
   list: string[];
   offer: string;
   shape: StaticImageData;
}

const pricing_data: DataType[] = [
   {
      id: 1,
      pricing_bg: "/assets/images/assets/bg_06.png",
      price: 89,
      title: "Individual Plan",
      list: ["Photography", "Caterers & Desserts", "Venue Booking", "Budget Minimization", "Designing Style"],
      offer: "15% OFF",
      shape: shape_1,
   },
   {
      id: 2,
      pricing_bg: "/assets/images/assets/bg_07.png",
      price: 69,
      title: "Team Plan",
      list: ["Photography", "Caterers & Desserts", "Venue Booking", "Budget Minimization", "Designing Style"],
      offer: "13% OFF",
      shape: shape_2,
   },
   {
      id: 3,
      pricing_bg: "/assets/images/assets/bg_08.png",
      price: 129,
      title: "Business Plan",
      list: ["Photography", "Caterers & Desserts", "Venue Booking", "Budget Minimization", "Designing Style"],
      offer: "20% OFF",
      shape: shape_3,
   },
];

const Pricing = () => {
   return (
      <div className="pricing-section-two position-relative z-1 mt-170 xl-mt-150 lg-mt-80 pt-140 lg-pt-80 pb-150 xl-pb-120 lg-pb-80">
         <div className="container">
            <div className="row">
               <div className="col-xxl-9 col-lg-8 m-auto">
                  <div className="title-four text-center mb-50 lg-mb-30">
                     <h2 className="text-white">All-inclusive great options pick your  Plan</h2>
                  </div>
                  <p className="fs-24 text-white text-center mb-40 lg-mb-10">Try Team plan features for 14 days · No credit card required</p>
               </div>
            </div>
         </div>
         <div className="container">
            {pricing_data.map((item) => (
               <div key={item.id} className="pr-table-wrapper position-relative z-1 mt-40" style={{ backgroundImage: `url(${item.pricing_bg})` }}>
                  <div className="row">
                     <div className="col-lg-3 ms-auto">
                        <div className="price">${item.price}.00</div>
                        <p className="fs-22 text-dark">{item.title}</p>
                     </div>
                     <div className="col-xl-3 col-lg-4 col-sm-7">
                        <ul className="style-none mt-20">
                           {item.list.map((li, i) => (
                              <li key={i}>{li}</li>
                           ))}
                        </ul>
                     </div>
                     <div className="col-lg-3 col-sm-5 text-center">
                        <Link href="#" className="btn-seven text-uppercase mt-40">Choose Plan</Link>
                        <strong className="fs-20 fw-bold d-block text-dark text-uppercase mt-20">{item.offer}</strong>
                        <p className="fs-20 text-dark">Full Payment</p>
                     </div>
                  </div>
                  <Image src={item.shape} alt="" className="shapes shape_01" />
               </div>
            ))}
         </div>
      </div>
   )
}

export default Pricing
