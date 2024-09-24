import React from "react";
import Link from "next/link";

const servicesData = [
  {
    iconName: "pe-7s-notebook bg-13c4a1",
    title: "AI Consultancy",
    shortText:
      "Our AI consultancy services provide expert guidance to help your business leverage AI technologies, streamline operations, and achieve growth with tailored AI strategies.",
    viewDetails: "/services/service-details/",
    aosDelay: "100",
  },
  {
    iconName: "pe-7s-display2 bg-6610f2",
    title: "Web Development",
    shortText:
      "We offer cutting-edge web development services that integrate AI features, providing robust and scalable solutions to improve user experience and business performance.",
    viewDetails: "/services/service-details/",
    aosDelay: "200",
  },
  {
    iconName: "pe-7s-light bg-ffb700",
    title: "AI Automation",
    shortText:
      "Automate your business processes with our AI automation services, reducing manual effort, increasing efficiency, and enhancing decision-making through intelligent systems.",
    viewDetails: "/services/service-details/",
    aosDelay: "300",
  },
  {
    iconName: "pe-7s-phone bg-fc3549",
    title: "Mobile App Development",
    shortText:
      "Our mobile app development integrates AI-driven features, ensuring smooth functionality and personalized experiences for users across various platforms.",
    viewDetails: "/services/service-details/",
    aosDelay: "400",
  },
  {
    iconName: "pe-7s-chat bg-00d280",
    title: "AI Chatbot",
    shortText:
      "Enhance customer engagement with AI chatbots that offer real-time responses, 24/7 support, and intelligent interactions to boost satisfaction and streamline support operations.",
    viewDetails: "/services/service-details/",
    aosDelay: "500",
  },
  {
    iconName: "pe-7s-call bg-ff612f",
    title: "AI Voice Assistance",
    shortText:
      "Implement AI voice assistants that understand natural language, deliver accurate responses, and improve accessibility, making your services more user-friendly and efficient.",
    viewDetails: "/services/service-details/",
    aosDelay: "600",
  },
 
];

const ServicesStyleFour = () => {
  return (
    <>
      <div className="bg-fcfbfb pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            {servicesData &&
              servicesData.map((value, i) => (
                <div
                  className="col-lg-4 col-sm-6"
                  key={i}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={value.aosDelay}
                >
                  <div className="service-card-one white-bg text-center">
                    <i className={value.iconName}></i>
                    <h3>
                      <Link href={value.viewDetails}>{value.title}</Link>
                    </h3>
                    <p>{value.shortText}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesStyleFour;
