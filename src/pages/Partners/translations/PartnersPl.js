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
        thumbnail={require("../../../images/coachwise.png")}
        title="Coachwise"
        description="Gdzie prowadzę otwarte szkolenia mentoringowe, indywidualne prcesy mentoringowe, wdrażam programy rozwojowe w korporacjach oraz jestem opiekunek merytorycznych programu mentoringu grupowego HRRAZEM"
        isLeft={false}
        isPrint={true}
        pdf={"http://www.coachingcenter.pl/"}
      />
      <Article
        id="partnerCard"
        thumbnail={require("../../../images/eifid.png")}
        title="EIFID"
        description="(European Institute for Cross Cultural Development) w Amsterdamie, gdzie sam kilka lat temu zdobyłem dyplom trenera międzykulturowego a teraz regularnie współprowadze warsztay dla przyszłych trenerów"
        isLeft={true}
        isPrint={true}
        pdf={"https://eifid.com/"}
      />
      <Article
        id="partnerCard"
        thumbnail={require("../../../images/blackbird.jpg")}
        title="Blackbird Academy"
        description="Gdzie współpracuję w szkoleniach międzykulturowych oraz programach przywódczych"
        isLeft={false}
        isPrint={true}
        pdf={"https://hello-blackbird.com/"}
      />
      <Article
        id="partnerCard"
        thumbnail={require("../../../images/hutchinson.png")}
        title="Hutchcinson Institute"
        description="Gdzie prowadzę indywidualne programy przygotowujące dla obecnych i przyszłych ekspatów"
        isLeft={true}
        isPrint={true}
        pdf={"https://hutchinson.org.pl/en/"}
      />
      <Article
        id="partnerCard"
        thumbnail={require("../../../images/bepractice.png")}
        title="Business Practice"
        description="Gdzie dla znanej marki premium w branży samochodowej szkolę uczestników z komunikacji oraz budowaniu efekty WOW w obsłudze klientów"
        isLeft={false}
        isPrint={true}
        pdf={"http://bepractice.pl/?page_id=19"}
      />
      <Article
        id="partnerCard"
        thumbnail={require("../../../images/politechnika.jpg")}
        title="Politechnika Warszawska"
        description="Gdzie na studiach podyplomowych „IT: od Experta do Lidera” wykładam Komunikację i zarządzanie zespołami wielokulturowymi."
        isLeft={true}
        isPrint={true}
        pdf={"https://www.pw.edu.pl/"}
      />
      <Footer />
    </div>
  );
};

export default PartnersPl;
