import { NavLink, Outlet } from "react-router-dom";
import "../sass/Header.scss";

export default function Header() {
  return (
    <>
      <div className="header">
        <a href="#home" className="header-tab">
          Home
        </a>
        <a href="#about" className="header-tab">
          About
        </a>
        <a href="#projects" className="header-tab">
          Projects
        </a>
        <a href="#contact" className="header-tab">
          Contact
        </a>
      </div>
    </>
  );
}
