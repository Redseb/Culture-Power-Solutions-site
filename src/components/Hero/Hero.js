import React from "react";
import "../../App.scss";
import "./Hero.scss";

const Hero = ({ img, imgDescription, text }) => {
  return (
    <div className="Hero">
      <img src={img} alt={imgDescription} />
      <div id="banner">
        <div className="verticalAlignFlex bannerInner">
          <h1 className="title">{text}</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
