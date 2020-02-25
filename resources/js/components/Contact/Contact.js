import React from 'react';

const Contact = (props) => {
  const formSubmit = (event) =>{
    event.preventDefault()
    alert('Thank you for subscribing. We will update you soon!!')
  }
    return ( 
        <React.Fragment>
            <div className="site-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="h3 mb-3 text-black text-center">Get In Touch</h2>
          </div>
          <div className="offset-md-3 col-md-6 ">

            <form action="#" onSubmit={formSubmit}>
              
              <div className="p-3 p-lg-5 border">
                <div className="form-group row">
                  <div className="col-md-6">
                    <label className="text-black">First Name <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="c_fname" name="c_fname"/>
                  </div>
                  <div className="col-md-6">
                    <label className="text-black">Last Name <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="c_lname" name="c_lname"/>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                    <label className="text-black">Email <span className="text-danger">*</span></label>
                    <input type="email" className="form-control" id="c_email" name="c_email" placeholder=""/>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                    <label className="text-black">Subject </label>
                    <input type="text" className="form-control" id="c_subject" name="c_subject"/>
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-12">
                    <label className="text-black">Message </label>
                    <textarea name="c_message" id="c_message" cols="30" rows="7" className="form-control"></textarea>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-lg-12">
                    <input type="submit" className="btn btn-primary btn-lg btn-block" value="Send Message"></input>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
        </React.Fragment>
     );
}
 
export default Contact;