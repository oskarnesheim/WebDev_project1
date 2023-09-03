import { useNavigate } from "react-router-dom";
import getForecast from "../functions/GetForecast";
import { useQuery } from "@tanstack/react-query";
import ICurrentWeatherData from "../../public/interfaces/IWeatherAPI";

type ForecastProps = {
  city: string;
  numberOfDays: number;
  airQuality: boolean;
  allerts: boolean;
};

function Forecast({ city, numberOfDays, airQuality, allerts }: ForecastProps) {
  const navigate = useNavigate();
  const { isLoading, isError, data, error } = useQuery<
    ICurrentWeatherData,
    Error
  >({
    queryKey: [city],
    queryFn: () => getForecast(city, numberOfDays, airQuality, allerts),
  });

  function goToCity(city: string) {
    navigate(city);
  }

  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    return <div>Error... {error.message}</div>;
  }

  return (
    <div onClick={() => goToCity(city)}>
      <div>{data.location.name}</div>
      <div>{data.location.country}</div>
      <div>{data.location.region}</div>
      <div>{data.current.humidity}</div>
    </div>
  );
}

export default Forecast;
