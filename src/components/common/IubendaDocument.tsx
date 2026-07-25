type IubendaDocumentProps = {
   html: string
   sourceUrl: string
   label: string
}

const IubendaDocument = ({ html, sourceUrl, label }: IubendaDocumentProps) => {
   return (
      <div className="iubenda-document">
         <div
            className="iubenda-document-body"
            dangerouslySetInnerHTML={{ __html: html }}
         />
         <p className="iubenda-document-source">
            This {label} is provided by{" "}
            <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
               iubenda
            </a>
            . You can also{" "}
            <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
               view it on iubenda.com
            </a>
            .
         </p>
         <style>{`
            .iubenda-document {
               color: #444;
               font-size: 16px;
               line-height: 1.8;
            }

            .iubenda-document-body #iub-legalDoc,
            .iubenda-document-body .container {
               max-width: 100% !important;
               width: 100% !important;
               padding: 0 !important;
               margin: 0 !important;
            }

            .iubenda-document-body .main-header {
               margin-bottom: 28px;
            }

            .iubenda-document-body .main-header h1 {
               font-size: 36px;
               font-weight: 700;
               line-height: 1.2;
               color: #000;
               margin: 0 0 12px;
            }

            .iubenda-document-body .main-header__meta,
            .iubenda-document-body .iub-base-style .main-header__meta {
               color: #888;
               font-size: 14px;
            }

            .iubenda-document-body h2 {
               font-size: 22px !important;
               font-weight: 700 !important;
               color: #000 !important;
               margin: 32px 0 12px !important;
               line-height: 1.3 !important;
            }

            .iubenda-document-body h3 {
               font-size: 17px !important;
               font-weight: 600 !important;
               color: #222 !important;
               margin: 22px 0 8px !important;
               line-height: 1.35 !important;
            }

            .iubenda-document-body p,
            .iubenda-document-body li {
               color: #444;
               font-size: 16px;
               line-height: 1.8;
            }

            .iubenda-document-body a {
               color: #3FC39E;
               font-weight: 600;
               text-decoration: none;
            }

            .iubenda-document-body a:hover {
               text-decoration: underline;
            }

            .iubenda-document-body ul,
            .iubenda-document-body ol {
               padding-left: 20px;
               margin-bottom: 16px;
            }

            .iubenda-document-body table {
               width: 100%;
               border-collapse: collapse;
               margin: 16px 0;
               font-size: 14px;
            }

            .iubenda-document-body th,
            .iubenda-document-body td {
               border-bottom: 1px solid #eee;
               padding: 8px 12px;
               text-align: left;
               vertical-align: top;
            }

            .iubenda-document-source {
               margin-top: 40px;
               padding-top: 20px;
               border-top: 1px solid #eee;
               font-size: 14px;
               color: #888;
            }

            .iubenda-document-source a {
               color: #3FC39E;
               font-weight: 600;
            }

            @media (max-width: 991px) {
               .iubenda-document {
                  font-size: 15px;
               }

               .iubenda-document-body .main-header h1 {
                  font-size: 26px;
               }

               .iubenda-document-body h2 {
                  font-size: 18px !important;
               }

               .iubenda-document-body h3 {
                  font-size: 16px !important;
               }

               .iubenda-document-body p,
               .iubenda-document-body li {
                  font-size: 15px;
               }
            }
         `}</style>
      </div>
   )
}

export default IubendaDocument
