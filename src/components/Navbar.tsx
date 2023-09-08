import { NavLink } from "react-router-dom";
import Navbar_Item from "./Navbar_Item";
import MetricChooser from "./MetricChooser";

function Navbar() {
  return (
    <div className="sidebar ">
      <NavLink to={"/"}>
        <h1 className="">Weathersearcher</h1>
      </NavLink>
      <nav className="NavLinks flex flex-row">
        <Navbar_Item newPath="/" header="Home" />
        <Navbar_Item newPath="/my_cities" header="My cities" />
        <MetricChooser />
      </nav>
    </div>
  );
}

export default Navbar;
