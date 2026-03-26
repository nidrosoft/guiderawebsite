import Count from "@/components/common/Count"

const Counter = () => {
   return (
      <div className="counter-section-one mt-80 lg-mt-50">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-3 col-md-4">
                  <div className="counter-block d-inline-block">
                     <div className="main-count font-Montserrat"><span className="counter"><Count number={13} /></span>k+</div>
                     <p className="text-center fs-22 text-dark">Project Completed</p>
                  </div>
               </div>
               <div className="col-lg-6 col-md-4">
                  <div className="counter-block position-relative z-1 text-center pt-35 pb-35">
                     <div className="main-count font-Montserrat"><span className="counter"><Count number={200} /></span>k+</div>
                     <p className="text-center fs-22">Worldwide Clients</p>
                  </div>
               </div>
               <div className="col-lg-3 col-md-4 text-end">
                  <div className="counter-block d-inline-block">
                     <div className="main-count font-Montserrat"><span className="counter"><Count number={720} /></span></div>
                     <p className="text-center fs-22 text-dark">Experts</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Counter
