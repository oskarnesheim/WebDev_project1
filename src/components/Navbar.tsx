import { NavLink } from "react-router-dom";
import Navbar_Item from "./Navbar_Item";

function Navbar() {
  return (
    <div className="sidebar bg-gray-800 text-white p-4 w-full flex flex-row justify-between">
      <NavLink to={"/"}>
        <h1 className="font-bold text-3xl">Weathersearcher</h1>
      </NavLink>
      <nav className="NavLinks flex flex-row">
        <Navbar_Item newPath="/" header="Home" />
        <Navbar_Item newPath="/my_cities" header="My cities" />
      </nav>
    </div>
  );
}

export default Navbar;
