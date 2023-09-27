import { Outlet, useParams } from "react-router-dom";
import CurrentWeather from "./current/CurrentWeather";

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
