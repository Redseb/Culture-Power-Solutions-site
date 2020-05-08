import React from "react";
import "../../App.scss";
import "./Home.scss";
import HomeEng from "./translations/HomeEng";
import HomePl from "./translations/HomePl";

const Home = ({ isEng }) => {
  if (isEng) {
    return <HomeEng />;
  } else {
    return <HomePl />;
  }
};

export default Home;
