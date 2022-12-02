import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Nicholas Fernandez</Link>
      </div>
      <ul>
        <a href="#about">
          <li>About</li>
        </a>
        <a href="#technologies">
          <li>Technologies</li>
        </a>
        <a href="#projects">
          <li>Projects</li>
        </a>
        <a href="#contact">
          <li>Contact</li>
        </a>
      </ul>
    </header>
  );
};

export default Header;
