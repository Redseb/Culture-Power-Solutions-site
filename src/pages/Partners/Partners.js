import React, { useEffect } from "react";
import "../../App.scss";
import "./Partners.scss";
import PartnersEng from "./translations/PartnersEng";
import PartnersPl from "./translations/PartnersPl";

const Partners = ({ isEng }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (isEng) {
    return <PartnersEng />;
  } else {
    return <PartnersPl />;
  }
};

export default Partners;
