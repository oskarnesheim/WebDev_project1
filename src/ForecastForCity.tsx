/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "../public/interfaces/IWeatherAPI";
import IWeatherData from "../public/interfaces/IWeatherAPI";

type QueryTestProps = {
  city: string;
};

function QueryTest({ city }: QueryTestProps) {
  const WEATHER_REQUEST =
    "http://api.weatherapi.com/v1/current.json?key=1413dd12c034448e8e894125230109&q=" +
    city +
    "&aqi=no";

  async function getData(): Promise<IWeatherData> {
    return await axios
      .get(WEATHER_REQUEST)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }

  const { isLoading, isError, data } = useQuery({
    queryKey: [city],
    queryFn: getData,
  });
  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    return <div>Error</div>;
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

export default QueryTest;
