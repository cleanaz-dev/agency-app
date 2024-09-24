import React from "react";
import Link from "next/link";

const pricingData = [
 {
  title: "AI Discovery Session",
  price: "0",
  duration: "",
  shortText:
   "Explore how AI can transform your business with our expert consultation",
  aosDelay: "200",

  priceList: [
   {
    title: "AI Readiness Assessment",
   },
   {
    title: "Use Case Brainstorming",
   },
   {
    title: "ROI Projection",
   },
   {
    title: "Technology Stack Review",
   },
   {
    title: "Strategy Outline",
   },
   {
    title: "AI Ethics Consideration",
   },
   {
    title: "Customized Roadmap",
   },
  ],
 },
 {
  title: "AI Starter Package",
  price: "2,500",
  duration: "Starting at",
  shortText:
   "Ideal for businesses looking to implement their first AI solution or optimize an existing process.",
  aosDelay: "300",

  priceList: [
   {
    title: "Custom Chatbot Development",
   },
   {
    title: "Natural Language Processing Integration",
   },
   {
    title: "Basic Intent Recognition",
   },
   {
    title: "Multi-platform Deployment (Web & Mobile)",
   },
   {
    title: "Basic CRM Integration",
   },
   {
    title: "Admin Dashboard",
   },
   {
    title: "1 Month Training & Support",
   },
  ],
 },
 {
  title: "Advanced AI Suite",
  price: "10,000",
  duration: "Starting at",
  shortText:
   "Comprehensive AI solution with advanced chatbot, voice assistant, and deep CRM integration.",
  aosDelay: "400",

  priceList: [
   {
    title: "Advanced Conversational AI Development",
   },
   {
    title: "Voice Assistant Integration",
   },
   {
    title: "Multi-language Support",
   },
   {
    title: "Deep CRM Integration & Automation",
   },
   {
    title: "Sentiment Analysis & Emotional Intelligence",
   },
   {
    title: "Personalized Customer Journey Mapping",
   },
   {
    title: "Automated Customer Service",
   },
   {
    title: "Omnichannel Integration (Chat, Voice, Email, Social)",
   },
   {
    title: "3 Months Dedicated Support & Optimization",
   },
  ],
 },
];

const PricingStyleThree = () => {
 return (
  <>
   <div className="pricing-area pt-100 pb-70 bg-f9f6f6">
    <div className="container">
     <div className="section-title">
      <h2>AI Solutions Tailored to Your Needs</h2>
      <p>
       Explore our flexible AI packages designed to enhance your business with
       cutting-edge chatbots, voice assistants, and CRM integrations. Whether
       you're just starting with AI or looking for advanced solutions, we have
       options to fit your goals and budget.
      </p>
     </div>

     <div className="row justify-content-center">
      {pricingData &&
       pricingData.slice(0, 3).map((value, i) => (
        <div className="col-lg-4 col-md-6" key={i}>
         <div
          className="single-pricing-table"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-delay={value.aosDelay}
         >
          <div className="pricing-header">
           <h3>{value.title}</h3>
          </div>

          <div className="price">
           <sup>$</sup>
           {value.price} <sub>{value.duration}</sub>
           <p className="info-text">{value.shortText}</p>
          </div>

          <ul className="pricing-features">
           {value.priceList.map((value, i) => (
            <li key={i}>
             <i className="fa-solid fa-circle-check"></i> {value.title}
            </li>
           ))}
          </ul>

          <div className="btn-box">
           <Link href="/contact-us" className="btn btn-primary">
            Contact Us
           </Link>
          </div>
         </div>
        </div>
       ))}
     </div>
    </div>
   </div>
  </>
 );
};

export default PricingStyleThree;
