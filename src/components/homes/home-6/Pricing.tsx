"use client"
import { useState } from "react"
import Image, { StaticImageData } from "next/image";

import check from "@/assets/images/icon/check.svg"
import cross from "@/assets/images/icon/cross.svg"
import shape from "@/assets/images/shape/shape_58.svg"
import WaitlistModal from "@/components/common/WaitlistModal"

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
    title: "Explorer",
    subtitle: "See what Guidera can do",
    price: "Free",
    list: [
      { icon: check, title: "Explore homepage (all 12 sections)" },
      { icon: check, title: "Travel deals browsing + saving" },
      { icon: check, title: "2 AI Trip Snapshots / month" },
      { icon: check, title: "1 active trip" },
      { icon: check, title: "5 AI Chat messages / day" },
      { icon: cross, title: "Smart Plan generation" },
      { icon: cross, title: "AI Vision & Translation" },
      { icon: cross, title: "Trip collaboration" },
    ]
  },
  {
    id: 2,
    title: "Voyager",
    subtitle: "Your AI travel companion",
    price: "—",
    list: [
      { icon: check, title: "Everything in Explorer" },
      { icon: check, title: "Unlimited AI Trip Snapshots" },
      { icon: check, title: "Smart Plan (3 per month)" },
      { icon: check, title: "Unlimited AI Chat & Vision" },
      { icon: check, title: "Trip collaboration (5 people)" },
      { icon: check, title: "Safety Intelligence & SOS" },
      { icon: check, title: "Expense tracking + receipts" },
      { icon: check, title: "Offline trip data" },
    ]
  },
  {
    id: 3,
    shape: shape,
    shape_class: "shape_02",
    title: "Navigator",
    subtitle: "For travelers who never stop",
    price: "—",
    list: [
      { icon: check, title: "Everything in Voyager" },
      { icon: check, title: "Unlimited Smart Plans" },
      { icon: check, title: "Unlimited active trips" },
      { icon: check, title: "Collaboration (10 people)" },
      { icon: check, title: "AI generation priority" },
      { icon: check, title: "Advanced expense analytics" },
      { icon: check, title: "Export itinerary (PDF / link)" },
      { icon: check, title: "Early access to new features" },
    ]
  },
];

const Pricing = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
    <div className="pricing-section-five position-relative z-1 mt-180 xl-mt-150 lg-mt-80 pt-130 lg-pt-80 pb-150 xl-pb-130 lg-pb-80">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xl-6 col-lg-6">
            <div className="title-nine">
              <h2 className="text-white">Simple pricing, powerful features</h2>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5 ms-auto">
            <p className="text-white fs-24 md-mt-20">Start free. Upgrade when you&apos;re ready. No hidden fees, cancel anytime.</p>
          </div>
        </div>

        <div className="mt-50 lg-mt-20">
          <div className="row gx-xxl-5">
            {pricing_data.map((item) => (
              <div key={item.id} className="col-lg-4 d-flex mt-35">
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
                  <div className="mt-auto"><button onClick={() => setShowModal(true)} className="btn-seven w-100" style={{ border: 'none', cursor: 'pointer' }}>Join Waitlist</button></div>
                  {item.shape && <Image src={item.shape} alt="" className={`shapes ${item.shape_class}`} />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <WaitlistModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}

export default Pricing
