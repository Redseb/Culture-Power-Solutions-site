import React from "react";
import "../../../App.scss";
//Components
import Hero from "../../../components/Hero/Hero";
import Footer from "../../../components/Footer/Footer";
import Article from "../../../components/Article/Article";
//Resources
import heroPartners from "../../../images/heroPartners.jpg";
const PartnersPl = () => {
  return (
    <div className="Partners">
      <Hero
        img={heroPartners}
        imgDescription="Grupa dzieci na Sulawesi"
        text="Partnerzy"
      />
      <Article
        id="partnerCard"
        thumbnail={require("../../../images/bFruga.png")}
        title="Bernard Fruga"
        description='Business consultant, author and mentor. He provided me with great support during that difficult time of transition from "the corporate world" to "being my own master".

        We have since started recording videos about cross-cultural communication.
        
        You will find a plethora of inspirational ideas on his page.'
        isLeft={false}
        isPrint={true}
        pdf={"https://www.fruga.net/"}
      />
      <Article
        id="partnerCard"
        thumbnail={require("../../../images/bss.png")}
        title="Zosia Barańska"
        description="I met Zosia Barańska on an HR conference we had both attended. Since then, we enjoy developing inspirational cross cultural projects together."
        isLeft={true}
        isPrint={true}
        pdf={"http://www.bsspartners.pl/en/home/"}
      />
      <Article
        id="partnerCard"
        thumbnail={require("../../../images/coachwise.png")}
        title="Coachwise"
        description="One of the leading coaching companies in Poland, lead by Paweł Sopkowski.

        I completed my coaching trainings in CoachWise, and it was there that we sparked and started working together. Since then, I have had the pleasure to work on many mentoring projects for leading companies in Poland, as a CoachWise consultant. I also co-deliver open Mentoring Essential programs."
        isLeft={false}
        isPrint={true}
        pdf={"http://www.coachingcenter.pl/"}
      />
      <Article
        id="partnerCard"
        thumbnail={require("../../../images/ccl.png")}
        title="CCL - Center for Creative Leadership"
        description="One of the top leadership development company. At the beginning of 2019, I had the privilege to pass their Assessment Centers, and was accepted as a CCL Leadership Development Associate."
        isLeft={true}
        isPrint={true}
        pdf={"https://www.ccl.org/"}
      />
      <Article
        id="partnerCard"
        thumbnail={require("../../../images/eifid.png")}
        title="EIFID"
        description="I joined their Train the Trainer session in Amsterdam. Good place to start intercultural adventure"
        isLeft={false}
        isPrint={true}
        pdf={"https://eifid.com/"}
      />
      <Article
        id="partnerCard"
        thumbnail={require("../../../images/bepractice.png")}
        title="Be Practice"
        description="one of the leading training companies in automobile industry in Poland. Big brands in the portfolio & step into new area of business"
        isLeft={true}
        isPrint={true}
        pdf={"http://bepractice.pl/"}
      />
      <Footer />
    </div>
  );
};

export default PartnersPl;
