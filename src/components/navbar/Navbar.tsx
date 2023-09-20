import { useNavigate } from "react-router-dom";
import Navbar_Item from "./Navbar_Item";

import "./Navbar.css";
import MetricChooser from "./MetricChooser";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="sidebar ">
      <h1 onClick={() => navigate("/")} className="">
        WeatherSearcher
      </h1>
      <nav className="NavLinks">
        <Navbar_Item newPath="/" header="Home" />
        <MetricChooser />
      </nav>
    </div>
  );
}

export default Navbar;
