import icon_1 from "@/assets/images/icon/icon_71.svg"
import Image from "next/image"
import Link from "next/link"

const Pricing = () => {
  return (
    <div className="pricing-section-seven mt-180 lg-mt-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="title-ten text-center mb-130 lg-mb-80 sm-mb-40">
              <h2>All-inclusive great options pick your Plan</h2>
            </div>
          </div>
        </div>

        <div className="pr-table-wrapper d-flex flex-wrap">
          <div className="pr-column">
            <div className="pr-header d-flex align-items-end">
              <h4>Features</h4>
            </div>
            <ul className="feature-list style-none">
              <li><span>10 gb Storage</span></li>
              <li><span>200 gb Storage</span></li>
              <li><span>Unlimited Storage</span></li>
              <li><span>Virus Protection</span></li>
              <li><span>Online Threat Protection</span></li>
              <li><span>Firewall</span></li>
              <li><span>Data Security</span></li>
              <li><span>Onboarding & Support</span></li>
              <li><span>Password Manager</span></li>
            </ul>
          </div>
          <div className="pr-column">
            <div className="pr-header text-center">
              <div className="plan-name fw-500 text-uppercase">FREE</div>
              <div className="price fw-500">0</div>
              <div>Get Piku tailored for your</div>
              <Link href="#" className="btn-nineteen w-100 mt-50 lg-mt-30">Active</Link>
            </div>
            <ul className="feature-list style-none">
              <li><Image src={icon_1} alt="" className="icon" /> <span>10 gb Storage</span></li>
              <li><span>200 gb Storage</span></li>
              <li><span>Unlimited Storage</span></li>
              <li><Image src={icon_1} alt="" className="icon" /> <span>Virus Protection</span></li>
              <li><span>Online Threat Protection</span></li>
              <li><span>Firewall</span></li>
              <li><Image src={icon_1} alt="" className="icon" /> <span>Data Security</span></li>
              <li><span>Onboarding & Support</span></li>
              <li><Image src={icon_1} alt="" className="icon" /> <span>Password Manager</span></li>
              <li>1 Device</li>
            </ul>
          </div>
          <div className="pr-column popular">
            <div className="pr-header text-center">
              <div className="popular-badge fw-500 text-uppercase">Popular</div>
              <div className="plan-name fw-500 text-uppercase">Pro</div>
              <div className="price fw-500">$2.99<sub>/ mo</sub></div>
              <div><span className="fw-500 text-dark">Save ~20%</span> when billed yearly</div>
              <Link href="#" className="btn-nineteen w-100 mt-50 lg-mt-30">Add To Cart</Link>
            </div>
            <ul className="feature-list style-none">
              <li><span>10 gb Storage</span></li>
              <li><Image src={icon_1} alt="" className="icon" /> <span>200 gb Storage</span></li>
              <li><span>Unlimited Storage</span></li>
              <li><Image src={icon_1} alt="" className="icon" /> <span>Virus Protection</span></li>
              <li><Image src={icon_1} alt="" className="icon" /> <span>Online Threat Protection</span></li>
              <li><span>Firewall</span></li>
              <li><Image src={icon_1} alt="" className="icon" /> <span>Data Security</span></li>
              <li><Image src={icon_1} alt="" className="icon" /> <span>Onboarding & Support</span></li>
              <li><Image src={icon_1} alt="" className="icon" /> <span>Password Manager</span></li>
              <li>3 Device</li>
            </ul>
          </div>
          <div className="pr-column">
            <div className="pr-header text-center">
              <div className="plan-name fw-500 text-uppercase">BUSINESS</div>
              <div className="price fw-500">$4.99<sub>/ mo</sub></div>
              <div><span className="fw-500 text-dark">Save ~30%</span> when billed yearly</div>
              <Link href="#" className="btn-nineteen w-100 mt-50 lg-mt-30">Add To Cart</Link>
            </div>
            <ul className="feature-list style-none">
              <li><span>10 gb Storage</span></li>
              <li><span>200 gb Storage</span></li>
              <li><Image src={icon_1} alt="" className="icon" /> <span>Unlimited Storage</span></li>
              <li><Image src={icon_1} alt="" className="icon" /> <span>Virus Protection</span></li>
              <li><Image src={icon_1} alt="" className="icon" /> <span>Online Threat Protection</span></li>
              <li><Image src={icon_1} alt="" className="icon" /> <span>Firewall</span></li>
              <li><Image src={icon_1} alt="" className="icon" /> <span>Data Security</span></li>
              <li><Image src={icon_1} alt="" className="icon" /> <span>Onboarding & Support</span></li>
              <li><Image src={icon_1} alt="" className="icon" /> <span>Password Manager</span></li>
              <li>5 Device</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
