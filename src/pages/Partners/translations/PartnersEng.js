import React from "react";
import "../../../App.scss";
//Components
import Hero from "../../../components/Hero/Hero";
import Footer from "../../../components/Footer/Footer";
//Resources
import heroPartners from "../../../images/heroPartners.jpg";
const PartnersEng = () => {
  return (
    <div className="Partners">
      <Hero
        img={heroPartners}
        imgDescription="The partners I work with"
        text="Partners"
      />
      <Footer />
    </div>
  );
};

export default PartnersEng;
