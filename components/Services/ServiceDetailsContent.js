import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import singleServiceImg from "../../public/images/services/single-service2.jpg";

const ServiceDetailsContent = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="services-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="services-details-image">
                <Image
                  src={singleServiceImg}
                  alt="image"
                  width={1250}
                  height={700}
                />

                {/* <div className="video-box">
                  <div
                    onClick={() => setToggler(!toggler)}
                    className="video-btn"
                  >
                    <i className="fa-solid fa-play"></i>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <div className="services-details-desc">
                <h2>Services Description</h2>
                <p>
                At LLM GEM, we specialize in cutting-edge web development, AI solutions, and seamless integrations to elevate your digital presence. Our team of experts combines technical prowess with creative innovation to deliver tailored solutions that meet your unique business needs.
                </p>

                <p>
                Our web development services encompass responsive design, robust backend systems, and user-friendly interfaces that engage and convert visitors. We utilize the latest technologies and best practices to ensure your website is not only visually appealing but also performant and secure.
                </p>

                <p>
                In the realm of AI solutions, we harness the power of machine learning and natural language processing to create intelligent systems that can automate tasks, provide insights, and enhance decision-making processes. From chatbots to predictive analytics, we develop AI tools that give your business a competitive edge.
                </p>

                <p>
                Our easy integration services ensure that your new solutions work harmoniously with your existing systems. We prioritize smooth transitions and minimal disruption, allowing you to leverage new technologies without compromising your current operations.
                </p>

                <p>
                Embracing innovation is at the core of what we do. We constantly stay ahead of the curve, exploring emerging technologies and industry trends to provide our clients with cutting-edge solutions. Whether you're a startup looking to establish your digital presence or an established enterprise aiming to modernize your systems, LLM GEM has the expertise and creativity to bring your vision to life. Let us help you navigate the digital landscape and unlock your business's full potential.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="services-details-info">
                <h3>Our Working Process</h3>
                <ul>
                  <li>
                  Consultation: We begin by understanding your goals, challenges, and vision for the project.
                  </li>
                  <li>
                  Planning: Our team develops a comprehensive strategy and project roadmap.
                  </li>
                  <li>
                  Design and Development: We create prototypes and begin building your solution, keeping you involved at every step.
                  </li>
                  <li>
                  Testing and Quality Assurance: Rigorous testing ensures your product meets the highest standards of performance and security.
                  </li>
                  <li>
                  Deployment: We carefully launch your solution, providing support throughout the process.
                  </li>
                  <li>
                  Ongoing Support: Our team remains available for maintenance, updates, and further enhancements.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
