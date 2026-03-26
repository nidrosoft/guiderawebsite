"use client"

const Contact = () => {
   return (
      <div className="contact-section-one mt-180 lg-mt-80">
         <div className="container xl">
            <div className="wrapper">
               <div className="title-three text-center mb-60">
                  <h2>CONTACT US</h2>
               </div>

               <div className="form-style-one">
                  <form onSubmit={(e) => e.preventDefault()} id="contact-form" data-toggle="validator">
                     <div className="messages"></div>
                     <div className="row controls">
                        <div className="col-sm-6">
                           <div className="input-group-meta form-group mb-30">
                              <label htmlFor="">Name*</label>
                              <input type="text" placeholder="Full Name*" name="name" data-error="Name is required." />
                              <div className="help-block with-errors"></div>
                           </div>
                        </div>
                        <div className="col-sm-6">
                           <div className="input-group-meta form-group mb-30">
                              <label htmlFor="">Email*</label>
                              <input type="email" placeholder="Email Address*" name="email" data-error="Valid email is required." />
                              <div className="help-block with-errors"></div>
                           </div>
                        </div>
                        <div className="col-12">
                           <div className="input-group-meta form-group mb-35">
                              <label htmlFor="">Subject (optional)</label>
                              <input type="text" placeholder="Write your subject..." name="subject" />
                           </div>
                        </div>
                        <div className="col-12">
                           <div className="input-group-meta form-group mb-35">
                              <textarea placeholder="Write Message here.." name="message" data-error="Please,leave us a message."></textarea>
                              <div className="help-block with-errors"></div>
                           </div>
                        </div>
                        <div className="col-12 mt-20"><button className="btn-five tran3s m-auto">Send Message</button></div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Contact
