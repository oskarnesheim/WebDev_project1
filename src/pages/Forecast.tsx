/* eslint-disable @typescript-eslint/no-unused-vars */
import getForecast from "../functions/GetForecast";
import { useQuery } from "@tanstack/react-query";
import { IWeatherForeCastData } from "../../public/interfaces/IWeatherAPI";
import { useParams } from "react-router-dom";

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
      <h2>This is the forcast for {data.location.name}</h2>
    </div>
  );
}

export default Forecast;
