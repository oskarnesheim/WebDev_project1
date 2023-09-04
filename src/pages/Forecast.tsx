/* eslint-disable @typescript-eslint/no-unused-vars */
import getForecast from "../functions/GetForecast";
import { useQuery } from "@tanstack/react-query";
import { IWeatherForeCastData } from "../../public/interfaces/IWeatherAPI";

type ForecastProps = {
  city: string;
  // numberOfDays: number;
  // airQuality: boolean;
  // allerts: boolean;
};

function Forecast({ city }: ForecastProps) {
  const { isLoading, isError, data, error } = useQuery<
    IWeatherForeCastData,
    Error
  >({
    queryKey: [city],
    queryFn: () => getForecast(city),
  });
  if (isLoading) {
    return <div>Loading... ...</div>;
  }
  if (isError) {
    return <div>We found this error... {error.message}</div>;
  }

  return (
    <div>
      <h2>This is the forcast for </h2>
    </div>
  );
}

export default Forecast;
