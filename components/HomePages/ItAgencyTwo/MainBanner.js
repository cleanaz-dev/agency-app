import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from 'next/link';
import Image from "next/image";

import bannerImg from '../../../public/images/ai-banner-img.jpg';
import ovalShape from '../../../public/images/oval-shape.png';

const MainBanner = () => {
  const [toggler, setToggler] = useState(false);
  return (
      <>
        <FsLightbox
          toggler={toggler}
          sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
        />

        <div 
          className="hero-banner it-banner overly bg-fixed" 
          style={{ 
            backgroundImage: `url(/images/hero-banner14.jpg)` 
          }}
        >
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="main-banner-content">
                      <h1
                        data-aos="fade-up" 
                        data-aos-duration="1000" 
                        data-aos-delay="100"
                      >
                        AI Solutions for Your Business
                      </h1>

                      <p
                        data-aos="fade-up" 
                        data-aos-duration="1000" 
                        data-aos-delay="200"
                      >
                       At LLM Gem, we deliver innovative AI solutions to help automate, optimize, and elevate your business. Unlock the power of AI with our tailored services.
                      </p>

                      <div
                        data-aos="fade-up" 
                        data-aos-duration="1300" 
                        data-aos-delay="300"
                      >
                        <Link href="/contact-us/" className="btn btn-primary">
                          Get Started
                        </Link>

                        {/* <button
                          className="btn btn-secondary" 
                          onClick={() => setToggler(!toggler)}
                        >
                          <i className="fa-solid fa-play me-1"></i> How it works
                        </button> */}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div
                      className="animate-banner-image"
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                    >
                      <Image
                        src={bannerImg}
                        alt="Animate image"
                        width={600}
                        height={600}
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="oval-shape">
            <Image 
              src={ovalShape}
              alt="Shape" 
              width={5000}
              height={330}
              priority
            />
          </div>
        </div>
      </>
   );
  }
  
export default MainBanner;