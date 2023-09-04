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
import getCurrent from "../functions/GetCurrent";

/* eslint-disable @typescript-eslint/no-unused-vars */

function City() {
  const city: string = useLoaderData() as string;
  console.log(city);
  {
    getCurrent(city).then((data) => {
      console.log(data);
    });
  }
  {
    city;
  }
  const [showCurrent, setShowCurrent] = useState(true);
  const [showAny, setShowAny] = useState(false);
  return (
    <div>
      {city}
      <div>
        <button onClick={() => setShowCurrent(false)}>Forecast</button>
        <button onClick={() => setShowCurrent(true)}>Current</button>
        <button onClick={() => setShowAny(!showAny)}>Any</button>
      </div>
      {showAny && (
        <div className="show_details">
          {showCurrent ? (
            <CurrentWeather city={city} />
          ) : (
            <Forecast city={city} />
          )}
        </div>
      )}
    </div>
  );
}

export default City;
