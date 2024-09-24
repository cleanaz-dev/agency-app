import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import PricingStyleThree from "../components/Pricing/PricingStyleThree";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";

const Pricing = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle="Our Pricing" BGImage="/images/page-banner4.jpg" />

      <PricingStyleThree />

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default Pricing;
