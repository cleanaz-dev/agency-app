import React from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "../styles/bootstrap.min.css";
import "../styles/animate.min.css";
import "animate.css";
import "../styles/all.min.css";
import "../styles/pe-icon-7-stroke.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Software Startup Home Style
import "../styles/software-home-page.css";
// App Showcase Home Style
import "../styles/app-home-page.css";
// Digital Marketing Home Page Style
import "../styles/digital-marketing-home-page.css";
// Personal Portfolio Home Style
import "../styles/personal-portfolio-home-page.css";
// Business Consulting Home Page Style
import "../styles/business-consulting-home-page.css";
// SaaS Startup Home Page Style
import "../styles/saas-startup-home-page.css";
// Freelancer Portfolio Home Page Style
import "../styles/freelancer-portfolio-home-page.css";
// Cyber Security Agency Home Page Style
import "../styles/cyber-security-agency-home-page.css";

// Global Style
import "../styles/style.css";
import "../styles/responsive.css";

import Head from "next/head";
import GoTop from "../components/Layouts/GoTop";

function MyApp({ Component, pageProps }) {
 React.useEffect(() => {
  AOS.init();
 }, []);
 return (
  <>
   <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>LLM GEM | Innovative AI Solutions for Business</title>
    <meta
     name="description"
     content="LLM GEM offers cutting-edge AI solutions to automate, optimize, and elevate your business. Unlock the power of AI with our tailored services."
    />
    <meta
     name="keywords"
     content="AI, artificial intelligence, machine learning, business solutions, LLM, language models, automation, optimization"
    />
    <meta name="author" content="LLM GEM" />
    <meta name="robots" content="index, follow" />
    <meta
     property="og:title"
     content="LLM GEM | Innovative AI Solutions for Business"
    />
    <meta
     property="og:description"
     content="Unlock the power of AI with LLM GEM's tailored services for business automation and optimization."
    />
    <meta property="og:type" content="website" />
   </Head>

   <Component {...pageProps} />

   <GoTop />
  </>
 );
}

export default MyApp;
