import { NavLink, Outlet } from "react-router-dom";
import "../sass/Header.scss";

export default function Header() {
  return (
    <>
      <div className="header">
        <a href="#header" className="header-tab" activeClassName="active">
          Home
        </a>
        <a href="#about" className="header-tab" activeClassName="active">
          About
        </a>
        <a href="#projects" className="header-tab" activeClassName="active">
          Projects
        </a>
        <a href="#contact" className="header-tab" activeClassName="active">
          Contact
        </a>
      </div>
    </>
  );
}
