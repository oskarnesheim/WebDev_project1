/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import getCurrent from "../functions/GetCurrent";
import { ICurrentWeatherData } from "../../public/interfaces/IWeatherAPI";
import { useParams } from "react-router-dom";

export default function CurrentWeather() {
  const { city } = useParams(); //? city må være lik ':city' i pathen for å kunne brukes her

  const { isLoading, isError, data, error } = useQuery<
    ICurrentWeatherData,
    Error
  >({
    queryKey: [city + "current"],
    queryFn: () => getCurrent(city!),
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
      <div>{data.location.region}</div>
      <div>{data.location.country}</div>
      <div>
        {data.current.temp_c}/{data.current.temp_f}
      </div>
      <div>{data.current.wind_dir}</div>
    </div>
  );
}
