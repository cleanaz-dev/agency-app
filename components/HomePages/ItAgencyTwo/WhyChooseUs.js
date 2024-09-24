import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import aboutImg from "../../../public/images/about-img6.jpg";

const WhyChooseUs = () => {
 const [toggler, setToggler] = useState(false);
 return (
  <>
   <FsLightbox
    toggler={toggler}
    sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
   />

   <section className="about-area ptb-100">
    <div className="container">
     <div className="row align-items-center">
      <div className="col-lg-7 col-md-12">
       <div
        className="about-content about-content-two pl-0 mt-0"
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-delay="200"
       >
        <div className="section-title">
         <h2>Why Choose Us</h2>
         <p>
          At our AI agency, we combine cutting-edge technology with a
          personalized approach to deliver innovative solutions that drive your
          business forward. Our commitment to excellence and continuous
          improvement sets us apart in the rapidly evolving AI landscape.
         </p>
        </div>

        <div className="about-text">
         <h4>Who We Are</h4>
         <p>
          We are a team of passionate AI experts, developers, and strategists
          dedicated to harnessing the power of artificial intelligence to solve
          complex business challenges. Our diverse backgrounds and collaborative
          spirit enable us to approach each project with fresh perspectives and
          innovative ideas.
         </p>
        </div>

        <div className="about-text">
         <h4>Our Approach</h4>
         <p>
          We believe in a hands-on approach to every project. By working closely
          with our clients, we ensure that each AI solution is tailored to their
          specific needs and seamlessly integrates with their existing systems.
          Our agile methodology allows us to adapt quickly and deliver results
          that exceed expectations.
         </p>
        </div>

        <div className="about-text">
         <h4>Our Mission</h4>
         <p>
          Our mission is to empower businesses through AI-driven innovation. We
          are committed to pushing the boundaries of what's possible, constantly
          exploring new ways to implement ideas and improve outcomes. By staying
          at the forefront of AI advancements, we help our clients stay ahead in
          their industries and achieve sustainable growth.
         </p>
        </div>
       </div>
      </div>

      <div className="col-lg-5 col-md-12">
       <div
        className="about-image right-image"
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-delay="400"
       >
        <Image
         src={aboutImg}
         alt="image"
         className="rounded-10"
         width={500}
         height={750}
        />

        {/* <div className="video-box">
         <div className="video-btn" onClick={() => setToggler(!toggler)}>
          <i className="fa-solid fa-play"></i>
         </div>
        </div> */}
       </div>
      </div>
     </div>
    </div>
   </section>
  </>
 );
};

export default WhyChooseUs;
