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
        <Link to="/" className="nav-style text">
          <li>Home</li>
        </Link>
        <Link to="/about" className="nav-style text">
          <li>About</li>
        </Link>
        <Link to="/portfolio" className="nav-style text">
          <li>Portfolio</li>
        </Link>
        <Link to="/timeline" className="nav-style text">
          <li>Timeline</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
