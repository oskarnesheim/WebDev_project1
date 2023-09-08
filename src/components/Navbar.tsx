/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigate } from "react-router-dom";
import Navbar_Item from "./Navbar_Item";
import MetricChooser from "./MetricChooser";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="sidebar ">
      <h1 onClick={() => navigate("/")} className="">
        Weathersearcher
      </h1>
      <nav className="NavLinks">
        <Navbar_Item newPath="/" header="Home" />
        <Navbar_Item newPath="/my_cities" header="My cities" />
        <MetricChooser />
      </nav>
    </div>
  );
}

export default Navbar;
