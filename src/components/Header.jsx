import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);

  const clickHandler = () => setOpen(!open);
  return (
    <header className="header">
      <div className="logo">Nicholas Fernandez</div>
      <ul className={open ? "nav-menu active" : "nav-menu"}>
        <a href="#about">
          <li onClick={clickHandler}>About</li>
        </a>
        <a href="#technologies">
          <li onClick={clickHandler}>Technologies</li>
        </a>
        <a href="#projects">
          <li onClick={clickHandler}>Projects</li>
        </a>
        <a href="#contact">
          <li onClick={clickHandler}>Contact</li>
        </a>
      </ul>
      <div className="hamburger" onClick={clickHandler}>
        {open ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Header;
