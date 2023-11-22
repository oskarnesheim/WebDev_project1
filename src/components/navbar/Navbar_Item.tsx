import { NavLink } from "react-router-dom";

interface INavPage {
  newPath: string;
  header: string;
}

/**
 * Navbar_Item component that renders a link to a page in the navbar
 * @param newPath : string
 * @param header : string
 * @returns Navbar_Item component
 */
function Navbar_Item({ newPath, header }: INavPage) {
  return (
    <NavLink to={newPath} className="navbar-item">
      {header}
    </NavLink>
  );
}

export default Navbar_Item;
