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
const heroImg = require("../../../images/heroHome.jpg");
const irekProfile = require("../../../images/irekProfile.jpg");

const HomePl = () => {
  return (
    <div className="Home">
      <Hero
        img={heroImg}
        imgDescription="Hong Kong wierzowce"
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
          I have a passion for cross cultural mangement, communication and
          leadership development. I am proud to be a Leadership Development
          Associate with CCL (Center for Creative Leadership) in Brussels.
        </p>
        <p>
          During my 24 exciting years of adventure in Philip Morris, I spent 18
          of them working outside of my home market in Poland. I've had bosses
          of 14 different nationalities, and managed multinational teams in
          Europe, the Middle East and Asia. Together with my family we lived in
          Ukraine, Dubai, China, Russia, Indonesia, and Hong Kong. Last but not
          least - I have my MA in Arabic Language and Culture. I speak Polish,
          English, Russian and Arabic.
        </p>
        <h2>Consultant Mentor Coach</h2>
        <p>
          I work with the leading consulting and training companies in Poland
          and abroad. My projects cover a wide spectrum of industries, including
          FMCG, premium cars and banking.
        </p>
        <h2>I will help you &amp; your company by:</h2>
        <ul>
          <li>
            working with your expats on how to lead, communicate and give
            feedback to their local &amp; international teams
          </li>
          <li>
            coaching and mentoring your multi-cultural management team to work
            together more efficiently
          </li>
          <li>
            preparing your new incoming expats and their families to live in
            Poland
          </li>
          <li>
            assisting your candidates for expatriation and their families in
            successful relocation abroad
          </li>
          <li>
            working with your HR teams on Assessment Centers, Organisation
            Design, Talent Management, and other areas.
          </li>
        </ul>
        <h2>Cross-Cultural Beginnings</h2>
        <p>
          <i>
            It all started when I was in Baghdad many years ago (1986), studying
            Arabic language at the Al-Mustansiriya University
          </i>
        </p>
        <div id="imgContainer">
          <img
            src={require("../../../images/beginning1.jpg")}
            alt="Irek in Baghdad 1986"
          />
          <img
            src={require("../../../images/beginning2.jpg")}
            alt="Irek in Baghdad 1986"
          />
        </div>
        <p>
          On the very first day, as I walked outside of the student dorms... I
          saw two soldiers – both carrying Kalashikows and holding hands as they
          walked towards me. This was a complete shock for me.
        </p>
        <p>In my culture, men do not hold hands!</p>
        <p>
          My friend explained to me that they were just good friends and nothing
          more; in this culture, it was completely okay to do that.
        </p>
        <p>
          It was this sort of "aha!" moment that helped me realise that what I
          may assume to be the universal norm, isn't necessarily the norm for
          everybody.
        </p>
        <h2>And so my fascination with cross culture had begun…</h2>
      </div>
      <Footer />
    </div>
  );
};

export default HomePl;
