/* eslint-disable @typescript-eslint/no-unused-vars */
import { NavLink, Outlet, useLoaderData } from "react-router-dom";

/* eslint-disable @typescript-eslint/no-unused-vars */

function City() {
  const city: string = useLoaderData() as string;
  return (
    <div>
      <h2>Welcome to {city}</h2>
      <nav>
        <NavLink to={`current`}>Current</NavLink>
        <NavLink to={`forecast`}>Forecast</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default City;
