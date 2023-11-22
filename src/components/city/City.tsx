import { Outlet, useParams } from "react-router-dom";
import CurrentWeather from "./current/CurrentWeather";

/**
 * City component that renders the current weather and the forecast for the city
 * @returns City component
 */
function City() {
  const { city } = useParams();
  console.log(city);
  return (
    <div>
      <CurrentWeather city={city!} />
      <Outlet />
    </div>
  );
}

export default City;
