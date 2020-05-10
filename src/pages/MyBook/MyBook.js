import React, { useEffect } from "react";
import "../../App.scss";
import "./MyBook.scss";
import MyBookEng from "./translations/MyBookEng";
import MyBookPl from "./translations/MyBookPl";

const MyBook = ({ isEng }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (isEng) {
    return <MyBookEng />;
  } else {
    return <MyBookPl />;
  }
};

export default MyBook;
