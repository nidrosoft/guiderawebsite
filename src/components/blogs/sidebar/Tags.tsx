import Link from "next/link"

const Tags = () => {
   return (
      <div className="blog-keyword mt-60 lg-mt-40">
         <h3 className="sidebar-title">Keywords</h3>
         <ul className="style-none d-flex flex-wrap">
            <li><Link href="/">Finance</Link></li>
            <li><Link href="/">Business</Link></li>
            <li><Link href="/">Online Banking</Link></li>
            <li><Link href="/">Consultation</Link></li>
            <li><Link href="/">Branding</Link></li>
            <li><Link href="/">Cards</Link></li>
            <li><Link href="/">Payments</Link></li>
            <li><Link href="/">Loan</Link></li>
         </ul>
      </div>
   )
}

export default Tags
