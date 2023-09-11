/* eslint-disable @typescript-eslint/no-unused-vars */
import { Outlet, useParams } from "react-router-dom";
import CurrentWeather from "../components/CurrentWeather";

/* eslint-disable @typescript-eslint/no-unused-vars */

function City() {
  const { city } = useParams();
  return (
    <div>
      <CurrentWeather city={city!} />
      <Outlet />
    </div>
  );
}

export default City;
