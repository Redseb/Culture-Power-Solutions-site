import React from "react";
import "../../App.scss";
import "./MyBook.scss";
import MyBookEng from "./translations/MyBookEng";
import MyBookPl from "./translations/MyBookPl";

const MyBook = ({ isEng }) => {
  if (isEng) {
    return <MyBookEng />;
  } else {
    return <MyBookPl />;
  }
};

export default MyBook;
