/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import getCurrent from "../functions/GetCurrent";
import { ICurrentWeatherData } from "../../public/interfaces/IWeatherAPI";

type CityInfoProps = {
  city: string;
};

export default function CurrentWeather({ city }: CityInfoProps) {
  const { isLoading, isError, data, error } = useQuery<
    ICurrentWeatherData,
    Error
  >({
    queryKey: [city],
    queryFn: () => getCurrent(city),
  });
  if (isLoading) {
    return <div>Loading... ...</div>;
  }
  if (isError) {
    return <div>We found this error... {error.message}</div>;
  }

  return (
    <div>
      <div>{data.location.name}</div>
      <div>{data.location.country}</div>
      <div>{data.location.region}</div>
      <div>{data.current.humidity}</div>
    </div>
  );
}
