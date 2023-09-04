import axios from "axios";
import { ICurrentWeatherData } from "../public/interfaces/IWeatherAPI";
import { useQuery } from "@tanstack/react-query";

export default function Test() {
  const city = "Stockholm";
  async function getData(API_request: string): Promise<ICurrentWeatherData> {
    return await axios
      .get(API_request)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }

  function getCurrent(city: string) {
    const WEATHER_REQUEST =
      "http://api.weatherapi.com/v1/current.json?key=1413dd12c034448e8e894125230109&q=" +
      city +
      "&aqi=no";

    const data: Promise<ICurrentWeatherData> = getData(WEATHER_REQUEST);
    return data;
  }

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
      <div>{data.location.region}</div>
      <div>{data.location.country}</div>
      <div>
        {data.current.temp_c}/{data.current.temp_f}
      </div>
    </div>
  );
}
