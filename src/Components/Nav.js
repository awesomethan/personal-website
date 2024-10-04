import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <img
          src="images/logo.png"
          alt="img cannot be displayed"
          className="logo"
        ></img>
        <Link to="/" className="nav-style text nav-text">
          <li>Home</li>
        </Link>
        <Link to="/about" className="nav-style text nav-text">
          <li>About</li>
        </Link>
        <Link to="/experience" className="nav-style text nav-text">
          <li>Experience</li>
        </Link>
        <Link to="/portfolio" className="nav-style text nav-text">
          <li>Portfolio</li>
        </Link>
        <Link to="/timeline" className="nav-style text nav-text">
          <li>Timeline</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
