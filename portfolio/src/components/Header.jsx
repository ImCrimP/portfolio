import { NavLink, Outlet } from "react-router-dom";
import "../sass/Header.scss";

export default function Header() {
  return (
    <>
      <div className="header">
        <NavLink className="header-tab" activeClassName="active" exact to="/">
          Home
        </NavLink>
        <NavLink className="header-tab" activeClassName="active" to="/about">
          About
        </NavLink>
        <NavLink className="header-tab" activeClassName="active" to="/projects">
          Projects
        </NavLink>
        <NavLink className="header-tab" activeClassName="active" to="/contact">
          Contact
        </NavLink>
      </div>

      <Outlet />
    </>
  );
}
