import React from "react";
import Link from "next/link";
import Image from "next/image";

import map from "../../public/images/map.png";

const funFactsData = [
  {
    iconName: "fa-solid fa-robot",
    number: "10+",
    shortText: "AI Models Developed",
    aosDelay: "100",
  },
  {
    iconName: "fa-solid fa-code",
    number: "10+",
    shortText: "Innovative Solutions",
    aosDelay: "200",
  },
  {
    iconName: "fa-solid fa-brain",
    number: "50+",
    shortText: "Combined Years of Expertise",
    aosDelay: "300",
  },
  {
    iconName: "fa-solid fa-lightbulb",
    number: "20+",
    shortText: "Unique AI Use Cases",
    aosDelay: "400",
  },
];

const FunFactsTwo = () => {
  return (
    <>
      <div className="funfacts-area ptb-100 bg-fcfbfb">
        <div className="container">
          <div className="section-title">
            <h2>Pioneering AI Solutions for Tomorrow's Challenges</h2>
            <p>
              As a cutting-edge AI agency, we're dedicated to pushing the boundaries of what's possible. Our team of experts is committed to developing innovative AI solutions that address real-world problems and drive business transformation.
            </p>
          </div>

          <div className="row justify-content-center">
            {funFactsData &&
              funFactsData.slice(0, 4).map((value, i) => (
                <div className="col-lg-3 col-sm-6" key={i}>
                  <div
                    className="funfact"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <i className={value.iconName}></i>
                    <h3>{value.number}</h3>
                    <p>{value.shortText}</p>
                  </div>
                </div>
              ))}
          </div>

          <div
            className="contact-cta-box"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <h3>Ready to harness AI for your business?</h3>
            <p>Let's innovate together and drive your success</p>

            <Link href="/contact-us/" className="btn btn-primary">
              Schedule a Consultation
            </Link>
          </div>

          <div className="map-bg">
            <Image src={map} alt="map" width={910} height={443} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FunFactsTwo;