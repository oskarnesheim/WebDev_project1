/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import getCurrent from "../functions/GetCurrent";
import { ICurrentWeatherData } from "../../public/interfaces/IWeatherAPI";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { measuringUnit } from "../recoil/atoms";

export default function CurrentWeather() {
  const { city } = useParams(); //? city må være lik ':city' i pathen for å kunne brukes her
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [metric, setMetric] = useRecoilState(measuringUnit);

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
      <div>
        <span className="location">
          <h1 className="location-header">{data.location.name}</h1>
          <p className="location-region">
            {data.location.region}/{data.location.country}
          </p>
        </span>
        <div>
          {metric ? data.current.temp_c + "C" : data.current.temp_f + "F"}
          <img src={data.current.condition.icon} alt="" />
        </div>
        <button onClick={() => setShowAdvanced(!showAdvanced)}>
          {showAdvanced ? "Hide" : "Show"}
        </button>
      </div>
      {showAdvanced && (
        <div>
          <div>
            Direction: {data.current.wind_dir} -{" "}
            {metric
              ? (data.current.wind_kph / 3.6).toPrecision(2) + " Kph"
              : (data.current.wind_mph / 3.6).toPrecision(2) + " Mph"}
          </div>
          <div>
            Humidity: {data.current.humidity}%
            <br />
            Cloud: {data.current.cloud}%
            <br />
            Feels like:
            {metric
              ? data.current.feelslike_c + "C"
              : data.current.feelslike_f + "F"}
            <br />
            UV: {data.current.uv}
          </div>
        </div>
      )}
    </div>
  );
}
