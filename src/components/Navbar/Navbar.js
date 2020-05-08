import React, { useState } from "react";
import "../../App.scss";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";

const Navbar = ({ isEng, setIsEng }) => {
  const [toggle, setToggle] = useState(false);
  let pathname = useLocation().pathname;
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
        <li>
          <Link className={pathname === "/" ? "focus" : ""} to="/">
            {isEng ? "Home" : "Strona Główna"}
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/publications" ? "focus" : ""}
            to="/publications"
          >
            {isEng ? "Publications" : "Publikacje"}
          </Link>
        </li>
        <li>
          <Link className={pathname === "/videos" ? "focus" : ""} to="videos">
            {isEng ? "Videos" : "Filmy"}
          </Link>
        </li>
        <li>
          <Link className={pathname === "/book" ? "focus" : ""} to="book">
            {isEng ? "My Book" : "Moja Książka"}
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/partners" ? "focus" : ""}
            to="partners"
          >
            {isEng ? "Partners" : "Partnerzy"}
          </Link>
        </li>
        <li>
          <Link className={pathname === "/photos" ? "focus" : ""} to="photos">
            {isEng ? "Photos" : "Zdjęcia"}
          </Link>
        </li>
        <li>
          <Link className={pathname === "/blog" ? "focus" : ""} to="blog">
            Blog
          </Link>
        </li>
        <li>
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
