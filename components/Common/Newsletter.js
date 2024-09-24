import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const INITIAL_STATE = { email: "" };

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "You've been subscribed to our newsletter!",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

const Newsletter = () => {
  const [contact, setContact] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `https://hook.us1.make.com/csgnyxim8uh6osmstyqhivg8f3oy6fwn`;
      const { email } = contact;
      const payload = { email };
      const response = await axios.post(url, payload);
      console.log(response);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="newsletter-area">
        <div className="container">
          <div 
            className="newsletter-inner-area" 
            style={{ 
              backgroundImage: `url(/images/newsletter-bg.jpg)` 
            }}
          >
            <div className="newsletter-content">
              <span 
                className="sub-title"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                Get Started Instantly!
              </span>

              <h2
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                Get the only new update from this newsletter
              </h2>

              <form 
                className="newsletter-form"
                onSubmit={handleSubmit}
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  name="email"
                  value={contact.email}
                  onChange={handleChange}
                  required
                />
                <button type="submit">Subscribe!</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;