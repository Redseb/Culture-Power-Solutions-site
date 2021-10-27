import React from "react";
import "../../../App.scss";
import "../Home.scss";
//Components
import Hero from "../../../components/Hero/Hero";
import Footer from "../../../components/Footer/Footer";
import { FaPhone, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

//Resources
const heroImg = require("../../../images/book1.jpeg");
const irekProfile = require("../../../images/irekProfile.jpg");

const HomeEng = () => {
  return (
    <div className="Home">
      <Hero
        img={heroImg}
        imgDescription="My book: Popatrz Inaczej"
        text="Culture Power Solutions"
      />
      <div id="content">
        <Slide right>
          <div id="contactCard">
            <img src={irekProfile} alt="Irek Zyzański" />
            <h2>Kontakt</h2>
            <a href="tel:+48-572-243-409" className="iconContainer">
              <FaPhone className="icon" />
              <p>+48-572-243-409</p>
            </a>
            <a href="mailto:irek.zyzanski@me.com" className="iconContainer">
              <FaEnvelope className="icon" />
              <p>irek.zyzanski@me.com</p>
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
          I'm a consultant, trainer, coach and mentor. I've worked for 24 years for an international FMCG with offices in over 180 countries across 6 continents.
        </p>
        <p>
          I worked in Poland, Ukraine, Dubai, China, Russia, Indonesia and Hong Kong. Airports and hotels were a second home to me, or, as my wife would say, even my first. I've worked for managers of 14 nationalities - Polish, American, Chinese, Malaysian, French, British, Dutch, Danish, and Turkish, among others. As a manager myself, I was responsible for multinational teams from Europe, the Middle East and Asia.
        </p>
        <h2>Consultant Mentor Coach</h2>
        <p>
          Currently, I use my experiences to guide firms in developing employees' cross-cultural intelligence. It's one of the most important, but also underappreciated, competencies of 21st century leadership. I help expats adapt to work in Poland, and I prepare Poles for work placements abroad.
        </p>
        <p>
          I support leaders in their own development, and organisations in building mentoring and leadership programs. I also prepare mentors and mentees to participate in development programs.
        </p>
        <h2>Look Differently</h2>
        <p>
          We all know the saying that dreams are meant to be fulfilled. For me, that phrase has become a reality, as I am very proud to announce the release of my book <i>"Look differently. Traps in multicultural communication"</i>.
        </p>
        <p>
          I wrote this book in order to share my experiences in leadership and cross-cultural communication. Currently my book can only be bought online. Please get in touch via email, Messenger, WhatsApp or SMS - I'll provide my account details and you the delivery address.
        </p>
        <p>
          From the very beginning I envisioned my book as elegant and premium - it's hard cover and has wonderful graphics. It costs 60 PLN plus around 12-14 PLN for delivery (depending on your chosen delivery method).
        </p>
        <p>
          You won't be disappointed.
        </p>

        <div id="imgContainer">
          <img
            src={require("../../../images/book4.jpeg")}
            alt="My book: Popatrz inaczej"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomeEng;
