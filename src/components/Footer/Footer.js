import React from "react";
import "../../App.scss";
import "./Footer.scss";
//components
import Fade from "react-reveal/Fade";
const Footer = () => {
  return (
    <Fade>
      <footer className="verticalAlignFlex">
        <p>© 2019 Irek Zyzanski</p>
      </footer>
    </Fade>
  );
};

export default Footer;
