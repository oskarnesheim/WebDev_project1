import { useQuery } from "@tanstack/react-query";
import { IWeatherForeCastData } from "../../public/interfaces/Forecast";
import getCurrent from "../functions/GetCurrent";

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
      <div>
        {data.forecast.forecastday.map((e) => {
          return <div>{e.date}</div>;
        })}
      </div>
      <div>
        {data.alerts.map((e) => {
          return <div>{e.alert}</div>;
        })}
      </div>
    </div>
  );
}

export default Forecast;
