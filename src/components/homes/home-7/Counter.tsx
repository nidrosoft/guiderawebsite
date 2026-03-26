interface DataTtpe {
   id: number;
   count: JSX.Element;
   title: string;
   class: string;
   class_2?: string;
}

const counter_data: DataTtpe[] = [
   {
      id: 1,
      count: (<><span className="counter">13</span>k+</>),
      title: "Project Completed",
      class: "col-lg-3 col-md-4 text-center text-lg-start",
   },
   {
      id: 2,
      count: (<><span className="counter">200</span>k+</>),
      title: "Worldwide Clients",
      class: "col-lg-6 col-md-4",
      class_2: "counter-block position-relative z-1 skew-line text-center pt-70 lg-pt-30 pb-70 lg-pb-30",
   },
   {
      id: 3,
      count: (<><span className="counter">720</span></>),
      title: "Experts",
      class: "col-lg-3 text-center text-lg-end col-md-4",
   },
];

const Counter = () => {
   return (
      <div className="counter-section-one border-top border-bottom border-dark border-2 mt-130 lg-mt-80 sm-pt-20 sm-pb-20">
         <div className="container xl">
            <div className="row align-items-center">
               {counter_data.map((item) => (
                  <div key={item.id} className={item.class}>
                     <div className={item.class_2 ? item.class_2 : "counter-block d-inline-block"}>
                        <div className="main-count font-Montserrat">{item.count}</div>
                        <p className="text-center fs-22 text-dark">{item.title}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Counter
