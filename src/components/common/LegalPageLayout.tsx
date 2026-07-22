import Header from "@/layouts/headers/Header"
import Footer from "@/layouts/footers/Footer"

interface LegalPageLayoutProps {
   title: string
   lastUpdated: string
   children: React.ReactNode
}

const LegalPageLayout = ({ title, lastUpdated, children }: LegalPageLayoutProps) => {
   return (
      <div className="main-page-wrapper legal-page">
         <Header compact />
         <div className="container legal-page-container">
            {/* Page title — shown on desktop/tablet; hidden on mobile where the in-app or browser chrome already shows it */}
            <h1 className="legal-page-title">{title}</h1>
            <p className="legal-page-updated">Last updated: {lastUpdated}</p>
            <div className="legal-content">
               {children}
            </div>
         </div>
         <Footer />
         <style>{`
            .legal-page-container {
               padding-top: 160px;
               padding-bottom: 80px;
               max-width: 800px;
            }

            .legal-page-title {
               font-size: 42px;
               font-weight: 700;
               margin-bottom: 8px;
               line-height: 1.15;
               color: #000;
            }

            .legal-page-updated {
               color: #888;
               font-size: 14px;
               margin-bottom: 40px;
            }

            .legal-content {
               font-size: 16px;
               line-height: 1.8;
               color: #444;
            }

            .legal-content h2 {
               font-size: 24px !important;
               font-weight: 700 !important;
               margin-bottom: 12px !important;
               margin-top: 32px !important;
               color: #000 !important;
               line-height: 1.3 !important;
            }

            .legal-content h3 {
               font-size: 18px !important;
               font-weight: 600 !important;
               margin-bottom: 8px !important;
               margin-top: 20px !important;
               color: #222 !important;
               line-height: 1.35 !important;
            }

            @media (max-width: 991px) {
               .legal-page-container {
                  padding-top: 100px;
                  padding-bottom: 56px;
               }

               .legal-page-title {
                  display: none;
               }

               .legal-page-updated {
                  margin-bottom: 24px;
               }

               .legal-content {
                  font-size: 15px;
                  line-height: 1.7;
               }

               .legal-content h2 {
                  font-size: 18px !important;
                  margin-top: 28px !important;
                  margin-bottom: 10px !important;
               }

               .legal-content h3 {
                  font-size: 16px !important;
                  margin-top: 18px !important;
               }
            }

            @media (max-width: 575px) {
               .legal-page-container {
                  padding-top: 88px;
                  padding-bottom: 48px;
               }

               .legal-content h2 {
                  font-size: 17px !important;
               }
            }
         `}</style>
      </div>
   )
}

export default LegalPageLayout
