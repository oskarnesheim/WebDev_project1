/* eslint-disable @typescript-eslint/no-unused-vars */
import getForecast from "../functions/GetForecast";
import { useQuery } from "@tanstack/react-query";
import { IWeatherForeCastData } from "../../public/interfaces/IWeatherAPI";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { measuringUnit } from "../recoil/atoms";

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
      {metric ? "Metric" : "Imperial"}
      <h2>This is the forcast for {data.location.name}</h2>
      <div>
        {data.forecast.forecastday.map((forecastDay) => {
          return (
            <div key={forecastDay.date_epoch}>
              {forecastDay.date}
              {forecastDay.hour.map((day) => {
                return (
                  <div key={day.time_epoch}>
                    {day.time} - {metric ? day.temp_c + "C" : day.temp_f + "F"}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Forecast;
