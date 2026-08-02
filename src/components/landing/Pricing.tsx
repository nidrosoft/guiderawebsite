import Image, { StaticImageData } from "next/image";

import check from "@/assets/images/icon/check.svg"
import cross from "@/assets/images/icon/cross.svg"
import shape from "@/assets/images/shape/shape_58.svg"

interface DataType {
  id: number;
  shape?: StaticImageData;
  shape_class?: string;
  title: string;
  subtitle: string;
  price: string;
  list: {
    title: string;
    icon: StaticImageData;
  }[];
}

const pricing_data: DataType[] = [
  {
    id: 1,
    shape: shape,
    shape_class: "shape_01",
    title: "Guidera Free",
    subtitle: "Explore and try core features",
    price: "Free",
    list: [
      { icon: check, title: "Browse travel options and destinations" },
      { icon: check, title: "1 active trip" },
      { icon: check, title: "1 AI Trip Snapshot (lifetime)" },
      { icon: check, title: "1 AI Journey Briefing (lifetime)" },
      { icon: check, title: "5 AI Chat messages (lifetime)" },
      { icon: check, title: "Core SOS and emergency contacts" },
      { icon: cross, title: "Smart Plan generation" },
      { icon: cross, title: "AI Vision & Translation" },
      { icon: cross, title: "Pro collaboration and trip tools" },
    ]
  },
  {
    id: 2,
    title: "Guidera Pro",
    subtitle: "One entitlement, four billing choices",
    price: "—",
    list: [
      { icon: check, title: "Everything in Guidera Free" },
      { icon: check, title: "AI Trip Snapshots and Journey Briefings" },
      { icon: check, title: "Smart Plan generation" },
      { icon: check, title: "AI Chat and AI Vision access" },
      { icon: check, title: "Trip collaboration" },
      { icon: check, title: "Expense tracking + receipts" },
      { icon: check, title: "Unlimited active trips" },
      { icon: check, title: "Synced travel journal" },
    ]
  },
];

const Pricing = () => {
  return (
    <div className="pricing-section-five position-relative z-1 mt-180 xl-mt-150 lg-mt-80 pt-130 lg-pt-80 pb-150 xl-pb-130 lg-pb-80">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xl-6 col-lg-6">
            <div className="title-nine">
              <h2 className="text-white">Simple pricing, powerful features</h2>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5 ms-auto">
            <p className="text-white fs-24 md-mt-20">Start free. Upgrade in the iOS app when you&apos;re ready. Apple manages billing and cancellation.</p>
          </div>
        </div>

        <div className="mt-50 lg-mt-20">
          <div className="row gx-xxl-5">
            {pricing_data.map((item) => (
              <div key={item.id} className="col-lg-6 d-flex mt-35">
                <div className="pr-column w-100 d-flex flex-column">
                  <div className="pr-header text-center">
                    <div className="plane-name fw-bold text-uppercase" style={{ fontSize: '22px', letterSpacing: '2px' }}>{item.title}</div>
                    <p style={{ fontSize: '15px', color: '#777', marginTop: '5px' }}>{item.subtitle}</p>
                  </div>
                  <ul className="style-none package-feature mt-30 lg-mt-20 mb-35">
                    {item.list.map((li, i) => (
                      <li key={i}><Image src={li.icon} alt="" className="icon" />{li.title}</li>
                    ))}
                  </ul>
                  {item.shape && <Image src={item.shape} alt="" className={`shapes ${item.shape_class}`} />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
