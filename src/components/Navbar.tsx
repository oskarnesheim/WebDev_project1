import { NavLink } from "react-router-dom";
import Navbar_Item from "./Navbar_Item";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="sidebar">
      <NavLink to={"/"}>
        <h1 className="Weathersearcher">WeatherSearcher</h1>
      </NavLink>
      <nav className="NavLinks">
        <Navbar_Item newPath="/" header="Home" />
        <Navbar_Item newPath="/my_cities" header="My cities" />
      </nav>
    </div>
  );
}

export default Navbar;
