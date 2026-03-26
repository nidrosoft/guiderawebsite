"use client"
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import Link from "next/link";

import card_img from "@/assets/images/assets/card_07.png"
import icon_b1 from "@/assets/images/icon/icon_23.svg"
import icon_b2 from "@/assets/images/icon/icon_24.svg"
import icon_b3 from "@/assets/images/icon/icon_25.svg"

import icon_w1 from "@/assets/images/icon/icon_23_w.svg"
import icon_w2 from "@/assets/images/icon/icon_24_w.svg"
import icon_w3 from "@/assets/images/icon/icon_25_w.svg"

interface TavTitle {
  id: number;
  icon_black: StaticImageData;
  icon_white: StaticImageData;
  title: string;
}

const tab_title: TavTitle[] =
  [
    {
      id: 1,
      icon_black: icon_b1,
      icon_white: icon_w1,
      title: "Finance & Payment"
    },
    {
      id: 2,
      icon_black: icon_b2,
      icon_white: icon_w2,
      title: "Collaboration & Task"
    },
    {
      id: 3,
      icon_black: icon_b3,
      icon_white: icon_w3,
      title: "Marketing Automation"
    },
    {
      id: 4,
      icon_black: icon_b1,
      icon_white: icon_w1,
      title: "Chat & Support"
    },
  ]

interface ContentType {
  id: number;
  thumb: StaticImageData;
  title: string;
  desc: JSX.Element;
}

const content_data: ContentType[] = [
  {
    id: 1,
    thumb: card_img,
    title: "Handle Tasks with Expertise",
    desc: (<>commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat pariatu</>),
  },
  {
    id: 2,
    thumb: card_img,
    title: "Handle Tasks with Expertise",
    desc: (<>commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat pariatu</>),
  },
  {
    id: 3,
    thumb: card_img,
    title: "Handle Tasks with Expertise",
    desc: (<>commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat pariatu</>),
  },
  {
    id: 4,
    thumb: card_img,
    title: "Handle Tasks with Expertise",
    desc: (<>commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat pariatu</>),
  },
];

const BLockFeatureTwo = () => {

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="block-feature-fourteen position-relative z-1 mt-150 lg-mt-70">
      <div className="container">
        <div className="row">
          <div className="col-xxl-9 col-xl-8 col-lg-10 m-auto">
            <div className="text-center mb-80 lg-mb-40">
              <div className="title-six">
                <h2>Coordinate Tasks Toward One Solution</h2>
              </div>
              <p className="fs-24">Piku for every business you need. we’r provide best offer with best services</p>
            </div>
          </div>
        </div>
        <div className="feature-tab">
          <nav className="filter-nav">
            <div className="nav nav-tabs align-items-center justify-content-center justify-content-xl-between border-0" role="tablist">
              {tab_title.map((item, index) => (
                <button onClick={() => handleTabClick(index)} key={item.id} className={`nav-link ${activeTab === index ? "active" : ""}`}>
                  <Image src={activeTab === index ? item.icon_white : item.icon_black} alt="" className="shapes icon" />
                  {item.title}
                </button>
              ))}
            </div>
          </nav>
          <div className="mt-80 lg-mt-40">
            <div className="tab-content">
              {content_data.map((item, index) => (
                <div key={index} className={`tab-pane show ${activeTab === index ? "active" : ""}`}>
                  <div className="row align-items-center">
                    <div className="col-lg-5">
                      <div className="title-seven mb-30">
                        <h2>{item.title}</h2>
                      </div>
                      <p className="fs-22 mb-50">{item.desc}</p>
                      <Link href="#" className="btn-twelve"><span>Explore More</span> <i className="fa-sharp fa-regular fa-arrow-right-long"></i></Link>
                    </div>
                    <div className="col-lg-7">
                      <Image src={item.thumb} alt="" className="ms-auto md-mt-40" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BLockFeatureTwo
