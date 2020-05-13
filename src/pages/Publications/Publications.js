import React, { useEffect } from "react";
import "../../App.scss";
import "./Publications.scss";
//Translations
import PublicationsEng from "./translations/PublicationsEng";
import PublicationsPl from "./translations/PublicationsPl";
const Publications = ({ isEng }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (isEng) {
    return <PublicationsEng isEng={isEng} />;
  } else {
    return <PublicationsPl isEng={isEng} />;
  }
};

export default Publications;
