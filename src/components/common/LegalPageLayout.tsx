import HeaderSix from "@/layouts/headers/HeaderSix"
import FooterFive from "@/layouts/footers/FooterFive"

interface LegalPageLayoutProps {
   title: string
   lastUpdated: string
   children: React.ReactNode
}

const LegalPageLayout = ({ title, lastUpdated, children }: LegalPageLayoutProps) => {
   return (
      <div className="main-page-wrapper">
         <HeaderSix />
         <div className="container" style={{ paddingTop: '160px', paddingBottom: '80px', maxWidth: '800px' }}>
            <h1 style={{ fontSize: '42px', fontWeight: 700, marginBottom: '8px' }}>{title}</h1>
            <p style={{ color: '#888', fontSize: '14px', marginBottom: '40px' }}>Last updated: {lastUpdated}</p>
            <div className="legal-content" style={{ fontSize: '16px', lineHeight: 1.8, color: '#444' }}>
               {children}
            </div>
         </div>
         <FooterFive />
      </div>
   )
}

export default LegalPageLayout
