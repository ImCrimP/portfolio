import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import "../sass/Header.scss";
import menu from "../assets/menu.svg";
import exit from "../assets/exit.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="header">
        <ul className={`header-list ${menuOpen ? "slide-in" : "slide-out"}`}>
          <img
            id="exit"
            className="mobile-menu exit-icon"
            src={exit}
            alt="close"
            onClick={toggleMenu}
          />

          <li>
            <a href="#home" className="header-tab">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="header-tab">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="header-tab">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="header-tab">
              Contact
            </a>
          </li>
        </ul>
        <div className="menu-icon">
          <img
            className={`mobile-menu  ${menuOpen ? "hide" : ""}`}
            src={menu}
            alt="menu"
            onClick={toggleMenu}
          />
        </div>
      </div>
    </>
  );
}
