import React from "react";
import "../../App.scss";
import "./Hero.scss";
//Components
import Slide from "react-reveal/Slide";

const Hero = ({ img, imgDescription, text }) => {
  return (
    <div className="Hero">
      <img src={img} alt={imgDescription} />
      <div id="banner">
        <div className="verticalAlignFlex bannerInner">
          <Slide left>
            <h1 className="title">{text}</h1>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Hero;
