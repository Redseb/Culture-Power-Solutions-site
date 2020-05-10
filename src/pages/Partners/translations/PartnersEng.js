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
        imgDescription="The partners I work with"
        text="Partners"
      />
      <Article
        thumbnail={require("../../../images/coachwise.png")}
        title="Coachwise"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        isLeft={false}
        isPrint={true}
        pdf={"http://www.coachingcenter.pl/"}
      />
      <Article
        thumbnail={require("../../../images/coachwise.png")}
        title="Coachwise"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        isLeft={true}
        isPrint={true}
        pdf={"http://www.coachingcenter.pl/"}
      />
      <Article
        thumbnail={require("../../../images/coachwise.png")}
        title="Coachwise"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        isLeft={false}
        isPrint={true}
        pdf={"http://www.coachingcenter.pl/"}
      />
      <Footer />
    </div>
  );
};

export default PartnersEng;
