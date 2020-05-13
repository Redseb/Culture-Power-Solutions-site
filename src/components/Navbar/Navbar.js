import React, { useState } from "react";
import "../../App.scss";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";

const Navbar = ({ isEng, setIsEng }) => {
  const [toggle, setToggle] = useState(false);
  let pathname = useLocation().pathname;
  const closeToggle = () => {
    setToggle(false);
  };

  return (
    <nav className="Navbar">
      <button
        id="menuButton"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <FaAlignRight />
      </button>
      <ul className={toggle ? "nav-links show-nav" : "nav-links hide-nav"}>
        <li onClick={closeToggle}>
          <Link className={pathname === "/" ? "focus" : ""} to="/">
            {isEng ? "Home" : "Strona Główna"}
          </Link>
        </li>
        <li onClick={closeToggle}>
          <Link
            className={pathname === "/publications" ? "focus" : ""}
            to="/publications"
          >
            {isEng ? "Publications" : "Publikacje"}
          </Link>
        </li>
        <li onClick={closeToggle}>
          <Link className={pathname === "/videos" ? "focus" : ""} to="videos">
            {isEng ? "Videos" : "Filmy"}
          </Link>
        </li>
        <li onClick={closeToggle}>
          <Link className={pathname === "/book" ? "focus" : ""} to="book">
            {isEng ? "My Book" : "Moja Książka"}
          </Link>
        </li>
        <li onClick={closeToggle}>
          <Link
            className={pathname === "/partners" ? "focus" : ""}
            to="partners"
          >
            {isEng ? "Partners" : "Partnerzy"}
          </Link>
        </li>
        <li onClick={closeToggle}>
          <Link className={pathname === "/photos" ? "focus" : ""} to="photos">
            {isEng ? "Photos" : "Zdjęcia"}
          </Link>
        </li>
        <li onClick={closeToggle}>
          <button
            onClick={() => {
              setIsEng(!isEng);
            }}
          >
            {isEng ? "Polish" : "English"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
