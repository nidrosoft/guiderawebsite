import Link from "next/link"

const Category = () => {
   return (
      <div className="blog-category mt-60 lg-mt-40">
         <h3 className="sidebar-title">Category</h3>
         <ul className="style-none">
            <li><Link href="/">Digital <span>(3)</span></Link></li>
            <li><Link href="/">Marketing <span>(4)</span></Link></li>
            <li><Link href="/">Consultation <span>(8)</span></Link></li>
            <li><Link href="/">Payments <span>(5)</span></Link></li>
            <li><Link href="/">Banking <span>(7)</span></Link></li>
         </ul>
      </div>
   )
}

export default Category
