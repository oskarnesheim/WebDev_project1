/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  NavLink,
  Outlet,
  Route,
  Routes,
  useLoaderData,
  useParams,
} from "react-router-dom";
import CurrentWeather from "../components/CurrentWeather";
import { useState } from "react";
import Forecast from "./Forecast";

/* eslint-disable @typescript-eslint/no-unused-vars */

function City() {
  const city: string = useLoaderData() as string;
  console.log(city);
  const [showCurrent, setShowCurrent] = useState(true);
  return (
    <div>
      {/* <Routes>
        <Route path={"current"} element={<CurrentWeather city={"Oslo"} />} />
        <Route path={"forecast"} element={<CurrentWeather city={"Oslo"} />} />
      </Routes> */}
      {/* <nav>
        <NavLink to="current">Current</NavLink>
        <NavLink to="forecast">Forecast</NavLink>
      </nav> */}
      {city}
      <div>
        <button onClick={() => setShowCurrent(!showCurrent)}>
          {showCurrent ? "Current" : "Forecast"}
        </button>
      </div>
      <div className="show_details">
        {showCurrent ? (
          <CurrentWeather city={"Hong Kong"} />
        ) : (
          <Forecast city={city} />
        )}
      </div>
    </div>
  );
}

export default City;
