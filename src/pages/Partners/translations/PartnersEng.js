import React from "react";
import "../../../App.scss";
//Components
import Hero from "../../../components/Hero/Hero";
import Footer from "../../../components/Footer/Footer";
import Article from "../../../components/Article/Article";
//Resources
import heroPartners from "../../../images/heroPartners.jpg";
const PartnersEng = () => {
  return (
    <div className="Partners">
      <Hero
        img={heroPartners}
        imgDescription="Grupa dzieci na Sulawesi"
        text="Partnerzy"
      />
      <Article
        id="partnerCard"
        thumbnail={require("../../../images/coachwise.png")}
        title="Coachwise"
        description="Where I run mentoring programs, individual mentorship sessions, build development programs for corporations, and am responsible for the group mentoring program HRRAZEM."
        isLeft={false}
        isPrint={true}
        pdf={"http://www.coachingcenter.pl/"}
      />
      <Article
        id="partnerCard"
        thumbnail={require("../../../images/eifid.png")}
        title="EIFID"
        description="(European Institute for Cross Cultural Development) in Amsterdam, where several years ago I completed my diploma as a cross-cultural trainer, and now I regularly run sessions for future trainers."
        isLeft={true}
        isPrint={true}
        pdf={"https://eifid.com/"}
      />
      <Article
        id="partnerCard"
        thumbnail={require("../../../images/blackbird.jpg")}
        title="Blackbird Academy"
        description="Where I am a trainer in cross-cultural and leadership programs."
        isLeft={false}
        isPrint={true}
        pdf={"https://hello-blackbird.com/"}
      />
      <Article
        id="partnerCard"
        thumbnail={require("../../../images/hutchinson.png")}
        title="Hutchcinson Institute"
        description="Where I run sessions for current and future expats."
        isLeft={true}
        isPrint={true}
        pdf={"https://hutchinson.org.pl/en/"}
      />
      <Article
        id="partnerCard"
        thumbnail={require("../../../images/bepractice.png")}
        title="Business Practice"
        description="Where I run training sessions in the field of communication and customer service for a premium car industry client."
        isLeft={false}
        isPrint={true}
        pdf={"http://bepractice.pl/?page_id=19"}
      />
      <Article
        id="partnerCard"
        thumbnail={require("../../../images/politechnika.jpg")}
        title="Politechnika Warszawska"
        description="Where I'm a lecturer in communication and cross-cultural leadership."
        isLeft={true}
        isPrint={true}
        pdf={"https://www.pw.edu.pl/"}
      />
      <Footer />
    </div>
  );
};

export default PartnersEng;
