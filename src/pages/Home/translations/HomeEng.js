import React from "react";
import "../../../App.scss";
import "../Home.scss";
//Components
import Hero from "../../../components/Hero/Hero";
import Footer from "../../../components/Footer/Footer";
import { FaPhone, FaLinkedin } from "react-icons/fa";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

//Resources
const heroImg = require("../../../images/heroHome.jpg");
const irekProfile = require("../../../images/irekProfile.jpg");

const HomeEng = () => {
  return (
    <div className="Home">
      <Hero
        img={heroImg}
        imgDescription="A remote village on Surabaya, Indonesia"
        text="Culture Power Solutions"
      />
      <div id="content">
        <Slide right>
          <div id="contactCard">
            <img src={irekProfile} alt="Irek Zyzański" />
            <h2>Contact Me</h2>
            <FaPhone className="icon" />
            <a href="tel:+48-572-243-409">
              <p>+48-572-243-409</p>
            </a>

            <a
              href="https://www.linkedin.com/in/irekzyzanski/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon" />
            </a>
          </div>
        </Slide>
        <Fade>
          <h1>I am Irek Zyzański.</h1>
        </Fade>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus
          mattis ante vitae consequat. Sed ipsum nunc, elementum quis tortor sit
          amet, gravida eleifend tortor. Morbi tellus nulla, efficitur sed est
          sed, lacinia ultricies lectus. Aliquam rutrum magna vitae ex fringilla
          faucibus. Pellentesque quis tincidunt est. Nulla luctus ac tortor vel
          pellentesque. Cras scelerisque metus massa, id feugiat sapien
          tincidunt in. Fusce rutrum, nisl in mollis rhoncus, neque quam porta
          sem, id mollis sem mauris et enim. Aliquam mattis in justo sed
          pharetra. Proin ultrices scelerisque sapien, sed pulvinar orci gravida
          at. Donec luctus nisi id metus aliquet, nec tincidunt ipsum porttitor.
          Donec porttitor felis feugiat metus sagittis blandit.
        </p>
        <p>
          Vestibulum convallis efficitur neque et tincidunt. Proin fermentum est
          ac dolor rhoncus tristique. Aenean lorem augue, posuere ut turpis at,
          vestibulum porta nunc. Morbi ornare est consequat arcu dictum varius.
          Nulla facilisi. Sed at imperdiet elit. In accumsan vulputate justo
          eget dapibus. Quisque nec dolor eu sapien tristique porttitor at nec
          velit. Curabitur egestas dictum ultrices. Fusce a libero in libero
          elementum volutpat nec eu eros. Maecenas quis tellus est. Pellentesque
          varius augue ipsum, egestas aliquam mi tristique et.
        </p>
        <p>
          Duis erat odio, ultrices a fringilla vel, porta non justo. Donec
          lobortis sodales erat, sit amet placerat ipsum accumsan ultrices. In
          consequat augue ante, in hendrerit mi vulputate eget. Aliquam quis
          mauris sit amet est tempor suscipit. Praesent eget aliquam ex.
          Vestibulum elementum erat sed velit tempor, pellentesque posuere ex
          tristique. Curabitur fringilla urna in lobortis auctor. Aliquam et
          nunc non metus hendrerit congue. Suspendisse potenti. Phasellus
          egestas tellus turpis, in molestie tortor iaculis sit amet.
        </p>
        <p>
          Fusce eu tortor imperdiet, commodo nulla vitae, consectetur felis. Nam
          pellentesque tortor ante, et porta tortor condimentum vel. Vivamus
          elit augue, ullamcorper vel maximus ac, interdum vel felis. Aenean
          suscipit vel purus eget rutrum. Pellentesque mollis viverra posuere.
          Cras in dictum nisi. Aenean facilisis congue sagittis. Aliquam
          vulputate metus eu rutrum egestas. Duis sed ligula eu est vulputate
          porta. Mauris bibendum non ipsum quis dictum. Duis dolor ante, euismod
          a ligula ullamcorper, mollis condimentum ex. Vivamus vel nisi sit amet
          erat elementum imperdiet. Aliquam auctor quis dui eget consectetur.
          Sed porttitor leo at ante porta eleifend.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default HomeEng;
