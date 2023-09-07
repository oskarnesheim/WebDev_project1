/* eslint-disable @typescript-eslint/no-unused-vars */
import { NavLink, Outlet, useParams } from "react-router-dom";

/* eslint-disable @typescript-eslint/no-unused-vars */

function City() {
  const { city } = useParams();
  return (
    <div>
      <h2>Welcome to {city}</h2>
      <nav>
        <ul>
          <li>
            <NavLink to={`current`}>Current</NavLink>
          </li>
          <li>
            <NavLink to={`forecast`}>Forecast</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default City;
