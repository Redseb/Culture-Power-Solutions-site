import React, { useEffect } from "react";
import "../../App.scss";
import "./Home.scss";
import HomeEng from "./translations/HomeEng";
import HomePl from "./translations/HomePl";

const Home = ({ isEng }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (isEng) {
    return <HomeEng />;
  } else {
    return <HomePl />;
  }
};

export default Home;
