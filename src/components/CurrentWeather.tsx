/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import "../../public/interfaces/IWeatherAPI";
import { useNavigate } from "react-router-dom";
import getCurrent from "../functions/GetCurrent";
import ICurrentWeatherData from "../../public/interfaces/IWeatherAPI";

type CurrentWeatherProps = {
  city: string;
};

function CurrentWeather({ city }: CurrentWeatherProps) {
  const navigate = useNavigate();
  const { isLoading, isError, data, error } = useQuery<
    ICurrentWeatherData,
    Error
  >({
    queryKey: [city],
    queryFn: () => getCurrent(city),
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

export default CurrentWeather;
