import React from "react";
import "../../../App.scss";
import "../Home.scss";
//Components
import Hero from "../../../components/Hero/Hero";
//Resources
const heroImg = require("../../../images/heroHome.jpg");

const HomePl = () => {
  return (
    <div className="Home">
      <Hero
        img={heroImg}
        imgDescription="A remote village on Surabaya, Indonesia pl"
        text="Culture Power Solutions"
      />
    </div>
  );
};

export default HomePl;
