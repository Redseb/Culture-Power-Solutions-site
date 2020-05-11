import React from "react";
import "../../../App.scss";
import "../MyBook.scss";
//Components
import Hero from "../../../components/Hero/Hero";
import Footer from "../../../components/Footer/Footer";
//Resources
import heroBook from "../../../images/heroBook.jpg";
const MyBookEng = () => {
  return (
    <div className="MyBook">
      <Hero img={heroBook} imgDescription={"Writing a book"} text="My Book" />
      <div id="textSection">
        <h2 id="title">
          Travelling with (the) Corporation - the joys and miseries of an expat
          life
        </h2>
        <h3 id="subtitle">
          "Are you working in "Corporate America"? Do you dream to live and work
          abroad?"
        </h3>
        <p>
          If yes, welcome to my world. During 24 years of my career in Big FMCG,
          together with my family, we have lived for 17 years abroad. I was
          posted in Ukraine, Dubai, China, Russia, Indonesia and Hong Kong in
          various sales, commercial and HR jobs. During this time we relocated
          twice back to Poland, changing expat contract to the local one.
        </p>
        <p>
          Writing this book was my dream, one of the items on the list “to be
          done before I die”. Multi-cultural communication and management is my
          passions and I believe you will enjoy this “down to the earth”
          observations and sharing.
        </p>
        <p>
          Career in the Corporation, expatriation… Is it worth? Indeed a very
          personal question which only you are able to answer it. If you ask me,
          I will tell you that….
        </p>
        <p>
          … the world is not an ideal place, not too many of us are able to
          spend their lives sitting and singing "cumba-ya". We all have loans to
          pay, children to educate and dreams for a small fortune in the bank to
          secure us when, as the Beatles sung we "will be 64".
        </p>
        <p>
          Reality is, that unless you are born at top echelon of the society and
          you do not need to work, or you are at the very bottom and you have no
          opportunity to find an appropriate job, than you need to work…
        </p>
        <p>
          If you are adventurous and like the mix of freedom combined with
          roller-coaster thrill, you start your own company, which statistically
          has huge change to fail during first few years. If you look for boring
          stability, unexcited live and secured respect from your similarly
          boring neighbors, you became government bureaucrat or mid level
          manager of state own company.
        </p>
        <p>
          However, if you have slightly schizophrenic personality, likes the mix
          of all variables mentioned above and have tendency to religiously
          submit yourself to quasi-congregation organization than you join big
          international corporation, and became its slave.
        </p>
        <p>
          Do not understand me wrongly. There is nothing wrong be a slave….
          Dream of total freedom is a hallucination, we are always slaves of
          somebody or something; wife, family, company, banks, religion, good
          and bad habits, our desires and dreams.
        </p>
        <p>
          The good master takes care about his possessions. Corporate slaves can
          have good, fulfilling life to the extend they do not even recognize
          their slavery. Like in old times, in many houses slaves were part of
          the masters family and had long life relationships.
        </p>
        <p>
          During last 24 years had 18 bosses of 14 different nationalities. I
          call my type “a corporation survivor” – the one who delivers but is
          not dangerous, knowing when to shut up and when to push, good enough
          to successfully contribute, weak enough (or rather not really
          interested) to go to the top of the tops. I have reached the level of
          Regional Director, high enough to be perceived as a God himself by the
          people joining organization at the level I have entered, and almost as
          a waste of the air by the big egos and VPs titles holders, who get to
          the peaks of corporate career.
        </p>
        <p>
          It would be difficult to split my personal and corporate live. They
          were always intersecting. I have even married the same year I have
          joined company, company has sponsored very solid education of my kids
          in crazy expensive international schools, all our holidays and
          investments were paid by the money ear in the company. We were paid to
          live in the incredible places to which other people pay big bucks to
          come for a vacation.
        </p>
        <p>
          This book is based on my daily personal experience from working and
          living in extremely different cultures. I will take you through
          private and corporate moments. I have no intention to pretend it is
          scientifically accurate. Live is not black and white, each of us
          observe and experience world differently and has a right to interpret
          it on his own way. Saying that, I believe you will find it joyful,
          interesting and if you are an expat (or expat to be) helpful.
        </p>
        <p>
          I would like to thank my fantastic wife and children for walking with
          me the international path. My Dears, I hope at the end of the day you
          will find more positives between the hardship of relocations and
          regularly breaking the relationships with your peers, and the
          enjoyment of traveling to discover who you are and who are you not.
        </p>
        <p>
          My Dear bi-lingual children thank you for polishing my English in this
          book.
        </p>
        <p>
          My dear all international friends whom I have met on my path, thank
          you for your gift of welcoming me in your cultures. You have made me a
          better person."
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default MyBookEng;
