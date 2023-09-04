import { NavLink } from "react-router-dom";

/* eslint-disable @typescript-eslint/no-unused-vars */
interface INavPage {
  newPath: string;
  header: string;
}

function Navbar_Item({ newPath, header }: INavPage) {
  return (
    <NavLink
      to={newPath}
      className="m-4 ml-7  hover:underline underline-offset-4 font-semibold hover:text-gray-300 text-xl"
    >
      {header}
    </NavLink>
  );
}

export default Navbar_Item;
