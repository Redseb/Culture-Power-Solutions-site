import React from "react";
import "../../App.scss";
import "./Publications.scss";
//Translations
import PublicationsEng from "./translations/PublicationsEng";
import PublicationsPl from "./translations/PublicationsPl";
const Publications = ({ isEng }) => {
  if (isEng) {
    return <PublicationsEng />;
  } else {
    return <PublicationsPl />;
  }
};

export default Publications;
