import React from "react";
import Image from "next/image";

const technologiesData = [
  {
    image: "/images/technologies/nextjs.svg",
    name: "Next.js",
    aosDelay: "100",
  },
  {
    image: "/images/technologies/stripe.svg",
    name: "Stripe",
    aosDelay: "200",
  },
  {
    image: "/images/technologies/mongodb.svg",
    name: "MongoDB",
    aosDelay: "300",
  },
  {
    image: "/images/technologies/chatgpt.svg",
    name: "OpenAI",
    aosDelay: "400",
  },
  {
    image: "/images/technologies/claude.svg",
    name: "Anthropic",
    aosDelay: "500",
  },
  {
    image: "/images/technologies/aws.svg",
    name: "AWS",
    aosDelay: "600",
  },
  {
    image: "/images/technologies/prisma-orm.svg",
    name: "Prisma",
    aosDelay: "700",
  },
  {
    image: "/images/technologies/slack.svg",
    name: "Slack",
    aosDelay: "800",
  },
  {
    image: "/images/technologies/github.svg",
    name: "Github",
    aosDelay: "900",
  },
  {
    image: "/images/technologies/react-native.svg",
    name: "React",
    aosDelay: "1000",
  },
  {
    image: "/images/technologies/docker.svg",
    name: "Docker",
    aosDelay: "1100",
  },
  {
    image: "/images/technologies/zapier.svg",
    name: "Zapier",
    aosDelay: "1200",
  },

];

const Partner = () => {
  return (
    <>
       <div className="technologies-area pt-100 pb-60">
        <div className="container">
          <div className="section-title">
            <h2>Technologies We Leverage</h2>
            <p>
              Our AI solutions integrate seamlessly with cutting-edge technologies and platforms to deliver powerful, scalable, and efficient results for your business.
            </p>
          </div>

          <div className="row align-items-center justify-content-center">
            {technologiesData.map((tech, i) => (
              <div className="col-lg-2 col-6 col-sm-4 mb-5 d-flex justify-content-center" key={i}>
                <div
                  className="single-technology"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay={tech.aosDelay}
                >
                  <div className="tech-image">
                    <Image
                      src={tech.image}
                      alt={`${tech.name} logo`}
                      width={100}
                      height={100}
                    />
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

export default Partner;
