import { NavLink } from "react-router-dom";

interface INavPage {
  newPath: string;
  header: string;
}

function Navbar_Item({ newPath, header }: INavPage) {
  return (
    <NavLink to={newPath} className="navbar-item">
      {header}
    </NavLink>
  );
}

export default Navbar_Item;
