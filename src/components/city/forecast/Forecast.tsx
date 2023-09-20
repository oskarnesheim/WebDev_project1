import getForecast from "../../../functions/GetForecast";
import { useQuery } from "@tanstack/react-query";
import { IWeatherForeCastData } from "../../../../public/interfaces/IWeatherAPI";
import { useParams } from "react-router-dom";
import ForecastDay from "./ForecastDay";

function Forecast() {
  const { city } = useParams(); //? city må være lik ':city' i pathen for å kunne brukes her

  const { isLoading, isError, data, error } = useQuery<
    IWeatherForeCastData,
    Error
  >({
    queryKey: [city + "forecast"],
    queryFn: () => getForecast(city!),
  });
  if (isLoading) {
    return <div>Loading... ...</div>;
  }
  if (isError) {
    return <div>We found this error... {error.message}</div>;
  }

  return (
    <div>
      <h3>Next 3 days:</h3>
      {data.forecast.forecastday.map((forecastDay) => {
        return <ForecastDay key={forecastDay.date_epoch} day={forecastDay} />;
      })}
    </div>
  );
}

export default Forecast;
