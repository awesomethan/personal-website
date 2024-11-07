import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <img
          src="images/logo.png"
          alt="img cannot be displayed"
          className="logo w-16 h-16 hidden md:block"
        ></img>
        <Link to="/" className="nav-style text nav-text">
          <li>Home</li>
        </Link>
        {/* <Link to="/about" className="nav-style text nav-text">
          <li>About</li>
        </Link> */}
        <Link to="/experience" className="nav-style text nav-text">
          <li>Experience</li>
        </Link>
        <Link to="/portfolio" className="nav-style text nav-text">
          <li>Portfolio</li>
        </Link>
        <a
          href="https://drive.google.com/file/d/1S5kF9XLOLLvkqQt5UwvKydeujX6Pu6bZ/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button nav-text resume-button-text px-2 py-1 md:px-3 md:py-2"
        >
          Resume
        </a>
        {/* <Link to="/timeline" className="nav-style text nav-text">
          <li>Timeline</li>
        </Link> */}
      </ul>
    </nav>
  );
}

export default Nav;
