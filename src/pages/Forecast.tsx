/* eslint-disable @typescript-eslint/no-unused-vars */
import getForecast from "../functions/GetForecast";
import { useQuery } from "@tanstack/react-query";
import { IWeatherForeCastData } from "../../public/interfaces/IWeatherAPI";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { measuringUnit } from "../recoil/atoms";
import ForecastDay from "../components/ForecastDay";
import WeatherChart from "../components/WeatherChart";

function Forecast() {
  const { city } = useParams(); //? city må være lik ':city' i pathen for å kunne brukes her
  const [metric, setMetric] = useRecoilState(measuringUnit);

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
      <h3>Next 10 days:</h3>
      {data.forecast.forecastday.map((forecastDay) => {
        return <ForecastDay key={forecastDay.date_epoch} day={forecastDay} />;
      })}
    </div>
  );
}

export default Forecast;
