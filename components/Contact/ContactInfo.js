import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="pe-7s-mail"></i>
                </div>
                <h3>Email Me</h3>
                <p>
                  <a href="mailto:admin@pungent.com">founder@llmgem.com</a>
                </p>
               
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">

                <div className="icon">
                  <i className="pe-7s-map-2"></i>
                </div>
                <h3>Location</h3>
                <p>
                  Toronto, Ontario 🍁 </p>
                
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="pe-7s-call"></i>
                </div>
                <h3>Call Me</h3>
                <p>
                  <a href="tel:+12267902753">+1 226-790-2753</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
