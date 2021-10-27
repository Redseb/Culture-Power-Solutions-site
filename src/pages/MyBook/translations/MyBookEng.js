import React from "react";
import "../../../App.scss";
import "../MyBook.scss";
//Components
import Hero from "../../../components/Hero/Hero";
import Footer from "../../../components/Footer/Footer";
//Resources
import heroBook from "../../../images/bookHeader.jpeg";

const MyBookEng = () => {
  return (
    <div className="MyBook">
      <Hero
        img={heroBook}
        imgDescription={"Moja książka: Popatrz inaczej"}
        text="Moja Książka"
      />
      <div id="textSection">
        <p>
          I have just published my book <i>"Look differently. Traps in multicultural communication"</i>. I've dreamed of this book for a long time, and even started writing it several times. By the time I seriously sat down to write, the concept had changed a few times over - what you're seeing today is a product of that evolution. Just as I wanted, the book has a premium feel, with a hard cover and colorful graphics. It combines my work experiences from Dubai, China, Russia, Ukraine, Indonesia and Hong Kong.
        </p>
        <p>
          It's worth a read for expats, people working internationally, HR professionals, and anyone interested in learning something new about different cultures.
        </p>
        <p>
          From the very beginning I envisioned my book as elegant and premium - it's hard cover and has wonderful graphics. It costs 60 PLN plus around 12-14 PLN for delivery (depending on your chosen delivery method).
        </p>
        <div id="topTextContainer">
          <div className="textContainer">
            <h3>
              Why and how should I read this book?
            </h3>
            <p>Thank you for opening this book. You'll learn:</p>
            <ul>
              <li>How to be an effective leader in a multinational team;</li>
              <li>How to be an efficient employee;</li>
              <li>How to deal with stereotypes and stereotyping;</li>
              <li>How to read cultural contexts and adapt to them;</li>
              <li>How to effectively give and receive feedback when dealing with colleagues from other cultures;</li>
              <li>How to build trust in teams where relations are key;</li>
              <li>How to build trust in teams focused on projects;</li>
              <li>How to be productive with time management;</li>
              <li>How to increase your efficiency;</li>
              <li>How to work and what to consider when managing virtual teams.</li>
            </ul>
          </div>
          <div class="textContainer">
            <h3>Thanks</h3>
            <p>I want to thank a lot of people, most of all:</p>
            <ul>
              <li>
                My wife, Krystyna, who, during all these years of crazy moves and travels, kept a hand on the everyday things. If not for her, we wouldn't be where we are today.
              </li>
              <li>My kids: Aga, Jula and Miko. I often feel guilty that you had to change schools, countries, and friends every few years. I'm very proud when I see how you use your openness and language competencies to find your place in life.</li>
              <li>
                Iwona Kokoszka, for the teamwork, mentorship and motivation in developing the concept for this book and keeping me within its structure.
              </li>
              <li>
                Karol Romanowski, for the inspiring graphics concept for this book, and Agnieszka Trzebska-Cwalina for the professional proof-reading and corrections.
              </li>
              <li>
                All the wonderful people, who I met along the way. Without them I wouldn't be who I am today.
              </li>
            </ul>
          </div>
        </div>


        <div id="imgContainer">
          <img
            src={require("../../../images/book2.jpeg")}
            alt="My book: Popatrz inaczej"
          />
          <img
            src={require("../../../images/book3.jpeg")}
            alt="My book: Popatrz inaczej"
          />
          <img
            src={require("../../../images/book5.jpeg")}
            alt="My book: Popatrz inaczej"
          />
        </div>


      </div>
      <Footer />
    </div>
  );
};

export default MyBookEng;
