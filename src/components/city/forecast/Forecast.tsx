import { useQuery } from "@tanstack/react-query";
import { IWeatherForeCastData } from "../../../../public/interfaces/IWeatherAPI";
import ForecastDay from "./ForecastDay";
import { useParams } from "react-router-dom";
import { getForecast } from "../../../functions/GetForecast";

/**
 * Forecast component
 * @returns Forecast component
 */
function Forecast() {
  const { city } = useParams(); //? city må være lik ':city' i pathen for å kunne brukes her
  const { isLoading, isError, data, error } = useQuery<
    IWeatherForeCastData,
    Error
  >({
    queryKey: [city + "_forecast"],
    queryFn: () => getForecast(city!),
    staleTime: 1000 * 60 * 60, // decides how long the data is considered fresh
    cacheTime: 1000 * 60 * 60, // decides how long the data is kept in cache
  });
  if (isLoading) {
    return <div>Loading... ...</div>;
  }
  if (isError) {
    return <div>We found this error... {error.message}</div>;
  }

  console.log(data);
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
