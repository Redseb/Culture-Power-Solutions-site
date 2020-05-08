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
            Home
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/publications" ? "focus" : ""}
            to="/publications"
          >
            Publications
          </Link>
        </li>
        <li>
          <Link className={pathname === "/videos" ? "focus" : ""} to="videos">
            Videos
          </Link>
        </li>
        <li>
          <Link className={pathname === "/book" ? "focus" : ""} to="book">
            My Book
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/partners" ? "focus" : ""}
            to="partners"
          >
            Partners
          </Link>
        </li>
        <li>
          <Link className={pathname === "/photos" ? "focus" : ""} to="photos">
            Photos
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
            {isEng ? "English" : "Polish"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
