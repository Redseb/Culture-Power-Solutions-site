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
          <h1>Ja jestem Irek Zyzański.</h1>
        </Fade>

        <p>
          bywam konsultantem, trenerem, coachem i mentorem. Dwadzieścia cztery
          lata pracowałem w międzynarodowym koncernie FMCG mającym swoje oddziały w ponad
          stu osiemdziesięciu krajach na sześciu kontynentach.
        </p>
        <p>
          Pracowałem w Polsce, na Ukrainie, w Dubaju, Chinach, Rosji, Indonezji i Hongkongu.
          Lotniska i hotele były moim drugim domem, chociaż jak twierdzi moja żona – raczej
          pierwszym. Miałem przełożonych reprezentujących czternaście narodowości. Raportowałem
          do Polaków, Amerykanina, Chińczyka, Malezyjki, Francuza, Anglika, Duńczyka, Turka i jeszcze
          kilku osób z krajów innych niż te, które wymieniłem. Sam zarządzałem międzynarodowymi
          zespołami w Europie, na Bliskim Wschodzie i w Azji.
        </p>
        <h2>Consultant Mentor Coach</h2>
        <p>
          Obecnie wykorzystuję zdobyte doświadczenia, doradzając firmom, w jaki sposób powinny
          rozwijać inteligencję międzykulturową pracowników, stanowi ona bowiem jedną z
          najważniejszych i wciąż niedocenianych kompetencji lidera XXI wieku. Pomagam ekspatom
          adaptować się do pracy w Polsce, a Polaków przygotowuję do wyjazdów zawodowych za
          granicę.
        </p>
        <p>
          Wspomagam również liderów w ich własnym rozwoju oraz organizacje we wdrażaniach
          programów mentoringowych i liderskich. Przygotowuję mentorów i mentees do
          uczestnictwa w programach rozwojowych.
        </p>
        <h2>Popatrz inaczej</h2>
        <p>
          Marzenia są po to, aby je realizować i spełniać. Moja książka <i>„Popatrz inaczej. Pułapki komunikacji w
            biznesie międzynarodowym”</i> właśnie ujrzała światło dnia i jestem z tego bardzo, bardzo dumny.
        </p>
        <p>
          Swoją książkę napisałem aby podzielić się doświadczeniem z obszaru przywództwa i
          komunikacji międzykulturowej. W tej chwili książkę można kupić wyłącznie przez moją
          stronę. Proszę skontaktuj się ze mną poprzez email, Messengera, whatsup lub sms. Podam
          Ci numer konta a ty mnie adres do wysyłki.
        </p>
        <p>
          Od początku zależało mi aby książka była elegancka i premium. Ma twardą okładkę, zakładkę
          i cudowną grafikę. Kosztuje 60 PLN plus około +/- 12-14 PLN za przesyłke (w zależności od
          wybranego przez Ciebie sposobu).
        </p>
        <p>
          Nie będziesz zawiedziony. Po prostu skontaktuj się ze mną
        </p>

        <div id="imgContainer">
          <img
            src={require("../../../images/book1.jpeg")}
            alt="Moja książka: Popatrz inaczej"
          />
          <img
            src={require("../../../images/book3.jpeg")}
            alt="Moja książka: Popatrz inaczej"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePl;
