import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import aboutImg from "../../public/images/about-us.jpg";

const AboutContent = () => {
 const [toggler, setToggler] = useState(false);
 return (
  <>
   {/* <FsLightbox
    toggler={toggler}
    sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
   /> */}

   <div className="about-area ptb-100">
    <div className="container">
     <div className="row align-items-center">
      <div className="col-lg-5 col-md-12">
       <div className="about-image">
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

      <div className="col-lg-7 col-md-12">
       <div className="about-content about-content-two">
        <div className="section-title">
         <h2>About Us</h2>
         <p>
          At LLM Gem, we're pioneering the future of business intelligence
          through innovative AI solutions. Our expertise in large language
          models drives transformative change for businesses across industries.
         </p>
        </div>

        <div className="about-text">
         <h4>Who We Are</h4>
         <p>
          We are a team of passionate AI experts, developers, and strategists
          dedicated to harnessing the power of artificial intelligence. Our
          diverse backgrounds and collaborative spirit enable us to approach
          each project with fresh perspectives and cutting-edge solutions.
         </p>
        </div>

        <div className="about-text">
         <h4>Our Journey</h4>
         <p>
          Founded in 2024, LLM Gem emerged from a vision to make advanced AI
          accessible to businesses of all sizes. Our journey began with a focus
          on chatbots and has evolved to encompass a wide range of AI-powered
          solutions that are reshaping how businesses operate and interact with
          their customers.
         </p>
        </div>

        <div className="about-text">
         <h4>Our Mission</h4>
         <ul>
          <li>
           <i className="fa-solid fa-circle-check"></i>
           Empower businesses with AI solutions that drive efficiency,
           innovation, and growth.
          </li>
          <li>
           <i className="fa-solid fa-circle-check"></i>
           Develop and deploy ethical AI systems that enhance human capabilities
           rather than replace them.
          </li>
          <li>
           <i className="fa-solid fa-circle-check"></i>
           Continuously push the boundaries of AI technology to solve complex
           business challenges and improve customer experiences.
          </li>
         </ul>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </>
 );
};

export default AboutContent;
