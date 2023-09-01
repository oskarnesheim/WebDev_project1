/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import "../../public/interfaces/IWeatherAPI";
import { useNavigate } from "react-router-dom";
import getWeather from "../functions/GetWeather";

type QueryTestProps = {
  city: string;
};

function ForecastForCity({ city }: QueryTestProps) {
  const navigate = useNavigate();
  const { isLoading, isError, data } = useQuery({
    queryKey: [city],
    queryFn: () => getWeather(city),
  });

  function goToCity(city: string) {
    navigate(city);
  }

  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    return <div>Error</div>;
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

export default ForecastForCity;
