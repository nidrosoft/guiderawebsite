import Link from "next/link"

const RecentNews = () => {
   return (
      <div className="blog-recent-news mt-60 lg-mt-40">
         <h3 className="sidebar-title">Recent News</h3>
         <article className="recent-news">
            <div className="post-data">
               <div className="date">09 Feb 2023</div>
               <Link href="/blog-details" className="blog-title"><h3>It’s easy to Buildup your Business with us</h3></Link>
            </div>
         </article>
         <article className="recent-news">
            <div className="post-data">
               <div className="date">17 Aug 2023</div>
               <Link href="/blog-details" className="blog-title"><h3>Make your life easier with our Piku CRM App</h3></Link>
            </div>
         </article>
         <article className="recent-news">
            <div className="post-data">
               <div className="date">06 Dec 2023</div>
               <Link href="/blog-details" className="blog-title"><h3>Introducing new tools for your design.</h3></Link>
            </div>
         </article>
      </div>
   )
}

export default RecentNews
