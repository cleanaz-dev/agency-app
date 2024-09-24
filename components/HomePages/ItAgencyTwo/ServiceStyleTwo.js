import React from "react";
import Link from "next/link";
import Image from "next/image";

import serviceImg1 from "../../../public/images/services/it-service1.png";
import serviceImg2 from "../../../public/images/services/ai-service2.png";
import serviceImg3 from "../../../public/images/services/it-service3.png";

const ServiceStyleTwo = () => {
 return (
  <>
   <div className="service-style-two ptb-100 bg-fcfbfb">
    <div className="container">
     <div className="row align-items-center">
      <div className="col-lg-6">
       <div
        className="service-info pr-50"
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-delay="100"
       >
        <div className="info-head">
         <h2 className="title">Web & Mobile Development</h2>
         <p>
          Transform your ideas into reality with our top-notch web and mobile
          development services. We build responsive, high-performance websites
          and mobile apps tailored to your business needs, ensuring a seamless
          user experience across all devices.
         </p>
        </div>

        <div className="row">
         <div className="col-sm-6">
          <div className="feature-list">
           <i className="fa-solid fa-circle-check"></i>
           Responsive Design
          </div>
          <div className="feature-list">
           <i className="fa-solid fa-circle-check"></i>
           Mobile App Development
          </div>
          <div className="feature-list">
           <i className="fa-solid fa-circle-check"></i>
           React Web Development
          </div>
         </div>

         <div className="col-sm-6">
          <div className="feature-list">
           <i className="fa-solid fa-circle-check"></i>
           UI / UX Design
          </div>
          <div className="feature-list">
           <i className="fa-solid fa-circle-check"></i>
           NextJS Web Development
          </div>
          <div className="feature-list">
           <i className="fa-solid fa-circle-check"></i>
           Full Stack Development
          </div>
         </div>
        </div>

        <div className="service-read-more">
         <Link href="/services/service-details/" className="btn btn-primary">
          <i className="fa-solid fa-list-check"></i> Read more
         </Link>
        </div>
       </div>
      </div>

      <div className="col-lg-6">
       <div
        className="service-right-img"
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-delay="300"
       >
        <Image src={serviceImg1} alt="Service Image" width={770} height={582} />
       </div>
      </div>
     </div>
    </div>
   </div>

   <div className="service-style-two ptb-100">
    <div className="container">
     <div className="row align-items-center">
      <div className="col-lg-6">
       <div
        className="service-left-img"
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-delay="100"
       >
        <Image src={serviceImg2} alt="Service Image" width={852} height={580} />
       </div>
      </div>

      <div className="col-lg-6">
       <div
        className="service-info pl-50"
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-delay="300"
       >
        <div className="info-head">
         <h2 className="title">AI Solutions</h2>
         <p>
          Explore our range of AI solutions designed to optimize and enhance
          your business. We offer cutting-edge services that address various
          needs, from marketing to data management.
         </p>
        </div>

        <div className="row">
         <div className="col-sm-6">
          <div className="feature-list">
           <i className="fa-solid fa-circle-check"></i>
           Content Generation
          </div>
          <div className="feature-list">
           <i className="fa-solid fa-circle-check"></i>
           Lead Generation
          </div>
         </div>

         <div className="col-sm-6">
          <div className="feature-list">
           <i className="fa-solid fa-circle-check"></i>
           AI Chatbots
          </div>
          <div className="feature-list">
           <i className="fa-solid fa-circle-check"></i>
           AI Voice Assistant
          </div>
         </div>
        </div>

        <div className="service-read-more">
         <Link href="/services/service-details/" className="btn btn-primary">
          <i className="fa-solid fa-list-check"></i> Read more
         </Link>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>

   <div className="service-style-two ptb-100 bg-fcfbfb">
    <div className="container">
     <div className="row align-items-center">
      <div className="col-lg-6">
       <div
        className="service-info pr-50"
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-delay="100"
       >
        <div className="info-head">
         <h2 className="title">Easy Integration</h2>
         <p>
         Seamlessly integrate with a variety of services and platforms to enhance your operational efficiency. Our solutions are designed to ensure smooth integration, minimizing disruptions and maximizing productivity.
         </p>
        </div>

        <div className="row">
         <div className="col-sm-6">
          <div className="feature-list">
           <i className="fa-solid fa-circle-check"></i>
           API Integration
          </div>
          <div className="feature-list">
           <i className="fa-solid fa-circle-check"></i>
           Third-Party Services
          </div>
          <div className="feature-list">
           <i className="fa-solid fa-circle-check"></i>
           Custom Automation
          </div>
         </div>

         <div className="col-sm-6">
          <div className="feature-list">
           <i className="fa-solid fa-circle-check"></i>
           CRM Integration
          </div>
         </div>
        </div>

        <div className="service-read-more">
         <Link href="/services/service-details/" className="btn btn-primary">
          <i className="fa-solid fa-list-check"></i> Read more
         </Link>
        </div>
       </div>
      </div>

      <div className="col-lg-6">
       <div
        className="service-right-img"
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-delay="300"
       >
        <Image src={serviceImg3} alt="Service Image" width={894} height={582} />
       </div>
      </div>
     </div>
    </div>
   </div>
  </>
 );
};

export default ServiceStyleTwo;
