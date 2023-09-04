import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IWeatherForeCastData } from "../public/interfaces/IWeatherAPI";

export default function Test2() {
  const city = "Stockholm";

  async function getData(API_request: string): Promise<IWeatherForeCastData> {
    return await axios
      .get(API_request)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }

  function getForecast(city: string) {
    const numberOfDays = 10;
    const airQuality = true;
    const allerts = true;
    console.log(city);
    const WEATHER_REQUEST =
      "http://api.weatherapi.com/v1/forecast.json?key=1413dd12c034448e8e894125230109&q=" +
      city +
      "&days=" +
      numberOfDays +
      "&aqi=" +
      airQuality +
      "&alerts=" +
      allerts;

    return getData(WEATHER_REQUEST);
  }
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
      <h2>This is the forcast for {data.location.name}</h2>
      <div>
        {data.forecast.forecastday.map((day) => {
          return <p key={day.date_epoch}>{day.date}</p>;
        })}
      </div>
    </div>
  );
  return <div>Test2</div>;
}
