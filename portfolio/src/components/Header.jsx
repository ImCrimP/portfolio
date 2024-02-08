import { Link, Outlet } from "react-router-dom";
import "../sass/Header.scss";

export default function Header() {
  return (
    <>
      <div className="header">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <Outlet />
    </>
  );
}
