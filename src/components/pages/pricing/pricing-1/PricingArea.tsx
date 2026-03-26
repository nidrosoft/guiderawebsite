import Image from "next/image"

import icon_1 from "@/assets/images/icon/icon_94.svg"
import icon_2 from "@/assets/images/icon/icon_95.svg"

const PricingArea = () => {
   return (
      <div className="price-compare-table mt-180 xl-mt-150 lg-mt-80">
         <div className="container lg">
            <div className="table-responsive">
               <table className="table">
                  <thead>
                     <tr>
                        <th>Features</th>
                        <th>Starter</th>
                        <th>Basic</th>
                        <th>CMS</th>
                        <th>usiness</th>
                        <th>Enterprise</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <th>Publishing</th>
                        <td><Image src={icon_1} alt="" /></td>
                        <td><Image src={icon_2} alt="" /></td>
                        <td><Image src={icon_1} alt="" /></td>
                        <td><Image src={icon_2} alt="" /></td>
                        <td><Image src={icon_1} alt="" /></td>
                     </tr>
                     <tr>
                        <th>Admin</th>
                        <td><Image src={icon_2} alt="" /></td>
                        <td><Image src={icon_1} alt="" /></td>
                        <td><Image src={icon_2} alt="" /></td>
                        <td><Image src={icon_2} alt="" /></td>
                        <td><Image src={icon_1} alt="" /></td>
                     </tr>
                     <tr>
                        <th>Site features</th>
                        <td><Image src={icon_1} alt="" /></td>
                        <td><Image src={icon_2} alt="" /></td>
                        <td><Image src={icon_1} alt="" /></td>
                        <td><Image src={icon_1} alt="" /></td>
                        <td><Image src={icon_1} alt="" /></td>
                     </tr>
                     <tr>
                        <th>CMS</th>
                        <td><Image src={icon_1} alt="" /></td>
                        <td><Image src={icon_2} alt="" /></td>
                        <td><Image src={icon_1} alt="" /></td>
                        <td><Image src={icon_2} alt="" /></td>
                        <td><Image src={icon_1} alt="" /></td>
                     </tr>
                     <tr>
                        <th>Traffic</th>
                        <td><Image src={icon_1} alt="" /></td>
                        <td><Image src={icon_1} alt="" /></td>
                        <td><Image src={icon_1} alt="" /></td>
                        <td><Image src={icon_1} alt="" /></td>
                        <td><Image src={icon_2} alt="" /></td>
                     </tr>
                     <tr>
                        <th>SEO</th>
                        <td><Image src={icon_1} alt="" /></td>
                        <td><Image src={icon_1} alt="" /></td>
                        <td><Image src={icon_2} alt="" /></td>
                        <td><Image src={icon_1} alt="" /></td>
                        <td><Image src={icon_1} alt="" /></td>
                     </tr>
                     <tr>
                        <th>Interactions</th>
                        <td><Image src={icon_1} alt="" /></td>
                        <td><Image src={icon_2} alt="" /></td>
                        <td><Image src={icon_2} alt="" /></td>
                        <td><Image src={icon_1} alt="" /></td>
                        <td><Image src={icon_1} alt="" /></td>
                     </tr>
                     <tr>
                        <th>Security</th>
                        <td><Image src={icon_1} alt="" /></td>
                        <td><Image src={icon_1} alt="" /></td>
                        <td><Image src={icon_1} alt="" /></td>
                        <td><Image src={icon_1} alt="" /></td>
                        <td><Image src={icon_1} alt="" /></td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   )
}

export default PricingArea
